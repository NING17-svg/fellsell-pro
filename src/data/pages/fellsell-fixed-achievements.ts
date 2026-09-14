import type { PageContent } from "@/types/content";

import {
  FALL_SELL_OFFICIAL,
  FALL_SELL_WIKI,
} from "./fellsell-fixed-source";

// Fell and Sell — V3 achievements cluster fixed page assembled from the
// approved content-package. Maps the 97 Steam achievements into a
// 13-ledger session-planning reference rather than a flat checklist.

const LAST_REVIEWED = "2026-09-14";

export const fellsellAchievementsPages: PageContent[] = [
  {
    id: "fixed-achievements-ledger-en-us",
    translationKey: "achievements-ledger",
    locale: "en-US",
    routeKind: "fixed",
    slug: "achievements",
    url: "/achievements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell achievements ledger: 13 ledgers and 97 Steam achievements",
    seoTitle:
      "Fell and Sell Achievements Ledger: 13 Ledgers, 97 Steam Achievements, Session Plan",
    metaDescription:
      "Plan a Fell and Sell session around the 13 achievement ledgers and 97 Steam achievements. Weapon mastery grid, six sales-category targets, four crafted-rarity tiers, parallel Comfort and Prestige chains, and the duplicate-name trap achievements.",
    summary:
      "Fell and Sell ships with 97 Steam achievements grouped into 13 interconnected ledgers. This page maps the ledgers into a session-planning reference: rotate weapon families and category sales in parallel, climb the dual Comfort and Prestige chains together, and watch for the duplicate-name trap achievements before chasing them.",
    hero: {
      eyebrow: "Achievements ledger",
      subtitle:
        "Treat Fell and Sell's 97 Steam achievements as 13 interconnected ledgers, not a flat checklist. Combine grinding across ledgers in a single session rather than cleaning one chain in isolation.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Weapons", href: "/dungeons/weapons" },
        { label: "Shop Pricing", href: "/shop/pricing-and-demand" },
      ],
    },
    quickAnswer:
      "Fell and Sell's 97 achievements split into 13 ledgers that interlock: kill count, four-family weapon mastery, chest opens, dungeon floors, boss kills, crafting count, four crafted-rarity tier chains, total sales, trading gold, six sales-category targets, the parallel Comfort and Prestige Level 1-10 chains, and the required single death. Plan a session to advance several ledgers in parallel — rotate weapon families, mix category sales, climb Comfort and Prestige together — instead of finishing one chain before starting the next. Watch for the duplicate-name trap achievements: 'Getting better!' covers both Craft 5 Items and Sell 25 Items, and 'Master Dungeoneering' covers both Floor 8 and Floor 10.",
    keyFacts: [
      { label: "Achievements", value: "97 on Steam" },
      { label: "Ledger count", value: "13 interconnected ledgers" },
      { label: "Weapon families", value: "Sword, Axe, Hammer, Staff" },
      { label: "Mastery tiers per family", value: "Novice, Adept, Journeyman, Master" },
      { label: "Per-family kill target", value: "250 (1,000 across all four)" },
      { label: "Category sales", value: "Magic 50, Weapons 80, Alcohol 50, Bones 50, Armor 80, Bloodstone 10" },
      { label: "Crafted rarity tiers", value: "Uncommon, Rare, Epic, Legendary each once" },
      { label: "Parallel chains", value: "Comfort Level 10 and Prestige Level 10 in parallel" },
      { label: "Required death", value: "One mandatory death for the final ledger" },
      { label: "Source tier", value: "9puz achievement guide + Fell and Sell wiki, re-verified 2026-09-14" },
    ],
    modules: [
      {
        id: "ledger-overview",
        type: "prose",
        heading: "Why the ledgers are interconnected",
        body:
          "The 9puz achievement guide frames Fell and Sell's 97 achievements as 13 interconnected ledgers rather than 97 independent checks. A single descent can bank mastery kills, open chests, hit a deeper floor, and bank materials that later sell into the category-sales ledger and the crafted-rarity ladder on the same cycle. The guide recommends 'combined grinding' — rotating weapon families, mixing category sales, and climbing Comfort and Prestige in parallel — over isolated cleanup of one chain at a time. The framing is attributed to the 9puz achievement guide, re-verified 2026-09-14, and is presented as session-planning guidance.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "ledger-table",
        type: "data-table",
        heading: "The 13 achievement ledgers at a glance",
        columns: [
          { key: "ledger", label: "Ledger" },
          { key: "target", label: "Target" },
          { key: "advances", label: "Advance by" },
        ],
        rows: [
          { ledger: "All enemy kills", target: "1,000 kills", advances: "Every monster defeated in a run" },
          { ledger: "Weapon mastery (×4 families)", target: "250 kills per family", advances: "Sword, Axe, Hammer, Staff — Novice, Adept, Journeyman, Master each" },
          { ledger: "Chest opens", target: "75 chests", advances: "Searching chest containers in dungeon floors" },
          { ledger: "Dungeon floors", target: "Floor 10", advances: "Descending past the extraction point" },
          { ledger: "Boss kills", target: "3 boss kills", advances: "Floor-end boss fights" },
          { ledger: "Total items crafted", target: "60 items", advances: "Workbench recipes of any rarity" },
          { ledger: "Crafted rarity tier chains", target: "Uncommon, Rare, Epic, Legendary each once", advances: "One crafted item of each rarity tier" },
          { ledger: "Total items sold", target: "1,000 items sold", advances: "Every shelf sale across the shop surface" },
          { ledger: "Trading gold", target: "2,500 gold traded", advances: "Cumulative gold passing through the shop till" },
          { ledger: "Category sales targets", target: "Six categories at named thresholds", advances: "Magic 50, Weapons 80, Alcohol 50, Bones 50, Armor 80, Bloodstone 10" },
          { ledger: "Comfort level chain", target: "Level 10", advances: "Decoration-driven shop progression" },
          { ledger: "Prestige level chain", target: "Level 10", advances: "Commercial-strength shop progression" },
          { ledger: "Required single death", target: "Die once during a run", advances: "Trigger the final ledger by losing an unbanked haul" },
        ],
      },
      {
        id: "weapon-mastery-grid",
        type: "prose",
        heading: "Weapon mastery grid: Sword, Axe, Hammer, Staff across Novice to Master",
        body:
          "The mastery ledger is the biggest single non-sales commitment on the achievements list. It spans four weapon families — Sword, Axe, Hammer, Staff — and each family carries a four-tier mastery chain (Novice, Adept, Journeyman, Master) with 250 kills per family, totaling 1,000 weapon-specific kills across all four families. The per-family tier names and the 250-kill target are attributed to the 9puz achievement guide, re-verified 2026-09-14. The session-planning rule is to rotate families across runs rather than finish one family before picking up the next: a session that mixes two families clears two chains at once and avoids the weapon-pacing fatigue of single-family grinding. The weapon family names and the mastery tier chain are the gap that the existing /dungeons/weapons page fills only with the fast-versus-heavy framing, so this ledger is the reason the mastery grid has to live here.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "category-sales-targets",
        type: "prose",
        heading: "Six category-sales targets and how to mix them",
        body:
          "The category-sales ledger tracks six named thresholds: Magic 50, Weapons 80, Alcohol 50, Bones 50, Armor 80, and Bloodstone 10. The thresholds are attributed to the 9puz achievement guide and confirm that the achievement ledger terminates on a small but unusual Bloodstone 10 alongside the larger Weapons 80 and Armor 80 targets. The session-planning rule is to mix categories rather than drain one category before stocking the next: a single shop day that prices Magic, Weapons, and Alcohol together advances three of the six categories on the same cycle. Bloodstone's low threshold (10) means a single dungeon run that pulls bloodstone clears that sub-ledger; Armor 80 and Weapons 80 carry the longest tail and benefit most from the mixed-category approach. See /shop/pricing-and-demand for the matching shop-day pricing sequence and the Fair-at-zero-Prestige first-cycle move.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "crafted-rarity-ladder",
        type: "prose",
        heading: "Crafted-rarity ladder: Uncommon, Rare, Epic, Legendary each once",
        body:
          "The crafted-rarity ladder is the smallest target in the crafting group: one Uncommon, one Rare, one Epic, and one Legendary crafted item, each once. The ladder is attributed to the 9puz achievement guide and is independent of the larger 60-item crafting-count ledger. The session-planning rule is to schedule the four rarity crafts in sequence within one or two workbench sessions rather than spread them across many short visits; the four-piece ladder clears without competing with the larger 60-item count, which advances passively in the background. The 60-item count itself pairs with the category-sales targets because each crafted item eventually shelves as a category sale.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "comfort-versus-prestige",
        type: "prose",
        heading: "Comfort and Prestige: two parallel Level 1 to Level 10 chains",
        body:
          "Comfort and Prestige are parallel Level 1 to Level 10 chains, not a single progression chain. The community wiki separates Comfort from Prestige and frames furniture tiers as S combat buffs, A Prestige-Building, and B Situational Investments, which confirms that Comfort climbs through decoration-driven progression while Prestige climbs through commercial-strength progression. The session-planning rule is to advance both chains in parallel: every furniture purchase that lands on an S combat-buff piece advances Comfort through the decoration side, while the same cycle's shop sales advance Prestige through the commercial side. Players who try to max Prestige before touching Comfort lose the dual-chain compounding that the wiki highlights. The dual-chain clarification belongs here because /shop/pricing-and-demand covers Prestige mechanics without separating Comfort as a parallel Level 1 to Level 10 chain.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "duplicate-name-traps",
        type: "prose",
        heading: "Duplicate-name trap achievements: 'Getting better!' and 'Master Dungeoneering'",
        body:
          "Two achievements share display names with other achievements in different ledgers and are easy to misread on a generic achievements page. 'Getting better!' covers both Craft 5 Items and Sell 25 Items: the same name resolves to a crafting-count milestone and a sales-count milestone. 'Master Dungeoneering' covers both Floor 8 and Floor 10: the same name resolves to a mid-floor milestone and the deepest-floor milestone. The 9puz achievement guide flags both as trap names. The session-planning rule is to check the ledger column for each 'Getting better!' and 'Master Dungeoneering' entry before claiming credit; finishing the lower threshold does not auto-complete the higher one.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "required-single-death",
        type: "prose",
        heading: "The required single death and where it sits in a session plan",
        body:
          "The final ledger in the 13-ledger map is the required single death. Fell and Sell's death penalty is official Steam text: 'Die and lose your entire unbanked haul.' The achievement ledger turns that risk into a deliberate session event: bank the haul you want to keep, then descend past the extraction point without a safety bank so the run ends in death and the ledger ticks. The single-death mechanic is the only ledger that benefits from failing the risk-threshold check on /dungeons/extraction-and-death-penalty, and the session-planning rule is to schedule it on a haul-light cycle so the loss is contained.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "combined-session-plan",
        type: "prose",
        heading: "Combined grinding: a single session that advances several ledgers",
        body:
          "A combined-grinding session interleaves the ledgers rather than cleaning them in isolation. The example session below advances five ledgers in one cycle: pick a fast weapon from a family with unfinished mastery (mastery ledger), descend to Floor 8 or Floor 10 (floor ledger), open any chest in the path (chest ledger), kill along the way for the kill ledger, and bank the haul for category sales on the next shop day (category-sales ledger). On the same cycle, craft one item of an unfinished rarity (crafted-rarity ladder) and price the shop day with mixed categories (category-sales ledger). Comfort and Prestige advance passively through the furniture and shop cycles. The required single death is scheduled for a separate haul-light cycle so the loss is bounded. The combined-grinding framing is attributed to the 9puz achievement guide, re-verified 2026-09-14, and is presented as session-planning guidance.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "achievement-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-14",
        body:
          "The 13-ledger structure, the per-family 250-kill mastery targets, the six category-sales thresholds (Magic 50, Weapons 80, Alcohol 50, Bones 50, Armor 80, Bloodstone 10), the four crafted-rarity tier names, and the duplicate-name trap achievements are attributed to the 9puz achievement guide for Fell and Sell, re-verified 2026-09-14. The dual Comfort and Prestige parallel chains and the S/A/B furniture tier framing are attributed to the Fell and Sell community wiki. Named boss thresholds beyond Floor 10 are not invented on this page; only Floor 10 is stated as the deepest confirmed target.",
      },
    ],
    faqIds: [
      "achievements-how-many",
      "achievements-weapon-mastery",
      "achievements-trap-names",
      "achievements-comfort-versus-prestige",
    ],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-weapons-en-us",
      "fixed-shop-pricing-and-demand-en-us",
      "fixed-shop-layout-and-furniture-buffs-en-us",
      "fixed-altars-and-builds-en-us",
      "fixed-crafting-and-gear-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
];
