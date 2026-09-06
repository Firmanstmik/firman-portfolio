import { Reveal } from '@/components/ui/Reveal'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'

export function GlobalAvailability() {
  return (
    <section className="border-y border-white/8 bg-surface/30 py-14 sm:py-16">
      <div className="section-pad container-max">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow inline-flex items-center gap-2">
                <Ix icon={Icons.global} size={14} />
                Working Globally
              </p>
              <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight">
                Indonesia → Worldwide
              </h2>
              <p className="mt-3 max-w-lg text-muted">
                Remote-first collaboration across time zones — clear communication, reliable delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Indonesia', 'Netherlands', 'Remote EU', 'Global'].map((place) => (
                <span
                  key={place}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-[0.8rem] text-muted"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mt-10 h-px overflow-hidden bg-white/8">
            <div className="absolute inset-y-0 left-0 w-2/5 animate-pulse bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
