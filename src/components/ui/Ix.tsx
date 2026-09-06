import type { ComponentType, SVGProps } from 'react'
import { cn } from '@/lib/utils'

type IconsaxProps = {
  size?: string | number
  color?: string
  variant?: 'Linear' | 'Outline' | 'TwoTone' | 'Bulk' | 'Broken' | 'Bold'
} & SVGProps<SVGSVGElement>

type IconsaxIcon = ComponentType<IconsaxProps>

/** Consistent Iconsax styling across the site */
export function Ix({
  icon: Icon,
  size = 22,
  variant = 'Bold',
  className,
  color = 'currentColor',
  ...rest
}: {
  icon: IconsaxIcon
  size?: number
  variant?: IconsaxProps['variant']
  className?: string
  color?: string
} & Omit<SVGProps<SVGSVGElement>, 'color' | 'ref'>) {
  return (
    <Icon
      size={size}
      variant={variant}
      color={color}
      className={cn('shrink-0', className)}
      {...rest}
    />
  )
}

export type { IconsaxIcon }
