import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { renderToStaticMarkup } from "react-dom/server";
import { MerchantHome } from "../src/components/v4/MerchantHome";
import { MerchantArticle } from "../src/components/v4/MerchantArticle";
import { RichText } from "../src/components/content/RichText";
import { getAllPages, getFaqsForPage } from "../src/lib/content";
import { guideGroups } from "../src/data/v4-design";
const pages = getAllPages();
const homepage = pages.find(p=>p.url==="/")!;
const home = renderToStaticMarkup(<MerchantHome page={homepage}/>);
for (const group of guideGroups) for (const item of group.items) {
  assert.ok(pages.some(p=>p.url===item.href), `broken directory link: ${item.href}`);
  assert.ok(home.includes(`href="${item.href}"`), `not discoverable: ${item.href}`);
}
assert.equal((home.match(/class="v4-progression__stage"/g)||[]).length,4);
const sourceFiles = ['fellsell-fixed.ts','fellsell-fixed-dungeon.ts','fellsell-fixed-shop.ts','fellsell-fixed-achievements.ts','fellsell-fixtures.ts','site-pages.ts'];
const baselineCommit = process.argv.find(arg => arg.startsWith("--compare-base="))?.slice("--compare-base=".length);
for (const file of baselineCommit ? sourceFiles : []) {
  const path = `src/data/pages/${file}`;
  const baseline = execFileSync('git',['show',`${baselineCommit}:${path}`]);
  assert.equal(createHash('sha256').update(readFileSync(path)).digest('hex'),createHash('sha256').update(baseline).digest('hex'),`${path}: original answers changed`);
}
const text=(html:string)=>html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
for (const page of pages.filter(p=>p.url!=="/")) {
  const html = renderToStaticMarkup(<MerchantArticle page={page}/>);
  assert.equal((html.match(/<h1>/g)||[]).length,1,`${page.url}: heading count`);
  for (const guideModule of page.modules) assert.equal((html.match(new RegExp(`id="${guideModule.id}"`,'g'))||[]).length,1,`${page.url}: module missing/duplicated ${guideModule.id}`);
  const cut = /(?<=[.!?])\s+(?=[A-Z])/.exec(page.quickAnswer)?.index ?? page.quickAnswer.length;
  for (const part of [page.quickAnswer.slice(0,cut),page.quickAnswer.slice(cut).trim()].filter(Boolean)) {
    assert.ok(text(html).includes(text(renderToStaticMarkup(<RichText text={part}/>))),`${page.url}: answer context lost`);
  }
  for (const faq of getFaqsForPage(page)) assert.ok(text(html).includes(text(renderToStaticMarkup(<RichText text={faq.answer}/>))),`${page.url}: FAQ answer lost`);
  assert.ok(html.includes(`dateTime="${page.lastReviewed}"`),`${page.url}: review date missing`);
}
const regression = renderToStaticMarkup(<RichText text={'## The next decision\nThis paragraph must survive.\n\n- Keep the loot\n- Return safely\n\n| Mode | Goal |\n| --- | --- |\n| Fair | Start here |'} />);
assert.ok(regression.includes('<h3>The next decision</h3>'));
assert.ok(regression.includes('<p>This paragraph must survive.</p>'));
assert.ok(regression.includes('<li>Keep the loot</li>'));
assert.ok(regression.includes('<table'));
const unsafe = renderToStaticMarkup(<RichText text={'[bad](javascript:alert(1))\n\n<script>alert(1)</script>'}/>);
assert.ok(!unsafe.includes('javascript:') && !unsafe.includes('<script>'));
console.log(`V4 verified: ${pages.length} original routes, ${baselineCommit ? "unchanged non-home answer data, " : ""} each module once, retained short answer/context/FAQ, discoverable directory, four-phase loop, semantic Markdown.`);
