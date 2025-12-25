// ============================================
// SIGMALABS WEBSITE - Mock Data
// ============================================
// Use this data during development before Sanity is set up

// --------------------------------------------
// SERVICES
// --------------------------------------------
export const services = [
  {
    id: 'websites',
    title: 'Siti Web & WebApp',
    slug: 'siti-web-webapp',
    icon: '🌐',
    shortDescription: 'Landing page, siti corporate, e-commerce e web application custom.',
    fullDescription: `
      Creiamo esperienze digitali che convertono. Dai siti vetrina alle web application 
      complesse, ogni progetto è costruito con tecnologie moderne per garantire 
      performance, scalabilità e un design che lascia il segno.
    `,
    technologies: ['React', 'Next.js', 'TypeScript', '.NET', 'Node.js', 'Tailwind CSS'],
    startingPrice: 2500,
    features: [
      'Design responsive e mobile-first',
      'Ottimizzazione SEO',
      'Performance elevate (Core Web Vitals)',
      'CMS integrato',
      'Analytics e tracking',
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    slug: 'ai-agents',
    icon: '🤖',
    shortDescription: 'Agenti intelligenti per customer support, analisi dati e task automation.',
    fullDescription: `
      Costruiamo agenti AI che lavorano per te 24/7. Dal customer support intelligente 
      all'automazione di task complessi, i nostri agenti imparano e migliorano continuamente.
    `,
    technologies: ['LangChain', 'CrewAI', 'Claude API', 'OpenAI GPT', 'Python'],
    startingPrice: 5000,
    features: [
      'Comprensione linguaggio naturale',
      'Integrazione con i tuoi sistemi',
      'Apprendimento continuo',
      'Dashboard di monitoraggio',
      'Support multi-lingua',
    ],
  },
  {
    id: 'rag-systems',
    title: 'Sistemi RAG',
    slug: 'sistemi-rag',
    icon: '🧠',
    shortDescription: 'Knowledge base aziendali accessibili via AI. Documenti → risposte istantanee.',
    fullDescription: `
      Trasforma la tua documentazione in un assistente intelligente. I nostri sistemi RAG 
      (Retrieval-Augmented Generation) permettono di interrogare manuali, documenti e 
      database in linguaggio naturale, ottenendo risposte accurate e contestualizzate.
    `,
    technologies: ['pgvector', 'Pinecone', 'Azure AI', 'Neo4j', 'LlamaIndex'],
    startingPrice: 4000,
    features: [
      'Indicizzazione documenti automatica',
      'Ricerca semantica avanzata',
      'Risposte con citazioni',
      'Supporto multi-formato (PDF, Word, Excel)',
      'API per integrazione',
    ],
  },
  {
    id: 'automations',
    title: 'Automazioni',
    slug: 'automazioni',
    icon: '⚡',
    shortDescription: 'Workflow automatizzati, integrazioni, bot. Elimina il lavoro ripetitivo.',
    fullDescription: `
      Automatizza i processi che ti rubano tempo. Colleghiamo i tuoi strumenti, 
      creiamo workflow intelligenti e costruiamo bot che lavorano mentre tu ti 
      concentri su ciò che conta davvero.
    `,
    technologies: ['N8N', 'Make', 'Zapier', 'Python', 'Node.js'],
    startingPrice: 1000,
    features: [
      'Integrazione 500+ app',
      'Workflow personalizzati',
      'Trigger automatici',
      'Notifiche e alert',
      'Report automatizzati',
    ],
  },
];

// --------------------------------------------
// PROJECTS
// --------------------------------------------
export const projects = [
  {
    id: 'techflow-ai',
    title: 'TechFlow AI',
    slug: 'techflow-ai',
    description: 'Agente AI per customer support che gestisce il 70% delle richieste automaticamente.',
    coverImage: '/images/projects/techflow-ai.jpg',
    category: 'ai_agent',
    technologies: ['LangChain', 'Claude API', 'Next.js', 'Supabase'],
    hoursSpent: 120,
    clientName: 'TechStartup Srl',
    testimonial: 'SigmaLabs ha trasformato il nostro supporto clienti. Risposte immediate 24/7.',
    liveUrl: 'https://techflow.example.com',
    featured: true,
    publishedAt: '2024-11-15',
  },
  {
    id: 'datamind-rag',
    title: 'DataMind RAG',
    slug: 'datamind-rag',
    description: 'Sistema RAG per accesso intelligente a 10.000+ documenti tecnici.',
    coverImage: '/images/projects/datamind-rag.jpg',
    category: 'rag',
    technologies: ['pgvector', 'Python', 'FastAPI', 'React'],
    hoursSpent: 80,
    clientName: 'Engineering Corp',
    testimonial: 'Trovare informazioni nei nostri manuali ora richiede secondi invece di ore.',
    liveUrl: null,
    featured: true,
    publishedAt: '2024-10-20',
  },
  {
    id: 'startupx-mvp',
    title: 'StartupX MVP',
    slug: 'startupx-mvp',
    description: 'MVP completo per marketplace B2B lanciato in 6 settimane.',
    coverImage: '/images/projects/startupx-mvp.jpg',
    category: 'webapp',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    hoursSpent: 200,
    clientName: 'StartupX',
    testimonial: 'Dal concept al lancio in tempo record. Professionali e competenti.',
    liveUrl: 'https://startupx.example.com',
    featured: true,
    publishedAt: '2024-09-10',
  },
  {
    id: 'autoflow-system',
    title: 'AutoFlow System',
    slug: 'autoflow-system',
    description: 'Sistema di automazione che risparmia 40 ore/settimana di lavoro manuale.',
    coverImage: '/images/projects/autoflow-system.jpg',
    category: 'automation',
    technologies: ['N8N', 'Python', 'Airtable', 'Slack API'],
    hoursSpent: 60,
    clientName: 'Agency Pro',
    testimonial: 'Le automazioni hanno liberato il team per concentrarsi sulla creatività.',
    liveUrl: null,
    featured: true,
    publishedAt: '2024-08-05',
  },
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Redesign',
    slug: 'ecommerce-redesign',
    description: 'Redesign completo e-commerce con +35% conversioni.',
    coverImage: '/images/projects/ecommerce-redesign.jpg',
    category: 'website',
    technologies: ['Next.js', 'Shopify', 'Tailwind CSS'],
    hoursSpent: 100,
    clientName: 'Fashion Brand',
    testimonial: 'Il nuovo sito ha superato ogni aspettativa in termini di vendite.',
    liveUrl: 'https://fashionbrand.example.com',
    featured: false,
    publishedAt: '2024-07-20',
  },
  {
    id: 'chatbot-hr',
    title: 'HR Assistant Bot',
    slug: 'chatbot-hr',
    description: 'Chatbot HR per rispondere alle domande dei dipendenti.',
    coverImage: '/images/projects/chatbot-hr.jpg',
    category: 'ai_agent',
    technologies: ['Claude API', 'Slack', 'Node.js'],
    hoursSpent: 45,
    clientName: 'Corporate Inc',
    testimonial: 'I dipendenti adorano avere risposte immediate sulle policy aziendali.',
    liveUrl: null,
    featured: false,
    publishedAt: '2024-06-15',
  },
];

// --------------------------------------------
// BLOG POSTS
// --------------------------------------------
export const blogPosts = [
  {
    id: 'intro-to-rag',
    title: 'Introduzione ai Sistemi RAG: Cosa Sono e Perché Servono',
    slug: 'introduzione-sistemi-rag',
    excerpt: 'Scopri come i sistemi RAG stanno rivoluzionando l\'accesso alle informazioni aziendali.',
    coverImage: '/images/blog/intro-rag.jpg',
    categories: ['AI', 'RAG', 'Tutorial'],
    author: 'Simone',
    publishedAt: '2024-11-20',
    readingTime: 8,
    content: `
      # Introduzione ai Sistemi RAG
      
      I sistemi RAG (Retrieval-Augmented Generation) rappresentano una delle innovazioni 
      più interessanti nel campo dell'AI applicata...
      
      ## Cosa significa RAG?
      
      RAG combina due approcci...
    `,
  },
  {
    id: 'ai-agents-2024',
    title: 'AI Agents nel 2024: Stato dell\'Arte e Prospettive',
    slug: 'ai-agents-2024-stato-arte',
    excerpt: 'Un\'analisi approfondita sullo stato attuale degli agenti AI e dove stiamo andando.',
    coverImage: '/images/blog/ai-agents-2024.jpg',
    categories: ['AI', 'Agents', 'Trend'],
    author: 'Simone',
    publishedAt: '2024-11-10',
    readingTime: 12,
    content: `
      # AI Agents nel 2024
      
      Gli agenti AI hanno fatto passi da gigante nell'ultimo anno...
    `,
  },
  {
    id: 'nextjs-performance',
    title: 'Ottimizzare le Performance in Next.js 14',
    slug: 'ottimizzare-performance-nextjs-14',
    excerpt: 'Tecniche pratiche per ottenere punteggi Lighthouse perfetti con Next.js.',
    coverImage: '/images/blog/nextjs-performance.jpg',
    categories: ['Development', 'Next.js', 'Performance'],
    author: 'Simone',
    publishedAt: '2024-10-25',
    readingTime: 10,
    content: `
      # Ottimizzare le Performance in Next.js 14
      
      Le performance web sono fondamentali per l'esperienza utente...
    `,
  },
];

// --------------------------------------------
// TESTIMONIALS
// --------------------------------------------
export const testimonials = [
  {
    id: '1',
    quote: 'SigmaLabs ha trasformato la nostra idea in un prodotto reale in tempi record. Professionali, creativi e sempre disponibili.',
    authorName: 'Mario Rossi',
    authorRole: 'CEO',
    company: 'TechStartup Srl',
    image: '/images/testimonials/mario-rossi.jpg',
  },
  {
    id: '2',
    quote: 'Finalmente qualcuno che capisce davvero l\'AI e sa come applicarla a problemi reali. Il nostro chatbot ha rivoluzionato il customer support.',
    authorName: 'Laura Bianchi',
    authorRole: 'Founder',
    company: 'StartupX',
    image: '/images/testimonials/laura-bianchi.jpg',
  },
  {
    id: '3',
    quote: 'Le automazioni create da SigmaLabs ci hanno fatto risparmiare 40 ore a settimana. ROI immediato.',
    authorName: 'Marco Verdi',
    authorRole: 'CTO',
    company: 'Agency Pro',
    image: '/images/testimonials/marco-verdi.jpg',
  },
  {
    id: '4',
    quote: 'Il sistema RAG che hanno costruito ci permette di trovare informazioni in migliaia di documenti in pochi secondi.',
    authorName: 'Giulia Neri',
    authorRole: 'Head of Operations',
    company: 'Engineering Corp',
    image: '/images/testimonials/giulia-neri.jpg',
  },
];

// --------------------------------------------
// TEAM
// --------------------------------------------
export const team = [
  {
    id: 'simone',
    name: 'Simone',
    role: 'Founder & Developer',
    bio: 'Appassionato di AI e sviluppo web. Crede che la tecnologia debba risolvere problemi reali.',
    image: '/images/team/simone.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/simone',
      twitter: 'https://twitter.com/simone',
      github: 'https://github.com/simone',
    },
  },
];

// --------------------------------------------
// CALCULATOR CONFIG
// --------------------------------------------
export const calculatorConfig = {
  projectTypes: [
    { id: 'website', label: 'Sito Web', baseHours: 40 },
    { id: 'webapp', label: 'Web Application', baseHours: 80 },
    { id: 'ai_agent', label: 'AI Agent', baseHours: 100 },
    { id: 'rag', label: 'Sistema RAG', baseHours: 80 },
    { id: 'automation', label: 'Automazione', baseHours: 30 },
  ],
  complexityLevels: [
    { id: 'simple', label: 'Semplice', multiplier: 1 },
    { id: 'medium', label: 'Media', multiplier: 1.5 },
    { id: 'complex', label: 'Complessa', multiplier: 2.5 },
  ],
  features: [
    { id: 'auth', label: 'Autenticazione utenti', hours: 20 },
    { id: 'dashboard', label: 'Dashboard admin', hours: 40 },
    { id: 'ai_integration', label: 'Integrazione AI', hours: 30 },
    { id: 'complex_db', label: 'Database complesso', hours: 25 },
    { id: 'external_api', label: 'API esterne', hours: 15 },
    { id: 'premium_design', label: 'Design premium', hours: 20 },
    { id: 'multilang', label: 'Multi-lingua', hours: 15 },
    { id: 'analytics', label: 'Analytics avanzate', hours: 10 },
  ],
  timelineOptions: [
    { id: 'rush', label: 'Urgente (< 2 settimane)', modifier: 1.3 },
    { id: 'standard', label: 'Standard (2-4 settimane)', modifier: 1 },
    { id: 'flexible', label: 'Flessibile (> 4 settimane)', modifier: 0.9 },
  ],
  hourlyRate: 60,
};

// --------------------------------------------
// NAVIGATION
// --------------------------------------------
export const navigation = {
  main: [
    { label: 'Servizi', href: '/servizi' },
    { label: 'Progetti', href: '/progetti' },
    { label: 'Blog', href: '/blog' },
    { label: 'Chi Siamo', href: '/chi-siamo' },
  ],
  footer: {
    menu: [
      { label: 'Home', href: '/' },
      { label: 'Servizi', href: '/servizi' },
      { label: 'Progetti', href: '/progetti' },
      { label: 'Blog', href: '/blog' },
      { label: 'Chi Siamo', href: '/chi-siamo' },
      { label: 'Contatti', href: '/contatti' },
    ],
    services: [
      { label: 'Siti Web', href: '/servizi#websites' },
      { label: 'AI Agents', href: '/servizi#ai-agents' },
      { label: 'Sistemi RAG', href: '/servizi#rag' },
      { label: 'Automazioni', href: '/servizi#automations' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookie' },
    ],
  },
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/sigmalabs', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com/sigmalabs', icon: 'twitter' },
    { label: 'GitHub', href: 'https://github.com/sigmalabs', icon: 'github' },
  ],
};

// --------------------------------------------
// SITE CONFIG
// --------------------------------------------
export const siteConfig = {
  name: 'SigmaLabs',
  tagline: 'Il laboratorio dove nascono le idee intelligenti',
  description: 'Sviluppiamo siti web, AI Agents, sistemi RAG e automazioni per PMI e startup che vogliono innovare.',
  url: 'https://sigmalabs.it',
  email: 'ciao@sigmalabs.it',
  location: 'Padova, Italia',
  ogImage: '/og/og-default.png',
};
