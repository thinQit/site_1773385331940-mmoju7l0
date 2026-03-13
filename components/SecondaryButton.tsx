'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Phone, Mail, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface SecondaryButtonProps {
  label?: string
  href?: string
  icon?: string
  className?: string
}

export default function SecondaryButton({
  label = 'Learn More',
  href = '#',
  icon = 'ArrowRight',
  className = '',
}: Partial<SecondaryButtonProps>) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ArrowRight,
    Sparkles,
    Phone,
    Mail,
    ArrowUp,
  }
  const Icon = iconMap[icon] || ArrowRight

  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        'rounded-lg border-border px-6 py-3 font-medium text-foreground transition-all hover:bg-muted active:scale-[0.98]',
        className
      )}
    >
      <Link href={href} className="inline-flex items-center gap-2">
        {label}
        <Icon className="h-4 w-4" />
      </Link>
    </Button>
  )
}
