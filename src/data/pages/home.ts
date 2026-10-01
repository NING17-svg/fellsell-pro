import type { PageContent } from "@/types/content";
import { guideGroups, merchantLoop } from "@/data/v4-design";
export const homePage: PageContent = {
  id: "home", translationKey: "home", locale: "en-US", routeKind: "home", slug: "", url: "/", pageType: "home",
  presentation: { shell: "home", variant: "media-hero" },
  h1: "Better runs. Better business.",
  seoTitle: "Fell & Sell Guides | Dungeons, Shop Pricing, Crafting & Achievements",
  metaDescription: "Find Fell & Sell answers for dungeon runs, extraction, altars, crafting, shop pricing, furniture buffs and achievements. Start with your first run or browse the full guide.",
  summary: "Guides for the dungeon-to-shop loop: loot, craft, sell and reinvest.",
  hero: { subtitle: "From your first dungeon haul to a thriving shop. Find the answer before your next run—or your next sale.", ctas: [{ label: "Start your first run", href: "/beginner-guide" }], assetId: "merchant-counter" },
  quickAnswer: "Fell & Sell combines dungeon exploration with shop management. Loot, craft, stock your shelves, set prices and reinvest.",
  keyFacts: [{ label: "Platform", value: "Windows PC" }, { label: "Mode", value: "Single-player" }, { label: "Game loop", value: "Loot, craft, sell, reinvest" }], modules: [merchantLoop, { id: "guide-directory", type: "guide-index", heading: "The complete field guide", groups: guideGroups }],
  faqIds: [], relatedPageIds: ["fixed-shop-hub-en-us","fixed-dungeons-hub-en-us","fixed-achievements-ledger-en-us"],
  schemaTypes: ["WebSite"], sourceStatus: "official", lastReviewed: "2026-10-01",
};
