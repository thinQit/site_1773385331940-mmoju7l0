"use client";

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContentSplitProps {
  title?: string
  description?: string
  bullets?: string[]
  stats?: { label: string; value: string }[]
  imageSrc?: string
  className?: string
}

export default function ContentSplit({
  title = 'Built for teams that move fast and measure everything',
  description = 'Our mission is simple: remove friction from growth execution. From idea to insight, NovaFlow helps your team ship confidently and improve performance continuously.',
  bullets = ['Unified campaign and landing workflow', 'Real-time insights with actionable recommendations', 'Collaboration tools for product, marketing, and sales'],
  stats = [
    { label: 'Avg. conversion lift', value: '+31%' },
    { label: 'Faster launch cycles', value: '2.4x' },
  ],
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771577370/site-images/team-people/10375912.jpg',
  className = '',
}: Partial<ContentSplitProps>) {
  return (
    <section id="features" className={cn('py-20 md:py-24 bg-muted/30', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">{description}</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-background p-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <Image src={imageSrc} alt="Team collaboration" width={800} height={600} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
