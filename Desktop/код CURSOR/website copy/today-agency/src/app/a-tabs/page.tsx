import type { Metadata } from "next";
import { ATabsHero } from "@/components/sections/ATabsHero";
import { ATabsOverview } from "@/components/sections/ATabsOverview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ATABS } from "@/lib/atabs";

export const metadata: Metadata = {
  title: `${ATABS.name} — ${ATABS.publisher}`,
  description: ATABS.tagline,
  openGraph: {
    title: `${ATABS.name} — ${ATABS.publisher}`,
    description: ATABS.tagline,
    type: "website",
    url: `https://alarcev.n8nrgimprovise.space${ATABS.paths.home}`,
    siteName: "ALARCEV",
  },
};

export default function ATabsHomePage() {
  return (
    <>
      <ATabsHero />
      <ATabsOverview />
      <ContactCTA />
    </>
  );
}
