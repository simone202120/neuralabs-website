import { Globe, Bot, BrainCircuit, Rocket, Layout, Terminal, Workflow, Cpu } from 'lucide-react'

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceData {
  id: string
  title: string
  icon: any
  tagline: string
  shortDescription: string
  fullDescription: string
  features: ServiceFeature[]
  techStack: string[]
  useCases: string[]
  details?: {
    timeline: string
    startingFrom: string
  }
  color: string
  iconColor: string
  borderColor: string
  ringColor: string
  bgLightColor: string
}

export const servicesData: ServiceData[] = [
  {
    id: "WEB-01",
    title: "Siti Web e Web App",
    icon: Globe,
    tagline: "Digital Presence & Performance",
    shortDescription: "Piattaforme digitali ad alte prestazioni che convertono visitatori in clienti.",
    fullDescription: "Realizziamo esperienze web moderne e performanti. Non semplici siti vetrina, ma strumenti di business ottimizzati per la conversione e il posizionamento sui motori di ricerca. Dalla landing page ad alto impatto alla web application complessa, curiamo ogni dettaglio dell'interfaccia e dell'architettura.",
    features: [
      { title: "Siti Web", description: "Design responsivo, velocità di caricamento istantanea e SEO tecnica avanzata." },
      { title: "Web App", description: "Applicazioni complesse accessibili da browser con UX pari alle app native." }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    useCases: ["Corporate Websites", "SaaS Platforms", "E-commerce", "Portali Clienti"],
    details: {
      timeline: "3-8 Settimane",
      startingFrom: "€2.500"
    },
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-500',
    ringColor: 'ring-emerald-500',
    bgLightColor: 'bg-emerald-500/10'
  },
  {
    id: "SOFT-02",
    title: "Custom Software e AI Software",
    icon: Terminal,
    tagline: "Tailored Enterprise Solutions",
    shortDescription: "Software su misura potenziato dall'Intelligenza Artificiale per esigenze specifiche.",
    fullDescription: "Quando le soluzioni standard non bastano, costruiamo software cucito sui tuoi processi. Integriamo l'intelligenza artificiale direttamente nel cuore delle tue applicazioni aziendali per analizzare dati, generare contenuti e prevedere trend.",
    features: [
      { title: "Dashboard AI", description: "Pannelli di controllo intelligenti che visualizzano dati e suggeriscono azioni." },
      { title: "API Development", description: "Architetture back-end scalabili, sicure e documentate per i tuoi servizi." },
      { title: "Integrazioni LLM", description: "Potenziamento software esistenti con la capacità di comprensione di GPT/Claude." },
      { title: "Cloud", description: "Infrastrutture serverless robuste e scalabili su AWS/Vercel/Supabase." }
    ],
    techStack: ["Node.js", "Python", "Supabase", "PostgreSQL", "Docker"],
    useCases: ["CRM Personalizzati", "ERP Aziendali", "Piattaforme di Analisi", "Backend Systems"],
    details: {
      timeline: "6-12 Settimane",
      startingFrom: "€5.000"
    },
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-500',
    ringColor: 'ring-blue-500',
    bgLightColor: 'bg-blue-500/10'
  },
  {
    id: "AUTO-03",
    title: "Automazioni, Agenti AI, Sistemi RAG",
    icon: Bot,
    tagline: "Autonomous Workflows",
    shortDescription: "Ecosistemi intelligenti che lavorano al posto tuo, riducendo errori e costi.",
    fullDescription: "Rivoluziona l'operatività aziendale delegando i task ripetitivi e complessi a una forza lavoro digitale. I nostri sistemi non si limitano a seguire regole, ma comprendono il contesto grazie ai modelli di linguaggio avanzati (LLM) e ai database vettoriali.",
    features: [
      { title: "Sistemi RAG", description: "Chatbot che rispondo basandosi esclusivamente sui tuoi documenti aziendali." },
      { title: "Automazioni Processi", description: "Workflow che connettono app diverse eliminando il data-entry manuale." },
      { title: "Custom Workflow", description: "Pipeline di lavoro su misura per ottimizzare la produttività del team." },
      { title: "ChatBot e ChatBot Vocali", description: "Assistenti virtuali capaci di conversare naturalmente via testo o voce." }
    ],
    techStack: ["n8n", "LangChain", "OpenAI", "Pinecone", "Vapi.ai"],
    useCases: ["Customer Support H24", "Onboarding Automatico", "Knowledge Base Interattiva", "Lead Qualification"],
    details: {
      timeline: "4-8 Settimane",
      startingFrom: "€3.500"
    },
    color: 'from-violet-500 to-fuchsia-500',
    iconColor: 'text-violet-500',
    borderColor: 'border-violet-500',
    ringColor: 'ring-violet-500',
    bgLightColor: 'bg-violet-500/10'
  },
  {
    id: "MVP-04",
    title: "Sviluppo MVP",
    icon: Rocket,
    tagline: "Rapid Idea Validation",
    shortDescription: "Dal concetto al mercato nel minor tempo possibile per validare la tua idea.",
    fullDescription: "Trasformiamo la tua visione in un prodotto funzionante in tempi record. Ci concentriamo sulle funzionalità core essenziali per lanciare, raccogliere feedback dagli utenti e iterare velocemente, senza sprecare budget in feature non necessarie.",
    features: [
      { title: "Prototipazione Rapida", description: "Mockup interattivi e proof-of-concept in giorni, non mesi." },
      { title: "Core Features Development", description: "Sviluppo focalizzato sul valore unico della tua proposta." },
      { title: "Scalable Architecture", description: "Basi solide pronte per crescere dopo la validazione." },
      { title: "Launch Support", description: "Assistenza tecnica durante la fase critica del lancio." }
    ],
    techStack: ["Next.js", "Supabase", "Vercel", "Tailwind UI"],
    useCases: ["Startup Launch", "New Product Features", "Market Testing", "Beta Testing"],
    details: {
      timeline: "3-5 Settimane",
      startingFrom: "€3.000"
    },
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-500',
    ringColor: 'ring-amber-500',
    bgLightColor: 'bg-amber-500/10'
  }
]
