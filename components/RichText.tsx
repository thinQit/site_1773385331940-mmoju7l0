"use client";

import { cn } from '@/lib/utils'

interface RichTextProps {
  title?: string
  sections?: { heading: string; body: string }[]
  className?: string
}

export default function RichText({
  title = 'Terms & Privacy Overview',
  sections = [
    { heading: '1. Data Usage', body: 'We process account and usage data to provide core platform functionality, improve service reliability, and deliver customer support.' },
    { heading: '2. Security', body: 'All traffic is encrypted in transit and sensitive data is secured using industry-standard controls and regular access reviews.' },
    { heading: '3. Customer Rights', body: 'Customers can request data export, correction, or deletion by contacting our support team at privacy@novaflow.com.' },
  ],
  className = '',
}: Partial<RichTextProps>) {
  return (
    <section className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        <article className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-2 text-xl font-semibold text-foreground">{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
