import type { ThemeConfig } from "@/types/theme";

// Theme implements the approved V3 Fell and Sell theme-spec.md:
// - dark forge-and-merchant palette (deep dungeon stone + warm counter wood + brass accent)
// - single shared theme across the only launch locale (en-US)
// - no logo, no remote hotlinks, no images (image-free theme contract)
// - variants: split-panel home, card-grid hub, reading-right-rail content, full-width workspace
export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#171311",
    surface1: "#1F1A16",
    surface2: "#2A231D",
    surface3: "#352B22",
    surfaceInverse: "#F4E9D2",
    textPrimary: "#F1E6D2",
    textMuted: "#B7A48B",
    textInverse: "#1B1410",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#E2A85B",
    focusRing: "#FF9B4D",
    line: "#3A3028",
    lineStrong: "#5A4838",
    accentPrimary: "#B33A2E",
    accentSecondary: "#D4A24A",
    accentBright: "#F0BC5A",
    statusConfirmed: "#5C9A5E",
    statusCaution: "#D6A24B",
    statusUnknown: "#8A8174",
  },
  typography: {
    headingFamily:
      "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
    bodyFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    headingWeight: 700,
  },
  shape: {
    radius: "4px",
    borderWidth: "1px",
    shadow: "0 1px 2px rgba(0,0,0,0.45)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: {
    mode: "gradient",
    overlay: 0,
    position: "center top",
  },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;