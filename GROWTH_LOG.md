# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-01 - V4 merchant field guide rebuild

- User scope: extract How to Fish reusable components to shared V4, then rebuild a different game type manually. Fell & Sell combines dungeons with shop management.
- Replaced every old V3 visual page shell and three stylesheets. Routes now use MerchantHome/MerchantArticle; all 28 existing URLs stay. Non-home answer source files and FAQ data remain unchanged; original review dates retained.
- Shared V4 components copied with file hashes in V4_COMPONENTS.json: semantic RichText/modules, grouped/current navigation, directory, progression, chapters, responsive disclosure and answer/context. Per-game assembly, deep-forest/pale reading palette, brass accents, local Bitter font and official Steam screenshots remain in this site.
- Updated CONTENT_INDEX.md from the actual route inventory; removed stale starter rows.
- Local verification: typecheck/lint, template/asset/ad/search gate, content/FAQ references, IndexNow tests, static export and rendered SEO all passed. Migration regression compared non-home answers to source base 1e3865deb711be720036738a141a1e32a0e7d83c; every module renders once; answers/context/FAQ and directory remain discoverable. Old Markdown heading+following paragraph loss reproduced, shared RichText retains it.
- Browser: 1440px home/pricing, 390px home/pricing/achievements. Fonts/images loaded. Search lazy-loads and clicks pricing route. 480px achievement table scrolls within a 333px wrapper; no document overflow. Responsive menu and chapters collapse on mobile. Preview ad/analytics requests blocked for repeatable visual inspection; this does not prove ad delivery/revenue.
- Mobile interactive acceptance: grouped menu opens, answer context opens, chapter link scrolls to its real target (~34px from top). Header entries are fully visible; home typography reduced on mobile to show more of the game scene.
- Publication: source `edd68e13b506ae5c2a5cc7427302c3b4a5c9602c` is on main; push build `e7a5247d-075b-4e42-a095-3d3983bc97bd` succeeded. Official API readback shows Worker `fellsell-pro` active version `f559c82e-6232-425b-8c59-01588380e058` at 100%. Public 28 routes are HTTP 200 with V4 and exact canonical; four game scenes, Bitter font, sitemap, robots, ads.txt and search index load. Desktop/mobile browser confirms live home/article and expandable answer/chapters. This final documentation commit is retained on the review branch; production source identity remains the above main commit.


### 2026-10-01 - Fold states each fact once and modules render as structure

- Task: Stop the hero subtitle and the Quick Answer from saying the same thing on the same screen, remove a repository-internal path published as a source, and render authored Markdown in module bodies.
- Files changed: `src/components/content/markdown.tsx` (new), `ModuleRenderer.tsx`, `StatusCallout.tsx`, `PageHero.tsx`, `ContentPage.tsx`, `HomePage.tsx`, `HubPage.tsx`, `WorkspacePage.tsx`, `src/styles/modules.css`, `src/data/pages/home.ts`, `fellsell-fixed.ts`, `fellsell-fixed-dungeon.ts`, `fellsell-fixed-shop.ts`, and this log.
- Fold changed: On `/`, `/dungeons/quest-board`, `/shop/layout-and-furniture-buffs`, `/shop/upgrades-and-progression`, `/demo`, `/multiplayer-and-co-op`, and `/mods` the subtitle already answered the page's question and the Quick Answer repeated it. The subtitle is now a positioning line naming what the page covers; the Quick Answer keeps the facts. No fact was moved, added, or removed.
- Removed: The homepage Sources list cited `game-intelligence/handoffs/game-check/build-now/fell-sell.md`, a path inside the build pipeline, as though it were a public source. Everything that bullet claimed is already attributed to the Steam store page entry above it, so the bullet is gone rather than repointed at a guess.
- Rendering changed: A prose module body is split into headings, paragraphs, lists and tables instead of being printed as one `<p>`. The homepage Sources list and the seven internal links on the home page were previously printed as literal `[label](url)` text; they now render as links and the list as a list.
- URLs affected: No URL, route, page type, keyword, CTA, title, H1, canonical, schema, or internal-link role changed, so `CONTENT_INDEX.md` needs no update.
- Verification: `npm run verify` (typecheck, lint, template, content, IndexNow, static build, rendered SEO for 28 pages / 28 sitemap URLs / 28 manifest routes) plus a sweep of the 29 built HTML files for raw heading markers, unrendered links, and internal-path leaks.

### 2026-09-14 - Achievements ledger session plan

- Task: Add a single leaf page that maps Fell and Sell's 97 Steam achievements as 13 interconnected ledgers and serves as a session-planning reference; cross-link from the dungeon weapons page (mastery grid) and the shop pricing page (Comfort vs Prestige).
- Files changed: new `src/data/pages/fellsell-fixed-achievements.ts`, `src/data/pages/fellsell-fixed-source.ts` (added 9puz achievement guide link), `src/data/pages/fellsell-fixed-dungeon.ts` (added achievements entry to dungeons hub grid, added cross-link to weapons hero CTA, weapons relatedPageIds, and weapons fact-boundary callout), `src/data/pages/fellsell-fixed-shop.ts` (added dual Comfort-versus-Prestige clarification module, achievements CTA on pricing hero, relatedPageIds on pricing, layout, and hub), `src/data/faq.ts` (four new FAQ ids), `src/lib/content.ts` (registered new page), `CONTENT_INDEX.md`, and this log.
- URLs affected: `/achievements` (new leaf), `/dungeons/weapons` (added Achievements Ledger CTA, mastery grid cross-reference in quick answer and fact-boundary callout), `/dungeons` (added Achievements Ledger leaf card and relatedPageIds), `/shop/pricing-and-demand` (added Achievements Ledger CTA, dual Comfort vs Prestige module, relatedPageIds), `/shop/layout-and-furniture-buffs` (added relatedPageIds), `/shop` (added relatedPageIds).
- New FAQ ids: `achievements-how-many`, `achievements-weapon-mastery`, `achievements-trap-names`, `achievements-comfort-versus-prestige`.
- Source links added: 9puz Fell and Sell achievement guide (re-verified 2026-09-14), Fell and Sell community wiki (S/A/B furniture tier framing).
- Source content: 13-ledger map (All enemy kills 1,000, four-family weapon mastery at 250 per family across Sword/Axe/Hammer/Staff at Novice/Adept/Journeyman/Master, Chest opens 75, Dungeon floors Floor 10, Boss kills 3, Total items crafted 60, crafted-rarity ladder Uncommon/Rare/Epic/Legendary each once, Total items sold 1,000, Trading gold 2,500, Category sales Magic 50/Weapons 80/Alcohol 50/Bones 50/Armor 80/Bloodstone 10, Comfort Level 10, Prestige Level 10, required single death). Dual-chain clarification: Comfort is decoration-driven and parallel to Prestige, not a single combined chain. Duplicate-name traps: 'Getting better!' (Craft 5 Items vs Sell 25 Items) and 'Master Dungeoneering' (Floor 8 vs Floor 10). No named boss thresholds beyond Floor 10 are stated.
- Verification: `npm run verify` plus the shared serializer before registry terminal commit.

### 2026-09-02 - Altar synergies, first profitable shop cycle, foraging vs dungeon

- Task: Expand three existing pages with new leaf content for altar cross-altar synergies, joined first profitable shop cycle, and Living Forest foraging vs short dungeon descent.
- Files changed: `src/data/pages/fellsell-fixed-dungeon.ts` (altars-and-builds and living-forest-foraging leaf pages), `src/data/pages/fellsell-fixed-shop.ts` (pricing-and-demand and layout-and-furniture-buffs leaf pages), `src/data/faq.ts` (six new FAQ entries), and this log.
- URLs affected: `/dungeons/altars-and-builds` (added Shrink + Midas Touch cross-altar synergy, manic cycling, skip-on-drawback rule, archetype trade-off callout), `/dungeons/living-forest-foraging` (added foraging vs short descent comparison, per-event value window, skip-foraging conditions), `/shop/pricing-and-demand` (added first-cycle pricing sequence: bank first then Fair at zero Prestige), `/shop/layout-and-furniture-buffs` (added first-cycle furniture sequence: single S-tier combat buff piece + same-cycle Quest Board turn-in for survivability gear).
- New FAQ ids: `altars-shrink-midas`, `altars-skip-drawback`, `forest-versus-descent`, `forest-when-skip`, `pricing-first-cycle`, `layout-first-cycle`.
- Internal links: altars, foraging, and shop pages cross-link to `/dungeons/altars-and-builds`, `/dungeons/living-forest-foraging`, `/shop/pricing-and-demand`, `/shop/layout-and-furniture-buffs`, and `/dungeons/quest-board` for the same-cycle board turn-in.
- Sources: InsertCoins Fell and Sell review (Shrink + Midas Touch named combo), Worldeka dungeon guide (altar choice as per-run build mechanic, S/A/B-tier furniture ranking), Worldeka beginner guide (bank first haul, first furniture priority, manic cycling), Fell and Sell community wiki (altar effects and cycling, low-risk forest framing), Steam feature list (Shrink, Midas Touch, manic, depressed, foraging, goblin raids, thunderstorms, psychedelic mushroom season, "Reinvest profits", "Furniture layout provides permanent combat buffs and boosts sales appeal").

### 2026-08-30 - Adsterra six-unit codes integrated

- Task: Populate the fixed Adsterra ad units in `src/data/ads.ts` with the six real codes from the Adsterra publisher dashboard.
- Files changed: `src/data/ads.ts` and this log.
- URLs affected: No URL changes; ad values are consumed by the existing fixed ad modules only.
- Ad baseline: `native-banner`, `banner-728x90`, `banner-468x60`, `banner-320x50`, `banner-160x600`, and `smartlink` now hold real publisher codes; the standard ad slots and the empty-value contract remain unchanged.
- Verification: `npm run verify` plus the read-only Adsterra completion validator before registry terminal commit.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

## 2026-10-01 — Correct premature group-03 publishing mapping

Official API readback showed `fellsell.pro` still binds Worker `fellsell-pro`. The separate user-authorized migration completed only groups 01/02; group 03 was not started. This site's prewritten shared mapping and source hook were premature: source push built the shared Worker but did not publish to this domain.

Removed the premature `.shared-worker.json` and shared GitHub Actions entry; restored this site's original Cloudflare source Git build connection, existing build/deploy commands and the same public URL/GA4/Bing variables. Its old build token had been removed during preparation; a replacement uses the already configured noninteractive API credential. No domain or DNS binding changed, no Worker recreated, and no additional group migrated. Production acceptance passed for the exact restored source build, active version and live routes as recorded above.
