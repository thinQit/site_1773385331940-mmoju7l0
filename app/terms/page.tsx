export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import RichText from "@/components/RichText";
import ScrollReveal from "@/components/ScrollReveal";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576867/site-images/corporate/1181619.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Terms"
            subtitle="Sample terms page for layout and navigation completeness. Replace with your final terms before launch."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Home", href: "/" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section className="py-20 md:py-28 bg-muted">
            <RichText
              headline="Using this site"
              subheadline="This is sample copy for the blueprint."
              sections={[
                {
                  title: "General",
                  body: "By using this website, you agree to these terms. This page is provided as a template and should be reviewed by counsel for your specific business.",
                },
                {
                  title: "Purchases",
                  body: "If you sell a digital product, describe licensing, refunds, and support terms here.",
                },
                {
                  title: "Contact",
                  body: "Questions? Email hello@spotlightlanding.com.",
                },
              ]}
              primaryCta={{ label: "Privacy Policy", href: "/privacy" }}
              secondaryCta={{ label: "Email us", href: "mailto:hello@spotlightlanding.com" }}
            />
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
