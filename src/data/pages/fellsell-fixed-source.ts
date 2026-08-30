// Fell and Sell — V3 fixed pages source link list.
// Shared between fellsell-fixed.ts, fellsell-fixed-dungeon.ts, and
// fellsell-fixed-shop.ts so every leaf page cites the same official and
// guide sources.

export interface LinkSpec {
  label: string;
  href: string;
  description: string;
}

export const FALL_SELL_OFFICIAL: LinkSpec = {
  label: "Fell and Sell on Steam (AppID 4627110)",
  href: "https://store.steampowered.com/app/4627110/Fell__Sell",
  description:
    "Official store listing with release status, system requirements, and feature list.",
};

export const FALL_SELL_STEAMBASE: LinkSpec = {
  label: "Steambase Fell and Sell info page",
  href: "https://steambase.io/games/fell-sell/info",
  description:
    "Cross-check on developer and publisher credits, additional Mac and Linux listing, and controller support.",
};

export const FALL_SELL_WIKI: LinkSpec = {
  label: "Fell and Sell community wiki",
  href: "https://www.fellsell.wiki/",
  description:
    "Community wiki used for attributed dungeon, crafting, shop, and reinvestment loop detail.",
};

export const WORLDEKA_BEGINNER: LinkSpec = {
  label: "Worldeka Fell and Sell beginner guide",
  href: "https://worldeka.com/fell-sell-beginners-guide-dungeon-crawling-and-shop-management-tips",
  description:
    "Guide source for attributed dungeon combat, early-run, and shop basics.",
};

export const WORLDEKA_STORE: LinkSpec = {
  label: "Worldeka Fell and Sell store strategy 2026",
  href: "https://worldeka.com/fell-sell-store-strategy-2026-best-shelf-items-and-profit-pricing-formulas",
  description:
    "Guide source for attributed pricing, demand, and Prestige mechanics.",
};

export const WORLDEKA_DUNGEON: LinkSpec = {
  label: "Worldeka Fell and Sell dungeon guide",
  href: "https://worldeka.com/fell-and-sell-guide-top-tips-dungeon-strategies-and-shop-management-hacks",
  description:
    "Guide source for attributed dungeon tactics and furniture buff detail.",
};

export const OFFICIAL_LINKS: LinkSpec[] = [FALL_SELL_OFFICIAL, FALL_SELL_STEAMBASE];