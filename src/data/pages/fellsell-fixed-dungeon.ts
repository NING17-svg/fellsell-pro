import type { PageContent } from "@/types/content";

import {
  FALL_SELL_OFFICIAL,
  FALL_SELL_WIKI,
  WORLDEKA_BEGINNER,
  WORLDEKA_DUNGEON,
  WORLDEKA_STORE,
} from "./fellsell-fixed-source";

// Fell and Sell — V3 dungeon-cluster fixed pages assembled from the
// approved content-package. Each entry's id, translationKey, route, pageType,
// presentation shell/variant, h1, keyFacts, FAQ ids, relatedPageIds,
// lastReviewed, and sourceStatus mirror the V3 Site Plan and content-package.

const LAST_REVIEWED = "2026-08-30";

export const fellsellDungeonPages: PageContent[] = [
  {
    id: "fixed-dungeons-hub-en-us",
    translationKey: "dungeons-hub",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons",
    url: "/dungeons",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Fell and Sell dungeons hub: runs, extraction, altars, weapons, foraging",
    seoTitle:
      "Fell and Sell Dungeons Hub: Runs, Extraction, Altars, Weapons, Foraging",
    metaDescription:
      "Browse every Fell and Sell dungeon, expedition, and gear topic from one entry point: runs, extraction and death penalty, altars, weapons, crafting, the Quest Board, and the Living Forest foraging.",
    summary:
      "The Fell and Sell dungeons hub collects every dungeon topic from fighting through a run to altars, weapons, extraction, crafting, the Quest Board, and the Living Forest. Hub summaries repeat only claims already carried on the linked pages under their own fact boundaries.",
    hero: {
      eyebrow: "Dungeons and expeditions",
      subtitle:
        "Run priority, extraction and the death penalty, altar effects, weapon choice, crafting versus selling, the Quest Board, and the Living Forest foraging events. Each topic answers one real loop decision so the dungeon side of the loop stays readable.",
      ctas: [
        { label: "Dungeon Guide", href: "/dungeons/guide" },
        { label: "Extraction & Death Penalty", href: "/dungeons/extraction-and-death-penalty" },
        { label: "Shop Hub", href: "/shop" },
      ],
    },
    quickAnswer:
      "The dungeon side of the Fell and Sell loop covers seven topics: how to fight through a run, when to extract and what is lost on death, what altars like Shrink and Midas Touch do, which weapon to carry, how crafting interacts with shop pricing, how the Quest Board pays out, and how the Living Forest's goblin raids, thunderstorms, and mushroom season change a foraging trip. The dungeons hub routes search users to the dedicated page for each topic.",
    keyFacts: [
      { label: "Cluster", value: "Dungeons and expeditions" },
      { label: "Topics", value: "Runs, extraction, altars, weapons, crafting, quests, foraging" },
      { label: "Hub weight-bearing route", value: "/dungeons" },
      { label: "Parent hub", value: "Homepage" },
      { label: "Cross-link", value: "Shop hub" },
    ],
    modules: [
      {
        id: "cluster-overview",
        type: "prose",
        heading: "Cluster overview",
        body:
          "Fell and Sell runs as a single economy with the dungeon on one side and the shop on the other. The dungeon cluster covers run mechanics, the death penalty, altar effects, weapon choice, crafting versus raw material selling, the Quest Board, and the Living Forest foraging events. Each leaf page answers one real loop decision and links back to this hub.\n\nRecommended reading order for a new player: dungeon guide first, then extraction and death penalty, then altars and builds, then weapons, then crafting and gear, then the Quest Board, then the Living Forest. The hub can be read in any order after that.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "leaf-pages",
        type: "entity-grid",
        heading: "Dungeon-cluster leaf pages",
        items: [
          {
            title: "Dungeon Guide",
            summary:
              "First-person combat basics, fast versus heavy weapon handling, skeleton and monster encounters, traps, descending to deeper floors.",
            href: "/dungeons/guide",
          },
          {
            title: "Extraction and Death Penalty",
            summary:
              "What \"unbanked haul\" means, the escape point and teleportation circle, risk-threshold checks, when a deeper floor is not worth it.",
            href: "/dungeons/extraction-and-death-penalty",
          },
          {
            title: "Altars and Builds",
            summary:
              "Shrink and Midas Touch effects, manic and depressed combat states, safer blessings versus drawback-carrying prayers, matching altar effects to the weapon in hand.",
            href: "/dungeons/altars-and-builds",
          },
          {
            title: "Weapons",
            summary:
              "Weapon families for Fell and Sell, fast versus heavy trade-offs, shield blocking, how crafted gear changes the choice, and a disambiguation against Elder Scrolls Online item names.",
            href: "/dungeons/weapons",
          },
          {
            title: "Crafting and Gear",
            summary:
              "The crafting workbench, material types, crafting for personal gear versus for stock, why crafted goods change shop margin.",
            href: "/dungeons/crafting-and-gear",
          },
          {
            title: "Quest Board",
            summary:
              "Where the board sits relative to the dungeon entry, how run objectives are set, reward types including gold, gear, and blueprints.",
            href: "/dungeons/quest-board",
          },
          {
            title: "Living Forest Foraging",
            summary:
              "What foraging yields compared with a dungeon run, goblin raids, thunderstorms, psychedelic mushroom season, when the forest is the better use of a cycle.",
            href: "/dungeons/living-forest-foraging",
          },
        ],
      },
      {
        id: "feeding-shop",
        type: "prose",
        heading: "How dungeon results feed the shop",
        body:
          "Every dungeon cluster outcome eventually prices into the shop. Banked hauls price into the shelf, crafted gear either equips the next run or shelves at a higher margin, and the Quest Board pays out in gold plus gear that loops back into the next run. The dungeon side feeds the shop side; the shop side funds the dungeon side. The cross-link between the two hubs is on the shop hub page as well.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "dungeon-hub-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Hub summaries repeat only claims already carried on the linked leaf pages under their own fact boundaries. Confirmed mechanics come from the official Steam feature list for AppID 4627110; specific tactics and ordering are attributed to the worldeka dungeon guide and the Fell and Sell wiki, recorded as guide sources.",
      },
    ],
    faqIds: ["dungeons-reading-order", "dungeons-cross-link"],
    relatedPageIds: [
      "fixed-dungeon-guide-en-us",
      "fixed-extraction-and-death-penalty-en-us",
      "fixed-altars-and-builds-en-us",
      "fixed-weapons-en-us",
      "fixed-crafting-and-gear-en-us",
      "fixed-quest-board-en-us",
      "fixed-living-forest-foraging-en-us",
      "fixed-shop-hub-en-us",
      "home",
    ],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-dungeon-guide-en-us",
    translationKey: "dungeon-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons/guide",
    url: "/dungeons/guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell dungeon guide: clearing a run and handling enemies",
    seoTitle:
      "Fell and Sell Dungeon Guide: Combat, Enemies, Traps, and Deep Floors",
    metaDescription:
      "Learn how to clear a Fell and Sell dungeon run, handle first-person hack'n'slash combat, fight skeletons and monsters, dodge spike traps, and decide when to descend to deeper floors.",
    summary:
      "The dungeon side of Fell and Sell is a first-person hack'n'slash roguelite. This guide covers first-person combat basics, fast versus heavy weapon handling and shield blocking, skeleton and monster encounters, spike traps and environmental hazards, and how risk scales as players descend to deeper floors.",
    hero: {
      eyebrow: "Dungeon guide",
      subtitle:
        "A first-person hack'n'slash roguelite on the dungeon side. Read the combat basics, learn the fast versus heavy weapon trade-off, watch for traps, and decide when the deeper floor is worth the risk.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Extraction & Death Penalty", href: "/dungeons/extraction-and-death-penalty" },
        { label: "Weapons", href: "/dungeons/weapons" },
      ],
    },
    quickAnswer:
      "Treat the dungeon as a controlled descent. Use fast weapons for crowd control and shield blocking for heavy hits, fall back to the escape point when health, potions, or unbanked haul value drops below the threshold, and descend to deeper floors only when the marginal payout justifies the larger death penalty. The hack'n'slash roguelite structure and the descending dungeon framing is official Steam text; enemy, trap, and weapon-handling detail is attributed to guide sources.",
    keyFacts: [
      { label: "Combat style", value: "First-person hack'n'slash roguelite" },
      { label: "Risk scaling", value: "Deeper floors raise the death penalty" },
      { label: "Defensive option", value: "Shield blocking" },
      { label: "Offensive choice", value: "Fast versus heavy weapons" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "combat-basics",
        type: "prose",
        heading: "First-person combat basics",
        body:
          "Fell and Sell plays from a first-person perspective with melee combat as the primary engagement loop. Stamina, positioning, and the choice between fast and heavy swings drive the encounter pace. Guide sources attribute the encounter pacing to the Steam feature list's hack'n'slash framing plus the dungeon-side combat pacing that the community wiki records.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, FALL_SELL_WIKI],
      },
      {
        id: "weapon-handling",
        type: "prose",
        heading: "Fast versus heavy weapon handling and shield blocking",
        body:
          "Fast weapons trade raw damage for swing speed and stamina efficiency. Heavy weapons trade swing speed for raw damage and stagger. Shield blocking is the primary defensive option and absorbs incoming hits while the player waits for an opening. The trade-offs and the recovery time cost of a missed heavy swing are attributed to guide sources; the existence of fast and heavy weapon classes and shield blocking is part of the dungeon-side combat model that the Steam feature list describes.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_DUNGEON],
      },
      {
        id: "enemies",
        type: "prose",
        heading: "Skeleton and monster encounters",
        body:
          "The dungeon encounters skeletons and other monsters, with encounter density rising as players descend. Specific enemy roles, attack patterns, and weakness priorities are attributed to guide sources. Treat the official Steam feature list as the source for the existence of the monster types and the descending density model; treat the community wiki and the worldeka dungeon guide as the source for the per-encounter tactics.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "traps",
        type: "prose",
        heading: "Spike traps and environmental hazards",
        body:
          "Spike traps and environmental hazards punish careless movement. The traps and hazards appear alongside the monster encounters and scale with depth. Specific trap placement, hit damage, and avoidance patterns are attributed to guide sources. The Steam feature list frames the dungeon as a hack'n'slash roguelite; the spike trap and hazard detail is part of the combat model.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_DUNGEON],
      },
      {
        id: "deep-floors",
        type: "prose",
        heading: "Descending to deeper floors and how risk scales",
        body:
          "Deeper floors raise the payout and the death penalty in equal measure. The descent decision is the extraction-and-death-penalty decision in disguise: the marginal gain of a deeper floor has to outweigh the marginal loss of the larger unbanked haul. The death-penalty detail is on the extraction page; the dungeon guide treats the deep-floor decision as the first half of that decision.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "dungeon-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "The hack'n'slash roguelite structure and the descending dungeon framing are official Steam text. Specific enemy, trap, and weapon-handling detail is attributed to the worldeka beginner and dungeon guides and to the Fell and Sell community wiki, recorded as guide sources. No community-sourced build or progression advice is stated as official confirmation.",
      },
    ],
    faqIds: ["dungeon-fast-heavy", "dungeon-deep-floor"],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-extraction-and-death-penalty-en-us",
      "fixed-weapons-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-extraction-and-death-penalty-en-us",
    translationKey: "extraction-and-death-penalty",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons/extraction-and-death-penalty",
    url: "/dungeons/extraction-and-death-penalty",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell extraction and death penalty: when to escape a run",
    seoTitle:
      "Fell and Sell Extraction and Death Penalty: When to Escape a Run",
    metaDescription:
      "Understand Fell and Sell's death penalty, what the unbanked haul means, when to escape a run, and how banking feeds the shop. Official Steam text confirms the loss on death.",
    summary:
      "Fell and Sell's death penalty is official Steam text: \"Die and lose your entire unbanked haul.\" This guide covers what the unbanked haul is, where the escape point and teleportation circle sit, the risk-threshold checks across health, potions, gear, and loot value, and how banking feeds the shop.",
    hero: {
      eyebrow: "Extraction and death penalty",
      subtitle:
        "The death penalty is official Steam text: die and lose the entire unbanked haul. Read the escape point, run the risk-threshold check, and bank the haul before the next deep floor turns into a loss.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Dungeon Guide", href: "/dungeons/guide" },
        { label: "Shop Pricing", href: "/shop/pricing-and-demand" },
      ],
    },
    quickAnswer:
      "Fell and Sell's death penalty is official Steam text: die and lose the entire unbanked haul. The escape point and the teleportation circle are the only exit surfaces. Run a risk-threshold check across health, potions, gear, and unbanked loot value before each deep-floor decision, and bank the haul whenever the marginal loss outweighs the marginal gain.",
    keyFacts: [
      { label: "Death penalty", value: "Lose the entire unbanked haul" },
      { label: "Exit surface", value: "Escape point + teleportation circle" },
      { label: "Risk check", value: "Health, potions, gear, loot value" },
      { label: "Banked haul", value: "Feeds the shop surface" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "unbanked-haul",
        type: "prose",
        heading: "What \"unbanked haul\" means",
        body:
          "The unbanked haul is everything the player is carrying on the run that has not yet been banked to the shop surface. The official Steam feature list states \"Die and lose your entire unbanked haul\", which makes the haul the single largest economic surface at risk on every run. Materials, gear, and currency in the unbanked pool are all subject to the death penalty until they reach the shop.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "escape-point",
        type: "prose",
        heading: "The escape point and teleportation circle",
        body:
          "The escape point and the teleportation circle are the only exit surfaces from a run. Players who reach the escape point can bank the haul and return to the shop surface without further risk. Players who push past the escape point or fail to reach it before death lose the unbanked haul. The location and pacing of the escape point are attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "risk-threshold",
        type: "prose",
        heading: "Risk-threshold checks across health, potions, gear, and loot value",
        body:
          "A risk-threshold check has four inputs: current health, remaining potions, gear durability and tier, and the unbanked haul's market value. If any single input falls below its threshold, the right move is to extract and bank rather than push the next floor. The threshold framing is attributed to guide sources; the existence of the death penalty is official Steam text.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "deep-floor",
        type: "prose",
        heading: "When a deeper floor is not worth it",
        body:
          "A deeper floor is not worth it when the marginal payout is smaller than the marginal loss from a death. The math is the unbanked haul value times the probability of death on the next floor; if that product is larger than the expected payout, extract. The math itself is a guide-source framing; the death-penalty mechanic that makes the math matter is official Steam text.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "banking-feeds-shop",
        type: "prose",
        heading: "How banking feeds the shop",
        body:
          "Banking is the bridge between the dungeon side and the shop side of the loop. Banked haul moves onto the shop surface where it is priced, displayed, and sold for gold. Gold funds furniture buffs, crafting, and shop upgrades that feed back into the next dungeon run. The banked-haul framing is part of the gameplay loop description.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "extraction-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "\"Die and lose your entire unbanked haul\" is official Steam text from the AppID 4627110 feature list. The escape point, teleportation circle, and risk-threshold framing are attributed to the worldeka beginner guide, recorded as a guide source. No community-sourced loss-avoidance tactic is stated as official confirmation.",
      },
    ],
    faqIds: ["extraction-when-leave", "extraction-banked-vs-unbanked"],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-dungeon-guide-en-us",
      "fixed-shop-pricing-and-demand-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-altars-and-builds-en-us",
    translationKey: "altars-and-builds",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons/altars-and-builds",
    url: "/dungeons/altars-and-builds",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell altars and builds: Shrink, Midas Touch, manic and depressed",
    seoTitle:
      "Fell and Sell Altars and Builds: Shrink, Midas Touch, Combat States",
    metaDescription:
      "Understand Fell and Sell's dungeon altars, the Shrink and Midas Touch effects, the manic and depressed combat states, and how to match altar effects to the weapon in hand.",
    summary:
      "Fell and Sell's altars change the state of a run with effects like Shrink and Midas Touch and combat states like manic and depressed. This guide covers how altars change a run, which effects to build around, and how to match altar effects to the weapon in hand.",
    hero: {
      eyebrow: "Altars and builds",
      subtitle:
        "Shrink and Midas Touch effects and the manic and depressed combat states are part of the dungeon altar system. Match altar effects to the weapon in hand, prefer safer blessings over drawback-carrying prayers on a short run, and use the altar system to amplify an existing build rather than replace it.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Weapons", href: "/dungeons/weapons" },
        { label: "Dungeon Guide", href: "/dungeons/guide" },
      ],
    },
    quickAnswer:
      "Fell and Sell's altars change the state of a run. Shrink and Midas Touch are official Steam feature text; manic and depressed are official Steam combat-state text. The right altar choice depends on the weapon in hand and the run's risk posture. The Shrink + Midas Touch combo compounds across a single loot-heavy run; manic cycling fits short aggressive descents; skip drawback-carrying prayers when the run's archetype does not match the downside.",
    keyFacts: [
      { label: "Shrink", value: "Official Steam altar effect" },
      { label: "Midas Touch", value: "Official Steam altar effect" },
      { label: "Manic state", value: "Official Steam combat state" },
      { label: "Depressed state", value: "Official Steam combat state" },
      { label: "Cross-altar combo", value: "Shrink + Midas Touch for loot-heavy descents" },
      { label: "Best practice", value: "Match altar to weapon in hand" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "altar-system",
        type: "prose",
        heading: "How altars change a run",
        body:
          "Altars apply a state change to the run rather than a one-shot buff. Shrink reduces the player's hit volume, Midas Touch raises the value of banked haul, and the manic and depressed states change the combat pacing in opposite directions. The state-change framing is attributed to guide sources; the existence of Shrink, Midas Touch, manic, and depressed is official Steam feature text.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, FALL_SELL_WIKI],
      },
      {
        id: "effects",
        type: "prose",
        heading: "The Shrink effect",
        body:
          "Shrink reduces the player's hit volume, which means fewer incoming hits land during a run. Shrink pairs well with short, fast-weapon runs where the player wants to minimize damage taken and bank the haul quickly. The pairing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "midas",
        type: "prose",
        heading: "The Midas Touch effect",
        body:
          "Midas Touch raises the value of banked haul, which means the same haul prices at a higher tier when it reaches the shop. Midas Touch pairs well with runs that plan to bank a large haul and price it on a low-demand day. The pairing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "states",
        type: "prose",
        heading: "Manic and depressed combat states",
        body:
          "Manic raises swing speed and aggression at the cost of stamina stability; depressed lowers swing speed in exchange for stamina recovery. Manic fits fast-weapon, high-pressure runs; depressed fits heavy-weapon, steady runs where stamina recovery is the binding constraint. The trade-offs are attributed to guide sources; the existence of manic and depressed is official Steam combat-state text.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "blessings-versus-prayers",
        type: "prose",
        heading: "Safer blessings versus drawback-carrying prayers",
        body:
          "Divine Prayers split into safer blessings and drawback-carrying prayers. Safer blessings are the right call on a short run or when the unbanked haul is at risk. Drawback-carrying prayers are the right call on a stable run where the drawback is offset by the run's existing momentum. The framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "matching-weapon",
        type: "prose",
        heading: "Matching altar effects to the weapon in hand",
        body:
          "Altar effects amplify an existing build rather than replace it. A fast-weapon run pairs with Shrink or manic; a heavy-weapon run pairs with depressed or Midas Touch. The matching rule is attributed to guide sources and is the simplest way to keep the altar system from destabilising a run that was already working.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "synergy-shrink-midas",
        type: "prose",
        heading: "Shrink + Midas Touch: the loot-heavy cross-altar synergy",
        body:
          "The InsertCoins review calls out Shrink + Midas Touch as a named combination rather than a flat damage bonus: Shrink keeps the player alive through a long loot-heavy descent by shrinking the player's hit volume, while Midas Touch raises the value of the haul once it is banked. The two effects compound across a single run instead of stacking the same effect twice. The combination is the right call when the planned run is loot-heavy and the player can afford to take a deeper floor; the Worldeka dungeon guide frames altar choice as the per-run build mechanic and lists at least three named combos, including this one.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_DUNGEON],
      },
      {
        id: "synergy-manic-cycling",
        type: "prose",
        heading: "Manic cycling: short aggressive descents that rotate altar states",
        body:
          "Manic cycling uses the manic combat state together with a fast weapon for a short aggressive descent that banks a haul before the stamina cost catches up. The community wiki devotes a section to altar effects and cycling, and the Worldeka beginner guide treats altar choice as the per-run build mechanic. Manic cycling fits a quick bank-and-return run; it does not pair well with a long loot-heavy descent where Shrink + Midas Touch is the better composition. The cycling framing and the per-archetype trade-off are attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, FALL_SELL_WIKI],
      },
      {
        id: "skip-an-altar",
        type: "prose",
        heading: "Skip-an-altar rule: when not to take an offered prayer",
        body:
          "Not every altar effect is worth taking. The skip-an-altar rule is to pass on a drawback-carrying prayer when the run's unbanked haul is already at risk or the run's archetype does not match the prayer's downside. Pass on depressed during a fast-weapon run; pass on manic during a heavy-weapon run; pass on any drawback-carrying prayer when the next floor is the descent boundary. The skip rule keeps the altar system from destabilising a run that was already working and is the simplest way to keep altar choice aligned with the run archetype.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "archetype-trade-offs",
        type: "prose",
        heading: "Same-archetype trade-off callout next to the per-effect descriptions",
        body:
          "Each individual altar description above carries a same-archetype trade-off: Shrink pairs with fast-weapon runs but is wasted on heavy-weapon runs that already stagger enemies; Midas Touch pairs with loot-heavy descents but is wasted on short bank-and-return runs where the haul is small; manic fits fast-weapon pressure runs but burns stamina in heavy-weapon runs; depressed fits heavy-weapon steady runs but is wasted in fast-weapon runs. Read the per-effect block and the matching rule together: the effect block names the trade-off, the matching rule binds it to the weapon in hand.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_DUNGEON],
      },
      {
        id: "altar-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Shrink, Midas Touch, and the manic and depressed combat states are official Steam feature text. The Shrink + Midas Touch named combination is attributed to the InsertCoins Fell and Sell review and the Worldeka dungeon guide; the cycling framing is attributed to the Worldeka beginner guide and the Fell and Sell community wiki. The skip-on-drawback rule is a guide-source framing and is presented as guidance, not as an official progression table.",
      },
    ],
    faqIds: [
      "altars-shrink",
      "altars-midas",
      "altars-match-weapon",
      "altars-shrink-midas",
      "altars-skip-drawback",
    ],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-weapons-en-us",
      "fixed-dungeon-guide-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-weapons-en-us",
    translationKey: "weapons",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons/weapons",
    url: "/dungeons/weapons",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell weapons: weapon families and the Elder Scrolls Online noise",
    seoTitle:
      "Fell and Sell Weapons: Weapon Families, Fast vs Heavy, Disambiguation",
    metaDescription:
      "Compare Fell and Sell weapon options and pick what to carry into a run. Only weapons documented for Fell and Sell are listed. Bloodstone Greatsword, Heavy Iron Sword, and Goblin Halberd autocomplete suggestions resolve to Elder Scrolls Online and are kept as a dated disambiguation.",
    summary:
      "Only Fell and Sell weapons documented for this title are listed on this page. The Bloodstone Greatsword, Heavy Iron Sword, and Goblin Halberd autocomplete suggestions resolve to Elder Scrolls Online items and are kept as a dated disambiguation module rather than as Fell and Sell content.",
    hero: {
      eyebrow: "Weapons and disambiguation",
        subtitle:
          "Fell and Sell weapon families for fast versus heavy trade-offs, shield blocking, and how crafted gear changes the choice. The Bloodstone Greatsword, Heavy Iron Sword, and Goblin Halberd autocomplete suggestions resolve to Elder Scrolls Online items; that disambiguation is dated 2026-08-30.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Crafting and Gear", href: "/dungeons/crafting-and-gear" },
        { label: "Altars and Builds", href: "/dungeons/altars-and-builds" },
      ],
    },
    quickAnswer:
      "Fell and Sell weapon families split into fast and heavy weapons with a shield blocking option. Fast weapons trade raw damage for swing speed and stamina efficiency; heavy weapons trade swing speed for raw damage and stagger. Crafted gear changes the choice because crafted weapons can lift the player's effective tier without raising the unbanked-haul risk on the next run. The Bloodstone Greatsword, Heavy Iron Sword, and Goblin Halberd autocomplete suggestions resolve to Elder Scrolls Online items and are kept only inside the disambiguation block.",
    keyFacts: [
      { label: "Fast weapons", value: "Swing speed + stamina efficiency" },
      { label: "Heavy weapons", value: "Raw damage + stagger" },
      { label: "Shield blocking", value: "Primary defensive option" },
      { label: "Crafted gear effect", value: "Raises effective tier without raising unbanked risk" },
      { label: "Disambiguation", value: "Bloodstone Greatsword, Heavy Iron Sword, Goblin Halberd resolve to Elder Scrolls Online" },
      { label: "Disambiguation date", value: "2026-08-30" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "weapon-families",
        type: "prose",
        heading: "Fell and Sell weapon families",
        body:
          "Fell and Sell weapon families split into fast and heavy weapons with a shield blocking option. Fast weapons trade raw damage for swing speed and stamina efficiency; heavy weapons trade swing speed for raw damage and stagger. Shield blocking absorbs incoming hits while the player waits for an opening. The fast-versus-heavy framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, FALL_SELL_WIKI],
      },
      {
        id: "trade-offs",
        type: "prose",
        heading: "Fast versus heavy trade-offs including recovery time",
        body:
          "Fast weapons recover quickly and fit short dungeon runs where the marginal stamina cost of every swing matters. Heavy weapons recover slowly and fit deep-floor runs where the raw damage and the stagger value outweigh the recovery time. The trade-off framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "crafted-gear",
        type: "prose",
        heading: "How crafted gear changes the choice",
        body:
          "Crafting raises the effective tier of a weapon without raising the unbanked-haul risk on the next run, because crafted weapons are personal gear rather than banked haul. That makes crafting the right way to push into a higher weapon tier when the dungeon side of the loop has the gold to spare. The crafting framing is attributed to guide sources; the existence of crafting is official Steam feature text (\"Forge stronger weapons and tougher armor\").",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "disambiguation",
        type: "callout",
        tone: "caution",
        title: "Disambiguation — 2026-08-30",
        body:
          "The Bloodstone Greatsword, Heavy Iron Sword, and Goblin Halberd autocomplete suggestions resolve to Elder Scrolls Online items and are not Fell and Sell content. They are kept on this page only inside the disambiguation block, dated 2026-08-30. Any other weapon name that surfaces through autocomplete and is not documented for Fell and Sell should be checked against the Steam store page and the Fell and Sell wiki before being treated as game content.",
      },
      {
        id: "weapons-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Only weapons documented for Fell and Sell are listed on this page. The fast-versus-heavy framing and the recovery time framing are attributed to the Fell and Sell community wiki and the worldeka beginner guide, recorded as guide sources. The crafting reference (\"Forge stronger weapons and tougher armor\") is official Steam feature text.",
      },
    ],
    faqIds: ["weapons-fast-heavy", "weapons-disambiguation"],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-crafting-and-gear-en-us",
      "fixed-altars-and-builds-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-crafting-and-gear-en-us",
    translationKey: "crafting-and-gear",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons/crafting-and-gear",
    url: "/dungeons/crafting-and-gear",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell crafting and gear: when to craft versus sell",
    seoTitle:
      "Fell and Sell Crafting and Gear: When to Craft Versus Sell Materials",
    metaDescription:
      "Learn how Fell and Sell crafting works, decide which materials to craft with instead of selling, and understand why crafted goods change shop margin.",
    summary:
      "Fell and Sell crafting happens at a workbench with iron, wood, pelts, and magical components. The decision between crafting and selling is split across personal gear versus stock; crafted goods raise shop margin but cost the gold that an immediate shelf sale would have produced.",
    hero: {
      eyebrow: "Crafting and gear",
      subtitle:
        "Use the crafting workbench to convert raw materials into personal gear or stock. Personal gear reduces the death penalty on the next run; stock raises the shop margin but delays the gold. The decision is split across personal gear versus shop stock.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Weapons", href: "/dungeons/weapons" },
        { label: "Shop Pricing", href: "/shop/pricing-and-demand" },
      ],
    },
    quickAnswer:
      "Fell and Sell crafting happens at a workbench and uses iron, wood, pelts, and magical components. The decision between crafting and selling is split across personal gear versus shop stock. Craft for personal gear when the next run's risk profile demands a higher weapon tier; craft for shop stock when the next shop day needs a higher-margin item to clear the supply-and-demand curve.",
    keyFacts: [
      { label: "Crafting station", value: "Workbench" },
      { label: "Material types", value: "Iron, wood, pelts, magical components" },
      { label: "Personal gear", value: "Reduces next-run death penalty" },
      { label: "Shop stock", value: "Raises shop margin but delays gold" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "workbench",
        type: "prose",
        heading: "The crafting workbench",
        body:
          "Crafting happens at a workbench that sits alongside the shop surface. Materials enter the workbench and either convert into personal gear that the player equips on the next run or into stock that the player shelves on the shop surface. The workbench framing is attributed to guide sources; the existence of crafting is official Steam feature text (\"Forge stronger weapons and tougher armor\").",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER, FALL_SELL_WIKI],
      },
      {
        id: "materials",
        type: "prose",
        heading: "Material types including iron, wood, pelts, and magical components",
        body:
          "Material types include iron, wood, pelts, and magical components. Iron and wood are the basic components of the early-game weapon and armor upgrades; pelts come out of the Living Forest foraging path; magical components come out of the dungeon altars and the deeper floors. The material type list and the source paths are attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "personal-versus-stock",
        type: "prose",
        heading: "Crafting for personal gear versus crafting for stock",
        body:
          "Crafting for personal gear reduces the next-run death penalty because the player enters the dungeon with a higher-tier weapon and armor. Crafting for stock raises the shop margin because the crafted item prices higher than the raw material would have. The trade-off is a delayed gold payout on the stock side against a reduced death penalty on the personal-gear side. The framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "shop-margin",
        type: "prose",
        heading: "Why crafted goods change shop margin",
        body:
          "Crafted goods price higher than raw materials because the shop's pricing system sees the finished product as a higher-tier item. The Steam store page confirms that player-set pricing responds to supply, demand, prestige, and decoration bonuses, so a crafted good that aligns with the shop's current decoration bonus and the customer's Prestige bracket prices at a higher tier. The framing is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "raw-material-worth",
        type: "prose",
        heading: "When raw material is worth more sold",
        body:
          "Raw material is worth more sold than crafted when the next run's risk profile is light and the shop day has a high demand for raw materials. The right test is the demand curve: if raw materials are clearing at a high price and crafted goods are lingering, sell the raw material and use the gold elsewhere. The trade-off is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_STORE],
      },
      {
        id: "crafting-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "\"Forge stronger weapons and tougher armor\" is official Steam feature text. The workbench and material specifics are attributed to the worldeka beginner guide and the Fell and Sell community wiki, recorded as guide sources. No community-sourced crafting priority is stated as official confirmation.",
      },
    ],
    faqIds: ["crafting-personal-gear", "crafting-raw-material"],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-weapons-en-us",
      "fixed-shop-pricing-and-demand-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-quest-board-en-us",
    translationKey: "quest-board",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons/quest-board",
    url: "/dungeons/quest-board",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell Quest Board: objectives, rewards, and stacking with runs",
    seoTitle:
      "Fell and Sell Quest Board: Objectives, Rewards, and Stacking with Runs",
    metaDescription:
      "Understand how the Fell and Sell Quest Board works, where it sits relative to the dungeon entry, what reward types it pays out, and how to stack a board objective onto a run already planned.",
    summary:
      "The Fell and Sell Quest Board turns expedition results into gold and gear. This guide covers where the board sits relative to the dungeon entry, how run objectives are set, what reward types pay out, and how to stack a board objective onto a run already planned.",
    hero: {
      eyebrow: "Quest Board",
      subtitle:
        "The Quest Board converts run objectives into gold and gear. Stack a board objective onto a run already planned so the dungeon descent and the board payout happen on the same cycle.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Dungeon Guide", href: "/dungeons/guide" },
        { label: "Shop Upgrades", href: "/shop/upgrades-and-progression" },
      ],
    },
    quickAnswer:
      "The Fell and Sell Quest Board sits relative to the dungeon entry and turns run objectives into gold, gear, and blueprints. Stack a board objective onto a run already planned so the dungeon descent and the board payout happen on the same cycle. The official Steam feature list confirms the board turns expedition results into gold and gear; placement and reward specifics are attributed to guide sources.",
    keyFacts: [
      { label: "Board placement", value: "Adjacent to the dungeon entry" },
      { label: "Reward types", value: "Gold, gear, blueprints" },
      { label: "Stacking", value: "Pair with a planned run" },
      { label: "Effect", value: "Effectively pays twice" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "placement",
        type: "prose",
        heading: "Where the board sits relative to the dungeon entry",
        body:
          "The Quest Board sits relative to the dungeon entry so a player can pick up an objective on the way into the dungeon and turn in the result on the way out. The placement is attributed to guide sources; the existence of the board and its purpose is official Steam feature text.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "objectives",
        type: "prose",
        heading: "How run objectives are set",
        body:
          "Run objectives are set on the board before descent. The objective can target a haul type, a material count, a specific enemy, or an altar interaction. The objective categories are attributed to guide sources; the existence of run objectives is part of the board's purpose in the Steam feature list.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "rewards",
        type: "prose",
        heading: "Reward types including gold, gear, and blueprints",
        body:
          "Reward types split into gold, gear, and blueprints. Gold feeds the shop reinvestment cycle; gear feeds the next run; blueprints unlock crafting recipes that change the crafting-versus-selling decision on the next cycle. The reward type split is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "stacking",
        type: "prose",
        heading: "Stacking a board objective onto a run already planned",
        body:
          "Stacking a board objective onto a planned run means picking the objective that aligns with the run's existing trajectory rather than rerouting the run. A run planned for iron and wood haul can stack an objective that targets iron and wood; a run planned for the Living Forest can stack an objective that targets foraged materials. The stacking rule is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_BEGINNER],
      },
      {
        id: "pays-twice",
        type: "prose",
        heading: "Why it effectively pays twice",
        body:
          "The Quest Board effectively pays twice because the haul banks on the shop surface and the objective pays out on the board. The banked haul prices through the shop, and the objective payout adds gold or gear that funds the next reinvestment. The double-pay framing is attributed to guide sources; the existence of both the shop surface and the board is official Steam feature text.",
        links: [FALL_SELL_OFFICIAL],
      },
      {
        id: "quest-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "The official Steam feature list confirms the board turns expedition results into gold and gear. Board placement, objective examples, and blueprint rewards are attributed to the worldeka beginner guide, recorded as a guide source. No community-sourced board priority is stated as official confirmation.",
      },
    ],
    faqIds: ["quest-board-rewards", "quest-board-stacking"],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-dungeon-guide-en-us",
      "fixed-shop-upgrades-and-progression-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
  {
    id: "fixed-living-forest-foraging-en-us",
    translationKey: "living-forest-foraging",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dungeons/living-forest-foraging",
    url: "/dungeons/living-forest-foraging",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Fell and Sell Living Forest foraging: goblin raids, storms, mushroom season",
    seoTitle:
      "Fell and Sell Living Forest Foraging: Events and Best Use of a Cycle",
    metaDescription:
      "Learn how to forage the Fell and Sell Living Forest and survive its goblin raids, thunderstorms, and psychedelic mushroom season.",
    summary:
      "The Fell and Sell Living Forest yields foraged materials under three event surfaces: goblin raids, thunderstorms, and psychedelic mushroom season. This guide covers what foraging yields compared with a dungeon run and when the forest is the better use of a cycle.",
    hero: {
      eyebrow: "Living Forest foraging",
      subtitle:
        "Forage the Living Forest for materials that price cleanly on the shop surface. Plan around goblin raids, thunderstorms, and psychedelic mushroom season rather than treating them as random encounters.",
      ctas: [
        { label: "Dungeons Hub", href: "/dungeons" },
        { label: "Crafting and Gear", href: "/dungeons/crafting-and-gear" },
        { label: "Shop Pricing", href: "/shop/pricing-and-demand" },
      ],
    },
    quickAnswer:
      "The Living Forest is a foraging surface with three events: goblin raids, thunderstorms, and psychedelic mushroom season. Foraging yields foraged materials that price cleanly on the shop surface. The forest is the better use of a cycle when the dungeon depth decision looks risky and the foraged haul is in demand on the next shop day; the foraging-versus-short-descent comparison and the skip-foraging conditions frame when the forest is not the right call. The event surface is official Steam feature text; the per-event yield and the timing rule are attributed to guide sources.",
    keyFacts: [
      { label: "Event 1", value: "Goblin raids" },
      { label: "Event 2", value: "Thunderstorms" },
      { label: "Event 3", value: "Psychedelic mushroom season" },
      { label: "Yield", value: "Foraged materials that price on the shop surface" },
      { label: "Best use of a cycle", value: "When the dungeon depth decision looks risky" },
      { label: "Skip-foraging condition", value: "Quest Board dungeon feat pending" },
      { label: "Source tier", value: "Steam feature list + guide attribution" },
    ],
    modules: [
      {
        id: "foraging-yield",
        type: "prose",
        heading: "What foraging yields compared with a dungeon run",
        body:
          "Foraging yields foraged materials that price cleanly on the shop surface, while dungeon runs yield a wider mix of materials, gear, and currency. The dungeon payout is larger but the death penalty is larger. Foraging fits cycles where the dungeon depth decision looks risky and the foraged haul is in demand on the next shop day. The yield comparison is attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "goblin-raids",
        type: "prose",
        heading: "Goblin raids",
        body:
          "Goblin raids are an event surface on the foraging path. The raids raise the encounter density and shift the run from passive foraging to active combat. The raid framing is part of the official Steam feature list. Specific raid pacing and counter-tactics are attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "thunderstorms",
        type: "prose",
        heading: "Thunderstorms",
        body:
          "Thunderstorms are an event surface on the foraging path. The storms change the foraging pace and the visibility. The storm framing is part of the official Steam feature list. Specific storm pacing and counter-tactics are attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "mushroom-season",
        type: "prose",
        heading: "Psychedelic mushroom season",
        body:
          "Psychedelic mushroom season is an event surface on the foraging path. The season changes which foraged materials are available and how they price on the next shop day. The season framing is part of the official Steam feature list. Specific season pacing and counter-tactics are attributed to guide sources.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "forest-versus-dungeon",
        type: "prose",
        heading: "When the forest is the better use of a cycle",
        body:
          "The forest is the better use of a cycle when the dungeon depth decision looks risky and the foraged haul is in demand on the next shop day. It is also the better use of a cycle when the player wants to bank a small haul quickly and avoid a long dungeon run. The rule is attributed to guide sources; the existence of the forest surface is official Steam feature text.",
        links: [FALL_SELL_OFFICIAL, FALL_SELL_WIKI],
      },
      {
        id: "forest-versus-short-descent",
        type: "prose",
        heading: "Foraging vs a short dungeon descent: which cycle is more efficient",
        body:
          "A Living Forest foraging trip and a short dungeon descent are not equivalent cycles. The community wiki frames the forest as a low-risk alternative to the dungeon; the Worldeka top-tips guide devotes coverage to foraging windows and the mushroom season mechanic. A short dungeon descent yields a wider mix of materials plus a chance at gear or an altar pull, but the death penalty is larger. A forest trip yields a narrower mix of foraged materials at a lower risk. The efficiency comparison depends on the value window of the active event: a thunderstorm with the mushroom season active pushes the forest yield above a short descent of similar length; a calm day with no mushroom season drops the forest yield below a short descent of similar length. See the seasonal pricing callout on /shop/pricing-and-demand for the matching shop-day read.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_DUNGEON, FALL_SELL_WIKI],
      },
      {
        id: "value-window-each-event",
        type: "prose",
        heading: "Value window of each foraging event",
        body:
          "Each foraging event carries its own value window. A goblin raid event shifts the run from passive foraging to active combat and the haul leans combat loot rather than raw foraging, so the value window opens only when the player is equipped for it. A thunderstorm changes the foraging pace and visibility, and it pairs with the psychedelic mushroom season to push the yield above a short dungeon descent. A psychedelic mushroom season outside of a thunderstorm drops the yield below a short descent of similar length. Treat the goblin raid as a combat-skewed window, the thunderstorm-and-mushroom combination as the high-yield window, and the calm mushroom season as a low-yield window.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_DUNGEON, FALL_SELL_WIKI],
      },
      {
        id: "skip-foraging-conditions",
        type: "prose",
        heading: "Skip-foraging conditions: when the forest is not the right call",
        body:
          "Skip the forest entirely when a dungeon-featuring Quest Board feat is pending and the run can stack onto that feat: the board objective plus the banked haul pays twice on the same cycle, while a foraging trip pays once. Skip the forest on a calm day with no thunderstorm and no mushroom season active: the value window is closed. Skip the forest when shop stock is already over-supplied with foraged materials and the next shop day cannot clear a fresh haul. Skip the forest when the player's health or potions are below the risk-threshold check from /dungeons/extraction-and-death-penalty: a dungeon run with low health and low potions is worse than a foraging trip, but a foraging trip that turns into combat is also worse than a bank-and-return dungeon run. The skip conditions stack with the dungeon-side risk check.",
        links: [FALL_SELL_OFFICIAL, WORLDEKA_DUNGEON, FALL_SELL_WIKI],
      },
      {
        id: "forest-fact-boundary",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-08-30",
        body:
          "Foraging, goblin raids, thunderstorms, and psychedelic mushroom season are official Steam feature text. The per-event pacing, the forest-versus-dungeon rule, the foraging-versus-short-descent comparison, and the skip-foraging conditions are attributed to the Worldeka dungeon guide and the Fell and Sell community wiki, recorded as guide sources. No material from the RuneScape \"Goblin Raids\" event or the Idlescape \"Living Forest\" zone is used; the term is always qualified with the game name.",
      },
    ],
    faqIds: ["forest-events", "forest-versus-dungeon", "forest-versus-descent", "forest-when-skip"],
    relatedPageIds: [
      "fixed-dungeons-hub-en-us",
      "fixed-crafting-and-gear-en-us",
      "fixed-shop-pricing-and-demand-en-us",
      "home",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: LAST_REVIEWED,
  },
];