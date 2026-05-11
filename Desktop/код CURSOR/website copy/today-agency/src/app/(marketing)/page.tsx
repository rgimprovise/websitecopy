import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Clients } from "@/components/sections/Clients";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Faq } from "@/components/sections/Faq";
import { Blog } from "@/components/sections/Blog";
import { PageReveal } from "@/components/ui/PageReveal";

export default function Home() {
  return (
    <>
      <PageReveal />
      <Hero />
      <Services />
      <Intro />
      <ProblemSolution />
      <CaseStudies />
      <Approach />
      <Clients />
      <Blog />
      <Faq />
      <ContactCTA />
    </>
  );
}
