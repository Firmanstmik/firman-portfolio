export type Dictionary = {
  nav: {
    home: string
    about: string
    projects: string
    services: string
    testimonials: string
    contact: string
    hireMe: string
    letsTalk: string
    navigate: string
    available: string
    skip: string
    openMenu: string
    closeMenu: string
    language: string
  }
  hero: {
    available: string
    hello: string
    role: string
    body: string
    viewWork: string
    contactMe: string
    trusted: string
    badgeRemote: string
    availableNow: string
    availableSub: string
  }
  projects: {
    eyebrow: string
    title: string
    lead: string
    viewAll: string
    viewCase: string
    live: string
    building: string
    allEyebrow: string
    allTitle: string
    allLead: string
    backHome: string
    backProjects: string
    openLive: string
    discuss: string
    problem: string
    solution: string
    features: string
    challenges: string
    results: string
    role: string
    tech: string
  }
  services: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; desc: string }[]
  }
  stack: {
    eyebrow: string
    title: string
    lead: string
  }
  principles: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; desc: string }[]
  }
  process: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; desc: string }[]
  }
  testimonials: {
    eyebrow: string
    title: string
    lead: string
  }
  about: {
    eyebrow: string
    title: string
    p1: string
    p2: string
    p3: string
    tags: string[]
    where: string
    visit: string
    present: string
  }
  global: {
    eyebrow: string
    title: string
    lead: string
    places: string[]
  }
  contact: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    lead: string
    getInTouch: string
    whatsapp: string
  }
  footer: {
    blurb: string
    navigation: string
    connect: string
    email: string
    github: string
    whatsapp: string
    based: string
  }
  notFound: {
    eyebrow: string
    title: string
    lead: string
    back: string
  }
  experience: Record<
    string,
    { role: string; type: string; desc: string; highlights: string[] }
  >
  testimonialsItems: Record<string, { role: string; company: string; quote: string }>
  projectsBySlug: Record<
    string,
    {
      category: string
      tagline: string
      summary: string
      role: string[]
      problem: string
      solution: string
      features: string[]
      challenges: string[]
      results: string[]
    }
  >
}

export const en: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    hireMe: 'Hire Me',
    letsTalk: "Let's Talk",
    navigate: 'Navigate',
    available: 'Available for international projects',
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  hero: {
    available: 'Available for international projects',
    hello: "Hello, I'm",
    role: 'Full-stack Developer',
    body: 'I build exceptional digital products and business systems for companies in Indonesia, the Netherlands, and around the world.',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
    trusted: "Trusted by companies I've shipped with",
    badgeRemote: 'Full-stack · Remote',
    availableNow: 'Available Now',
    availableSub: 'International remote projects',
  },
  projects: {
    eyebrow: 'Selected Work',
    title: 'Featured Projects',
    lead: 'Real systems shipped for businesses, organizations, and startups — not demos, not templates.',
    viewAll: 'View All Projects',
    viewCase: 'View Case Study',
    live: 'Live',
    building: 'Building',
    allEyebrow: 'All Work',
    allTitle: 'Projects',
    allLead:
      'Real systems shipped for businesses, organizations, and startups — from marketplaces and booking platforms to intelligence products and conversion websites.',
    backHome: 'Back to home',
    backProjects: 'Back to projects',
    openLive: 'Open Live Site',
    discuss: 'Discuss a similar build',
    problem: 'Problem',
    solution: 'Solution',
    features: 'Features',
    challenges: 'Challenges',
    results: 'Results',
    role: 'Role',
    tech: 'Tech',
  },
  services: {
    eyebrow: 'What I Do',
    title: 'End-to-End Development',
    lead: 'From idea to deployment, I own the full path — product thinking, engineering, and shipping.',
    items: [
      {
        title: 'Web Applications',
        desc: 'Custom web apps, SaaS platforms, admin systems, and portals built for production.',
      },
      {
        title: 'Mobile Applications',
        desc: 'Cross-platform apps with Flutter, Dart, Kotlin, and progressive web experiences.',
      },
      {
        title: 'API & Backend',
        desc: 'Scalable APIs, authentication, databases, and system architecture end-to-end.',
      },
      {
        title: 'Deployment & DevOps',
        desc: 'CI/CD, server setup, monitoring, and reliable production deployment.',
      },
    ],
  },
  stack: {
    eyebrow: 'Tech Stack',
    title: 'Technologies I Work With',
    lead: 'Modern, reliable tools chosen for production systems — not trend chasing.',
  },
  principles: {
    eyebrow: 'Engineering Approach',
    title: 'Built For Real-World Problems.',
    lead: 'I engineer systems that survive real users, real deadlines, and real business pressure.',
    items: [
      {
        title: 'Production Ready',
        desc: 'Systems designed to work in real business environments, not demos.',
      },
      {
        title: 'Full-Stack Ownership',
        desc: 'Frontend → Backend → Database → Deployment under one accountable owner.',
      },
      {
        title: 'Scalable Architecture',
        desc: 'Architecture designed to grow with the business and the team.',
      },
      {
        title: 'Business First',
        desc: 'Technology is built around the actual business problem and conversion.',
      },
    ],
  },
  process: {
    eyebrow: 'My Process',
    title: 'From discovery to iteration',
    lead: 'A clear path from business problem to production system — with ownership at every step.',
    items: [
      { title: 'Discover', desc: 'Understand the business, users, and requirements.' },
      { title: 'Plan', desc: 'Architecture, technology, database, and roadmap.' },
      { title: 'Build', desc: 'Frontend, backend, API, and integration.' },
      { title: 'Launch', desc: 'Testing, deployment, and optimization.' },
      { title: 'Improve', desc: 'Monitoring, maintenance, and iterations.' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What Clients Say',
    lead: "Real feedback from people I've worked with on production systems.",
  },
  about: {
    eyebrow: 'About',
    title: 'More Than A Developer.',
    p1: "I'm Firman Maulana, S.Kom, a full-stack developer focused on building digital products, business platforms, and systems that solve real problems.",
    p2: 'Graduate of Teknik Informatika at Sekolah Tinggi Manajemen Informatika dan Komputer Lombok. I work across frontend, backend, databases, APIs, cloud deployment, and system architecture.',
    p3: 'Currently shipping remotely with Ukonnect and LIREP Global across Indonesia and Europe.',
    tags: ['Based in Indonesia', 'Remote', 'Available Worldwide'],
    where: 'Where I Ship From',
    visit: 'Visit company',
    present: 'Present',
  },
  global: {
    eyebrow: 'Working Globally',
    title: 'Indonesia → Worldwide',
    lead: 'Remote-first collaboration across time zones — clear communication, reliable delivery.',
    places: ['Indonesia', 'Netherlands', 'Remote EU', 'Global'],
  },
  contact: {
    eyebrow: "Let's Work Together",
    titleLine1: 'Have a Project',
    titleLine2: 'in Mind?',
    lead: "I'm always open to new opportunities and exciting projects. Let's build something great together.",
    getInTouch: 'Get In Touch',
    whatsapp: 'WhatsApp',
  },
  footer: {
    blurb: 'Full-stack developer building digital products and business systems.',
    navigation: 'Navigation',
    connect: 'Connect',
    email: 'Email',
    github: 'GitHub',
    whatsapp: 'WhatsApp',
    based: 'Based in Indonesia · Remote worldwide',
  },
  notFound: {
    eyebrow: '404',
    title: 'Page not found',
    lead: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
  experience: {
    Ukonnect: {
      role: 'Full-stack Developer',
      type: 'Remote · Netherlands / Global',
      desc: 'Building premium conversion websites and AI-powered growth platforms for Ukonnect partners across real estate, hospitality, and B2B.',
      highlights: [
        'Premium brand websites for NL clients',
        'AI growth product surfaces (WhiteLabel.ai)',
        'Fast iteration with marketing & design teams',
      ],
    },
    'LIREP Global': {
      role: 'Full Stack / Product Engineer',
      type: 'Remote · Lombok Property Intelligence',
      desc: 'Engineering the LIREP Global platform: property intelligence, curated investment assets, area research, and advisory journeys.',
      highlights: [
        'Investment-grade property UX',
        'Area & market intelligence surfaces',
        'Private consultation & lead flows',
      ],
    },
  },
  testimonialsItems: {
    'Prof Khairul Imtihan S.Kom., M.Kom': {
      role: 'Kepala Departemen, STMIK Lombok',
      company: 'Education platforms',
      quote:
        'Firman helped us shape learning flows that feel modern and reliable. From course structure to student-facing UX, the delivery matched what an education platform needs in production.',
    },
    'LIREP Product Stakeholder': {
      role: 'Product stakeholder',
      company: 'LIREP Global',
      quote:
        'The LIREP experience needed clarity for investors: curated assets, area intelligence, and trust-driven journeys. Firman translated that into a premium product surface that feels ready for real consultations.',
    },
    'Agus Harianto': {
      role: 'Owner, PT Bagus Unik Raya',
      company: 'Lombok Rentals',
      quote:
        'Our Lombok Rentals booking system doubled operational efficiency. Firman understood the rental business deeply and shipped exactly what we needed, including flows we had not planned yet.',
    },
  },
  projectsBySlug: {
    'lirep-global': {
      category: 'Property / Intelligence',
      tagline: 'Property intelligence for Lombok investment',
      summary:
        'Premium real-estate intelligence platform with curated assets, area research, trust architecture, and private consultation flows for investors.',
      role: [
        'Full-stack / Product Engineer',
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
        'Structuring trust signals for high-consideration buyers',
      ],
      results: [
        'Live production platform serving Lombok investors',
        'Clear consultation funnel from research to private advisory',
      ],
    },
    lokaclean: {
      category: 'Marketplace / Hospitality',
      tagline: 'Hospitality outsourcing marketplace',
      summary:
        'Professional cleaning and hospitality outsourcing for hotels, villas, and restaurants across Lombok, with booking packages and WhatsApp conversion.',
      role: ['Full-stack Developer', 'Marketplace UX', 'Booking flows', 'WhatsApp conversion'],
      problem:
        'Hospitality operators needed a reliable way to outsource cleaning with clear packages and fast booking.',
      solution:
        'Shipped a conversion-focused marketplace with package storytelling, booking paths, and WhatsApp-first operations.',
      features: [
        'Hospitality packages',
        'Web app booking',
        'WhatsApp admin chat',
        'Multi-location coverage',
      ],
      challenges: [
        'Designing for both guests and operations teams',
        'Keeping conversion simple across mobile-first users',
      ],
      results: [
        'Live booking surface for Lombok hospitality partners',
        'WhatsApp-driven operational handoff',
      ],
    },
    'lombok-rentals': {
      category: 'Booking / Travel',
      tagline: 'Car rental Lombok, self drive & chauffeur',
      summary:
        'Full rental platform with fleet pricing, WhatsApp booking, airport transfer services, travel guides, and Google review social proof.',
      role: ['Full-stack Developer', 'Booking system', 'Fleet & pricing UX', 'Operations automation'],
      problem:
        'The rental business needed a production booking system that matched real fleet operations and WhatsApp-driven sales.',
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
    guruhub: {
      category: 'Education / LMS',
      tagline: 'Learning platform for Indonesia',
      summary:
        'EdTech platform connecting students, teachers, and institutions with courses, live classes, certificates, and official education information.',
      role: ['Full-stack Developer', 'Learning UX', 'Dashboards', 'Enrollment journeys'],
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
    'oranje-onderwijs': {
      category: 'Data / Education',
      tagline: 'Netherlands education data intelligence',
      summary:
        'Live intelligence platform that scrapes and normalizes Dutch education programs across institutions, with filters, catalogs, and ecosystem analytics.',
      role: ['Full-stack Developer', 'Scraping architecture', 'Data normalization', 'Dashboard UX'],
      problem: 'Manual education research across Dutch institutions does not scale.',
      solution:
        'Built a modular scraping and normalization pipeline with a live program catalog and ecosystem insights.',
      features: [
        'Multi-source web scraping pipeline',
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
    'keuken-centrum': {
      category: 'Conversion / Brand',
      tagline: 'Premium kitchen destination Utrecht',
      summary:
        'Luxury kitchen showroom website with brand collections, materials, appliances, and showroom appointment conversion.',
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
    'ayat-food': {
      category: 'B2B / Conversion',
      tagline: 'Premium Halal meat wholesaler (NL)',
      summary:
        'High-conversion B2B website for Ayat Food with Halal product catalog, trust pillars, and quote request flows.',
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
    'whitelabel-ai': {
      category: 'AI / Growth',
      tagline: 'AI growth systems by Ukonnect',
      summary:
        'Product marketing site for WhiteLabel.ai covering AI lead generation, sales automation, and connected growth systems.',
      role: ['Full-stack Developer', 'Product marketing UX', 'Conversion architecture'],
      problem: 'An AI growth product needed a clear narrative from audit to automation.',
      solution: 'Built system storytelling, partner proof, and book-a-call conversion paths.',
      features: [
        'System storytelling',
        'Partner social proof',
        'Audit → automate funnel',
        'Book-a-call conversion',
      ],
      challenges: ['Explaining complex AI systems without fluff'],
      results: ['In-build product marketing surface for Ukonnect'],
    },
    'rijschool-via-via': {
      category: 'Conversion / Brand',
      tagline: 'Premium rijopleiding in Leiderdorp',
      summary:
        'Premium driving school website for Rijschool Via Via in Leiderdorp — calm brand storytelling, trust signals, regional coverage, and conversion paths for trial lessons.',
      role: ['Frontend Developer', 'Brand storytelling', 'Conversion UX', 'Deployment'],
      problem:
        'A premium Dutch driving school needed a calm, trustworthy digital presence that converts trial lessons without feeling pushy.',
      solution:
        'Built an editorial conversion site around the Via Via method: personal guidance, fixed instructors, regional coverage, and clear contact CTAs.',
      features: [
        'Premium brand storytelling',
        'Method & trust architecture',
        'Regional coverage UX',
        'Trial-lesson conversion paths',
      ],
      challenges: [
        'Translating a calm in-person teaching philosophy into web pacing',
        'Balancing luxury tone with clear booking/contact conversion',
      ],
      results: [
        'Live premium conversion website for Leiderdorp and surrounding areas',
        'Clear journey from brand story to contact / trial lesson',
      ],
    },
  },
}
