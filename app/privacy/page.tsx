export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import RichText from "@/components/RichText";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section
        className="relative min-h-[80vh] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576909/site-images/corporate/1181638.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            title="Privacy Policy"
            subtitle="A straightforward policy page you can adapt to your business. Replace sample content with your legal text before publishing."
            primaryCta={{ label: "Contact", href: "/contact" }}
            secondaryCta={{ label: "Home", href: "/" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section className="py-20 md:py-28 bg-muted">
            <RichText
              headline="How we handle information"
              subheadline="This is sample copy for layout purposes."
              sections={[
                {
                  title: "Information you provide",
                  body: "If you email us, we receive your email address and the information you include in your message. We use it only to respond.",
                },
                {
                  title: "Analytics",
                  body: "You may choose to use privacy-friendly analytics. If enabled, analytics data is used to understand page performance and improve content.",
                },
                {
                  title: "Contact",
                  body: "For privacy questions, email hello@spotlightlanding.com.",
                },
              ]}
              primaryCta={{ label: "Email us", href: "mailto:hello@spotlightlanding.com" }}
              secondaryCta={{ label: "Terms", href: "/terms" }}
            />
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
