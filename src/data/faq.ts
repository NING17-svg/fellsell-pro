import type { FAQItem } from "@/types/content";

// Fell and Sell — V3 FAQ items. Each FAQ id referenced from a page module
// is registered here so getFaqsForPage can resolve it. FAQ ids mirror the
// content-package and V3 Site Plan.

export const faqItems: FAQItem[] = [
  // Homepage
  {
    id: "home-when-release",
    question: "When did Fell and Sell release?",
    answer:
      "Fell and Sell released on Steam on August 26, 2026 with a standard price of USD 9.99 and an introductory 10% discount to USD 8.99 through September 9, 2026.",
    pageIds: ["home", "faq", "about"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-single-player",
    question: "Does Fell and Sell have multiplayer or co-op?",
    answer:
      "No. The Steam store page lists Fell and Sell as single-player only as of August 30, 2026.",
    pageIds: ["home", "guides", "faq", "about"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-demo",
    question: "Is there a free Fell and Sell demo?",
    answer:
      "Yes. A free demo is listed on the Fell and Sell Steam store page as of August 30, 2026.",
    pageIds: ["home", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-mods",
    question: "Does Fell and Sell support mods?",
    answer:
      "No Steam Workshop or official mod support is listed on the Fell and Sell Steam store page as of August 30, 2026.",
    pageIds: ["home", "guides", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-mac-linux",
    question: "Is Fell and Sell available on Mac or Linux?",
    answer:
      "The Fell and Sell Steam store page confirms Windows support only as of August 30, 2026. Steambase lists Mac and Linux, but those are recorded as unverified because the Steam store page does not publish Mac or Linux requirements.",
    pageIds: ["home", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Release and price
  {
    id: "release-when-out",
    question: "When did Fell and Sell come out?",
    answer:
      "Fell and Sell released on Steam on August 26, 2026 at the standard price of USD 9.99, with an introductory 10% discount to USD 8.99 running through September 9, 2026.",
    pageIds: ["fixed-release-date-platforms-price-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-price-now",
    question: "How much does Fell and Sell cost right now?",
    answer:
      "The current price on the Steam store page is USD 9.99 standard or USD 8.99 with the introductory discount. The discounted price is available through September 9, 2026.",
    pageIds: ["fixed-release-date-platforms-price-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-mac-linux",
    question: "Is Fell and Sell available on Mac or Linux?",
    answer:
      "The Fell and Sell Steam store page confirms Windows support only as of August 30, 2026. Steambase also lists Mac and Linux, but those listings are unverified because the Steam store page does not publish Mac or Linux requirements.",
    pageIds: ["fixed-release-date-platforms-price-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // System requirements
  {
    id: "spec-min-vs-recommended",
    question: "How does the minimum spec differ from the recommended spec?",
    answer:
      "The minimum spec targets a quad-core CPU, 8 GB RAM, and a GTX 760 2 GB. The recommended spec raises to an Intel i7-4790k or AMD Ryzen 7 1700, 16 GB RAM, and a GTX 970. Storage is the same at 4 GB on both tiers.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spec-steam-deck",
    question: "Does Fell and Sell run on Steam Deck?",
    answer:
      "No official Steam Deck verification status has been published for Fell and Sell as of August 30, 2026. The Steam store page does not list Deck verification; Steambase records the same status.",
    pageIds: ["fixed-system-requirements-en-us"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Demo
  {
    id: "demo-exists",
    question: "Is there a free Fell and Sell demo?",
    answer:
      "Yes. A free demo is listed on the Fell and Sell Steam store page as of August 30, 2026. Open the store page and switch to the demo access point inside Steam.",
    pageIds: ["fixed-demo-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-save-transfer",
    question: "Does the Fell and Sell demo save transfer to the full game?",
    answer:
      "No official statement about demo save transfer into the full Fell and Sell release has been published as of August 30, 2026.",
    pageIds: ["fixed-demo-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Beginner guide
  {
    id: "beginner-first-furniture",
    question: "What should I buy first in the Fell and Sell shop?",
    answer:
      "Buy furniture that pairs a permanent combat buff with a sales appeal bonus first. The combat buff applies on every future run; the sales appeal raises the price ceiling on every future shop day.",
    pageIds: ["fixed-beginner-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "beginner-when-extract",
    question: "When should I extract from a Fell and Sell dungeon run?",
    answer:
      "Run a risk-threshold check across health, potions, gear durability, and the unbanked haul value. If any input falls below its threshold, extract and bank rather than push the next floor.",
    pageIds: ["fixed-beginner-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "beginner-pricing-mode",
    question: "Which Fell and Sell price mode should I start with?",
    answer:
      "Start at the Fair price mode. It fits neutral demand and a moderate Prestige. Move to High when Prestige and decoration bonus support it, and to Low when slow-moving stock piles up.",
    pageIds: ["fixed-beginner-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Gameplay loop
  {
    id: "loop-roguelike-risk",
    question: "Where does roguelike risk enter the Fell and Sell loop?",
    answer:
      "Roguelike risk enters at the unbanked haul. The choice to extract is the choice between a safe return and a deeper floor with a larger payout but a larger loss if the run ends in death.",
    pageIds: ["fixed-gameplay-loop-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "loop-reinvestment-order",
    question: "What is the right reinvestment order?",
    answer:
      "Reinvest the first profitable cycles into furniture that pairs combat buffs with sales appeal. Layer commercial appeal and capacity on top, then expand the shop floor. Do not expand before the first combat buff is in place.",
    pageIds: ["fixed-gameplay-loop-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Multiplayer
  {
    id: "multiplayer-coop",
    question: "Can I play Fell and Sell with friends?",
    answer:
      "No. Fell and Sell is single-player only as of August 30, 2026. Steam Cloud, Family Sharing, and achievements are confirmed Steam features; co-op and multiplayer are not announced.",
    pageIds: ["fixed-multiplayer-and-co-op-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "multiplayer-family-sharing",
    question: "Does Fell and Sell support Family Sharing?",
    answer:
      "Yes. Family Sharing is one of the confirmed Steam features on the Fell and Sell store page as of August 30, 2026.",
    pageIds: ["fixed-multiplayer-and-co-op-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Mods
  {
    id: "mods-workshop",
    question: "Does Fell and Sell have Steam Workshop?",
    answer:
      "No Steam Workshop or official mod support is listed on the Fell and Sell Steam store page as of August 30, 2026.",
    pageIds: ["fixed-mods-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "mods-unofficial-files",
    question: "Are unofficial Fell and Sell mod files safe?",
    answer:
      "Unofficial files are not endorsed. Fell and Sell has no published Workshop or mod support channel as of August 30, 2026, so unofficial files may not load with the current build and could affect save integrity or Steam Cloud sync.",
    pageIds: ["fixed-mods-en-us"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Dungeons hub
  {
    id: "dungeons-reading-order",
    question: "What is the recommended reading order for the dungeon cluster?",
    answer:
      "Dungeon guide first, then extraction and death penalty, then altars and builds, then weapons, then crafting and gear, then the Quest Board, then the Living Forest foraging.",
    pageIds: ["fixed-dungeons-hub-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "dungeons-cross-link",
    question: "How do the dungeons and shop clusters connect?",
    answer:
      "Banked hauls price into the shop, crafted gear either equips the next run or shelves at a higher margin, and the Quest Board pays out in gold plus gear. The dungeon side feeds the shop side; the shop side funds the dungeon side.",
    pageIds: ["fixed-dungeons-hub-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Dungeon guide
  {
    id: "dungeon-fast-heavy",
    question: "Should I use a fast or heavy weapon in Fell and Sell?",
    answer:
      "Fast weapons trade raw damage for swing speed and stamina efficiency; heavy weapons trade swing speed for raw damage and stagger. Fast weapons fit short runs; heavy weapons fit deep floors.",
    pageIds: ["fixed-dungeon-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "dungeon-deep-floor",
    question: "When is a deeper dungeon floor worth it?",
    answer:
      "When the marginal payout of the next floor exceeds the marginal loss from a death, weighted by the probability of death on that floor. Run the risk-threshold check before committing to a deeper descent.",
    pageIds: ["fixed-dungeon-guide-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Extraction
  {
    id: "extraction-when-leave",
    question: "When should I leave a Fell and Sell dungeon run?",
    answer:
      "Leave whenever the unbanked haul value times the probability of death on the next floor exceeds the expected payout of the next floor. The risk-threshold check covers health, potions, gear, and loot value.",
    pageIds: ["fixed-extraction-and-death-penalty-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "extraction-banked-vs-unbanked",
    question: "What is the difference between banked and unbanked haul?",
    answer:
      "Banked haul has reached the shop surface and is no longer at risk; unbanked haul is everything the player is carrying on the run that has not yet reached the shop. The death penalty applies only to the unbanked haul.",
    pageIds: ["fixed-extraction-and-death-penalty-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Altars
  {
    id: "altars-shrink",
    question: "What does the Shrink altar effect do?",
    answer:
      "Shrink reduces the player's hit volume, which means fewer incoming hits land during a run. It pairs well with short, fast-weapon runs.",
    pageIds: ["fixed-altars-and-builds-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "altars-midas",
    question: "What does the Midas Touch altar effect do?",
    answer:
      "Midas Touch raises the value of banked haul, so the same haul prices at a higher tier when it reaches the shop. It pairs well with runs that plan to bank a large haul.",
    pageIds: ["fixed-altars-and-builds-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "altars-match-weapon",
    question: "How should I match altar effects to my weapon?",
    answer:
      "A fast-weapon run pairs with Shrink or manic; a heavy-weapon run pairs with depressed or Midas Touch. Altars amplify an existing build rather than replace it.",
    pageIds: ["fixed-altars-and-builds-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "altars-shrink-midas",
    question: "What does the Shrink + Midas Touch cross-altar synergy do?",
    answer:
      "Shrink keeps the player alive through a long loot-heavy descent by shrinking the player's hit volume, while Midas Touch raises the value of the haul once it is banked. The two effects compound across a single run instead of stacking the same effect twice. The combination fits a planned loot-heavy descent where the player can afford a deeper floor.",
    pageIds: ["fixed-altars-and-builds-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "altars-skip-drawback",
    question: "When should I skip an offered altar prayer?",
    answer:
      "Skip a drawback-carrying prayer when the run's unbanked haul is already at risk or when the prayer's downside does not match the run's archetype. Pass on depressed during a fast-weapon run, pass on manic during a heavy-weapon run, and pass on any drawback-carrying prayer near the descent boundary.",
    pageIds: ["fixed-altars-and-builds-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Weapons
  {
    id: "weapons-fast-heavy",
    question: "What is the fast versus heavy weapon trade-off?",
    answer:
      "Fast weapons recover quickly and fit short dungeon runs where the marginal stamina cost of every swing matters. Heavy weapons recover slowly and fit deep-floor runs where raw damage and stagger outweigh recovery time.",
    pageIds: ["fixed-weapons-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "weapons-disambiguation",
    question: "Are Bloodstone Greatsword, Heavy Iron Sword, and Goblin Halberd Fell and Sell weapons?",
    answer:
      "No. Those autocomplete suggestions resolve to Elder Scrolls Online items and are not Fell and Sell content. They are kept on the weapons page only inside the disambiguation block, dated August 30, 2026.",
    pageIds: ["fixed-weapons-en-us"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // Crafting
  {
    id: "crafting-personal-gear",
    question: "Should I craft for personal gear or for shop stock?",
    answer:
      "Craft for personal gear when the next run's risk profile demands a higher weapon tier. Craft for shop stock when the next shop day needs a higher-margin item to clear the supply-and-demand curve.",
    pageIds: ["fixed-crafting-and-gear-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "crafting-raw-material",
    question: "When is raw material worth more sold than crafted?",
    answer:
      "When the next run's risk profile is light and the shop day has a high demand for raw materials. If raw materials are clearing at a high price and crafted goods are lingering, sell the raw material and use the gold elsewhere.",
    pageIds: ["fixed-crafting-and-gear-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Quest board
  {
    id: "quest-board-rewards",
    question: "What does the Fell and Sell Quest Board pay out?",
    answer:
      "Reward types split into gold, gear, and blueprints. Gold feeds the shop reinvestment cycle; gear feeds the next run; blueprints unlock crafting recipes that change the crafting-versus-selling decision on the next cycle.",
    pageIds: ["fixed-quest-board-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "quest-board-stacking",
    question: "Can I stack a Quest Board objective onto an existing dungeon run?",
    answer:
      "Yes. Pick the board objective that aligns with the run's existing trajectory rather than rerouting the run. A run planned for iron and wood haul can stack an objective that targets iron and wood.",
    pageIds: ["fixed-quest-board-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Living forest
  {
    id: "forest-events",
    question: "What events can hit the Fell and Sell Living Forest?",
    answer:
      "Three events: goblin raids, thunderstorms, and psychedelic mushroom season. Each one changes the foraging pacing and the per-cycle yield.",
    pageIds: ["fixed-living-forest-foraging-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "forest-versus-dungeon",
    question: "When is the Living Forest a better use of a cycle than a dungeon run?",
    answer:
      "When the dungeon depth decision looks risky and the foraged haul is in demand on the next shop day, or when the player wants to bank a small haul quickly and avoid a long dungeon run.",
    pageIds: ["fixed-living-forest-foraging-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "forest-versus-descent",
    question: "When is a Living Forest foraging trip more efficient than a short dungeon descent?",
    answer:
      "A forest trip is more efficient during a thunderstorm with the psychedelic mushroom season active. A short dungeon descent is more efficient on a calm day with no mushroom season, when the descent yields a wider mix of materials plus a chance at gear or an altar pull. The efficiency comparison depends on the value window of the active event.",
    pageIds: ["fixed-living-forest-foraging-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "forest-when-skip",
    question: "When should I skip a Living Forest foraging trip entirely?",
    answer:
      "Skip the forest when a dungeon-featuring Quest Board feat is pending, when shop stock is already over-supplied with foraged materials, on a calm day with no thunderstorm and no mushroom season, or when health and potions are below the dungeon-side risk-threshold check.",
    pageIds: ["fixed-living-forest-foraging-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Shop hub
  {
    id: "shop-reading-order",
    question: "What is the recommended reading order for the shop cluster?",
    answer:
      "Shop pricing and demand first, then shop layout and furniture buffs, then shop upgrades and progression.",
    pageIds: ["fixed-shop-hub-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "shop-cross-link",
    question: "How do the shop and dungeon clusters connect?",
    answer:
      "Pricing funds the next reinvestment, furniture grants permanent combat buffs that apply on the next run, and shop upgrades raise capacity. The shop side funds the dungeon side; the dungeon side feeds the shop side.",
    pageIds: ["fixed-shop-hub-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Pricing
  {
    id: "pricing-mode",
    question: "When should I use High versus Low price mode?",
    answer:
      "Use High when Prestige and decoration bonus support a higher price ceiling. Use Low when slow-moving stock piles up at the recommended price and Prestige is low. Use Fair in between.",
    pageIds: ["fixed-shop-pricing-and-demand-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "pricing-prestige",
    question: "What is Prestige and how does it change pricing?",
    answer:
      "Prestige is a shop-level ranking. Higher Prestige customers accept higher prices and the price ceiling rises with Prestige. Prestige rises as the shop sells consistently and falls when slow-moving stock piles up.",
    pageIds: ["fixed-shop-pricing-and-demand-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "pricing-first-cycle",
    question: "What is the right first-cycle pricing move in Fell and Sell?",
    answer:
      "Bank the first full haul before any sale, then set Fair prices with Prestige still at zero. High pricing fails because Prestige has not yet risen, and Low pricing trains customers to expect discounts. Adjust upward only after Prestige supports it.",
    pageIds: ["fixed-shop-pricing-and-demand-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Layout
  {
    id: "layout-first-furniture",
    question: "Which Fell and Sell furniture should I buy first?",
    answer:
      "Buy furniture that pairs a permanent combat buff with a sales appeal bonus first. The combat buff applies on the next run; the sales appeal raises the price ceiling on the next shop day.",
    pageIds: ["fixed-shop-layout-and-furniture-buffs-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "layout-pairs-buffs",
    question: "Can furniture give both a combat buff and a sales appeal bonus?",
    answer:
      "Yes. The first furniture purchase should pair both effects so the player benefits on the dungeon side and the shop side at the same time.",
    pageIds: ["fixed-shop-layout-and-furniture-buffs-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "layout-first-cycle",
    question: "Which single furniture piece should anchor the first Fell and Sell profitable cycle?",
    answer:
      "A single S-tier combat buff piece that survives the rest of the first profitable cycle. Pair the purchase with a same-cycle Quest Board turn-in for survivability gear rather than raw gold so the board pays out gear that reduces the next run's death penalty.",
    pageIds: ["fixed-shop-layout-and-furniture-buffs-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Upgrades
  {
    id: "upgrades-first-purchase",
    question: "What is the first shop upgrade worth buying?",
    answer:
      "Reinvest the first profitable cycles into furniture that pairs combat buffs with sales appeal. Layer commercial appeal and capacity on top, then expand the shop floor.",
    pageIds: ["fixed-shop-upgrades-and-progression-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "upgrades-premature",
    question: "How do I know a Fell and Sell shop upgrade is premature?",
    answer:
      "An upgrade is premature when slow stock turnover is still the binding constraint, when Prestige has not yet risen, or when the next shop day has not absorbed the previous cycle's haul.",
    pageIds: ["fixed-shop-upgrades-and-progression-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  // Achievements ledger
  {
    id: "achievements-how-many",
    question: "How many Fell and Sell achievements are there?",
    answer:
      "Fell and Sell ships with 97 Steam achievements organized as 13 interconnected ledgers: kill count, four-family weapon mastery, chest opens, dungeon floors, boss kills, total crafts, crafted rarity ladder, total sales, trading gold, six category-sales targets, the parallel Comfort and Prestige chains, and the required single death.",
    pageIds: ["fixed-achievements-ledger-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "achievements-weapon-mastery",
    question: "How are Fell and Sell weapon mastery achievements organized?",
    answer:
      "Across four weapon families — Sword, Axe, Hammer, Staff — with a Novice, Adept, Journeyman, and Master tier in each. The per-family target is 250 kills, totaling 1,000 weapon-specific kills. Rotate families across sessions rather than finish one family before picking up the next.",
    pageIds: ["fixed-achievements-ledger-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "achievements-trap-names",
    question: "Which Fell and Sell achievement names hide a trap?",
    answer:
      "'Getting better!' covers both Craft 5 Items and Sell 25 Items, and 'Master Dungeoneering' covers both Floor 8 and Floor 10. The same display name resolves to two different ledgers; finishing the lower threshold does not auto-complete the higher one.",
    pageIds: ["fixed-achievements-ledger-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "achievements-comfort-versus-prestige",
    question: "Is Comfort the same chain as Prestige in Fell and Sell?",
    answer:
      "No. Comfort and Prestige are parallel Level 1 to Level 10 chains. Comfort climbs through decoration-driven progression (furniture tiers: S combat buffs, A Prestige-Building, B Situational Investments), while Prestige climbs through commercial-strength progression. Advance both chains together rather than max Prestige before touching Comfort.",
    pageIds: ["fixed-achievements-ledger-en-us", "fixed-shop-pricing-and-demand-en-us"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
];