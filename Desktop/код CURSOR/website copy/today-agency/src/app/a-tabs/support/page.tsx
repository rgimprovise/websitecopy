import type { Metadata } from "next";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATabsOverview } from "@/components/sections/ATabsOverview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ATABS } from "@/lib/atabs";

/**
 * Support URL для Chrome Web Store.
 * Контентно совпадает с /a-tabs/ — это требование партнёра: «Support URL
 * ведёт на общую страницу проекта».
 */
export const metadata: Metadata = {
  title: `Поддержка — ${ATABS.name} — ${ATABS.publisher}`,
  description: ATABS.tagline,
  openGraph: {
    title: `Поддержка — ${ATABS.name} — ${ATABS.publisher}`,
    description: ATABS.tagline,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.support}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsSupportPage() {
  return (
    <>
      <ATabsHero />
      <ATabsOverview />
      <ContactCTA />
    </>
  );
}
