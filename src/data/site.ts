export const SITE = {
  name: 'FIRMANLABS',
  title: 'Firman · Full Stack Developer | Digital Products & Business Systems',
  description:
    'Full stack developer building scalable web applications, SaaS platforms, APIs, and business systems for clients worldwide.',
  url: 'https://www.firmanlabs.my.id',
  email: 'firmanmaulanastmik@gmail.com',
  github: 'https://github.com/Firmanstmik',
  whatsapp: 'https://wa.me/6281236893055',
  phoneDisplay: '+62 812 3689 3055',
} as const

export const PROFILE = {
  name: 'Firman Maulana',
  brand: 'FIRMANLABS',
  degree: 'S.Kom',
  major: 'Teknik Informatika',
  campus: 'STMIK Lombok',
  campusFull: 'Sekolah Tinggi Manajemen Informatika dan Komputer Lombok',
  role: 'Full stack Developer',
  location: 'Based in Indonesia',
  availability: 'Available for international projects',
  avatar: '/img/firman_img.webp',
  headline: ['I Build Digital Products', 'That Move Businesses', 'Forward.'],
  subcopy:
    'Full stack developer building scalable SaaS, business platforms, APIs, and AI powered systems for companies that need more than just a website.',
} as const

export const STATS = [
  { value: '13+', label: 'Projects Delivered' },
  { value: '2', label: 'Remote Companies' },
  { value: 'NL + ID', label: 'Markets Served' },
  { value: '100%', label: 'Remote Ready' },
] as const

export const TERMINAL_LINES = [
  'Full stack Developer',
  'Problem Solver',
  'System Builder',
  'Remote Worker',
  'Always Learning',
] as const

export type ProjectStatus = 'live' | 'building'

export type Project = {
  slug: string
  code: string
  title: string
  category: string
  tagline: string
  summary: string
  url: string
  image: string
  status: ProjectStatus
  featured: boolean
  company?: string
  tech: string[]
  role: string[]
  problem: string
  solution: string
  features: string[]
  challenges: string[]
  results: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'lirep-global',
    code: '01',
    title: 'LIREP Global',
    category: 'Property / Intelligence',
    tagline: 'Property intelligence for Lombok investment',
    summary:
      'Premium real estate intelligence platform with curated assets, area research, trust architecture, and private consultation flows for investors.',
    url: 'https://lirepglobal.com/',
    image: '/projects/lirep.jpg',
    status: 'live',
    featured: true,
    company: 'LIREP',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'CMS'],
    role: [
      'Full stack / Product Engineer',
      'System architecture',
      'Investment UX',
      'Lead & consultation flows',
      'Deployment',
    ],
    problem:
      'Investors needed clarity across Lombok property opportunities without noisy listings or unverified claims.',
    solution:
      'Built a curated intelligence surface with asset storytelling, area research, and advisory journeys that convert trust into private consultations.',
    features: [
      'Investment asset showcase',
      'Area intelligence maps',
      'Advisory CTA journeys',
      'Research & market briefs',
    ],
    challenges: [
      'Balancing editorial luxury with dense market data',
      'Structuring trust signals for high consideration buyers',
    ],
    results: [
      'Live production platform serving Lombok investors',
      'Clear consultation funnel from research to private advisory',
    ],
  },
  {
    slug: 'lokaclean',
    code: '02',
    title: 'LokaClean',
    category: 'Marketplace / Hospitality',
    tagline: 'Hospitality outsourcing marketplace',
    summary:
      'Professional cleaning and hospitality outsourcing for hotels, villas, and restaurants across Lombok, with booking packages and WhatsApp conversion.',
    url: 'https://www.lokaclean.com/',
    image: '/projects/lokaclean.jpg',
    status: 'live',
    featured: true,
    tech: ['React', 'TypeScript', 'Node.js', 'PWA'],
    role: [
      'Full stack Developer',
      'Marketplace UX',
      'Booking flows',
      'WhatsApp conversion',
    ],
    problem:
      'Hospitality operators needed a reliable way to outsource cleaning with clear packages and fast booking.',
    solution:
      'Shipped a conversion focused marketplace with package storytelling, booking paths, and WhatsApp first operations.',
    features: [
      'Hospitality packages',
      'Web app booking',
      'WhatsApp admin chat',
      'Multi location coverage',
    ],
    challenges: [
      'Designing for both guests and operations teams',
      'Keeping conversion simple across mobile first users',
    ],
    results: [
      'Live booking surface for Lombok hospitality partners',
      'WhatsApp driven operational handoff',
    ],
  },
  {
    slug: 'lombok-rentals',
    code: '03',
    title: 'Lombok Rentals',
    category: 'Booking / Travel',
    tagline: 'Car rental Lombok, self drive & chauffeur',
    summary:
      'Full rental platform with fleet pricing, WhatsApp booking, airport transfer services, travel guides, and Google review social proof.',
    url: 'https://lombokrental.com/',
    image: '/projects/lombokrental.jpg',
    status: 'live',
    featured: true,
    tech: ['Laravel', 'MySQL', 'WhatsApp', 'Booking'],
    role: [
      'Full stack Developer',
      'Booking system',
      'Fleet & pricing UX',
      'Operations automation',
    ],
    problem:
      'The rental business needed a production booking system that matched real fleet operations and WhatsApp driven sales.',
    solution:
      'Engineered fleet pricing, booking journeys, airport transfer packages, and content that supports conversion and trust.',
    features: [
      'Fleet & pricing system',
      'WhatsApp booking flow',
      'Airport transfer packages',
      'Travel intelligence content',
    ],
    challenges: [
      'Mapping real operational rules into clean UX',
      'Keeping booking friction low for travelers',
    ],
    results: [
      'Live rental booking platform',
      'Owner feedback: operational efficiency improved substantially',
    ],
  },
  {
    slug: 'guruhub',
    code: '04',
    title: 'GuruHub',
    category: 'Education / LMS',
    tagline: 'Learning platform for Indonesia',
    summary:
      'EdTech platform connecting students, teachers, and institutions with courses, live classes, certificates, and official education information.',
    url: 'https://www.guruhub.co.id/',
    image: '/projects/guruhub.jpg',
    status: 'live',
    featured: true,
    tech: ['React', 'Node.js', 'LMS', 'Auth'],
    role: [
      'Full stack Developer',
      'Learning UX',
      'Dashboards',
      'Enrollment journeys',
    ],
    problem:
      'Education stakeholders needed a modern learning surface connecting students, teachers, and institutions.',
    solution:
      'Delivered dashboards, course catalog, live class flows, and certificate journeys for production use.',
    features: [
      'Student & teacher dashboards',
      'Course catalog & enrollment',
      'Live class scheduling',
      'Certificate journeys',
    ],
    challenges: [
      'Supporting multiple user roles without clutter',
      'Keeping learning flows clear on mobile',
    ],
    results: [
      'Live EdTech platform in Indonesia',
      'Trusted by education stakeholders for production learning flows',
    ],
  },
  {
    slug: 'oranje-onderwijs',
    code: '05',
    title: 'Oranje Onderwijs Intelligence',
    category: 'Data / Education',
    tagline: 'Netherlands education data intelligence',
    summary:
      'Live intelligence platform that scrapes and normalizes Dutch education programs across institutions, with filters, catalogs, and ecosystem analytics.',
    url: 'https://oranje-onderwijs-intelligence.vercel.app/en/dashboard',
    image: '/projects/oranje.jpg',
    status: 'building',
    featured: false,
    tech: ['Next.js', 'Web Scraping', 'Data Pipeline', 'Analytics'],
    role: [
      'Full stack Developer',
      'Scraping architecture',
      'Data normalization',
      'Dashboard UX',
    ],
    problem:
      'Manual education research across Dutch institutions does not scale.',
    solution:
      'Built a modular scraping and normalization pipeline with a live program catalog and ecosystem insights.',
    features: [
      'Multi source web scraping pipeline',
      'Normalization & deduplication',
      'Program catalog + dimension filters',
      'Ecosystem insights dashboards',
    ],
    challenges: [
      'Handling heterogeneous institutional sources',
      'Keeping data validated while expanding coverage',
    ],
    results: [
      'POC live across 3 institutions and 100+ programs',
      'Architecture prepared for nationwide expansion',
    ],
  },
  {
    slug: 'keuken-centrum',
    code: '06',
    title: 'Keuken Centrum Utrecht',
    category: 'Conversion / Brand',
    tagline: 'Premium kitchen destination Utrecht',
    summary:
      'Luxury kitchen showroom website with brand collections, materials, appliances, and showroom appointment conversion.',
    url: 'https://keuken-centrum.localclicks.nl/',
    image: '/projects/keukencentrum.jpg',
    status: 'live',
    featured: false,
    company: 'Ukonnect / LocalClicks',
    tech: ['Next.js', 'Tailwind', 'Showroom UX', 'Lead Gen'],
    role: ['Frontend Developer', 'Conversion UX', 'Brand storytelling'],
    problem: 'A premium kitchen brand needed a showroom site that converts appointments.',
    solution: 'Built an editorial conversion experience with collection storytelling and booking CTAs.',
    features: [
      'Brand collection storytelling',
      'Showroom conversion paths',
      'Materials & appliances catalog',
      'Premium editorial layout',
    ],
    challenges: ['Maintaining luxury pacing while driving clear CTAs'],
    results: ['Live NL conversion website for showroom visits'],
  },
  {
    slug: 'ayat-food',
    code: '07',
    title: 'Ayat Food',
    category: 'B2B / Conversion',
    tagline: 'Premium Halal meat wholesaler (NL)',
    summary:
      'High conversion B2B website for Ayat Food with Halal product catalog, trust pillars, and quote request flows.',
    url: 'https://ipekcislachterij.localclicks.nl/',
    image: '/projects/ayatfood.jpg',
    status: 'live',
    featured: false,
    company: 'Ukonnect / LocalClicks',
    tech: ['Next.js', 'Tailwind', 'SEO', 'Conversion'],
    role: ['Frontend Developer', 'Conversion UX', 'Trust architecture'],
    problem: 'B2B buyers needed trust and a clear path to request quotes.',
    solution: 'Shipped assortment UX, certification storytelling, and quote funnels for NL market.',
    features: [
      'Product assortment UX',
      'Trust & certification story',
      'Quote request funnel',
      'NL market positioning',
    ],
    challenges: ['Translating wholesale trust into a digital journey'],
    results: ['Live B2B conversion website in the Netherlands'],
  },
  {
    slug: 'whitelabel-ai',
    code: '08',
    title: 'WhiteLabel.ai',
    category: 'AI / Growth',
    tagline: 'AI growth systems by Ukonnect',
    summary:
      'Product marketing site for WhiteLabel.ai covering AI lead generation, sales automation, and connected growth systems.',
    url: 'https://whitelabelai-delta.vercel.app/',
    image: '/projects/whitelabelai.jpg',
    status: 'building',
    featured: false,
    company: 'Ukonnect',
    tech: ['Next.js', 'AI UX', 'Growth Systems'],
    role: ['Full stack Developer', 'Product marketing UX', 'Conversion architecture'],
    problem: 'An AI growth product needed a clear narrative from audit to automation.',
    solution: 'Built system storytelling, partner proof, and book a call conversion paths.',
    features: [
      'System storytelling',
      'Partner social proof',
      'Audit → automate funnel',
      'Book a call conversion',
    ],
    challenges: ['Explaining complex AI systems without fluff'],
    results: ['In build product marketing surface for Ukonnect'],
  },
  {
    slug: 'rijschool-via-via',
    code: '09',
    title: 'Rijschool Via Via',
    category: 'Conversion / Brand',
    tagline: 'Premium rijopleiding in Leiderdorp',
    summary:
      'Premium driving school website for Rijschool Via Via in Leiderdorp · calm brand storytelling, trust signals, regional coverage, and conversion paths for trial lessons.',
    url: 'https://rijschool-via-via.vercel.app/',
    image: '/projects/rijschool.jpg',
    status: 'live',
    featured: true,
    company: 'Ukonnect / LocalClicks',
    tech: ['Next.js', 'Tailwind', 'Conversion UX', 'SEO'],
    role: [
      'Frontend Developer',
      'Brand storytelling',
      'Conversion UX',
      'Deployment',
    ],
    problem:
      'A premium Dutch driving school needed a calm, trustworthy digital presence that converts trial lessons without feeling pushy.',
    solution:
      'Built an editorial conversion site around the Via Via method: personal guidance, fixed instructors, regional coverage, and clear contact CTAs.',
    features: [
      'Premium brand storytelling',
      'Method & trust architecture',
      'Regional coverage UX',
      'Trial lesson conversion paths',
    ],
    challenges: [
      'Translating a calm in person teaching philosophy into web pacing',
      'Balancing luxury tone with clear booking/contact conversion',
    ],
    results: [
      'Live premium conversion website for Leiderdorp and surrounding areas',
      'Clear journey from brand story to contact / trial lesson',
    ],
  },
]

export const SERVICES = [
  {
    code: '01',
    title: 'Web Applications',
    desc: 'Custom web apps, SaaS platforms, admin systems, and portals built for production.',
  },
  {
    code: '02',
    title: 'Mobile Applications',
    desc: 'Cross platform apps with Flutter, Dart, Kotlin, and progressive web experiences.',
  },
  {
    code: '03',
    title: 'API & Backend',
    desc: 'Scalable APIs, authentication, databases, and system architecture end to end.',
  },
  {
    code: '04',
    title: 'Deployment & DevOps',
    desc: 'CI/CD, server setup, monitoring, and reliable production deployment.',
  },
] as const

export const TECH_STACK = [
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
  { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2' },
  { name: 'Kotlin', icon: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/FFFFFF' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF' },
] as const

export const PRINCIPLES = [
  {
    code: '01',
    title: 'Production Ready',
    desc: 'Systems designed to work in real business environments, not demos.',
  },
  {
    code: '02',
    title: 'Full Stack Ownership',
    desc: 'Frontend → Backend → Database → Deployment under one accountable owner.',
  },
  {
    code: '03',
    title: 'Scalable Architecture',
    desc: 'Architecture designed to grow with the business and the team.',
  },
  {
    code: '04',
    title: 'Business First',
    desc: 'Technology is built around the actual business problem and conversion.',
  },
] as const

export const PROCESS = [
  {
    code: '01',
    title: 'Discover',
    desc: 'Understand the business, users, and requirements.',
  },
  {
    code: '02',
    title: 'Plan',
    desc: 'Architecture, technology, database, and roadmap.',
  },
  {
    code: '03',
    title: 'Build',
    desc: 'Frontend, backend, API, and integration.',
  },
  {
    code: '04',
    title: 'Launch',
    desc: 'Testing, deployment, and optimization.',
  },
  {
    code: '05',
    title: 'Improve',
    desc: 'Monitoring, maintenance, and iterations.',
  },
] as const

export const EXPERIENCE = [
  {
    company: 'Ukonnect',
    role: 'Full stack Developer',
    type: 'Remote · Netherlands / Global',
    period: 'Present',
    url: 'https://ukonnect.ai/en/about',
    logo: '/logos/ukonnect.webp',
    desc: 'Building premium conversion websites and AI powered growth platforms for Ukonnect partners across real estate, hospitality, and B2B.',
    highlights: [
      'Premium brand websites for NL clients',
      'AI growth product surfaces (WhiteLabel.ai)',
      'Fast iteration with marketing & design teams',
    ],
  },
  {
    company: 'LIREP Global',
    role: 'Full Stack / Product Engineer',
    type: 'Remote · Lombok Property Intelligence',
    period: 'Present',
    url: 'https://lirepglobal.com/',
    logo: '/logos/lirep.webp',
    desc: 'Engineering the LIREP Global platform: property intelligence, curated investment assets, area research, and advisory journeys.',
    highlights: [
      'Investment grade property UX',
      'Area & market intelligence surfaces',
      'Private consultation & lead flows',
    ],
  },
] as const

/** Real testimonials only · updated to match current production work */
export const TESTIMONIALS = [
  {
    name: 'Abdurahman, S.E.',
    role: 'Direktur',
    company: 'Bali Tosha Lombok Kochi',
    initial: 'A',
    quote:
      'Firman helped us shape training and program flows that feel modern and reliable. From program structure to participant facing UX, the delivery matched what a training institution needs in production.',
    rating: 5,
  },
  {
    name: 'LIREP Product Stakeholder',
    role: 'Product stakeholder',
    company: 'LIREP Global',
    initial: 'L',
    quote:
      'The LIREP experience needed clarity for investors: curated assets, area intelligence, and trust driven journeys. Firman translated that into a premium product surface that feels ready for real consultations.',
    rating: 5,
  },
  {
    name: 'Agus Harianto',
    role: 'Owner, PT Bagus Unik Raya',
    company: 'Lombok Rentals',
    initial: 'A',
    quote:
      'Our Lombok Rentals booking system doubled operational efficiency. Firman understood the rental business deeply and shipped exactly what we needed, including flows we had not planned yet.',
    rating: 5,
  },
] as const

export function getFeaturedProjects() {
  return PROJECTS.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
