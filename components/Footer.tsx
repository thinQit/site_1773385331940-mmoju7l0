'use client'

import Link from 'next/link'
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import SecondaryButton from '@/components/SecondaryButton'

interface FooterProps {
  brandName?: string
  year?: number
  className?: string
}

export default function Footer({
  brandName = 'NovaFlow',
  year = new Date().getFullYear(),
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t border-border bg-muted/30', className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{brandName}</h3>
          <p className="text-sm text-muted-foreground">
            Conversion-focused growth platform helping teams launch, optimize, and scale faster.
          </p>
          <SecondaryButton
            label="Back to top"
            href="#"
            icon="ArrowUp"
            className="w-fit"
          />
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#features" className="hover:text-foreground">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link href="#testimonials" className="hover:text-foreground">Customer Stories</Link></li>
            <li><Link href="#faq" className="hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> 220 Market Street, San Francisco, CA 94105</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@novaflow.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (415) 555-0134</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 text-xs text-muted-foreground md:flex-row md:items-center md:px-6">
          <p>© {year} {brandName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/cookies" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
