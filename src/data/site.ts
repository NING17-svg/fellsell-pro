import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Fell & Sell Guide",
  brandMark: "F&S",
  gameName: "Fell & Sell",
  domain: "fellsell.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://fellsell.pro").replace(/\/$/, ""),
  description:
    "An unofficial Fell & Sell (Art Games Studio S.A. / PlayWay S.A.) reference covering release status, dungeon runs, extraction, altars and builds, weapons, crafting, the Living Forest, shop pricing, furniture buffs, and reinvestment for US English players.",
  tagline: "Fell & Sell dungeon and shop reference, run and economy guidance for US players.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Fell & Sell Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Fell & Sell Steam store page (AppID 4627110, Art Games Studio S.A. / PlayWay S.A.)",
      href: "https://store.steampowered.com/app/4627110/Fell__Sell",
      description: "Official store listing with release status, system requirements, and feature list.",
    },
  ],
  disclaimer:
    "This is an unofficial Fell & Sell fan reference. Current-game facts are sourced from the official Steam store page as of 2026-08-30. Unannounced details are labeled with dated status statements.",
};
