import type { GuideIndexModule, ProgressionModule } from "@/types/modules";

export const guideGroups: GuideIndexModule["groups"] = [
  { title: "Start here", items: [
    { label: "Your first hours", href: "/beginner-guide" },
    { label: "The dungeon-to-shop loop", href: "/gameplay-loop" },
  ] },
  { title: "Shop & economy", items: [
    { label: "Shop overview", href: "/shop" },
    { label: "Pricing & demand", href: "/shop/pricing-and-demand" },
    { label: "Layout & furniture buffs", href: "/shop/layout-and-furniture-buffs" },
    { label: "Upgrades & progression", href: "/shop/upgrades-and-progression" },
  ] },
  { title: "Dungeons & equipment", items: [
    { label: "Dungeon overview", href: "/dungeons" },
    { label: "Clearing a run", href: "/dungeons/guide" },
    { label: "Extraction & death penalty", href: "/dungeons/extraction-and-death-penalty" },
    { label: "Altars & builds", href: "/dungeons/altars-and-builds" },
    { label: "Weapons", href: "/dungeons/weapons" },
    { label: "Crafting & gear", href: "/dungeons/crafting-and-gear" },
    { label: "Quest Board", href: "/dungeons/quest-board" },
    { label: "Living Forest & foraging", href: "/dungeons/living-forest-foraging" },
  ] },
  { title: "Reference & game info", items: [
    { label: "Achievements ledger", href: "/achievements" },
    { label: "All guides", href: "/guides" },
    { label: "Game wiki", href: "/wiki" },
    { label: "Release, platforms & price", href: "/release-date-platforms-price" },
    { label: "System requirements", href: "/system-requirements" },
    { label: "Steam demo", href: "/demo" },
    { label: "Multiplayer & co-op", href: "/multiplayer-and-co-op" },
    { label: "Mods", href: "/mods" },
    { label: "FAQ", href: "/faq" },
  ] },
];
export const merchantLoop: ProgressionModule = {
  id: "merchant-loop", type: "progression", heading: "One haul. Four decisions.",
  stages: [
    { title: "Loot", href: "/dungeons/guide", label: "In the dungeon", description: "Plan a run and bring your haul home." },
    { title: "Craft", href: "/dungeons/crafting-and-gear", label: "At the workbench", description: "Choose what to keep, craft or sell." },
    { title: "Sell", href: "/shop/pricing-and-demand", label: "Behind the counter", description: "Read demand and set a price." },
    { title: "Reinvest", href: "/shop/upgrades-and-progression", label: "Before the next run", description: "Balance shop upgrades with equipment." },
  ],
};
export function guideLabel(url: string, fallback: string) {
  return guideGroups.flatMap(g => g.items).find(item => item.href === url)?.label ?? fallback;
}
export function guideCategory(url: string) {
  return guideGroups.find(g => g.items.some(item => item.href === url))?.title ?? "Site information";
}
