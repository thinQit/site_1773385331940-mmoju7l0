"use client";

import { cn } from '@/lib/utils'

interface LogoCloudProps {
  logos?: string[]
  title?: string
  className?: string
}

export default function LogoCloud({
  logos = ['Acme Inc', 'Brightline', 'PulseLabs', 'CloudMotive', 'VentureOps', 'Northstar'],
  title = 'Trusted by fast-growing teams worldwide',
  className = '',
}: Partial<LogoCloudProps>) {
  return (
    <section className={cn('py-20 md:py-24', className)} id="social-proof">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-16 items-center justify-center rounded-xl border border-border bg-card px-4 text-sm font-semibold text-muted-foreground grayscale transition-all hover:grayscale-0 hover:text-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
