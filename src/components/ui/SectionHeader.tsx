import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionHeader({
  eyebrow,
  title,
  lead,
  action,
  className,
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  action?: ReactNode
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        action && 'sm:flex-row sm:items-end sm:justify-between sm:gap-8',
        className,
      )}
    >
      <div className={cn(align === 'center' && 'mx-auto max-w-3xl')}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-4 text-balance">{title}</h2>
        {lead ? <p className={cn('section-lead', align === 'center' && 'mx-auto')}>{lead}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
