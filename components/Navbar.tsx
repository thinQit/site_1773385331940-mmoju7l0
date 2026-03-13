'use client'

import Link from 'next/link'
import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import PrimaryButton from '@/components/PrimaryButton'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  brandName?: string
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Navbar({
  brandName = 'NovaFlow',
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel = 'Start Free Trial',
  ctaHref = '#pricing',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <div className="rounded-lg bg-primary/10 p-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <span className="font-semibold tracking-tight text-foreground">{brandName}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <PrimaryButton label={ctaLabel} href={ctaHref} />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      <div className={cn('border-t border-border/60 bg-background md:hidden', open ? 'block' : 'hidden')}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
          {links.map((link) => (
            <Link
              key={'mobile-' + link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <PrimaryButton label={ctaLabel} href={ctaHref} className="w-full justify-center" />
        </div>
      </div>
    </header>
  )
}
