import { Reveal } from "../ui/Reveal";
import { OpenLeadModalButton } from "../ui/OpenLeadModalButton";
import { HERO_CONTENT } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className={[
        "relative overflow-hidden bg-[#121212]",
        "h-[860px]",
        "max-[959px]:h-[660px]",
        "max-[639px]:h-[540px]",
      ].join(" ")}
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
        >
          <source src="/video/MAIN7s.webm" type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-[#121212]/40" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-10">
          <div
            className="flex flex-col items-start"
            style={{ fontSize: "18px", lineHeight: "30px" }}
          >
            <Reveal as="h1" className="w-full max-w-[980px] text-left">
              <span className="block text-[clamp(32px,6vw,77px)] font-[400] leading-[0.96] tracking-[-0.04em] text-white">
                {HERO_CONTENT.title}
              </span>
            </Reveal>

            <Reveal delayMs={150} as="div" className="mt-10">
              <OpenLeadModalButton className="inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-light text-brand-blue transition-colors hover:bg-[#f2f2f2] sm:px-7 sm:py-4">
                {HERO_CONTENT.cta}
              </OpenLeadModalButton>
            </Reveal>
          </div>
        </div>

      </div>

      {/* Gradient divider — behind interactive content */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[120px] w-full shrink-0"
        style={{ background: "linear-gradient(rgb(18, 18, 18) 52%, rgb(234, 234, 234) 100%)" }}
      />
    </section>
  );
}
