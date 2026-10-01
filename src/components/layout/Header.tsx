import Link from "next/link";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { getLocaleUiLabels } from "@/lib/localization";
import { getSearchIndexUrl } from "@/lib/search";

export function Header({ locale }: { locale: string }) {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Fell and Sell Guide home">
      <svg className="merchant-mark" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5v29M7 12h26M10 12l-5 12h10l-5-12M30 12l-5 12h10l-5-12M13 35h14" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
      <span>Fell <em>&</em> Sell<small>The merchant’s field guide</small></span>
    </Link>
    <nav className="primary-nav" aria-label="Primary navigation">
      <Link href="/beginner-guide">Start here</Link><Link href="/shop">Shop & economy</Link><Link href="/dungeons">Dungeons</Link><Link href="/achievements">Achievements</Link>
    </nav>
    <SearchDialog locale={locale} indexUrl={getSearchIndexUrl(locale)} labels={getLocaleUiLabels(locale)} />
  </header>;
}
