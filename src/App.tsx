import { About } from './components/About'
import { Contact } from './components/Contact'
import { CTA } from './components/CTA'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { SmoothScroll } from './components/SmoothScroll'
import { Stack } from './components/Stack'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Why } from './components/Why'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main>
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Stack />
          <Projects />
          <Process />
          <Why />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  )
}
