'use client'

import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Spotlight } from '@/components/ui/backgrounds/spotlight'
import PrimaryButton from '@/components/PrimaryButton'

interface CTAVortexProps {
  heading?: string
  subheading?: string
  bullets?: string[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

export default function CTAVortex({
  heading = 'Ready to turn more visitors into customers?',
  subheading = 'Launch faster, optimize continuously, and scale confidently with one unified growth platform.',
  bullets = ['No credit card required', 'Cancel anytime', 'Live onboarding in 48 hours'],
  ctaLabel = 'Start Free Trial',
  ctaHref = '#pricing',
  className = '',
}: Partial<CTAVortexProps>) {
  return (
    <section className={cn('relative overflow-hidden bg-foreground py-20 text-background md:py-24', className)}>
      <Spotlight className="-top-20 left-0 md:left-60" fill="hsl(var(--secondary))" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{subheading}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {bullets.map((bullet) => (
            <span key={bullet} className="inline-flex items-center gap-2 text-sm text-background/90">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {bullet}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <PrimaryButton label={ctaLabel} href={ctaHref} className="bg-background text-foreground hover:bg-muted" />
        </div>
      </div>
    </section>
  )
}
