import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

// Fell and Sell primary navigation — Site Plan IA: Start here, Dungeons, Shop,
// Game info. Order matches the Site Plan Primary Navigation block.
export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/beginner-guide", labels: { "en-US": "Beginner Guide" } },
  { href: "/gameplay-loop", labels: { "en-US": "Gameplay Loop" } },
  { href: "/dungeons", labels: { "en-US": "Dungeons" } },
  { href: "/shop", labels: { "en-US": "Shop" } },
  { href: "/release-date-platforms-price", labels: { "en-US": "Release & Price" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  { href: "/demo", labels: { "en-US": "Demo" } },
  { href: "/multiplayer-and-co-op", labels: { "en-US": "Multiplayer" } },
  { href: "/mods", labels: { "en-US": "Mods" } },
  { href: "/faq", labels: { "en-US": "FAQ" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
