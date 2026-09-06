export const PROFILE = {
  name: 'Firman Maulana',
  degree: 'S.Kom',
  major: 'Teknik Informatika',
  campus: 'STMIK Lombok',
  campusFull: 'Sekolah Tinggi Manajemen Informatika dan Komputer Lombok',
  email: 'firmanmaulanastmik@gmail.com',
  phoneDisplay: '+62 812-3689-3055',
  whatsapp: 'https://wa.me/6281236893055',
  github: 'https://github.com/Firmanstmik',
  githubLabel: 'github.com/Firmanstmik',
  avatar: '/img/profil.webp',
  role: 'Full Stack Developer',
} as const

export const STATS = [
  { value: '13+', key: 'stats.projects' },
  { value: '2', key: 'stats.companies' },
  { value: 'NL + ID', key: 'stats.markets' },
  { value: '100%', key: 'stats.live' },
] as const

export const TECH = {
  frontend: [
    { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/0B1220' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/0B1220' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
  ],
  database: [
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Prisma ORM', icon: 'https://cdn.simpleicons.org/prisma/0B1220' },
  ],
} as const

export const SKILL_KEYS = [
  'skills.s1',
  'skills.s2',
  'skills.s3',
  'skills.s4',
  'skills.s5',
  'skills.s6',
  'skills.s7',
  'skills.s8',
] as const

export type ProjectStatus = 'live' | 'building'

export type Project = {
  id: string
  code: string
  title: string
  url: string
  image: string
  status: ProjectStatus
  company?: string
  taglineKey: string
  descKey: string
  featureKeys: string[]
  tech: string[]
  accent: string
}

export const EXPERIENCE = [
  {
    id: 'ukonnect',
    company: 'Ukonnect',
    roleKey: 'exp.ukonnect.role',
    typeKey: 'exp.ukonnect.type',
    periodKey: 'exp.ukonnect.period',
    descKey: 'exp.ukonnect.desc',
    url: 'https://ukonnect.ai/en/about',
    logo: '/logos/ukonnect.webp',
    logoAlt: 'Ukonnect',
    highlights: ['exp.ukonnect.h1', 'exp.ukonnect.h2', 'exp.ukonnect.h3'],
  },
  {
    id: 'lirep',
    company: 'LIREP Global',
    roleKey: 'exp.lirep.role',
    typeKey: 'exp.lirep.type',
    periodKey: 'exp.lirep.period',
    descKey: 'exp.lirep.desc',
    url: 'https://lirepglobal.com/',
    logo: '/logos/lirep.webp',
    logoAlt: 'LIREP Global',
    highlights: ['exp.lirep.h1', 'exp.lirep.h2', 'exp.lirep.h3'],
  },
] as const

export const PROJECTS: Project[] = [
  {
    id: 'lirep',
    code: '01',
    title: 'LIREP Global',
    url: 'https://lirepglobal.com/',
    image: '/projects/lirep.jpg?v=2',
    status: 'live',
    company: 'LIREP',
    taglineKey: 'projects.lirep.tagline',
    descKey: 'projects.lirep.desc',
    featureKeys: [
      'projects.lirep.f1',
      'projects.lirep.f2',
      'projects.lirep.f3',
      'projects.lirep.f4',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'CMS'],
    accent: '#0f172a',
  },
  {
    id: 'lokaclean',
    code: '02',
    title: 'LokaClean',
    url: 'https://www.lokaclean.com/',
    image: '/projects/lokaclean.jpg?v=2',
    status: 'live',
    taglineKey: 'projects.lokaclean.tagline',
    descKey: 'projects.lokaclean.desc',
    featureKeys: [
      'projects.lokaclean.f1',
      'projects.lokaclean.f2',
      'projects.lokaclean.f3',
      'projects.lokaclean.f4',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PWA'],
    accent: '#0e7490',
  },
  {
    id: 'ayatfood',
    code: '03',
    title: 'Ayat Food',
    url: 'https://ipekcislachterij.localclicks.nl/',
    image: '/projects/ayatfood.jpg?v=2',
    status: 'live',
    company: 'Ukonnect / LocalClicks',
    taglineKey: 'projects.ayatfood.tagline',
    descKey: 'projects.ayatfood.desc',
    featureKeys: [
      'projects.ayatfood.f1',
      'projects.ayatfood.f2',
      'projects.ayatfood.f3',
      'projects.ayatfood.f4',
    ],
    tech: ['Next.js', 'Tailwind', 'SEO', 'Conversion'],
    accent: '#7f1d1d',
  },
  {
    id: 'keukencentrum',
    code: '04',
    title: 'Keuken-Centrum Utrecht',
    url: 'https://keuken-centrum.localclicks.nl/',
    image: '/projects/keukencentrum.jpg?v=3',
    status: 'live',
    company: 'Ukonnect / LocalClicks',
    taglineKey: 'projects.keuken.tagline',
    descKey: 'projects.keuken.desc',
    featureKeys: [
      'projects.keuken.f1',
      'projects.keuken.f2',
      'projects.keuken.f3',
      'projects.keuken.f4',
    ],
    tech: ['Next.js', 'Tailwind', 'Showroom UX', 'Lead Gen'],
    accent: '#1e3a5f',
  },
  {
    id: 'lombokrental',
    code: '05',
    title: 'Lombok Rentals',
    url: 'https://lombokrental.com/',
    image: '/projects/lombokrental.jpg?v=2',
    status: 'live',
    taglineKey: 'projects.rental.tagline',
    descKey: 'projects.rental.desc',
    featureKeys: [
      'projects.rental.f1',
      'projects.rental.f2',
      'projects.rental.f3',
      'projects.rental.f4',
    ],
    tech: ['Laravel', 'MySQL', 'WhatsApp', 'Booking'],
    accent: '#b45309',
  },
  {
    id: 'guruhub',
    code: '06',
    title: 'GuruHub',
    url: 'https://www.guruhub.co.id/',
    image: '/projects/guruhub.jpg?v=3',
    status: 'live',
    taglineKey: 'projects.guruhub.tagline',
    descKey: 'projects.guruhub.desc',
    featureKeys: [
      'projects.guruhub.f1',
      'projects.guruhub.f2',
      'projects.guruhub.f3',
      'projects.guruhub.f4',
    ],
    tech: ['React', 'Node.js', 'LMS', 'Auth'],
    accent: '#4f46e5',
  },
  {
    id: 'snischool',
    code: '07',
    title: 'SKYBRIDGE / SNI School',
    url: 'https://www.snischool.com/',
    image: '/projects/snischool.jpg?v=2',
    status: 'live',
    taglineKey: 'projects.sni.tagline',
    descKey: 'projects.sni.desc',
    featureKeys: ['projects.sni.f1', 'projects.sni.f2', 'projects.sni.f3', 'projects.sni.f4'],
    tech: ['Next.js', 'LMS', 'Enrollment', 'CMS'],
    accent: '#be123c',
  },
  {
    id: 'nutresion',
    code: '08',
    title: 'Nutresion LMS',
    url: 'https://nutresion.com/login',
    image: '/projects/nutresion.jpg?v=2',
    status: 'live',
    taglineKey: 'projects.nutresion.tagline',
    descKey: 'projects.nutresion.desc',
    featureKeys: [
      'projects.nutresion.f1',
      'projects.nutresion.f2',
      'projects.nutresion.f3',
      'projects.nutresion.f4',
    ],
    tech: ['React', 'LMS', 'Auth', 'Research Portal'],
    accent: '#15803d',
  },
  {
    id: 'oranje',
    code: '09',
    title: 'Oranje Onderwijs Intelligence',
    url: 'https://oranje-onderwijs-intelligence.vercel.app/en/dashboard',
    image: '/projects/oranje.jpg?v=1',
    status: 'building',
    company: 'NL Education Data',
    taglineKey: 'projects.oranje.tagline',
    descKey: 'projects.oranje.desc',
    featureKeys: [
      'projects.oranje.f1',
      'projects.oranje.f2',
      'projects.oranje.f3',
      'projects.oranje.f4',
    ],
    tech: ['Next.js', 'Web Scraping', 'Data Pipeline', 'Analytics'],
    accent: '#ea580c',
  },
  {
    id: 'subsector',
    code: '10',
    title: 'Subsector',
    url: 'https://subsector.ukonnect.id/',
    image: '/projects/subsector.jpg?v=2',
    status: 'building',
    company: 'Ukonnect',
    taglineKey: 'projects.subsector.tagline',
    descKey: 'projects.subsector.desc',
    featureKeys: [
      'projects.subsector.f1',
      'projects.subsector.f2',
      'projects.subsector.f3',
      'projects.subsector.f4',
    ],
    tech: ['Next.js', 'Configurator', 'E-commerce UX'],
    accent: '#111827',
  },
  {
    id: 'whitelabelai',
    code: '11',
    title: 'WhiteLabel.ai',
    url: 'https://whitelabelai-delta.vercel.app/',
    image: '/projects/whitelabelai.jpg?v=2',
    status: 'building',
    company: 'Ukonnect',
    taglineKey: 'projects.wl.tagline',
    descKey: 'projects.wl.desc',
    featureKeys: ['projects.wl.f1', 'projects.wl.f2', 'projects.wl.f3', 'projects.wl.f4'],
    tech: ['Next.js', 'AI UX', 'Growth Systems'],
    accent: '#1d4ed8',
  },
  {
    id: 'officeimage',
    code: '12',
    title: 'Office Image',
    url: 'https://officeimagenl.vercel.app/',
    image: '/projects/officeimage.jpg?v=2',
    status: 'building',
    company: 'Ukonnect',
    taglineKey: 'projects.oi.tagline',
    descKey: 'projects.oi.desc',
    featureKeys: ['projects.oi.f1', 'projects.oi.f2', 'projects.oi.f3', 'projects.oi.f4'],
    tech: ['Next.js', 'E-commerce', '3D UX'],
    accent: '#92400e',
  },
  {
    id: 'rijschool',
    code: '13',
    title: 'Rijschool Via Via',
    url: 'https://rijschool-via-via.vercel.app/',
    image: '/projects/rijschool.jpg?v=2',
    status: 'building',
    company: 'Ukonnect',
    taglineKey: 'projects.via.tagline',
    descKey: 'projects.via.desc',
    featureKeys: ['projects.via.f1', 'projects.via.f2', 'projects.via.f3', 'projects.via.f4'],
    tech: ['Next.js', 'Booking UX', 'Local SEO'],
    accent: '#0f766e',
  },
]

export const PROCESS_STEPS = [
  { num: '01', titleKey: 'process.s1.title', descKey: 'process.s1.desc' },
  { num: '02', titleKey: 'process.s2.title', descKey: 'process.s2.desc' },
  { num: '03', titleKey: 'process.s3.title', descKey: 'process.s3.desc' },
  { num: '04', titleKey: 'process.s4.title', descKey: 'process.s4.desc' },
  { num: '05', titleKey: 'process.s5.title', descKey: 'process.s5.desc' },
] as const

export const WHY_ITEMS = [
  { titleKey: 'why.c1.title', descKey: 'why.c1.desc' },
  { titleKey: 'why.c2.title', descKey: 'why.c2.desc' },
  { titleKey: 'why.c3.title', descKey: 'why.c3.desc' },
  { titleKey: 'why.c4.title', descKey: 'why.c4.desc' },
  { titleKey: 'why.c5.title', descKey: 'why.c5.desc' },
  { titleKey: 'why.c6.title', descKey: 'why.c6.desc' },
] as const

export const TESTIMONIALS = [
  {
    quoteKey: 'testi.q1',
    name: 'Prof Khairul Imtihan S.Kom., M.Kom',
    roleKey: 'testi.r1',
    initial: 'K',
  },
  {
    quoteKey: 'testi.q2',
    name: 'Agung Kresna',
    roleKey: 'testi.r2',
    initial: 'A',
  },
  {
    quoteKey: 'testi.q3',
    name: 'Agus Harianto',
    roleKey: 'testi.r3',
    initial: 'A',
  },
] as const

export const ABOUT_HIGHLIGHTS = [
  { titleKey: 'about.h1.title', descKey: 'about.h1.desc' },
  { titleKey: 'about.h2.title', descKey: 'about.h2.desc' },
  { titleKey: 'about.h3.title', descKey: 'about.h3.desc' },
  { titleKey: 'about.h4.title', descKey: 'about.h4.desc' },
] as const

export const AVAIL_ITEMS = [
  'avail.i1',
  'avail.i2',
  'avail.i3',
  'avail.i4',
  'avail.i5',
] as const
