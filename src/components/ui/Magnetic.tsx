'use client'

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

export function Magnetic({
  children,
  className,
  strength = 14,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 20 })
  const sy = useSpring(y, { stiffness: 260, damping: 20 })

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * strength)
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * strength)
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
