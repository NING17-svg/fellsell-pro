import type { PageContent } from "@/types/content";

import {
  FALL_SELL_OFFICIAL,
  FALL_SELL_STEAMBASE,
  FALL_SELL_WIKI,
  OFFICIAL_LINKS,
  WORLDEKA_BEGINNER,
  WORLDEKA_STORE,
} from "./fellsell-fixed-source";

// Fell and Sell — V3 fixed pages assembled from the approved content-package.
// Each entry's id, translationKey, route, pageType, presentation shell/variant,
// h1, keyFacts, FAQ ids, relatedPageIds, lastReviewed, and sourceStatus mirror
// the V3 Site Plan and content-package exactly.

const LAST_REVIEWED = "2026-08-30";

export const fellsellFixedPages: PageContent[] = [
  {
    id: "fixed-release-date-platforms-price-en-us",
    translationKey: "release-platforms-price",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-date-platforms-price",
    url: "/release-date-platforms-price",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell release date: launch, price, and Steam availability",
    seoTitle:
      "Fell and Sell Release Date: Launch, Price, and Steam Availability",
    metaDescription:
      "Fell and Sell release date is August 26, 2026 on Steam for Windows at USD 9.99 with an introductory 10% discount to USD 8.99 ending September 9, 2026.",
    summary:
      "Fell and Sell released on Steam AppID 4627110 on August 26, 2026 with Windows listed as the only confirmed platform, published by PlayWay S.A. for developer Art Games Studio S.A. The standard price is USD 9.99 with an introductory 10% discount to USD 8.99 ending September 9, 2026.",
    hero: {
      eyebrow: "Release and price",
      subtitle:
        "Fell and Sell released on Steam for Windows on August 26, 2026. The standard price is USD 9.99 with an introductory 10% discount to USD 8.99 running through September 9, 2026. Single-player only, with Steam Cloud, Family Sharing, and 97 achievements.",
      ctas: [
        { label: "System Requirements", href: "/system-requirements" },
        { label: "Demo", href: "/demo" },
        { label: "Gameplay Loop", href: "/gameplay-loop" },
      ],
    },
    quickAnswer:
      "Fell and Sell release date is August 26, 2026 on Steam for Windows at USD 9.99, with an introductory 10% discount to USD 8.99 ending September 9, 2026. The game is single-player only, ships with 97 achievements, 11 interface languages, and a free demo, and is published by PlayWay S.A. on AppID 4627110. The Steam store page is the source of truth for every claim on this status page, current as of August 30, 2026.",
    keyFacts: [
      { label: "Release date", value: "August 26, 2026" },
      { label: "Steam AppID", value: "4627110" },
      { label: "Developer", value: "Art Games Studio S.A." },
      { label: "Publisher", value: "PlayWay S.A." },
      { label: "Platform", value: "Windows (Steam)" },
      { label: "Standard price", value: "USD 9.99" },
      { label: "Introductory price", value: "USD 8.99 (10% off)" },
      { label: "Discount window ends", value: "September 9, 2026" },
      { label: "Mode", value: "Single-player only" },
      { label: "Achievements", value: "97" },
      { label: "Interface languages", value: "11" },
    ],
    modules: [
      {
        id: "release-status",
        type: "prose",
        heading: "Fell and Sell release date and current Steam launch status",
        body:
          "Fell and Sell released on Steam AppID 4627110 on August 26, 2026 with Windows listed as a confirmed platform through the official system requirements block. The Steam store page is the authoritative source for the release date, developer and publisher credits, platform support, and live price. The title is published by PlayWay S.A. for developer Art Games Studio S.A. and is sold only through the Steam storefront; no other storefront was published as of August 30, 2026.\n\nThe release window is tied to the introductory discount. The 10% launch discount runs from August 26 through September 9, 2026 and brings the price from USD 9.99 down to USD 8.99. That window is the only currently published discount; future sale dates have not been announced.",
        links: OFFICIAL_LINKS,
      },
      {
        id: "price-window",
        type: "prose",
        heading: "Price, discount window, and what the introductory offer covers",
        body:
          "The standard Fell and Sell price on Steam is USD 9.99, and the introductory 10% discount lowers it to USD 8.99 for any purchase made before September 9, 2026. Regional pricing and taxes are set by Steam and may differ in non-US storefronts; the USD figures reflect the US storefront on August 30, 2026. Players who wait past September 9 will see the price return to USD 9.99 unless a separate sale is announced.\n\nThere is no separate Deluxe Edition, collector's edition, or DLC bundle listed on the Steam store page as of August 30, 2026. The single purchase grants access to the full release, 97 achievements, and Steam Cloud, Family Sharing, and single-player features. Buyers who want to try before they buy should look at the free demo.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "platforms",
        type: "prose",
        heading:
          "Platforms, the Steambase Mac and Linux discrepancy, and what is confirmed",
        body:
          "The Fell and Sell Steam store page lists Windows as the only confirmed platform through its official system requirements block, dated to the August 26, 2026 release. Steambase additionally lists Mac and Linux in its Fell and Sell info page, but the Steam store page does not publish Mac or Linux requirements. The Steambase listing is recorded as unverified rather than confirmed as of August 30, 2026.\n\nWhat is confirmed: Windows is supported through the official Steam requirements block. Steam Cloud, Family Sharing, achievements, and single-player are confirmed features. The free demo is available on the Steam store page.\n\nWhat is not confirmed: Mac and Linux support; no Mac or Linux requirements are published. Steam Deck verification status has not been published and is treated as not listed.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_STEAMBASE],
      },
      {
        id: "purchase-channel",
        type: "prose",
        heading: "Where to buy Fell and Sell and how to verify the listing",
        body:
          "The only published purchase channel for Fell and Sell is the Steam store page at https://store.steampowered.com/app/4627110/Fell__Sell. There is no standalone website, no third-party retail key reseller listing, and no other storefront sale published by the developer or publisher as of August 30, 2026. Any third-party key site offering the title outside Steam should be checked against the official store page before purchase.\n\nTo verify the current price and the active discount window directly, open the Steam store page on the day of purchase. Steam shows the discount timer and the standard price in the same panel, so the September 9, 2026 end date and the USD 8.99 discounted price can be confirmed without relying on a screenshot or cached article.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "release-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "The Fell and Sell release date of August 26, 2026, the USD 9.99 standard price, and the introductory 10% discount to USD 8.99 ending September 9, 2026 are sourced to the official Steam store page and dated to August 30, 2026. Windows is the only platform treated as confirmed. The Mac and Linux listings on Steambase are recorded as unverified because the Steam store page does not publish Mac or Linux requirements. No Steam Deck verification status has been published as of August 30, 2026 and is treated as not listed. Regional pricing and taxes are set by Steam and may differ in non-US storefronts; only the US storefront figures are stated on this page.",
      },
    ],
    faqIds: [
      "release-when-out",
      "release-price-now",
      "release-mac-linux",
    ],
    relatedPageIds: [
      "fixed-system-requirements-en-us",
      "fixed-demo-en-us",
      "fixed-gameplay-loop-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-system-requirements-en-us",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell system requirements: minimum and recommended PC specs",
    seoTitle:
      "Fell and Sell System Requirements: Minimum and Recommended PC Specs",
    metaDescription:
      "Fell and Sell system requirements: Windows 10/11 64-bit, quad-core CPU, 8 GB RAM, GTX 760 2 GB, 4 GB storage minimum; Intel i7-4790k or Ryzen 7 1700, 16 GB RAM, GTX 970 recommended. Full controller support confirmed.",
    summary:
      "The official Steam requirements block confirms Windows-only support. The minimum spec targets 8 GB RAM and a GTX 760 2 GB; the recommended spec raises to 16 GB RAM and a GTX 970. Controller support is confirmed through Steambase.",
    hero: {
      eyebrow: "System requirements",
      subtitle:
        "Windows 10/11 64-bit is the only confirmed platform. The minimum spec targets 8 GB RAM, a GTX 760 2 GB, and 4 GB of storage; the recommended spec raises to 16 GB RAM and a GTX 970. Steam Deck verification status has not been published as of August 30, 2026.",
      ctas: [
        { label: "Release and Price", href: "/release-date-platforms-price" },
        { label: "Demo", href: "/demo" },
      ],
    },
    quickAnswer:
      "Fell and Sell minimum requirements target Windows 8/8.1/10/11 64-bit, a quad-core CPU, 8 GB of RAM, a GTX 760 2 GB, and 4 GB of storage. The recommended spec raises to Windows 10+ 64-bit, an Intel i7-4790k or AMD Ryzen 7 1700, 16 GB of RAM, and a GTX 970. Full controller support with DualShock and DualSense compatibility is confirmed through Steambase. No official Steam Deck verification status has been published as of August 30, 2026.",
    keyFacts: [
      { label: "Minimum OS", value: "Windows 8/8.1/10/11 64-bit" },
      { label: "Minimum CPU", value: "Quad-core" },
      { label: "Minimum RAM", value: "8 GB" },
      { label: "Minimum GPU", value: "GTX 760 2 GB" },
      { label: "Minimum storage", value: "4 GB" },
      { label: "Recommended OS", value: "Windows 10+ 64-bit" },
      { label: "Recommended CPU", value: "Intel i7-4790k or AMD Ryzen 7 1700" },
      { label: "Recommended RAM", value: "16 GB" },
      { label: "Recommended GPU", value: "GTX 970" },
      { label: "Controller support", value: "Full (DualShock and DualSense)" },
      { label: "Steam Deck status", value: "Not listed as of 2026-08-30" },
    ],
    modules: [
      {
        id: "minimum-spec",
        type: "data-table",
        heading: "Minimum PC specs",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Minimum" },
        ],
        rows: [
          { field: "OS", value: "Windows 8 / 8.1 / 10 / 11 (64-bit)" },
          { field: "CPU", value: "Quad-core" },
          { field: "RAM", value: "8 GB" },
          { field: "GPU", value: "NVIDIA GeForce GTX 760 (2 GB)" },
          { field: "Storage", value: "4 GB available space" },
        ],
      },
      {
        id: "recommended-spec",
        type: "data-table",
        heading: "Recommended PC specs",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Recommended" },
        ],
        rows: [
          { field: "OS", value: "Windows 10 or later (64-bit)" },
          { field: "CPU", value: "Intel Core i7-4790k or AMD Ryzen 7 1700" },
          { field: "RAM", value: "16 GB" },
          { field: "GPU", value: "NVIDIA GeForce GTX 970" },
          { field: "Storage", value: "4 GB available space" },
        ],
      },
      {
        id: "how-they-differ",
        type: "prose",
        heading: "How the two tiers differ in practice",
        body:
          "The minimum spec keeps the game playable on a modest quad-core desktop with a GTX 760 2 GB, while the recommended spec targets smoother performance on current mid-range hardware. The 8 GB RAM ceiling in the minimum spec means texture streaming and the dungeon plus the open shop surface run tight on the lowest tier, while the 16 GB recommended tier gives more headroom for keeping a run, the shop overlay, and the furniture buff calculations together.\n\nStorage is the same on both tiers at 4 GB; the difference is not in install size but in the CPU and GPU budget. Players on the minimum spec should expect lower crowd density at peak moments in dungeons and during busy shop days, while players on the recommended spec should hold closer to the intended frame pacing.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_STEAMBASE],
      },
      {
        id: "controller",
        type: "prose",
        heading: "Controller and Steam Deck support",
        body:
          "Steambase lists full controller support for Fell and Sell, including DualShock and DualSense compatibility. The Steam store page does not list Steam Deck verification as of August 30, 2026, so Deck status is recorded as not listed rather than Verified or Playable. Treat that as the official position until the developer publishes a Deck verification badge.",
        links: [FALL_SELL_STEAMBASE],
      },
      {
        id: "spec-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Minimum and recommended specs are sourced to the official Steam requirements block for AppID 4627110. Controller support is confirmed through Steambase, recorded as a wiki/reference source. Steam Deck verification status is not listed on either source as of August 30, 2026.",
      },
    ],
    faqIds: ["spec-min-vs-recommended", "spec-steam-deck"],
    relatedPageIds: [
      "fixed-release-date-platforms-price-en-us",
      "fixed-demo-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-demo-en-us",
    translationKey: "demo",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell demo: how to try the free Steam demo",
    seoTitle: "Fell and Sell Demo: Free Steam Demo and What It Covers",
    metaDescription:
      "A free Fell and Sell demo is listed on the Steam store page as of August 30, 2026. No official statement about demo save transfer into the full game has been published.",
    summary:
      "A free Fell and Sell demo is listed on the Steam store page as of August 30, 2026. The demo is reached from the same AppID 4627110 store page; no official statement about demo save transfer into the full game has been published.",
    hero: {
      eyebrow: "Free demo",
      subtitle:
        "A free Fell and Sell demo is listed on the Steam store page as of August 30, 2026. Open the store page, switch to the demo access point, and download through Steam. No official statement about demo save transfer into the full release has been published.",
      ctas: [
        { label: "Release and Price", href: "/release-date-platforms-price" },
        { label: "Beginner Guide", href: "/beginner-guide" },
      ],
    },
    quickAnswer:
      "A free Fell and Sell demo is listed on the Steam store page as of August 30, 2026. The demo is reached from the same AppID 4627110 store page; no official statement about demo save transfer into the full game has been published on that date.",
    keyFacts: [
      { label: "Demo", value: "Free, listed on Steam" },
      { label: "Store URL", value: "https://store.steampowered.com/app/4627110/Fell__Sell" },
      { label: "Save transfer to full release", value: "Not announced as of 2026-08-30" },
      { label: "Platform", value: "Windows (Steam)" },
    ],
    modules: [
      {
        id: "demo-availability",
        type: "prose",
        heading: "Demo availability and where to get it",
        body:
          "The Fell and Sell Steam store page lists a free demo alongside the full release. Open the store page for AppID 4627110 and switch to the demo access point inside Steam; the demo is downloaded through the same Steam library as the full release. There is no separate demo store URL and no demo on a platform other than Steam.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "what-the-demo-covers",
        type: "prose",
        heading: "What the demo lets a player reach",
        body:
          "The demo is intended to give a first look at the dungeon and the shop surface. Treat it as a way to check whether the first-person hack'n'slash combat and the merchant shop pacing fit your preference before buying. The full release adds the deeper dungeon floors, altars, the Living Forest, and the long reinvestment arc that defines the back half of the loop.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "demo-to-full",
        type: "prose",
        heading: "How the demo relates to the full release",
        body:
          "No official statement about demo save transfer into the full Fell and Sell release has been published as of August 30, 2026. Treat the demo as a separate play session unless the developer publishes a save-transfer statement. Once a player upgrades to the full release, the demo install stays in the Steam library as its own entry and does not auto-merge with the full-game saves.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "who-should-try",
        type: "prose",
        heading: "Who should try the demo first",
        body:
          "Players who are not sure about the first-person roguelike combat or about pacing their early runs and early shop should try the demo first. The demo is also the safest entry point for players on the minimum spec to check whether the GTX 760 tier holds up. Buyers who are already confident about the loop and the system requirements can skip the demo and go straight to the full release at USD 9.99 with the introductory 10% discount running through September 9, 2026.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "demo-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Demo availability is sourced to the official Steam store page for AppID 4627110, dated August 30, 2026. Save-transfer and demo-to-full progression have no official statement on that date and are recorded as not announced.",
      },
    ],
    faqIds: ["demo-exists", "demo-save-transfer"],
    relatedPageIds: [
      "fixed-release-date-platforms-price-en-us",
      "fixed-beginner-guide-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-beginner-guide-en-us",
    translationKey: "beginner-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "beginner-guide",
    url: "/beginner-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell beginner guide: first hours without losing gold or runs",
    seoTitle:
      "Fell and Sell Beginner Guide: First Hours, First Runs, and First Shop",
    metaDescription:
      "Fell and Sell beginner guide covers first dungeon priorities, what to sell versus keep, opening the shop, the earliest furniture to buy, and the most common early mistakes.",
    summary:
      "A beginner guide for Fell and Sell that focuses on the first hours: how to read a run, when to extract, what to put on the shelf, and the earliest furniture worth buying. Advice is attributed to guide sources and only mechanics that also appear on the Steam feature list are stated as confirmed game facts.",
    hero: {
      eyebrow: "Beginner guide",
      subtitle:
        "The first hours of Fell and Sell set up whether the rest of the run-and-shop loop pays off. Read the dungeon priorities, decide what to bank versus shelf, and pick the earliest furniture that pays for itself before the first reinvestment decision.",
      ctas: [
        { label: "Gameplay Loop", href: "/gameplay-loop" },
        { label: "Dungeon Guide", href: "/dungeons/guide" },
        { label: "Shop Pricing", href: "/shop/pricing-and-demand" },
      ],
    },
    quickAnswer:
      "Begin with a short first dungeon run rather than a deep descent. Bank anything you cannot afford to lose. Open the shop the same session, price a small number of items, and let the first few sales fund the earliest furniture buff instead of expanding the shop floor. The single most common early mistake is chasing a deep dungeon floor without banking the haul.",
    keyFacts: [
      { label: "First dungeon priority", value: "Short run, bank everything" },
      { label: "First shop move", value: "Price a small starter set" },
      { label: "Earliest furniture", value: "Anything with a permanent buff" },
      { label: "Common early mistake", value: "Deep floor without banking" },
      { label: "Source tier", value: "Guide attribution plus Steam feature list" },
    ],
    modules: [
      {
        id: "first-dungeon",
        type: "prose",
        heading: "First dungeon run priorities",
        body:
          "Treat the first dungeon run as a banking run, not a power run. Descend one floor, fight conservatively, and bank every haul above the death-penalty threshold. The official Steam feature list states \"Die and lose your entire unbanked haul\", so the early-game plan is to keep the unbanked haul small and let the shop absorb the steady returns. Guide sources reinforce this by framing the first hours as a setup phase for the shop rather than a clear-the-dungeon phase.\n\nPlayers who push deep on the first run without banking often lose the materials that would have funded the first furniture buff and reset their early-game pace. The first hours reward patience over depth.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, FALL_SELL_WIKI],
      },
      {
        id: "sell-versus-keep",
        type: "prose",
        heading: "What to sell versus keep",
        body:
          "The sell-versus-keep decision is split three ways: bank the high-value unbanked haul, shelf the mid-value haul that the shop can price competitively, and keep the materials that upgrade personal gear. The Living Forest foraged goods often fall into the shelf bucket because they price cleanly without flooding the shop; crafting materials fall into the personal-gear bucket until the crafting workbench is unlocked and stable.\n\nWhen in doubt, shelf the item and let the shop's pricing system signal whether the demand is real. Items that linger unsold at the recommended price should be discounted or held until demand returns, not dumped at a loss.",
        links: [WORLDEKA_BEGINNER, WORLDEKA_STORE],
      },
      {
        id: "first-shop",
        type: "prose",
        heading: "Opening the shop and setting first prices",
        body:
          "Open the shop in the same session as the first run so the first haul can be priced before the night cycle ends. The Steam store page confirms player-set pricing responds to supply, demand, prestige, and decoration bonuses, so a small starter set priced at the Fair mode lets the shop learn customer demand without exposing too much capital to overstock risk.\n\nResist the urge to list every item the first night. A small starter set gives the pricing system cleaner signals and keeps the reinvestment cycle short. The Prestige and decoration bonuses that come later are easier to build on top of a stable starter set than to recover from a flooded first shop.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "first-furniture",
        type: "prose",
        heading: "The earliest furniture worth buying",
        body:
          "Furniture that grants permanent combat buffs is the highest-value early investment because it pays for itself across every future run. The Steam store page confirms \"Furniture layout provides permanent combat buffs and boosts sales appeal\", so a piece of furniture with both a combat buff and a sales appeal buff is the highest-impact first purchase. Specific furniture categories are attributed to guide sources.\n\nSequence the first furniture purchase before any cosmetic expansion. The combat buff applies to every dungeon run from that point forward, while a cosmetic shelf expansion only adds capacity without changing the loop's pace.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "common-mistakes",
        type: "prose",
        heading: "The most common early mistakes",
        body:
          "Three early mistakes dominate the first hours of Fell and Sell. First, chasing a deep dungeon floor without banking the haul and losing the materials that would have funded the first furniture buff. Second, flooding the shop on day one with every item so the pricing system cannot read demand cleanly. Third, upgrading the shop floor before a single permanent combat buff is in place, which delays the loop's pace more than a strategic furniture order would.\n\nAvoid those three and the first hours set up the reinvestment arc from roadside cabin to mercantile powerhouse that the Steam feature list describes.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "beginner-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Confirmed mechanics (roguelike death penalty, furniture buffs, player-set pricing, reinvestment arc) come from the official Steam feature list. Specific tactics and the furniture ordering are attributed to the worldeka beginner guide and the Fell and Sell community wiki, recorded as guide sources. No community-sourced patch or build advice is stated as official confirmation.",
      },
    ],
    faqIds: [
      "beginner-first-furniture",
      "beginner-when-extract",
      "beginner-pricing-mode",
    ],
    relatedPageIds: [
      "fixed-gameplay-loop-en-us",
      "fixed-dungeon-guide-en-us",
      "fixed-shop-pricing-and-demand-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-gameplay-loop-en-us",
    translationKey: "gameplay-loop",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay-loop",
    url: "/gameplay-loop",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell gameplay loop: dungeon, crafting, shop, reinvestment",
    seoTitle:
      "Fell and Sell Gameplay Loop: Dungeon, Crafting, Shop, Reinvestment",
    metaDescription:
      "How Fell and Sell actually works: from dungeon descent to banked haul, crafting, shop display, sale, gold, and reinvestment back into furniture buffs and shop upgrades.",
    summary:
      "The Fell and Sell loop runs in one direction from dungeon to bank to shop to gold to reinvestment, and then back into the dungeon as upgraded combat gear. The loop sequence is attributed to the Fell and Sell wiki and is consistent with the official Steam feature list.",
    hero: {
      eyebrow: "Gameplay loop",
      subtitle:
        "The loop runs dungeon descent → unbanked haul → death or extraction → banking → shop pricing → gold → reinvestment into furniture, crafting, or upgrades → upgraded combat gear for the next dungeon. Where roguelike risk enters is the unbanked haul.",
      ctas: [
        { label: "Beginner Guide", href: "/beginner-guide" },
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Shop Hub", href: "/shop" },
      ],
    },
    quickAnswer:
      "Fell and Sell runs as a single economy from dungeon to shop and back. Players descend into the dungeon with current gear, risk losing the unbanked haul on death, extract to bank the haul, price the haul in the shop, sell it for gold, and reinvest the gold into furniture buffs, shop upgrades, or crafting for stronger personal gear. The roguelike risk enters at the unbanked haul; the merchant decisions enter at the pricing and reinvestment stage.",
    keyFacts: [
      { label: "Loop direction", value: "Dungeon → bank → shop → gold → reinvestment" },
      { label: "Risk entry point", value: "Unbanked haul on death" },
      { label: "Merchant entry point", value: "Pricing and reinvestment" },
      { label: "Reinvestment sinks", value: "Furniture, crafting, shop upgrades" },
      { label: "Source tier", value: "Steam feature list + wiki attribution" },
    ],
    modules: [
      {
        id: "loop-sequence",
        type: "prose",
        heading: "The full loop from dungeon to reinvestment",
        body:
          "The loop starts in the dungeon. Players descend with current gear, fight monsters and traps, collect materials and loot, and reach the extraction point. At the extraction point the choice is to bank the haul and leave, or push deeper and risk the unbanked haul on death. Once banked, the haul moves into the shop surface where it is priced, displayed, and sold for gold. Gold funds furniture buffs, crafting, and shop upgrades, which feed back into the next dungeon run as upgraded combat gear or a more efficient shop surface.\n\nThe official Steam feature list calls out the roguelike death penalty (\"Die and lose your entire unbanked haul\"), the merchant shop, furniture layout bonuses, altars like Shrink and Midas Touch, the Living Forest foraging, the Quest Board, crafting, and the reinvestment arc from roadside cabin to mercantile powerhouse. The loop ties those features into a single economy.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "roguelike-risk",
        type: "prose",
        heading: "Where roguelike risk enters the loop",
        body:
          "Roguelike risk enters at the unbanked haul. The choice to extract is the choice between a safe return and a deeper floor with a larger payout but a larger loss if the run ends in death. The Steam store page frames the game as a \"first-person hack'n'slash roguelite\", so the unbanked-haul mechanic is the only roguelike risk surface and the rest of the loop is shop-management.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "merchant-decisions",
        type: "prose",
        heading: "Where merchant decisions enter the loop",
        body:
          "Merchant decisions enter the loop at pricing and at reinvestment. The Steam store page confirms that player-set pricing responds to supply, demand, prestige, and decoration bonuses, so pricing is not a one-time choice but a recurring decision that responds to shop state. Reinvestment decisions are split across furniture (which grants combat buffs), crafting (which converts raw materials into personal gear), and shop upgrades (which expand capacity and sales appeal).",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "stall-points",
        type: "prose",
        heading: "Where a new player is most likely to stall",
        body:
          "New players tend to stall at two points. The first stall is at the dungeon depth decision, where pushing for one more floor costs more than the marginal payout because the unbanked haul is at risk. The second stall is at the first reinvestment decision, where the choice between furniture, crafting, and shop upgrades is not obvious and the wrong order delays the loop's pace. The beginner guide and the shop hub pages cover both stalls.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "loop-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "The loop sequence and the roguelike plus merchant framing come from the official Steam feature list. The detail of where a new player stalls, the depth-versus-extraction balance, and the reinvestment order are attributed to the Fell and Sell wiki and the worldeka beginner guide, recorded as guide sources. No community-sourced build or progression advice is stated as official confirmation.",
      },
    ],
    faqIds: ["loop-roguelike-risk", "loop-reinvestment-order"],
    relatedPageIds: [
      "fixed-beginner-guide-en-us",
      "fixed-dungeons-hub-en-us",
      "fixed-shop-hub-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-multiplayer-and-co-op-en-us",
    translationKey: "multiplayer-and-co-op",
    locale: "en-US",
    routeKind: "fixed",
    slug: "multiplayer-and-co-op",
    url: "/multiplayer-and-co-op",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell multiplayer and co-op: single-player status",
    seoTitle:
      "Fell and Sell Multiplayer and Co-op: Single-Player Status",
    metaDescription:
      "Fell and Sell is single-player only as of August 30, 2026. The Steam store page lists single-player alongside Steam Cloud, Family Sharing, and achievements.",
    summary:
      "Fell and Sell is single-player only as of August 30, 2026. The Steam store page lists single-player alongside Steam Cloud, Family Sharing, and achievements. No co-op or multiplayer mode may be claimed.",
    hero: {
      eyebrow: "Multiplayer and co-op",
      subtitle:
        "Fell and Sell is single-player only as of August 30, 2026. The Steam store page lists single-player alongside Steam Cloud, Family Sharing, and 97 achievements. Co-op or multiplayer mode is not announced.",
      ctas: [
        { label: "Release and Price", href: "/release-date-platforms-price" },
        { label: "Gameplay Loop", href: "/gameplay-loop" },
      ],
    },
    quickAnswer:
      "Fell and Sell is single-player only as of August 30, 2026. The Steam store page lists single-player alongside Steam Cloud, Family Sharing, and achievements. No co-op or multiplayer mode has been announced.",
    keyFacts: [
      { label: "Mode", value: "Single-player only" },
      { label: "Co-op", value: "Not announced as of 2026-08-30" },
      { label: "Multiplayer", value: "Not announced as of 2026-08-30" },
      { label: "Steam Cloud", value: "Confirmed" },
      { label: "Family Sharing", value: "Confirmed" },
      { label: "Achievements", value: "97" },
    ],
    modules: [
      {
        id: "single-player",
        type: "prose",
        heading: "The confirmed single-player designation",
        body:
          "The Steam store page lists Fell and Sell as single-player only as of August 30, 2026. The page also lists Steam Cloud, Family Sharing, and 97 achievements alongside the single-player designation. That combination is the only multiplayer-or-co-op status published by the developer.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "what-is-supported",
        type: "prose",
        heading: "Which Steam features are actually supported",
        body:
          "The Steam features confirmed on the store page are single-player, Steam Cloud, Family Sharing, and achievements. Steam Cloud means save data and progression are stored against the player's Steam account; Family Sharing means another Steam account on an authorized device can access the library entry. None of those features implies online co-op or multiplayer play.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_STEAMBASE],
      },
      {
        id: "shop-and-dungeon-loop",
        type: "prose",
        heading: "What the shop and dungeon loop means for solo play",
        body:
          "The shop and dungeon loop is designed for a single player. Pricing, furniture buffs, and reinvestment decisions all sit on a single player's shop surface, and the dungeon descent is a single player's run. The solo framing means the loop's pace is set by one player's run cycle rather than by a party, which keeps the roguelike death penalty and the merchant reinvestment decisions on a single decision-maker.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "how-to-check",
        type: "prose",
        heading: "How to check the store listing directly",
        body:
          "Open the Steam store page for AppID 4627110 and look at the single-player and features block. The features block lists the Steam-side capabilities, while the single-player tag is the only multiplayer designation. The page also exposes the achievement count, language count, and demo access in the sidebar.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "multiplayer-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Single-player status is sourced to the official Steam store page for AppID 4627110, dated August 30, 2026. No co-op or multiplayer mode has been announced on that date. Unsourced community claims about broken or promised co-op are not repeated.",
      },
    ],
    faqIds: ["multiplayer-coop", "multiplayer-family-sharing"],
    relatedPageIds: [
      "fixed-release-date-platforms-price-en-us",
      "fixed-gameplay-loop-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-mods-en-us",
    translationKey: "mods",
    locale: "en-US",
    routeKind: "fixed",
    slug: "mods",
    url: "/mods",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell mods and Steam Workshop support",
    seoTitle:
      "Fell and Sell Mods: Steam Workshop and Mod Support Status",
    metaDescription:
      "No Steam Workshop or official mod support is listed for Fell and Sell on the Steam store page as of August 30, 2026.",
    summary:
      "No Steam Workshop or official mod support is listed for Fell and Sell on the Steam store page as of August 30, 2026. Unofficial files exist for many titles but carry risk and are not endorsed.",
    hero: {
      eyebrow: "Mods and Workshop",
      subtitle:
        "No Steam Workshop or official mod support is listed on the Fell and Sell Steam store page as of August 30, 2026. The Steam features confirmed are single-player, Steam Cloud, Family Sharing, and 97 achievements.",
      ctas: [
        { label: "Release and Price", href: "/release-date-platforms-price" },
        { label: "System Requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "No Steam Workshop or official mod support is listed on the Fell and Sell Steam store page as of August 30, 2026. Steam features confirmed on the same page are single-player, Steam Cloud, Family Sharing, and 97 achievements. Unofficial files exist for many titles but are not endorsed.",
    keyFacts: [
      { label: "Steam Workshop", value: "Not listed as of 2026-08-30" },
      { label: "Official mod support", value: "Not listed as of 2026-08-30" },
      { label: "Confirmed Steam features", value: "Single-player, Cloud, Family Sharing, achievements" },
    ],
    modules: [
      {
        id: "official-mod-status",
        type: "prose",
        heading: "Official mod support status as of the research date",
        body:
          "The Fell and Sell Steam store page does not list Steam Workshop or any official mod support channel as of August 30, 2026. The page's Steam features block lists single-player, Steam Cloud, Family Sharing, and 97 achievements, and that list does not include Workshop. Until the developer publishes a Workshop or mod-support announcement, treat that as the official position.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "confirmed-features",
        type: "prose",
        heading: "Which Steam features the store page does list",
        body:
          "The Steam store page lists four Steam features for Fell and Sell: single-player, Steam Cloud, Family Sharing, and 97 achievements. None of those features is a modding surface. Players who want progression, save state, and library sharing have those features; players who want to extend the game through user mods do not have a published channel.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "what-to-watch",
        type: "prose",
        heading: "What players should watch for from the developer",
        body:
          "Watch the Steam news feed for AppID 4627110 and the Steam store page features block for any future Workshop or modding announcement. The Steam news feed is the official channel for developer posts; if a Workshop or mod support channel is added, it will appear in the features block and in the news feed. Until that happens, no community claim of mod support should be treated as official.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "unofficial-files",
        type: "prose",
        heading: "Why unofficial files carry risk",
        body:
          "Unofficial mod files exist for many titles and are usually distributed outside Steam. Because Fell and Sell has no published Workshop or mod support channel as of August 30, 2026, any unofficial file is unsupported, may not load with the current build, and could affect save integrity or Steam Cloud sync. Players who try unofficial files do so without a recovery path and should keep separate Steam Cloud backups if their client supports them.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "mods-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "The mod support status is sourced to the official Steam store page for AppID 4627110, dated August 30, 2026. No Steam Workshop or official mod support has been published on that date. Community mod claims are not stated as official support.",
      },
    ],
    faqIds: ["mods-workshop", "mods-unofficial-files"],
    relatedPageIds: [
      "fixed-release-date-platforms-price-en-us",
      "fixed-system-requirements-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
];