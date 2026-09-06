import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-y border-y border-white/8 bg-surface/40">
      <div className="section-pad container-max">
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight">
            What Clients Say
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Real feedback from people I&apos;ve worked with.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <blockquote className="card-surface flex h-full flex-col p-6">
                <div className="mb-4 flex gap-1 text-accent">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="flex-1 text-[0.98rem] leading-relaxed text-text/90">
                  “{item.quote}”
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <div className="grid size-11 place-items-center rounded-full bg-accent-soft font-semibold text-accent">
                    {item.initial}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold">{item.name}</cite>
                    <p className="mt-0.5 text-xs text-muted">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
