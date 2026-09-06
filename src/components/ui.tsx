import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.07,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 22,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.28, ease: easeOut } }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
    >
      {children}
    </motion.div>
  )
}

export function Magnetic({
  children,
  className,
  strength = 18,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.4 })

  const onMove = (e: ReactMouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set((dx / rect.width) * strength)
    y.set((dy / rect.height) * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useTransform(my, [0, 1], [7, -7])
  const rotateY = useTransform(mx, [0, 1], [-8, 8])
  const glareX = useTransform(mx, [0, 1], [0, 100])
  const glareY = useTransform(my, [0, 1], [0, 100])
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28), transparent 45%)`

  const onMove = (e: ReactMouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative transform-gpu ${className ?? ''}`}
      style={
        reduce
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 900,
              transformStyle: 'preserve-3d',
            }
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      {children}
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare }}
        />
      ) : null}
    </motion.div>
  )
}

export function CountUp({
  value,
  className,
}: {
  value: string
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const parsed = value.match(/^(\d+)(.*)$/)
  const [shown, setShown] = useState(() => (reduce || !parsed ? value : '0'))

  useEffect(() => {
    started.current = false

    if (reduce) {
      setShown(value)
      return
    }

    const m = value.match(/^(\d+)(.*)$/)
    if (!m || !ref.current) {
      setShown(value)
      return
    }

    const target = Number(m[1])
    const suffix = m[2] ?? ''
    let raf = 0
    let startAt: number | null = null
    const duration = 900

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const tick = (now: number) => {
          if (startAt == null) startAt = now
          const progress = Math.min(1, (now - startAt) / duration)
          const eased = 1 - (1 - progress) ** 3
          if (progress >= 1) {
            setShown(value)
            return
          }
          setShown(`${Math.round(target * eased)}${suffix}`)
          raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [reduce, value])

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  )
}

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-24, 24])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.08, 1.02, 1.08])

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={imgClassName}
        width={800}
        height={1000}
        fetchPriority="high"
      />
    </div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.p
      className="mb-3 text-[0.8rem] font-medium tracking-[0.02em] text-accent"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      {children}
    </motion.p>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display max-w-3xl text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] font-bold tracking-[-0.035em] text-ink text-balance">
      {children}
    </h2>
  )
}

export function SectionIntro({ children }: { children: ReactNode }) {
  return <div className="max-w-2xl">{children}</div>
}

export { motion, AnimatePresence, useReducedMotion, easeOut }
