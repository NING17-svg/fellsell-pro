# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

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
