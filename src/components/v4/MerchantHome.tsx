import Link from "next/link";
import { AssetMedia } from "@/components/media/AssetMedia";
import { GuideIndex } from "@/components/content/GuideIndex";
import { Progression } from "@/components/content/Progression";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteSchema } from "@/lib/schema";
import { getRecentUpdates } from "@/lib/content";
import { guideGroups, guideLabel, merchantLoop } from "@/data/v4-design";
import type { PageContent } from "@/types/content";

export function MerchantHome({ page }: { page: PageContent }) {
  return <div className="merchant-home" data-design="merchant-v4">
    <JsonLd data={websiteSchema()} />
    <section className="merchant-hero">
      <div className="hero-copy"><p className="hero-kicker">Fell & Sell · Unofficial guides</p><h1>{page.h1.split(". ")[0]}.<br />{page.h1.split(". ").slice(1).join(". ")}</h1><p className="hero-intro">{page.hero.subtitle}</p><div className="hero-actions"><Link className="button-primary" href="/beginner-guide">Start your first run <span aria-hidden="true">↗</span></Link><a href="#guide-directory" className="text-link">Browse every guide ↓</a></div><div className="hero-note">Dungeon roguelike <span aria-hidden="true">/</span> Shop management</div></div>
      <div className="hero-scene"><AssetMedia assetId="merchant-counter" priority className="counter-scene" sizes="(max-width: 760px) 100vw, 58vw" /><div className="scene-caption"><span>At the counter</span><Link href="/shop/pricing-and-demand">What should I charge? ↗</Link></div></div>
    </section>
    <section className="two-worlds" aria-labelledby="two-worlds-heading"><div className="section-title"><h2 id="two-worlds-heading">What are you working on?</h2><p>Pick a side of the loop.</p></div><div className="world-grid">
      <section className="shop-world"><div className="world-heading"><span className="world-number">01</span><h3>Build a better shop</h3><Link href="/shop">Shop hub ↗</Link></div><p>Prices, furniture and the next upgrade.</p><ul>{guideGroups[1].items.slice(1).map(item => <li key={item.href}><Link href={item.href}>{item.label}<span aria-hidden="true">↗</span></Link></li>)}</ul></section>
      <section className="dungeon-world"><AssetMedia assetId="dungeon-run" className="dungeon-scene" /><div className="dungeon-copy"><div className="world-heading"><span className="world-number">02</span><h3>Bring the loot home</h3></div><p>Runs, extraction and your next build.</p><ul>{[guideGroups[2].items[2],guideGroups[2].items[3],guideGroups[2].items[5]].map(item => <li key={item.href}><Link href={item.href}>{item.label}<span aria-hidden="true">↗</span></Link></li>)}</ul><Link className="text-link" href="/dungeons">All dungeon guides ↗</Link></div></section>
    </div></section>
    <div className="loop-section"><Progression guideModule={merchantLoop} /></div>
    <div className="home-ad"><AdSlot placement="responsive-banner" /></div>
    <div className="directory-section"><GuideIndex guideModule={{ id: "guide-directory", type: "guide-index", heading: "The complete field guide", groups: guideGroups }} /></div>
    <section className="review-strip"><h2>Recently reviewed</h2><ul>{getRecentUpdates(page.locale,3).map(p => <li key={p.id}><time dateTime={p.lastReviewed}>{p.lastReviewed}</time><Link href={p.url}>{guideLabel(p.url,p.h1)} ↗</Link></li>)}</ul></section>
  </div>;
}
