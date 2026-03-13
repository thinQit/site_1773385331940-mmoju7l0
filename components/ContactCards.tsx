"use client";

import Link from 'next/link'
import { Mail, Building2, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

interface ContactCardsProps {
  className?: string
}

export default function ContactCards({ className = '' }: Partial<ContactCardsProps>) {
  const cards = [
    { title: 'Support Email', value: 'support@novaflow.com', href: 'mailto:support@novaflow.com', icon: Mail, action: 'Send Email' },
    { title: 'Sales Team', value: '+1 (415) 555-0142', href: 'tel:+14155550142', icon: Building2, action: 'Call Sales' },
    { title: 'Office', value: '220 Market St, San Francisco, CA', href: 'https://maps.google.com', icon: MapPin, action: 'Open Map' },
  ]

  return (
    <section id="contact" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight md:text-4xl">Get in touch</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <card.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.value}</p>
              <Link href={card.href} className="mt-5 inline-block text-sm font-medium text-primary hover:underline">
                {card.action}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
