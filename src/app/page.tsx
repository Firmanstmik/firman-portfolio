import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Services } from '@/components/sections/Services'
import { TechStack } from '@/components/sections/TechStack'
import { Principles } from '@/components/sections/Principles'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { About } from '@/components/sections/About'
import { GlobalAvailability } from '@/components/sections/GlobalAvailability'
import { Contact } from '@/components/sections/Contact'
import { SITE, PROFILE } from '@/data/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  url: SITE.url,
  email: SITE.email,
  image: `${SITE.url}/img/firman_img.webp`,
  sameAs: [SITE.github],
  alumniOf: PROFILE.campusFull,
  knowsAbout: [
    'Full-stack development',
    'SaaS',
    'API design',
    'System architecture',
    'Web applications',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      <Services />
      <TechStack />
      <Principles />
      <Process />
      <Testimonials />
      <About />
      <GlobalAvailability />
      <Contact />
    </>
  )
}
