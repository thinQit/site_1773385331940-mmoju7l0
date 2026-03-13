'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Phone, Mail, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface PrimaryButtonProps {
  label?: string
  href?: string
  icon?: string
  className?: string
}

export default function PrimaryButton({
  label = 'Get Started',
  href = '#',
  icon = 'ArrowRight',
  className = '',
}: Partial<PrimaryButtonProps>) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ArrowRight,
    Sparkles,
    Phone,
    Mail,
    ArrowUp,
  }
  const Icon = iconMap[icon] || ArrowRight

  return (
    <Button asChild className={cn('rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]', className)}>
      <Link href={href} className="inline-flex items-center gap-2">
        {label}
        <Icon className="h-4 w-4" />
      </Link>
    </Button>
  )
}
