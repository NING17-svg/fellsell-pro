import { site } from "@/data/site";
import { guideGroups } from "@/data/v4-design";
export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}
export const primaryNavigation: LocalizedNavigationItem[] = guideGroups.map(group => ({
  href: group.items[0].href,
  labels: { "en-US": group.title },
  children: group.items.map(item => ({ href: item.href, labels: { "en-US": item.label } })),
}));
export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];
export function navigationLabel(item: LocalizedNavigationItem, locale: string): string {
  return item.labels[locale] || item.labels[site.primaryLocale] || Object.values(item.labels)[0];
}
