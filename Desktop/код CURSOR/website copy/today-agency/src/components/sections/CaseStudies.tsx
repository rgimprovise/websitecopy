import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { CASE_STUDIES } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

export function CaseStudies() {
  return (
    <section id="cases" className="bg-brand-gray pb-8 sm:pb-[30px]">
      <Container>
        <Reveal as="div" className="mb-6 sm:mb-10 md:mb-12">
          <SectionHeader label="кейс">реальный проект.</SectionHeader>
        </Reveal>
      </Container>

      <Reveal as="div" delayMs={120}>
        <Container>
          <div className="flex flex-col gap-6">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.title}
                href={cs.slug ? `/cases/${cs.slug}` : "/cases"}
                className="group grid overflow-hidden bg-[#FF150E] md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[480px]">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {cs.logo && (
                    <img
                      src={cs.logo}
                      alt=""
                      className="absolute left-1/2 top-6 z-10 w-[160px] -translate-x-1/2 sm:w-[216px]"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center bg-[#FF150E] px-5 py-6 sm:px-7 sm:py-8 md:px-10 md:py-10">
                  <h3 className="text-[22px] font-[300] leading-[1.1] text-white sm:text-[24px] sm:leading-[1] min-[900px]:text-[40px] min-[900px]:leading-[1.2]">
                    {cs.title}
                  </h3>

                  {cs.comingSoon ? (
                    <div className="mt-4 text-[15px] font-[500] uppercase leading-[1.3] text-white/80">
                      [ скоро ]
                    </div>
                  ) : (
                    <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                      {cs.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[14px] leading-[1.4] text-white/85 sm:text-[15px]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[6px] block h-[4px] w-[4px] shrink-0 bg-white"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Reveal>

      <Container>
        <Reveal as="div" delayMs={220}>
          <div className="mt-8 sm:mt-14">
            <a
              href="https://t.me/ALARCEVBOT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF150E] px-5 py-3 text-[16px] font-[400] leading-[1] text-white transition-colors hover:bg-[#E0120B] sm:px-8 sm:py-5 sm:text-[28px]"
            >
              <img
                src="/images/tild3039-3764-4233-a135-323164323633__corner-down-right.svg"
                alt=""
                aria-hidden="true"
                className="h-4 w-4 brightness-0 invert sm:h-6 sm:w-6"
              />
              запросить кейс.
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
