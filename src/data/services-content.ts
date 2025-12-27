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
    output: string
    focus: string
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
    title: "Sviluppo Siti Web e Applicazioni Web",
    icon: Globe,
    tagline: "Performanti, Scalabili, Ottimizzate",
    shortDescription: "Piattaforme web moderne sviluppate con tecnologie all'avanguardia e best practices dell'industria software.",
    fullDescription: "Dalla prima consultazione al lancio in produzione, curiamo ogni aspetto del tuo progetto web: design UI/UX su misura, sviluppo frontend in Next.js con TypeScript strict mode, integrazione CMS headless (Sanity/Contentful), ottimizzazione SEO on-page, performance tuning e analytics setup. Che sia un sito corporate, una piattaforma SaaS o un portale e-commerce, usi tecnologie enterprise-grade con semplicità di gestione. Risultato: siti veloci, sicuri e che si posizionano.",
    features: [
      { title: "Siti Web", description: "Design responsivo, velocità di caricamento istantanea e SEO tecnica." },
      { title: "Web App", description: "Applicazioni complesse accessibili da browser con UX pari alle app native." }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    useCases: ["Corporate Websites", "SaaS Platforms", "E-commerce", "Portali Clienti"],
    details: {
      output: "Piattaforma Web Scalabile",
      focus: "Performance & UX"
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
    fullDescription: "Software custom progettato con te, non per te. Analizziamo insieme le esigenze reali, definiamo priorità e costruiamo soluzioni con tecnologie affidabili e moderne. Backend scalabili, interfacce user-friendly e integrazioni AI quando portano benefici misurabili. Ogni progetto include architettura documentata, codice pulito e formazione del team. Non vendiamo complessità: consegniamo strumenti che il tuo team può usare, mantenere e far evolvere nel tempo.",
    features: [
      { title: "Dashboard AI", description: "Pannelli di controllo intelligenti che visualizzano dati e suggeriscono azioni." },
      { title: "API Development", description: "Architetture back-end scalabili, sicure e documentate per i tuoi servizi." },
      { title: "Integrazioni LLM", description: "Potenziamento software esistenti con la capacità di comprensione di GPT/Claude." },
      { title: "Cloud", description: "Infrastrutture serverless robuste e scalabili su AWS/Vercel/Supabase." }
    ],
    techStack: ["Node.js", "Python", "Supabase", "PostgreSQL", "Docker"],
    useCases: ["CRM Personalizzati", "ERP Aziendali", "Piattaforme di Analisi", "Backend Systems"],
    details: {
      output: "Software Proprietario & IP",
      focus: "Efficienza & Controllo"
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
    fullDescription: "Identifichiamo insieme i processi che ti costano tempo e risorse, poi costruiamo automazioni intelligenti che lavorano H24. Chatbot che rispondono basandosi sui tuoi documenti reali, workflow che sincronizzano dati tra applicazioni, agenti AI che smistano richieste. Tecnologie moderne (n8n, LangChain, sistemi RAG) ma implementazione pragmatica: partiamo da un processo, misuriamo il risparmio, scaliamo. Intelligenza artificiale usata con criterio per risultati concreti e misurabili.",
    features: [
      { title: "Sistemi RAG", description: "Chatbot che rispondo basandosi esclusivamente sui tuoi documenti aziendali." },
      { title: "Automazioni Processi", description: "Workflow che connettono app diverse eliminando il data-entry manuale." },
      { title: "Custom Workflow", description: "Pipeline di lavoro su misura per ottimizzare la produttività del team." },
      { title: "ChatBot e ChatBot Vocali", description: "Assistenti virtuali capaci di conversare naturalmente via testo o voce." }
    ],
    techStack: ["n8n", "LangChain", "OpenAI", "Pinecone", "Vapi.ai"],
    useCases: ["Customer Support H24", "Onboarding Automatico", "Knowledge Base Interattiva", "Lead Qualification"],
    details: {
      output: "Ecosistema Autonomo H24",
      focus: "Automazione & ROI"
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
    fullDescription: "Sviluppo MVP con approccio \"less is more\": individuiamo la tua unique value proposition, costruiamo solo quello e lo mettiamo in mano agli utenti. Niente funzioni \"nice to have\", solo essenziale fatto bene. Stack semplice e moderno, architettura che non ti blocca dopo, supporto al lancio incluso. In settimane, non mesi, hai un prodotto funzionante per testare traction e product-market fit. Poi iteriamo insieme basandoci su dati reali, non intuizioni.",
    features: [
      { title: "Prototipazione Rapida", description: "Mockup interattivi e proof-of-concept in giorni, non mesi." },
      { title: "Core Features Development", description: "Sviluppo focalizzato sul valore unico della tua proposta." },
      { title: "Scalable Architecture", description: "Basi solide pronte per crescere dopo la validazione." },
      { title: "Launch Support", description: "Assistenza tecnica durante la fase critica del lancio." }
    ],
    techStack: ["Next.js", "Supabase", "Vercel", "Tailwind UI"],
    useCases: ["Startup Launch", "New Product Features", "Market Testing", "Beta Testing"],
    details: {
      output: "Prodotto Validato & Lancio",
      focus: "Velocità & Mercato"
    },
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-500',
    ringColor: 'ring-amber-500',
    bgLightColor: 'bg-amber-500/10'
  }
]
