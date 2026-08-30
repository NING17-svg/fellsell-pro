import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Common Fell and Sell questions about release, platform, gameplay, wiki scope, and guide depth.",
    summary:
      "Short answers to the most common Fell and Sell questions about the launch, Steam availability, demo, multiplayer status, and guide scope.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Quick answers to release, platform, wiki, and guide questions without overclaiming.",
      ctas: [
        { label: "Release and Price", href: "/release-date-platforms-price" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "Every answer below is sourced to official facts or clear site policy so the FAQ stays accurate as launch facts change.",
    keyFacts: [
      { label: "FAQ source", value: "Official facts or site policy" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Update as launch facts change" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body:
          "Keep answers short, source-aware, and easy to update. Avoid speculative claims about release dates, platforms, gameplay systems, or technical details.",
      },
    ],
    faqIds: [
      "home-when-release",
      "home-single-player",
      "home-demo",
      "home-mods",
      "home-mac-linux",
    ],
    relatedPageIds: ["wiki", "guides", "fixed-release-date-platforms-price-en-us", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-30",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About Fell and Sell Guide: an unofficial reference hub for the dungeon roguelite and shopkeeper game by Art Games Studio S.A. and PlayWay S.A.",
    summary:
      "Why this Fell and Sell reference exists, how facts are sourced, and what readers should expect from every page.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Scope, sourcing, and editorial principles for the Fell and Sell Guide.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial reference hub for Fell and Sell by Art Games Studio S.A. and PlayWay S.A. Facts are sourced to official pages and clearly dated.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Verified facts first" },
      { label: "Scope", value: "Wiki, guides, release info, FAQ" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information about Fell and Sell without pretending the site knows more than official sources support.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Use the official Steam store page, the Steambase info page, the Fell and Sell community wiki, and reputable guide sources for launch facts. Mark uncertain areas as pending instead of filling gaps with guesses.",
      },
    ],
    faqIds: ["home-when-release", "home-single-player"],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-30",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "How to reach the Fell and Sell Guide team for corrections, official source updates, and site feedback.",
    summary:
      "How to send corrections, source updates, and feedback about the Fell and Sell Guide.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, source updates, and feedback channels.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Email corrections and source links to support@fellsell.pro so the team can verify and update the relevant page.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Email", value: "support@fellsell.pro" },
      { label: "Response", value: "Best effort, no SLA" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Email corrections, official source links, and feedback to support@fellsell.pro. Do not request private account information or game account credentials.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send official source links when facts change. Source-aware updates keep every page aligned with the latest Steam store page and Fell and Sell community wiki entries.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-30",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Fell and Sell Guide, covering analytics, logs, contact messages, and advertising when enabled.",
    summary:
      "How the Fell and Sell Guide handles analytics, logs, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "The Fell and Sell Guide does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information; if advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a visitor emails support@fellsell.pro, the message may include the information the visitor chose to send. Do not include sensitive personal information in support messages.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-30",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the Fell and Sell Guide, including unofficial status, informational scope, and acceptable use.",
    summary:
      "Unofficial status, informational scope, and acceptable use for the Fell and Sell Guide.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "The Fell and Sell Guide is an unofficial reference. Guide information may change as official details are updated; use official sources for final purchase, platform, and release decisions.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Trademark", value: "Fell and Sell is a trademark of its owner" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Art Games Studio S.A., PlayWay S.A., Valve Corporation, or any trademark owner unless explicitly stated. Fell and Sell and all related marks are the property of their respective owners.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use the Steam store page for AppID 4627110 as the source of truth for purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-08-30",
  },
];