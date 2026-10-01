import Link from "next/link";
import { Smartlink } from "@/components/ads/AdSlot";
import { footerNavigation, navigationLabel } from "@/data/navigation";
export function Footer({ locale }: { locale: string }) {
  return <footer className="site-footer"><div><Link href="/" className="footer-brand">Fell & Sell Guide</Link><p>An unofficial guide. Not affiliated with Art Games Studio S.A. or PlayWay S.A.</p><p className="asset-credit">Game screenshots: official Steam store. Guide review dates appear on each page.</p></div>
    <nav aria-label="Footer navigation">{footerNavigation.map(item => <Link key={item.href} href={item.href}>{navigationLabel(item,locale)}</Link>)}<Smartlink /></nav>
  </footer>;
}
