# Fell & Sell content index

Updated 2026-10-01 for the V4 presentation rebuild. This is the actual route inventory, not the original template sample. All 28 existing URLs remain.

## Pages

| URL | Navigation label | Page type | Guide group | SEO title | Content reviewed |
| --- | --- | --- | --- | --- | --- |
| / | Better runs. Better business. | home | Site information | Fell & Sell Guides \| Dungeons, Shop Pricing, Crafting & Achievements | 2026-10-01 |
| /release-date-platforms-price | Release, platforms & price | release | Reference & game info | Fell and Sell Release Date: Launch, Price, and Steam Availability | 2026-08-30 |
| /system-requirements | System requirements | release | Reference & game info | Fell and Sell System Requirements: Minimum and Recommended PC Specs | 2026-08-30 |
| /demo | Steam demo | release | Reference & game info | Fell and Sell Demo: Free Steam Demo and What It Covers | 2026-08-30 |
| /beginner-guide | Your first hours | guides | Start here | Fell and Sell Beginner Guide: First Hours, First Runs, and First Shop | 2026-08-30 |
| /gameplay-loop | The dungeon-to-shop loop | guides | Start here | Fell and Sell Gameplay Loop: Dungeon, Crafting, Shop, Reinvestment | 2026-08-30 |
| /multiplayer-and-co-op | Multiplayer & co-op | release | Reference & game info | Fell and Sell Multiplayer and Co-op: Single-Player Status | 2026-08-30 |
| /mods | Mods | release | Reference & game info | Fell and Sell Mods: Steam Workshop and Mod Support Status | 2026-08-30 |
| /dungeons | Dungeon overview | wiki | Dungeons & equipment | Fell and Sell Dungeons Hub: Runs, Extraction, Altars, Weapons, Foraging | 2026-08-30 |
| /dungeons/guide | Clearing a run | guides | Dungeons & equipment | Fell and Sell Dungeon Guide: Combat, Enemies, Traps, and Deep Floors | 2026-08-30 |
| /dungeons/extraction-and-death-penalty | Extraction & death penalty | guides | Dungeons & equipment | Fell and Sell Extraction and Death Penalty: When to Escape a Run | 2026-08-30 |
| /dungeons/altars-and-builds | Altars & builds | guides | Dungeons & equipment | Fell and Sell Altars and Builds: Shrink, Midas Touch, Combat States | 2026-08-30 |
| /dungeons/weapons | Weapons | wiki | Dungeons & equipment | Fell and Sell Weapons: Weapon Families, Fast vs Heavy, Disambiguation | 2026-08-30 |
| /dungeons/crafting-and-gear | Crafting & gear | guides | Dungeons & equipment | Fell and Sell Crafting and Gear: When to Craft Versus Sell Materials | 2026-08-30 |
| /dungeons/quest-board | Quest Board | guides | Dungeons & equipment | Fell and Sell Quest Board: Objectives, Rewards, and Stacking with Runs | 2026-08-30 |
| /dungeons/living-forest-foraging | Living Forest & foraging | guides | Dungeons & equipment | Fell and Sell Living Forest Foraging: Events and Best Use of a Cycle | 2026-08-30 |
| /shop | Shop overview | wiki | Shop & economy | Fell and Sell Shop Hub: Pricing, Furniture Buffs, Reinvestment | 2026-08-30 |
| /shop/pricing-and-demand | Pricing & demand | guides | Shop & economy | Fell and Sell Shop Pricing and Demand: Fair, High, Low, Prestige, Comfort | 2026-08-30 |
| /shop/layout-and-furniture-buffs | Layout & furniture buffs | guides | Shop & economy | Fell and Sell Shop Layout and Furniture Buffs: Combat and Sales Appeal | 2026-08-30 |
| /shop/upgrades-and-progression | Upgrades & progression | guides | Shop & economy | Fell and Sell Shop Upgrades and Progression: Reinvestment Order | 2026-08-30 |
| /achievements | Achievements ledger | wiki | Reference & game info | Fell and Sell Achievements Ledger: 13 Ledgers, 97 Steam Achievements, Session Plan | 2026-09-14 |
| /guides | All guides | guides | Reference & game info | Fell and Sell Guides \| Beginner Path, Gameplay Loop, Mods, and Co-op | 2026-08-30 |
| /wiki | Game wiki | wiki | Reference & game info | Fell and Sell Wiki \| Dungeons, Altars, Weapons, Crafting, and Shop | 2026-08-30 |
| /faq | FAQ | faq | Reference & game info | Fell & Sell FAQ \| Common Questions | 2026-08-30 |
| /about | About Fell & Sell Guide | site | Site information | About Fell & Sell Guide | 2026-08-30 |
| /contact | Contact | site | Site information | Contact \| Fell & Sell Guide | 2026-08-30 |
| /privacy-policy | Privacy Policy | site | Site information | Privacy Policy \| Fell & Sell Guide | 2026-08-30 |
| /terms | Terms of Use | site | Site information | Terms of Use \| Fell & Sell Guide | 2026-08-30 |

## Page and link roles

- Homepage: first-run CTA, shop/dungeon problem entrances, four-phase gameplay loop, full directory and dated reviews.
- Shop/dungeon hubs: all original answer modules retained, grouped global navigation and chapter anchors.
- Dedicated pages: short answer and expandable original context, steps/tables/prose, FAQ and adjacent guide links.
- Trust pages: policy answers retained; same layout, no fabricated gameplay claims.
- Source facts and original review dates remain in src/data/pages/*.ts and src/data/faq.ts. Presentation-only title formatting removes the repeated game name from the visible article heading; SEO titles stay unchanged outside the homepage.
- /shop/pricing-and-demand and /dungeons/crafting-and-gear additionally show attributed official Steam screenshots.

## Source of truth

Current URLs are enumerated by npm run routes:manifest. Navigation and home entry composition live in src/data/v4-design.ts; per-game styling in src/data/theme.ts and src/app/globals.css. Shared component provenance is V4_COMPONENTS.json.
