import type { PageContent } from "@/types/content";

import {
  FALL_SELL_OFFICIAL,
  FALL_SELL_WIKI,
  WORLDEKA_BEGINNER,
  WORLDEKA_DUNGEON,
  WORLDEKA_STORE,
} from "./fellsell-fixed-source";

// Fell and Sell — V3 shop-cluster fixed pages assembled from the approved
// content-package. Each entry's id, translationKey, route, pageType,
// presentation shell/variant, h1, keyFacts, FAQ ids, relatedPageIds,
// lastReviewed, and sourceStatus mirror the V3 Site Plan and content-package.

const LAST_REVIEWED = "2026-08-30";

export const fellsellShopPages: PageContent[] = [
  {
    id: "fixed-shop-hub-en-us",
    translationKey: "shop-hub",
    locale: "en-US",
    routeKind: "fixed",
    slug: "shop",
    url: "/shop",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Fell and Sell shop hub: pricing, furniture buffs, reinvestment",
    seoTitle:
      "Fell and Sell Shop Hub: Pricing, Furniture Buffs, Reinvestment",
    metaDescription:
      "Browse every Fell and Sell shop, pricing, and economy topic from one entry point: pricing and demand, layout and furniture buffs, and shop upgrades and progression.",
    summary:
      "The Fell and Sell shop hub collects every economy topic from pricing and demand to layout buffs and reinvestment order. Hub summaries repeat only claims already carried on the linked pages under their own fact boundaries.",
    hero: {
      eyebrow: "Shop and economy",
      subtitle:
        "Pricing and demand, layout and furniture buffs, and reinvestment order. Each topic answers one real merchant decision so the shop side of the loop stays readable.",
      ctas: [
        { label: "Shop Pricing", href: "/shop/pricing-and-demand" },
        { label: "Layout and Furniture Buffs", href: "/shop/layout-and-furniture-buffs" },
        { label: "Shop Upgrades", href: "/shop/upgrades-and-progression" },
        { label: "Dungeons Hub", href: "/dungeons" },
      ],
    },
    quickAnswer:
      "The shop side of the Fell and Sell loop covers three topics: how to set prices using supply, demand, and Prestige; how to arrange the shop furniture for permanent combat buffs and sales appeal; and how to order reinvestment from the first profitable cycles to a mercantile powerhouse. The shop hub routes search users to the dedicated page for each topic.",
    keyFacts: [
      { label: "Cluster", value: "Shop and economy" },
      { label: "Topics", value: "Pricing, layout buffs, reinvestment" },
      { label: "Hub weight-bearing route", value: "/shop" },
      { label: "Parent hub", value: "Homepage" },
      { label: "Cross-link", value: "Dungeons hub" },
    ],
    modules: [
      {
        id: "cluster-overview",
        type: "prose",
        heading: "Cluster overview",
        body:
          "Fell and Sell runs as a single economy with the shop on one side and the dungeon on the other. The shop cluster covers pricing and demand, layout and furniture buffs, and reinvestment order. Each leaf page answers one real merchant decision and links back to this hub.\n\nRecommended reading order once the first haul is banked: shop pricing and demand first, then shop layout and furniture buffs, then shop upgrades and progression. The hub can be read in any order after that.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "leaf-pages",
        type: "entity-grid",
        heading: "Shop-cluster leaf pages",
        items: [
          {
            title: "Shop Pricing and Demand",
            summary:
              "How pricing responds to supply and demand, the Fair, High, and Low price modes and when each applies, what Prestige is and how it changes customer behaviour.",
            href: "/shop/pricing-and-demand",
          },
          {
            title: "Shop Layout and Furniture Buffs",
            summary:
              "Display types including tables, racks and stands, and storage chests; zoning stock and keeping walking routes clear; furniture that grants permanent combat buffs.",
            href: "/shop/layout-and-furniture-buffs",
          },
          {
            title: "Shop Upgrades and Progression",
            summary:
              "Reinvestment priorities after the first profitable cycles; expanding from the starting cabin; balancing shop capacity against dungeon gear.",
            href: "/shop/upgrades-and-progression",
          },
        ],
      },
      {
        id: "shop-feeds-dungeon",
        type: "prose",
        heading: "How shop investment feeds combat power",
        body:
          "Every shop-cluster outcome eventually feeds back into the dungeon side. Pricing funds the next reinvestment, furniture grants permanent combat buffs that apply on the next run, and shop upgrades raise the shop's capacity to absorb larger hauls. The shop side funds the dungeon side; the dungeon side feeds the shop side. The cross-link between the two hubs is on the dungeon hub page as well.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "shop-hub-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Hub summaries repeat only claims already carried on the linked leaf pages under their own fact boundaries. Confirmed mechanics (player-set pricing, furniture buffs, reinvestment arc) come from the official Steam feature list for AppID 4627110; specific tactics and ordering are attributed to the worldeka store strategy guide and the Fell and Sell wiki, recorded as guide sources.",
      },
    ],
    faqIds: ["shop-reading-order", "shop-cross-link"],
    relatedPageIds: [
      "fixed-shop-pricing-and-demand-en-us",
      "fixed-shop-layout-and-furniture-buffs-en-us",
      "fixed-shop-upgrades-and-progression-en-us",
      "fixed-achievements-ledger-en-us",
      "fixed-dungeons-hub-en-us",
      "home",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-shop-pricing-and-demand-en-us",
    translationKey: "shop-pricing-and-demand",
    locale: "en-US",
    routeKind: "fixed",
    slug: "shop/pricing-and-demand",
    url: "/shop/pricing-and-demand",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell shop pricing and demand: Fair, High, Low, Prestige, and Comfort",
    seoTitle:
      "Fell and Sell Shop Pricing and Demand: Fair, High, Low, Prestige, Comfort",
    metaDescription:
      "Decide what price to set for stock using Fell and Sell supply, demand, Prestige, and decoration bonuses. The Steam store page confirms player-set pricing responds to supply, demand, prestige, and decoration bonuses. Comfort and Prestige are separate Level 1-10 chains, not one combined chain.",
    summary:
      "Fell and Sell player-set pricing responds to supply, demand, prestige, and decoration bonuses. This guide covers the Fair, High, and Low price modes, what Prestige is and how it changes customer behaviour, how decoration bonuses feed the price ceiling, and the parallel Comfort chain that climbs Level 1 to Level 10 alongside Prestige.",
    hero: {
      eyebrow: "Shop pricing and demand",
      subtitle:
        "Player-set pricing responds to supply, demand, prestige, and decoration bonuses. Pick a price mode based on the day's demand curve, raise prices when Prestige supports it, and treat Comfort and Prestige as two parallel Level 1 to Level 10 chains rather than a single combined chain.",
      ctas: [
        { label: "Shop Hub", href: "/shop" },
        { label: "Layout and Furniture Buffs", href: "/shop/layout-and-furniture-buffs" },
        { label: "Achievements Ledger", href: "/achievements" },
      ],
    },
    quickAnswer:
      "Fell and Sell player-set pricing responds to supply, demand, prestige, and decoration bonuses. The Fair price mode fits neutral demand, the High price mode fits high Prestige plus high decoration bonus, and the Low price mode fits low Prestige plus slow-moving stock. The first-cycle move is to bank the first full haul before any sale, then price at Fair with Prestige still at zero. Adjust rather than set once.",
    keyFacts: [
      { label: "Pricing input 1", value: "Supply" },
      { label: "Pricing input 2", value: "Demand" },
      { label: "Pricing input 3", value: "Prestige" },
      { label: "Pricing input 4", value: "Decoration bonus" },
      { label: "Price modes", value: "Fair, High, Low" },
      { label: "First-cycle price", value: "Fair at zero Prestige after banking the haul" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "pricing-inputs",
        type: "prose",
        heading: "How pricing responds to supply and demand",
        body:
          "Fell and Sell pricing responds to supply and demand on a per-item basis. High supply and low demand push the price floor down; low supply and high demand pull the price ceiling up. The official Steam feature list confirms that player-set pricing responds to supply, demand, prestige, and decoration bonuses, so the pricing system reads the shop's current state before settling on a price ceiling. The supply-and-demand framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "price-modes",
        type: "prose",
        heading: "The Fair, High, and Low price modes and when each applies",
        body:
          "The Fair price mode fits neutral demand and a moderate Prestige; the High price mode fits high Prestige plus a strong decoration bonus; the Low price mode fits slow-moving stock plus low Prestige. The mode list and the per-mode framing are attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "prestige",
        type: "prose",
        heading: "What Prestige is and how it changes customer behaviour",
        body:
          "Prestige is a shop-level ranking; higher Prestige customers accept higher prices and the shop's price ceiling rises with Prestige. Prestige rises as the shop sells consistently and falls when slow-moving stock piles up. The Prestige framing and the customer-behaviour framing are attributed to guide sources; the official Steam feature list confirms that player-set pricing responds to Prestige.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "comfort-versus-prestige",
        type: "prose",
        heading: "Comfort and Prestige: two parallel chains, not one combined chain",
        body:
          "Comfort and Prestige are separate Level 1 to Level 10 chains, not a single combined chain. Comfort climbs through decoration-driven shop progression (furniture tiers rated S combat buffs, A Prestige-Building, and B Situational Investments by the community wiki); Prestige climbs through commercial-strength progression (consistent sales, fast-moving stock, and a price ceiling that supports the High mode). The session-planning rule is to advance both chains in parallel: every furniture purchase that lands on an S combat-buff piece advances Comfort through the decoration side, while the same cycle's shop sales advance Prestige through the commercial side. See /achievements for the dual-chain ledger entries.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE, FALL_SELL_WIKI],
      },
      {
        id: "decoration",
        type: "prose",
        heading: "How decoration bonuses feed the price ceiling",
        body:
          "Decoration bonuses raise the price ceiling by signalling a higher-tier shop to customers. The decoration bonus and the price ceiling rise together; a shop with a strong decoration bonus can hold a higher price on the same item than a shop with no decoration bonus. The framing is attributed to guide sources; the existence of decoration bonuses feeding the price ceiling is part of the official Steam feature list.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "test-and-adjust",
        type: "prose",
        heading: "Testing and adjusting prices instead of setting once",
        body:
          "Pricing is a recurring decision, not a one-time choice. Set a starting price, watch how the stock clears, and adjust. Slow-moving stock at the recommended price should be discounted or held; stock that clears too fast can be repriced upward as long as Prestige and the decoration bonus support it. The test-and-adjust framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "first-cycle-pricing",
        type: "prose",
        heading: "First-cycle pricing: bank first, then Fair at zero Prestige",
        body:
          "The first cycle pricing move is to bank the first full haul before any sale and then set Fair prices at zero Prestige. The Worldeka beginner guide recommends banking the first full haul before any sale because selling a haul before the shop surface has a stable Prestige bracket turns the shop into a discount outlet on day one. With the haul banked and Prestige at zero, the Fair price mode is the only mode that holds the price ceiling; High pricing fails because Prestige has not yet risen, and Low pricing trains customers to expect discounts. The first-cycle pricing sequence is bank first, then Fair at zero Prestige, then adjust upward only after Prestige supports it. See /shop/layout-and-furniture-buffs for the same-cycle furniture purchase and /dungeons/quest-board for the same-cycle Quest Board turn-in that completes the first profitable cycle.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, WORLDEKA_STORE],
      },
      {
        id: "pricing-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "The official Steam feature list confirms that player-set pricing responds to supply, demand, prestige, and decoration bonuses. The named Fair, High, and Low price modes, the Prestige ranking detail, and the first-cycle bank-first-and-Fair-at-zero-Prestige sequence are attributed to the worldeka store strategy guide and the worldeka beginner guide, recorded as guide sources. No community-sourced price cheat sheet is stated as official confirmation.",
      },
    ],
    faqIds: ["pricing-mode", "pricing-prestige", "pricing-first-cycle"],
    relatedPageIds: [
      "fixed-shop-hub-en-us",
      "fixed-shop-layout-and-furniture-buffs-en-us",
      "fixed-crafting-and-gear-en-us",
      "fixed-achievements-ledger-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-shop-layout-and-furniture-buffs-en-us",
    translationKey: "shop-layout-and-furniture-buffs",
    locale: "en-US",
    routeKind: "fixed",
    slug: "shop/layout-and-furniture-buffs",
    url: "/shop/layout-and-furniture-buffs",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell shop layout and furniture buffs",
    seoTitle:
      "Fell and Sell Shop Layout and Furniture Buffs: Combat and Sales Appeal",
    metaDescription:
      "Arrange Fell and Sell shop furniture to gain permanent combat buffs and raise sales appeal. The Steam store page confirms furniture layout provides permanent combat buffs and boosts sales appeal.",
    summary:
      "Fell and Sell furniture layout provides permanent combat buffs and boosts sales appeal. This guide covers display types, zoning stock and walking routes, furniture that grants permanent combat buffs, furniture that raises commercial appeal, and the order in which to sequence purchases.",
    hero: {
      eyebrow: "Shop layout and furniture buffs",
      subtitle:
        "Furniture layout provides permanent combat buffs and boosts sales appeal. Pick furniture that pairs a combat buff with a sales appeal bonus, zone stock to keep walking routes clear, and sequence purchases so the first buffs land before the first expansion.",
      ctas: [
        { label: "Shop Hub", href: "/shop" },
        { label: "Shop Pricing", href: "/shop/pricing-and-demand" },
        { label: "Shop Upgrades", href: "/shop/upgrades-and-progression" },
      ],
    },
    quickAnswer:
      "Fell and Sell furniture layout provides permanent combat buffs and boosts sales appeal. The first purchase should be a single S-tier combat buff piece that survives the rest of the first profitable cycle; pair it with a same-cycle Quest Board turn-in for survivability gear rather than raw gold. Zone stock to keep walking routes clear and sequence purchases so the first buffs land before the first expansion.",
    keyFacts: [
      { label: "Combat buff effect", value: "Permanent, applies on the next run" },
      { label: "Sales appeal effect", value: "Raises the price ceiling" },
      { label: "Display types", value: "Tables, racks and stands, storage chests" },
      { label: "First purchase", value: "Single S-tier combat buff piece" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "display-types",
        type: "prose",
        heading: "Display types including tables, racks and stands, and storage chests",
        body:
          "Display types include tables, racks and stands, and storage chests. Tables and racks are the front-of-house display surface; storage chests are the back-of-house buffer. The display type list is attributed to guide sources; the existence of furniture that boosts sales appeal is part of the official Steam feature list.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, FALL_SELL_WIKI],
      },
      {
        id: "zoning",
        type: "prose",
        heading: "Zoning stock and keeping walking routes clear",
        body:
          "Zoning stock into themed clusters and keeping walking routes clear raises customer throughput and the price ceiling. The zoning and walking-route framing is attributed to guide sources; the price-ceiling mechanism is part of the official Steam feature list.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "combat-buffs",
        type: "prose",
        heading: "Furniture that grants permanent combat buffs",
        body:
          "Some furniture grants permanent combat buffs including health, attack power, and movement speed. The buffs apply on the next run and persist across cycles, which makes them the highest-impact furniture category. The buff categories are attributed to guide sources; the existence of permanent combat buffs from furniture is part of the official Steam feature list.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "commercial-appeal",
        type: "prose",
        heading: "Furniture that raises customer capacity and commercial appeal",
        body:
          "Some furniture raises customer capacity and commercial appeal. The commercial appeal feeds the price ceiling, which in turn raises the marginal gold per sale. The capacity and appeal framing is attributed to guide sources; the price-ceiling mechanism is part of the official Steam feature list.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "sequence",
        type: "prose",
        heading: "How to sequence purchases",
        body:
          "Sequence purchases so the first buffs land before the first expansion. The first purchase should be furniture that pairs a combat buff with a sales appeal bonus so the player benefits on the dungeon side and the shop side at the same time. Subsequent purchases can fill out the combat buff set, then layer on commercial appeal, then expand capacity. The sequencing rule is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "first-cycle-furniture",
        type: "prose",
        heading: "First-cycle furniture: a single S-tier combat buff piece",
        body:
          "The first-cycle furniture move is a single S-tier combat buff piece that survives the rest of the first profitable cycle. The Worldeka dungeon guide ranks furniture for combat buff value and the Worldeka beginner guide binds the first furniture priority to the first profitable cycle. A single S-tier combat buff piece lifts the player's effective tier on the next dungeon run without raising the unbanked-haul risk on that run. Pair the purchase with a same-cycle Quest Board turn-in for survivability gear rather than raw gold: the board pays out gear that reduces the next run's death penalty, while raw gold from the board funds the next shop-day reinvestment instead of the current cycle. See /shop/pricing-and-demand for the same-cycle Fair-at-zero-Prestige pricing and /dungeons/quest-board for the same-cycle board turn-in.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, WORLDEKA_DUNGEON],
      },
      {
        id: "layout-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "\"Furniture layout provides permanent combat buffs and boosts sales appeal\" is official Steam text. Specific display types, buff categories, the S/A/B-tier furniture ranking, and the first-cycle single-S-tier-combat-buff sequence are attributed to the worldeka beginner guide and the worldeka dungeon guide, recorded as guide sources. The same-cycle Quest Board turn-in for survivability gear is attributed to the worldeka beginner guide.",
      },
    ],
    faqIds: ["layout-first-furniture", "layout-pairs-buffs", "layout-first-cycle"],
    relatedPageIds: [
      "fixed-shop-hub-en-us",
      "fixed-shop-pricing-and-demand-en-us",
      "fixed-shop-upgrades-and-progression-en-us",
      "fixed-achievements-ledger-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-shop-upgrades-and-progression-en-us",
    translationKey: "shop-upgrades-and-progression",
    locale: "en-US",
    routeKind: "fixed",
    slug: "shop/upgrades-and-progression",
    url: "/shop/upgrades-and-progression",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell shop upgrades and progression",
    seoTitle:
      "Fell and Sell Shop Upgrades and Progression: Reinvestment Order",
    metaDescription:
      "Decide which Fell and Sell shop upgrade or expansion to reinvest gold into next, balance shop capacity against dungeon gear, and recognise the signs an upgrade is premature.",
    summary:
      "Fell and Sell reinvestment follows the official Steam text: \"Reinvest profits\" and the growth from roadside cabin to mercantile powerhouse. This guide covers reinvestment priorities after the first profitable cycles, expansion from the starting cabin, balancing shop capacity against dungeon gear, and signs an upgrade is premature.",
    hero: {
      eyebrow: "Shop upgrades and progression",
      subtitle:
        "Reinvest profits from the first profitable cycles into furniture that pairs combat buffs with sales appeal, then layer on commercial appeal and capacity, then expand the shop floor. Watch for the signs an upgrade is premature so the reinvestment order does not outpace the dungeon side.",
      ctas: [
        { label: "Shop Hub", href: "/shop" },
        { label: "Layout and Furniture Buffs", href: "/shop/layout-and-furniture-buffs" },
        { label: "Quest Board", href: "/dungeons/quest-board" },
      ],
    },
    quickAnswer:
      "Reinvest the first profitable cycles into furniture that pairs combat buffs with sales appeal, then layer on commercial appeal and capacity, then expand the shop floor. The official Steam feature list confirms \"Reinvest profits\" and the growth from roadside cabin to mercantile powerhouse. Balance shop capacity against dungeon gear and watch for the signs an upgrade is premature so the reinvestment order does not outpace the dungeon side.",
    keyFacts: [
      { label: "Reinvest rule", value: "Profits fund furniture, crafting, or shop upgrades" },
      { label: "Growth arc", value: "Roadside cabin to mercantile powerhouse" },
      { label: "First upgrade", value: "Furniture that pairs combat + appeal" },
      { label: "Premature upgrade signs", value: "Slow stock turnover, low Prestige" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "reinvest-priorities",
        type: "prose",
        heading: "Reinvestment priorities after the first profitable cycles",
        body:
          "After the first profitable cycles, reinvest into furniture that pairs combat buffs with sales appeal. The combat buff reduces the death penalty on the next run; the sales appeal raises the price ceiling on the next shop day. Both effects compound across cycles, which is why paired furniture is the highest-priority reinvestment. The reinvestment priority framing is attributed to guide sources; the existence of reinvestment is part of the official Steam feature list.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "expansion",
        type: "prose",
        heading: "Expanding from the starting cabin",
        body:
          "Expanding from the starting cabin to a larger shop floor is a downstream reinvestment. Expansion raises capacity and unlocks new display types, but it does not change the combat buff or the sales appeal of the existing furniture. Expand only after the first combat buff set is in place and the first appeal upgrade has landed; expanding earlier dilutes the reinvestment. The expansion rule is attributed to guide sources; the growth framing is part of the official Steam feature list.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "balance",
        type: "prose",
        heading: "Balancing shop capacity against dungeon gear",
        body:
          "Balancing shop capacity against dungeon gear is the reinvestment equivalent of the sell-versus-keep decision. Shop capacity expansions absorb larger hauls; dungeon gear reduces the death penalty. The right balance shifts with the run cycle: cycles that produce large hauls favour shop capacity, and cycles that push deep floors favour dungeon gear. The balance framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "compounding",
        type: "prose",
        heading: "How upgrades compound with furniture buffs",
        body:
          "Shop upgrades compound with furniture buffs because upgrades raise the price ceiling while furniture raises customer throughput. A shop with paired furniture and a balanced expansion can hold a higher price on a larger volume of stock than a shop with only one of the two. The compounding framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "premature-signs",
        type: "prose",
        heading: "Signs an upgrade is premature",
        body:
          "An upgrade is premature when slow stock turnover is still the binding constraint, when Prestige has not yet risen, or when the next shop day has not absorbed the previous cycle's haul. The signs are slow stock turnover, low Prestige, and a backlog of unsold stock at the recommended price. The premature-signs framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "upgrade-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "\"Reinvest profits\" and the growth from roadside cabin to mercantile powerhouse are official Steam feature text. Upgrade ordering advice is attributed to the Fell and Sell community wiki and the worldeka store strategy guide, recorded as guide sources, and presented as guidance, not as an official progression table.",
      },
    ],
    faqIds: ["upgrades-first-purchase", "upgrades-premature"],
    relatedPageIds: [
      "fixed-shop-hub-en-us",
      "fixed-shop-layout-and-furniture-buffs-en-us",
      "fixed-quest-board-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
];