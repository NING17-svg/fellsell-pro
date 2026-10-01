import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { theme } from "@/data/theme";
import { themeStyle } from "@/lib/theme";
export function PageShell({ children, locale }: { children: React.ReactNode; locale: string }) {
  return <div className="merchant-site" style={themeStyle(theme)} data-locale={locale}><a href="#main-content" className="skip-link">Skip to content</a><Header locale={locale} /><main id="main-content">{children}</main><Footer locale={locale} /></div>;
}
