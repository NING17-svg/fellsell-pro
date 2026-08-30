import type { PageContent } from "@/types/content";

const LAST_REVIEWED = "2026-08-30";

// Fell and Sell overview hub pages. The site-plan content tree groups the
// guide and wiki clusters under index pages so first-time visitors can
// see the full guide and wiki spread before drilling into a leaf page.
// These are real, indexable overview pages that link every related leaf.

export const fellsellFixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Fell and Sell guides: beginner path, gameplay loop, and co-op status",
    seoTitle:
      "Fell and Sell Guides | Beginner Path, Gameplay Loop, Mods, and Co-op",
    metaDescription:
      "Index of Fell and Sell guide pages covering the beginner path, the dungeon-and-shop gameplay loop, multiplayer and co-op status, and the mods policy.",
    summary:
      "A landing page that groups every Fell and Sell guide entry: beginner priorities, the dungeon-and-shop loop, multiplayer and co-op status, and the mods stance.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Every Fell and Sell guide page in one index: start with the beginner path, read the gameplay loop, decide on co-op, and check the mods stance.",
      ctas: [
        { label: "Beginner Guide", href: "/beginner-guide" },
        { label: "Gameplay Loop", href: "/gameplay-loop" },
      ],
    },
    quickAnswer:
      "The Fell and Sell guides cluster covers the beginner path, the dungeon-and-shop gameplay loop, the multiplayer and co-op status (single-player only), and the mods stance. Use the beginner path on day one, the gameplay loop once the first cycles land, the co-op status when picking how to play, and the mods stance before installing anything.",
    keyFacts: [
      { label: "Cluster", value: "Guides (how to play)" },
      { label: "Entry page", value: "/beginner-guide" },
      { label: "Loop page", value: "/gameplay-loop" },
      { label: "Multiplayer status", value: "Single-player only" },
      { label: "Mods stance", value: "Steam Workshop unconfirmed" },
    ],
    modules: [
      {
        id: "guides-index",
        type: "entity-grid",
        heading: "Fell and Sell guide pages",
        items: [
          {
            title: "Beginner Guide",
            summary:
              "Where to spend the first hours, the safe first dungeon run, and the first shop cycle.",
            href: "/beginner-guide",
          },
          {
            title: "Gameplay Loop",
            summary:
              "The dungeon-and-shop loop sequence, where roguelike risk enters, and where new players stall.",
            href: "/gameplay-loop",
          },
          {
            title: "Multiplayer and Co-op",
            summary:
              "Single-player only confirmation, the absence of co-op or online play, and what that means for sessions.",
            href: "/multiplayer-and-co-op",
          },
          {
            title: "Mods",
            summary:
              "Steam Workshop status for Fell and Sell, the unofficial stance, and what to do before installing a mod.",
            href: "/mods",
          },
        ],
      },
      {
        id: "guides-order",
        type: "prose",
        heading: "Recommended reading order",
        body:
          "Read the beginner guide first to set up a safe first dungeon run and the first shop cycle. Move to the gameplay loop once the first cycles land so the loop terminology is already familiar. Check multiplayer and co-op before you invite anyone to a session; Fell and Sell is single-player only as of August 30, 2026. Check the mods stance before installing anything — Steam Workshop status has not been published for Fell and Sell as of August 30, 2026.",
      },
    ],
    faqIds: ["home-mods", "home-single-player"],
    relatedPageIds: [
      "fixed-beginner-guide-en-us",
      "fixed-gameplay-loop-en-us",
      "fixed-multiplayer-and-co-op-en-us",
      "fixed-mods-en-us",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Fell and Sell wiki: dungeons, altars, weapons, crafting, and shop systems",
    seoTitle:
      "Fell and Sell Wiki | Dungeons, Altars, Weapons, Crafting, and Shop",
    metaDescription:
      "Index of Fell and Sell wiki pages covering the dungeons hub, dungeon guide, extraction, altars and builds, weapons, crafting, the Quest Board, the Living Forest, the shop hub, pricing, layout, and upgrades.",
    summary:
      "A landing page that groups every Fell and Sell wiki entry: dungeon systems, weapon and altar decisions, crafting and gear, foraging, and shop economy.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Every Fell and Sell wiki page in one index: dungeons, altars, weapons, crafting, foraging, and shop economy.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Shop Hub", href: "/shop" },
      ],
    },
    quickAnswer:
      "The Fell and Sell wiki cluster collects the dungeons hub, dungeon guide, extraction and death penalty, altars and builds, weapons, crafting and gear, the Quest Board, Living Forest foraging, the shop hub, pricing and demand, layout and furniture buffs, and upgrades and progression. Use the dungeons hub as the entry page for dungeon topics and the shop hub as the entry page for economy topics.",
    keyFacts: [
      { label: "Cluster", value: "Wiki (systems reference)" },
      { label: "Dungeon entry", value: "/dungeons" },
      { label: "Shop entry", value: "/shop" },
      { label: "Coverage", value: "12 wiki pages" },
    ],
    modules: [
      {
        id: "wiki-index-dungeons",
        type: "entity-grid",
        heading: "Dungeons wiki pages",
        items: [
          {
            title: "Dungeons Hub",
            summary:
              "The cluster overview for every Fell and Sell dungeon topic.",
            href: "/dungeons",
          },
          {
            title: "Dungeon Guide",
            summary:
              "Combat basics, weapon handling, enemies, traps, and deep-floor risk.",
            href: "/dungeon-guide",
          },
          {
            title: "Extraction and Death Penalty",
            summary:
              "Unbanked haul risk, the escape point, and the risk threshold per run.",
            href: "/extraction-and-death-penalty",
          },
          {
            title: "Altars and Builds",
            summary:
              "Shrink, Midas Touch, and other altar effects and how they shape a build.",
            href: "/altars-and-builds",
          },
          {
            title: "Weapons",
            summary:
              "Weapon categories, weapon handling, and which weapon fits each dungeon floor.",
            href: "/weapons",
          },
          {
            title: "Crafting and Gear",
            summary:
              "Crafting recipes, gear tiers, and how a crafted weapon compares to a banked haul.",
            href: "/crafting-and-gear",
          },
          {
            title: "Quest Board",
            summary:
              "How Quest Board rewards turn into gold and gear for the next run.",
            href: "/quest-board",
          },
          {
            title: "Living Forest Foraging",
            summary:
              "Goblin raids, thunderstorms, psychedelic mushroom season, and the foraging trade-off.",
            href: "/living-forest-foraging",
          },
        ],
      },
      {
        id: "wiki-index-shop",
        type: "entity-grid",
        heading: "Shop wiki pages",
        items: [
          {
            title: "Shop Hub",
            summary:
              "The cluster overview for every Fell and Sell shop topic.",
            href: "/shop",
          },
          {
            title: "Shop Pricing and Demand",
            summary:
              "Pricing inputs, price modes, prestige, decoration, and how demand shifts.",
            href: "/shop-pricing-and-demand",
          },
          {
            title: "Shop Layout and Furniture Buffs",
            summary:
              "Display types, zoning, combat buffs, and commercial appeal from furniture.",
            href: "/shop-layout-and-furniture-buffs",
          },
          {
            title: "Shop Upgrades and Progression",
            summary:
              "Reinvest priorities, expansion, balance, compounding, and premature signs.",
            href: "/shop-upgrades-and-progression",
          },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-shop-hub-en-us",
      "home",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: LAST_REVIEWED,
  },
];