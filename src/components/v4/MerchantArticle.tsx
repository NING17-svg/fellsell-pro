import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { WikiNavigation } from "@/components/layout/WikiNavigation";
import { PageContents } from "@/components/content/PageContents";
import { AnswerSummary } from "@/components/content/AnswerSummary";
import { ModuleRenderer } from "@/components/content/ModuleRenderer";
import { RichText } from "@/components/content/RichText";
import { AssetMedia } from "@/components/media/AssetMedia";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, collectionPageSchema, faqSchema } from "@/lib/schema";
import { getFaqsForPage, getRelatedPages } from "@/lib/content";
import { guideCategory, guideLabel } from "@/data/v4-design";
import { getLocaleUiLabels } from "@/lib/localization";
import type { PageContent } from "@/types/content";

export function MerchantArticle({ page }: { page: PageContent }) {
  const faqs = getFaqsForPage(page);
  const related = getRelatedPages(page);
  const match = /(?<=[.!?])\s+(?=[A-Z])/.exec(page.quickAnswer);
  const boundary = match?.index ?? page.quickAnswer.length;
  const answer = page.quickAnswer.slice(0,boundary);
  const context = page.quickAnswer.slice(boundary).trim();
  const primarySchema = page.pageType === "wiki" || page.pageType === "guides" ? collectionPageSchema(page) : articleSchema(page);
  const leadingModules = page.modules.slice(0,2);
  const remainingModules = page.modules.slice(2);
  const illustration = page.url === "/shop/pricing-and-demand" ? "sales-ledger" : page.url === "/dungeons/crafting-and-gear" ? "crafting-bench" : undefined;
  return <div className="article-layout" data-design="merchant-v4">
    <WikiNavigation locale={page.locale} currentUrl={page.url} />
    <article className="merchant-article">
      <JsonLd data={breadcrumbSchema(page)} /><JsonLd data={primarySchema} />{faqs.length ? <JsonLd data={faqSchema(faqs)} /> : null}
      <div className="article-breadcrumb"><Link href="/">Field guide</Link><span aria-hidden="true">/</span><span>{guideCategory(page.url)}</span></div>
      <header className="article-heading"><h1>{page.h1.replace(/^Fell (?:and|&) Sell\s*/i, "").replace(/^./, c => c.toUpperCase())}</h1><p className="page-review"><span>{getLocaleUiLabels(page.locale).lastReviewed}:</span> <time dateTime={page.lastReviewed}>{page.lastReviewed}</time></p></header>
      <AnswerSummary answer={answer} context={context || undefined} locale={page.locale} />
      <div className="mobile-chapters"><PageContents page={page} collapsible /></div>
      {illustration ? <AssetMedia assetId={illustration} className="article-illustration" sizes="(max-width: 1000px) 100vw, 740px" /> : null}
      <AdSlot placement="responsive-banner" />
      <ModuleRenderer modules={leadingModules} />
      <AdSlot placement="native-banner" />
      <ModuleRenderer modules={remainingModules} />
      {page.keyFacts.length ? <details className="reference-facts"><summary>Reference notes</summary><dl>{page.keyFacts.map((fact,i) => <div key={i}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></details> : null}
      {faqs.length ? <section className="article-faq"><h2>Questions & answers</h2>{faqs.map(faq => <details key={faq.id}><summary>{faq.question}</summary><RichText text={faq.answer} /></details>)}</section> : null}
      {related.length ? <section className="continue-reading"><h2>Where to go next</h2><ul>{related.map(p => <li key={p.id}><Link href={p.url}>{guideLabel(p.url,p.h1)} <span aria-hidden="true">↗</span></Link></li>)}</ul></section> : null}
    </article>
    <aside className="chapter-rail"><PageContents page={page} /><AdSlot placement="right-rail" /></aside>
  </div>;
}
