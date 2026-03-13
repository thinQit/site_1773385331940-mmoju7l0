"use client";

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

interface PricingTableProps {
  plans?: Plan[]
  className?: string
}

export default function PricingTable({
  plans = [
    { name: 'Starter', price: '$29/mo', description: 'For individuals launching quickly', features: ['1 workspace', 'Basic analytics', 'Email support'], cta: 'Get Starter' },
    { name: 'Growth', price: '$99/mo', description: 'For teams optimizing conversion', features: ['5 workspaces', 'Advanced analytics', 'A/B testing', 'Priority support'], highlighted: true, cta: 'Start Growth' },
    { name: 'Scale', price: '$249/mo', description: 'For companies scaling globally', features: ['Unlimited workspaces', 'Attribution insights', 'SSO + RBAC', 'Dedicated success manager'], cta: 'Talk to Sales' },
  ],
  className = '',
}: Partial<PricingTableProps>) {
  return (
    <section id="pricing" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple pricing that scales with you</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'rounded-xl border border-border bg-card p-6 shadow-sm transition-all',
                plan.highlighted ? 'border-primary shadow-md ring-1 ring-primary/20' : ''
              )}
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={plan.name + feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {plan.highlighted ? (
                  <PrimaryButton label={plan.cta} href="#contact" className="w-full justify-center" />
                ) : (
                  <SecondaryButton label={plan.cta} href="#contact" className="w-full justify-center" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
