export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ContentSplit from "@/components/ContentSplit";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576857/site-images/corporate/1181408.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Built to keep your message focused."
            subtitle="We designed Spotlight Landing around a single idea: remove friction, highlight value, and guide visitors to one action at a time."
            primaryCta={{ label: "See pricing", href: "/#pricing" }}
            secondaryCta={{ label: "Contact", href: "/contact" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section className="py-20 md:py-28 bg-muted">
            <ContentSplit
              headline="Our approach"
              subheadline="A landing page should read like a story: promise, proof, details, decision, action."
              primaryCta={{ label: "View features", href: "/#features" }}
              secondaryCta={{ label: "Read FAQs", href: "/#faq" }}
              left={{
                title: "What we optimize for",
                items: [
                  {
                    title: "Clarity",
                    description: "Benefit-focused copy and a single primary CTA per section.",
                  },
                  {
                    title: "Trust",
                    description: "Logo cloud, testimonials, and transparent pricing reduce uncertainty.",
                  },
                  {
                    title: "Speed",
                    description: "Next.js + Tailwind + shadcn patterns keep builds fast and maintainable.",
                  },
                ],
              }}
              right={{
                stats: [
                  { label: "Typical build time", value: "1–2 days" },
                  { label: "Core sections", value: "8" },
                  { label: "Primary CTA focus", value: "1 per section" },
                ],
              }}
            />
          </section>
        </ScrollReveal>
      </div>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section className="py-20 md:py-28 bg-background">
            <CTAVortex
              title="Want a landing page that feels premium and stays simple?"
              subtitle="Start with the proven structure and customize the copy to match your offer."
              primaryCta={{ label: "Get started", href: "/#pricing" }}
              secondaryCta={{ label: "Email us", href: "mailto:hello@spotlightlanding.com" }}
            />
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
