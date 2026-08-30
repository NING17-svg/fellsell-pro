import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "Fell and Sell identity, dungeon runs, and the merchant shop loop",
  seoTitle:
    "Fell and Sell Guide Hub | Release, Dungeon Runs, Shop Economy, and FAQ",
  metaDescription:
    "Fell and Sell from Art Games Studio S.A. is the new dungeon roguelite and shopkeeper game, out on Steam for Windows from August 26, 2026 at USD 9.99.",
  summary:
    "Find Fell and Sell's Steam release date, current price, the dungeon-and-shop loop, beginner priorities, weapon and altar decisions, and shop economy guidance for US English players.",
  hero: {
    eyebrow: "Fell and Sell reference",
    subtitle:
      "Fell and Sell is a first-person dungeon roguelite and shopkeeper game from Art Games Studio S.A. and PlayWay S.A., released on Steam for Windows on August 26, 2026 at USD 9.99. The four starting routes send you into beginner guidance, the dungeons hub, the shop hub, and the release status page.",
    ctas: [
      { label: "Beginner Guide", href: "/beginner-guide" },
      { label: "Gameplay Loop", href: "/gameplay-loop" },
    ],
  },
  quickAnswer:
    "Fell and Sell is a first person dungeon roguelite and shopkeeper game by Art Games Studio S.A. and PlayWay S.A., released on Steam for Windows on August 26, 2026 at USD 9.99 with an introductory 10% discount to USD 8.99 ending September 9, 2026. The game ships with 97 achievements, 11 languages including Simplified and Traditional Chinese, a free demo, and a single player designation. This site covers the launch, requirements, demo, multiplayer status, and the loop. All facts are dated to August 30, 2026.",
  keyFacts: [
    { label: "Developer", value: "Art Games Studio S.A." },
    { label: "Publisher", value: "PlayWay S.A." },
    { label: "Release date", value: "August 26, 2026" },
    { label: "Steam price", value: "USD 9.99 standard, USD 8.99 introductory" },
    { label: "Introductory discount ends", value: "September 9, 2026" },
    { label: "Platform", value: "Windows (Steam)" },
    { label: "Mode", value: "Single-player" },
    { label: "Demo", value: "Free demo on Steam" },
  ],
  modules: [
    {
      id: "home-launch",
      type: "prose",
      heading: "Fell and Sell launch state, price, and Windows support",
      body:
        "Fell and Sell launched on Steam AppID 4627110 on August 26, 2026 with Windows listed as a confirmed platform through the official system requirements block. The Steam store page is the source of truth for the release date, developer and publisher credits, platform support, and live price. The standard price is USD 9.99 with an introductory 10% discount to USD 8.99 ending September 9, 2026. The page lists single-player only alongside Steam Cloud, Family Sharing, and 97 achievements.\n\nCommon search noise to set aside: slip-and-fall legal and injury queries and the \"sale fell through\" idiom share words with the title but are not game queries; the seasonal \"Steam fall sale\" is a storefront promotion, not this game; Bloodstone Greatsword, Heavy Iron Sword, and Goblin Halberd autocomplete suggestions resolve to Elder Scrolls Online items rather than Fell and Sell gear.\n\nThe Steambase Fell and Sell info page additionally lists Mac and Linux; the Steam store page does not publish Mac or Linux requirements, so the Mac and Linux listings are recorded as unverified rather than confirmed as of August 30, 2026.\n\nSee the [Fell and Sell release and price status](/release-date-platforms-price) page for the launch window, discount end date, and where to verify the listing.",
    },
    {
      id: "home-loop",
      type: "prose",
      heading: "The dungeon-and-shop loop in Fell and Sell",
      body:
        "Fell and Sell frames gameplay as a single economy running in both directions. A first-person hack'n'slash roguelite sits on one side: players descend into dungeons, fight skeletons and other monsters, dodge spike traps, and risk losing an unbanked haul on death. On the other side, the merchant shop sits above the dungeon entrance as a reinvestment surface where every banked haul is priced, displayed, sold for gold, and turned into shop upgrades or combat gear for the next run.\n\nThe official Steam feature list calls out roguelike runs, the merchant shop, furniture layout bonuses, dungeon altars with effects such as Shrink and Midas Touch, the Living Forest with goblin raids, thunderstorms, and psychedelic mushroom season, the Quest Board that turns expedition results into gold and gear, crafting, and reinvesting profits from a roadside cabin into a mercantile powerhouse.\n\nSee the [Fell and Sell gameplay loop](/gameplay-loop) page for the full loop sequence, where roguelike risk enters, and where new players tend to stall.",
    },
    {
      id: "home-dungeon",
      type: "prose",
      heading: "Dungeons hub: runs, extraction, altars, and the Living Forest",
      body:
        "The dungeons hub collects every dungeon topic from fighting through a run to altars, weapons, extraction, and the Living Forest. The dungeon side of the loop is where roguelike risk enters the game, where altars like Shrink and Midas Touch change a run, and where the Living Forest's goblin raids, thunderstorms, and psychedelic mushroom season decide whether a foraging trip is worth more than a dungeon descent.\n\nSee the [Fell and Sell dungeons hub](/dungeons) page for the run priority list, the disambiguation against Elder Scrolls Online item-name noise, and the recommended reading order for new players.",
    },
    {
      id: "home-shop",
      type: "prose",
      heading: "Shop hub: pricing, furniture buffs, and reinvestment order",
      body:
        "The shop hub collects every economy topic from pricing and demand to layout buffs and reinvestment order. The shop side of the loop is where banked haul becomes gold, where furniture layout provides permanent combat buffs, and where reinvestment takes a roadside cabin and turns it into a mercantile powerhouse.\n\nSee the [Fell and Sell shop hub](/shop) page for the pricing modes, the layout bonuses, and the upgrade progression once the first profitable cycles land.",
    },
    {
      id: "home-fact-boundary",
      type: "callout",
      tone: "caution",
      title: "Fact boundary — 2026-08-30",
      body:
        "Every hard launch fact on this site is dated to the August 30, 2026 research pass and sourced to the official Steam store page for AppID 4627110, the Steambase info page, the Fell and Sell wiki, and worldeka guide articles. Fell and Sell has no earlier entry, remaster, or remake. The Mac and Linux platform listings on Steambase are recorded as unverified; only Windows is treated as confirmed platform support. The introductory 10% discount ends September 9, 2026; price and availability should be reverified on the Steam store page before any purchase decision.",
    },
    {
      id: "home-sources",
      type: "prose",
      heading: "Sources",
      body:
        "- [Fell and Sell on Steam (AppID 4627110)](https://store.steampowered.com/app/4627110/Fell__Sell) - `official/store` - checked `2026-08-30` - release date 2026-08-26, USD 9.99 price, introductory 10% discount to USD 8.99 ending 2026-09-09, Windows system requirements, single-player designation, 97 achievements, 11 interface languages, free demo, eight named feature systems.\n- [Steambase Fell and Sell info page](https://steambase.io/games/fell-sell/info) - `wiki/reference` - checked `2026-08-30` - cross-check on developer and publisher credits, the additional Mac and Linux platform listing recorded as unverified, and full controller support with DualShock and DualSense.\n- [Fell and Sell community wiki](https://www.fellsell.wiki/) - `wiki/reference` - checked `2026-08-30` - description of the dungeon, crafting, shop, and reinvestment loop used to frame the gameplay section.\n- [Game-check brief for Fell and Sell](game-intelligence/handoffs/game-check/build-now/fell-sell.md) - `reference` - checked `2026-08-30` - confirmation that Fell and Sell is a Steam AppID 4627110 build-now decision with a Demo plus 11-language release and the dungeon, shop, altar, and foraging feature systems.",
    },
  ],
  faqIds: [
    "home-when-release",
    "home-single-player",
    "home-demo",
    "home-mods",
    "home-mac-linux",
  ],
  relatedPageIds: [
    "fixed-beginner-guide-en-us",
    "fixed-gameplay-loop-en-us",
    "fixed-release-date-platforms-price-en-us",
    "fixed-system-requirements-en-us",
    "fixed-demo-en-us",
    "fixed-multiplayer-and-co-op-en-us",
    "fixed-mods-en-us",
    "fixed-dungeons-hub-en-us",
    "fixed-shop-hub-en-us",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-30",
};