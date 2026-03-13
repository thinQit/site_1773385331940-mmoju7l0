"use client";

import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items?: FAQItem[]
  className?: string
}

export default function FAQAccordion({
  items = [
    { question: 'How fast can we launch?', answer: 'Most teams are live in under a week with templates and guided setup.' },
    { question: 'Can we cancel anytime?', answer: 'Yes. All plans are month-to-month unless you choose annual billing.' },
    { question: 'Do you support migration?', answer: 'Absolutely. Our success team helps migrate data and workflows at no extra charge.' },
    { question: 'Is there enterprise security?', answer: 'Yes, including SSO, role permissions, audit logs, and SOC2-aligned controls.' },
  ],
  className = '',
}: Partial<FAQAccordionProps>) {
  return (
    <section id="faq" className={cn('py-20 md:py-24 bg-muted/30', className)}>
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight md:text-4xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={'item-' + index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Still have questions? <Link href="#contact" className="font-medium text-primary hover:underline">Contact our team</Link>.
        </p>
      </div>
    </section>
  )
}
