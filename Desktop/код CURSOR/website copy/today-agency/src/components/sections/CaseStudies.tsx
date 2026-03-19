import Image from "next/image";
import Link from "next/link";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { CASE_STUDIES } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

export function CaseStudies() {
  return (
    <Section
      id="cases"
      paddingClassName="pt-0 pb-[30px] max-[480px]:pb-0"
    >
      <Reveal as="div" className="mb-12">
        <SectionHeader label="кейсы">избранное.</SectionHeader>
      </Reveal>

      <Reveal as="div" delayMs={120}>
        <div className="flex flex-col gap-6">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.title}
              href={cs.slug ? `/cases/${cs.slug}` : "/cases"}
              className="group grid overflow-hidden bg-brand-blue md:grid-cols-2"
            >
              <div className="relative h-[480px] w-full">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex items-center bg-brand-blue px-7 py-8 md:px-10 md:py-10">
                <div>
                  <h3 className="font-[300] text-white text-[24px] leading-[1] min-[900px]:text-[40px] min-[900px]:leading-[1.2]">
                    {cs.title}
                  </h3>

                  {cs.comingSoon ? (
                    <div className="mt-4 text-[14px] font-[500] leading-[1.3] uppercase text-[#eaeaea]">
                      [ скоро ]
                    </div>
                  ) : (
                    <div className="mt-4 text-[14px] font-[500] leading-[1.3] uppercase text-[#eaeaea]">
                      {cs.description}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal as="div" delayMs={220}>
        <div className="mt-14">
          <Link
            href="/cases"
            className="inline-flex items-center gap-3 bg-brand-blue px-8 py-5 text-[28px] font-[400] leading-[1] text-white transition-colors hover:bg-brand-blue-hover max-[640px]:px-5 max-[640px]:py-3 max-[640px]:text-[16px]"
          >
            <img
              src="/images/tild3039-3764-4233-a135-323164323633__corner-down-right.svg"
              alt=""
              aria-hidden="true"
              className="h-6 w-6 max-[640px]:h-4 max-[640px]:w-4"
            />
            все кейсы.
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
