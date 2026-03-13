'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

interface Testimonial {
  quote: string
  name: string
  role: string
  rating: number
}

interface TestimonialsAnimatedProps {
  testimonials?: Testimonial[]
  className?: string
}

export default function TestimonialsAnimated({
  testimonials = [
    { quote: 'NovaFlow helped us cut launch time by 40% in two sprints.', name: 'Maya Chen', role: 'Head of Growth, Brightline', rating: 5 },
    { quote: 'Our conversion rate jumped from 2.1% to 3.8% within 30 days.', name: 'Daniel Ortiz', role: 'Marketing Lead, PulseLabs', rating: 5 },
    { quote: 'The onboarding was fast, clear, and genuinely useful for our team.', name: 'Priya Raman', role: 'Product Manager, CloudMotive', rating: 5 },
  ],
  className = '',
}: Partial<TestimonialsAnimatedProps>) {
  const loop = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className={cn('overflow-hidden py-20 md:py-24 bg-muted/30', className)}>
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Loved by teams focused on growth</h2>
      </div>
      <motion.div
        className="flex gap-6 px-4 md:px-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {loop.map((item, index) => (
          <Card key={item.name + index} className="min-w-[260px] sm:min-w-[320px] max-w-[85vw] sm:max-w-sm rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={item.name + '-star-' + i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mb-4 text-sm text-foreground">“{item.quote}”</p>
            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </div>
          </Card>
        ))}
      </motion.div>
    </section>
  )
}
