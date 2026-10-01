# Fell & Sell V4 manual rebuild

## Scope

Manual example of assembling the shared V4 framework for a dungeon/merchant game. No production role or Skill changes. Source base: `1e3865deb711be720036738a141a1e32a0e7d83c`.

## Design

- Official Steam shop/dungeon scenes inform a deep-forest navigation surface, pale readable article surface and brass emphasis. These are this game's decisions, not a shared template preset.
- Locally hosted Bitter variable font from the Google Fonts repository; SIL OFL license kept in `public/fonts/Bitter-OFL.txt`. Body text uses system sans.
- Home: gameplay-focused hero, two task domains, loot/craft/sell/reinvest progression, complete grouped directory and review dates.
- Article: current-page group navigation, focused title, short answer/expandable original context, mobile chapter compass, real paragraphs/lists/tables/steps and next guides.
- All old V3 page shells and styles deleted. Existing content source data, 28 routes, FAQ answers, ad identity, analytics wiring and static deployment contract retained.

## Shared building blocks

Copied from `game-workflow/site-launch/templates/game-guide-site-template` commit `4f39fda6`: RichText, ModuleRenderer and semantic children, WikiNavigation, PageContents, GuideDisclosure, GuideIndex, Progression and AnswerSummary. Exact copied-file hashes are in `V4_COMPONENTS.json`; the only navigation adapter wraps the shared tree in responsive GuideDisclosure at this site's breakpoint.

## Assets

Four local official Steam screenshots registered in src/data/assets.ts. They illustrate the game UI; they are not claimed as proof of a tested build or optimal price. Original source and credits are kept. No official logo used.

## Verification

- Old Markdown regression reproduced: `## Heading` immediately followed by body loses the paragraph in the old parser. Shared RichText retains heading, paragraph, lists and tables and rejects unsafe links/HTML.
- Migration comparison: `npm run validate:v4 -- --compare-base=1e3865deb711be720036738a141a1e32a0e7d83c` checks non-home answer files byte-for-byte, every module once, retained answer context and FAQ, route discovery and review dates.
- Existing operational validators check static export, ads, search, assets, sitemap, canonical, routes and schema against the new compositions. Obsolete fixed V3 component-path assumptions updated; gates not discarded.
- Desktop/mobile browser and production acceptance are recorded in GROWTH_LOG.md when complete.
