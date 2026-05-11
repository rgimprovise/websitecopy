import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadModalProvider } from "@/context/LeadModalContext";
import { LeadModal } from "@/components/ui/LeadModal";

/**
 * Marketing layout — оборачивает все Alarcev-маркетинговые страницы
 * (/, /cases, /privacy-policy, /user-agreement, /politics) в их
 * стандартный chrome (Header, Footer, LeadModalProvider, LeadModal).
 *
 * /a-tabs/* и /api/* живут вне этой группы, поэтому туда коммерческий
 * Alarcev-нав и footer не попадают — это требование A-TABS брифа.
 */
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LeadModalProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <LeadModal />
    </LeadModalProvider>
  );
}
