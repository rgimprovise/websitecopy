import { Section } from "../ui/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";
import { BLOG_POSTS } from "@/lib/constants";

export function Blog() {
  return (
    <Section id="blog" bg="gray" paddingClassName="pt-[60px] pb-[60px]">
      <Reveal as="div">
        <h2 className="mb-4">
          <SectionLabel className="font-[500]">блог</SectionLabel>
        </h2>
        <p className="max-w-[980px] font-[300] leading-[0.92] text-[26px] min-[900px]:text-[44px]">
          делимся опытом и подходами.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-0">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.externalUrl} as="div" delayMs={i * 100}>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-6 border-t border-brand-dark/20 py-8 first:border-t-0 md:grid-cols-[200px_1fr] md:py-10"
            >
              {post.image && (
                <div className="overflow-hidden rounded-[4px]">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-0">
                  <span className="text-[13px] font-[500] uppercase tracking-[0.15em] text-brand-muted">
                    {post.tag}
                  </span>
                  <span className="mx-2 text-[13px] text-brand-muted">/</span>
                  <span className="text-[13px] text-brand-muted">
                    {post.date}
                  </span>
                </div>

                <h3 className="mt-3 text-[20px] font-[300] leading-[1.15] text-brand-dark transition-colors group-hover:text-brand-blue min-[900px]:text-[28px] min-[900px]:leading-[1.12]">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-[640px] text-[15px] leading-[1.45] text-brand-dark/70">
                  {post.excerpt}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
