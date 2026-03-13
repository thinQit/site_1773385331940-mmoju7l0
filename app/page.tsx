export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import LogoCloud from "@/components/LogoCloud";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section
        id="hero"
        className="relative min-h-[80vh] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576905/site-images/corporate/16291129.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <HeroSpotlight
            headline="Launch a high-converting landing page in a weekend."
            subheadline="Spotlight Landing is a clean, conversion-driven Next.js + Tailwind site structure with the exact sections you need: social proof, features, testimonials, pricing, FAQ, and a final CTA."
            primaryCta={{ label: "Get the Starter Kit", href: "#pricing" }}
            secondaryCta={{ label: "See what’s included", href: "#features" }}
          />
        </div>
      </section>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section id="logo-cloud" className="py-20 md:py-28 bg-background">
            <LogoCloud
              title="Trusted by teams shipping faster"
              logos={[
                "Northwind Labs",
                "BrightDesk",
                "Keystone Analytics",
                "OrbitOps",
                "Pinecone Studio",
                "HarborPay",
              ]}
            />
          </section>
        </ScrollReveal>
      </div>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section id="features" className="py-20 md:py-28 bg-muted">
            <FeaturesGrid
              badge="Everything you need"
              headline="Everything you need to convert—nothing you don’t."
              subheadline="A simple, focused landing page blueprint with proven sections and crisp UI patterns."
              features={[
                {
                  icon: "LayoutGrid",
                  title: "Conversion-first layout",
                  description:
                    "Golden-layout section order guides visitors from value → proof → pricing → action without distractions.",
                },
                {
                  icon: "Sparkles",
                  title: "Aceternity hero animation",
                  description:
                    "HeroSpotlight creates immediate visual hierarchy and a modern first impression.",
                },
                {
                  icon: "Component",
                  title: "Shadcn UI building blocks",
                  description:
                    "Buttons, cards, accordions, badges, and dialogs with accessible defaults and Tailwind styling.",
                },
                {
                  icon: "Gauge",
                  title: "Fast, responsive, and SEO-ready",
                  description:
                    "Semantic sections, clean headings, and performance-friendly patterns for better rankings and lower bounce.",
                },
                {
                  icon: "MousePointerClick",
                  title: "Clear CTAs per section",
                  description:
                    "Each section has one primary action to keep attention on the next step.",
                },
                {
                  icon: "Wand2",
                  title: "Easy customization",
                  description:
                    "Swap copy, colors, and sections quickly—without refactoring a complex app.",
                },
              ]}
            />
          </section>
        </ScrollReveal>
      </div>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section id="testimonials" className="py-20 md:py-28 bg-background">
            <TestimonialsAnimated
              testimonials={[
                {
                  quote:
                    "We replaced a messy homepage with this structure and our signup rate increased from 2.1% to 3.4% in two weeks.",
                  name: "Maya Chen",
                  role: "Growth Lead, BrightDesk",
                  rating: 5,
                },
                {
                  quote:
                    "The section order is the real win. It reads like a story and makes the CTA feel obvious.",
                  name: "Jonas Patel",
                  role: "Founder, OrbitOps",
                  rating: 5,
                },
                {
                  quote:
                    "Clean design, great spacing, and the spotlight hero looks premium without being heavy.",
                  name: "Elena Ruiz",
                  role: "Product Designer, Northwind Labs",
                  rating: 5,
                },
              ]}
            />
          </section>
        </ScrollReveal>
      </div>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section id="pricing" className="py-20 md:py-28 bg-muted">
            <PricingTable
              plans={[
                {
                  name: "Starter",
                  price: "$49",
                  description: "Perfect for a single product or waitlist.",
                  features: [
                    "Home page with golden-layout sections",
                    "Responsive navbar + footer",
                    "SEO meta + Open Graph defaults",
                    "Tailwind + shadcn setup",
                  ],
                  highlighted: true,
                  cta: "Get Starter",
                },
                {
                  name: "Pro",
                  price: "$99",
                  description: "For teams that want extra pages and polish.",
                  features: [
                    "Everything in Starter",
                    "About + Contact pages",
                    "Reusable section components",
                    "Enhanced motion presets",
                  ],
                  highlighted: false,
                  cta: "Get Pro",
                },
                {
                  name: "Studio",
                  price: "$199",
                  description: "For agencies shipping multiple client sites.",
                  features: [
                    "Everything in Pro",
                    "Style guide page",
                    "Multiple CTA variants",
                    "Priority support (email)",
                  ],
                  highlighted: false,
                  cta: "Get Studio",
                },
              ]}
            />
          </section>
        </ScrollReveal>
      </div>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section id="faq" className="py-20 md:py-28 bg-background">
            <FAQAccordion
              items={[
                {
                  question: "Is this a web app or a marketing website?",
                  answer:
                    "It’s a marketing website blueprint. The focus is on conversion sections (hero, proof, features, pricing, FAQ, CTA) rather than dashboards or authenticated flows.",
                },
                {
                  question: "Do I need a backend or database?",
                  answer:
                    "No. This setup is static-first. You can add a form provider (e.g., Formspree) or a lightweight API later if needed.",
                },
                {
                  question: "Can I change the hero animation?",
                  answer:
                    "Yes—this blueprint uses the HeroSpotlight variant by default. You can swap to other Aceternity hero blocks while keeping the section order intact.",
                },
                {
                  question: "Is it optimized for mobile and SEO?",
                  answer:
                    "Yes. Sections use semantic headings, clean spacing, and responsive grids. Add your final copy, images, and metadata for best results.",
                },
                {
                  question: "What should I customize first?",
                  answer:
                    "Start with the hero headline/subheadline, primary CTA label, and pricing. Those three elements typically drive the biggest conversion lift.",
                },
              ]}
            />
          </section>
        </ScrollReveal>
      </div>

      <div className="animate-fade-in-up">
        <ScrollReveal>
          <section id="cta" className="py-20 md:py-28 bg-muted">
            <CTAVortex
              heading="Ready to publish a page that converts?"
              subheading="Use the proven section order, crisp typography, and high-contrast CTAs to launch confidently."
              ctaLabel="Start with Starter ($49)"
              ctaHref="mailto:sales@spotlightlanding.com?subject=Starter%20Kit%20Purchase%20Request"
              bullets={[
                "Deploy to Vercel in minutes",
                "Edit copy in one place with reusable sections",
                "Accessible components and clean UI defaults",
              ]}
            />
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
