import { MerchantHome } from "@/components/v4/MerchantHome";
import { MerchantArticle } from "@/components/v4/MerchantArticle";
import type { PageContent } from "@/types/content";
export function PageRenderer({ page }: { page: PageContent }) {
  return page.url === "/" ? <MerchantHome page={page} /> : <MerchantArticle page={page} />;
}
