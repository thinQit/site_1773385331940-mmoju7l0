export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ContactCards from "@/components/ContactCards";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576896/site-images/corporate/12911251.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Let’s get your landing page live."
            subtitle="Questions about setup, customization, or which plan fits? Send a note and we’ll reply within 1 business day."
            primaryCta={{ label: "Email hello@spotlightlanding.com", href: "mailto:hello@spotlightlanding.com" }}
            secondaryCta={{ label: "See pricing", href: "/#pricing" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section className="py-20 md:py-28 bg-muted">
            <ContactCards
              headline="Contact details"
              subheadline="Choose the channel that’s easiest for you."
              cards={[
                {
                  title: "Email",
                  description: "Best for plan questions and customization help.",
                  value: "hello@spotlightlanding.com",
                  href: "mailto:hello@spotlightlanding.com",
                },
                {
                  title: "Sales",
                  description: "Invoices, agency licensing, and bulk requests.",
                  value: "sales@spotlightlanding.com",
                  href: "mailto:sales@spotlightlanding.com",
                },
                {
                  title: "Location",
                  description: "Business address (mail only).",
                  value: "55 Market Street, Suite 120, San Francisco, CA 94105",
                  href: "https://maps.google.com/?q=55+Market+Street+Suite+120+San+Francisco+CA+94105",
                },
              ]}
              primaryCta={{ label: "Send an email", href: "mailto:hello@spotlightlanding.com" }}
              secondaryCta={{ label: "Back to home", href: "/" }}
            />
          </section>
        </ScrollReveal>
      </div>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section className="py-20 md:py-28 bg-background">
            <CTAVortex
              title="Prefer to start now?"
              subtitle="Pick a plan and customize the copy later—structure first, polish second."
              primaryCta={{ label: "Choose a plan", href: "/#pricing" }}
              secondaryCta={{ label: "Read FAQs", href: "/#faq" }}
            />
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
