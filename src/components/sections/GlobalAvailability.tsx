import { Reveal } from '@/components/ui/Reveal'

export function GlobalAvailability() {
  return (
    <section className="border-y border-white/8 bg-surface/30 py-12 sm:py-14">
      <div className="section-pad container-max">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">Working Globally</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Indonesia → Worldwide
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Indonesia', 'Netherlands', 'Remote EU', 'Global'].map((place) => (
                <span
                  key={place}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[0.78rem] text-muted"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mt-8 h-px overflow-hidden bg-white/8">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
