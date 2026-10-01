import type { ThemeConfig } from "@/types/theme";

// This site’s design decisions. Shared V4 components carry no game palette.
export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#102D28",
    surface1: "#173C34",
    surface2: "#214B40",
    surface3: "#2C574A",
    surfaceInverse: "#F5F7EF",
    textPrimary: "#F4F4E8",
    textMuted: "#BECABD",
    textInverse: "#182E25",
    textOnAccentPrimary: "#182E25",
    textLink: "#DAB779",
    focusRing: "#FF9B4D",
    line: "#315347",
    lineStrong: "#59715E",
    accentPrimary: "#D0A55F",
    accentSecondary: "#D4A24A",
    accentBright: "#F0BC5A",
    statusConfirmed: "#5C9A5E",
    statusCaution: "#D6A24B",
    statusUnknown: "#8A8174",
  },
  typography: {
    headingFamily:
      "'Bitter', Georgia, serif",
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
    mode: "solid",
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
