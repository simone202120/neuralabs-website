import { Globe, Bot, BrainCircuit, Zap, Code, Database, Search, Shield, Cpu, Layout, Workflow } from 'lucide-react'

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
}

export const servicesData: ServiceData[] = [
  {
    id: "WEB-01",
    title: "Siti Web & WebApp",
    icon: Globe,
    tagline: "High-Performance Digital Architectures",
    shortDescription: "Non semplici siti web, ma piattaforme digitali scalabili costruite per convertire e performare.",
    fullDescription: "Nel web moderno, la velocità e l'esperienza utente non sono optional. Costruiamo applicazioni web che combinano un design estetico d'impatto con un'architettura tecnica solida. Utilizziamo il rendering lato server (SSR) per garantire tempi di caricamento istantanei e una SEO ottimale. Ogni pixel è ottimizzato, ogni interazione è fluida.",
    features: [
      { title: "Next.js & React", description: "Sviluppo component-based per massimizzare riutilizzabilità e performance." },
      { title: "SEO Nativa", description: "Struttura semantica e metadata dinamici per dominare i motori di ricerca." },
      { title: "Headless CMS", description: "Gestione contenuti flessibile senza compromettere il frontend." }
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "Supabase", "Framer Motion"],
    useCases: ["Corporate Websites", "E-commerce Custom", "SaaS Dashboards", "Landing Pages"],
    details: {
      timeline: "4-8 Settimane",
      startingFrom: "€2.500"
    }
  },
  {
    id: "AI-02",
    title: "AI Agents",
    icon: Bot,
    tagline: "Autonomous Cognitive Systems",
    shortDescription: "Agenti intelligenti che lavorano 24/7. Automatizza supporto, vendite e analisi dati.",
    fullDescription: "Andiamo oltre i semplici chatbot. I nostri AI Agents sono progettati per comprendere il contesto, prendere decisioni autonome e compiere azioni complesse. Possono integrarsi con il tuo CRM, gestire calendari, qualificare lead e persino negoziare. È come avere un dipendente instancabile che impara e migliora costantemente.",
    features: [
      { title: "Natural Language Processing", description: "Comprensione profonda delle intenzioni dell'utente, non solo keyword." },
      { title: "Function Calling", description: "L'AI può eseguire codice e interagire con API esterne autonomamente." },
      { title: "Personality Design", description: "Tone of voice personalizzato per rispecchiare il brand." }
    ],
    techStack: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "Vercel AI SDK", "Python"],
    useCases: ["Customer Support H24", "Lead Qualification", "Personal Shopping Assistant", "Data Analysis Agent"],
    details: {
      timeline: "3-6 Settimane",
      startingFrom: "€5.000"
    }
  },
  {
    id: "RAG-03",
    title: "Sistemi RAG",
    icon: BrainCircuit,
    tagline: "Knowledge Retrieval Engines",
    shortDescription: "Trasforma i tuoi PDF, documenti e database in una conoscenza aziendale interrogabile.",
    fullDescription: "Le LLM generiche non conoscono la tua azienda. I sistemi RAG (Retrieval-Augmented Generation) colmano questo divario. Creiamo pipeline che indicizzano tutta la tua documentazione aziendale (PDF, Word, Notion, SQL) rendendola accessibile istantaneamente tramite chat. Risposte precise, basate sui TUOI dati, con citazione delle fonti.",
    features: [
      { title: "Vector Embeddings", description: "Indicizzazione semantica per trovare concetti, non solo parole." },
      { title: "Source Citation", description: "Ogni risposta include il link al documento originale per verifica." },
      { title: "Data Privacy", description: "I tuoi dati rimangono nel tuo ambiente sicuro." }
    ],
    techStack: ["Pinecone / pgvector", "LlamaIndex", "Supabase", "Docker", "FastAPI"],
    useCases: ["Knowledge Base Interna", "Legal Document Analysis", "Manutenzione Tecnica Assistita", "HR Policy Chatbot"],
    details: {
      timeline: "4-6 Settimane",
      startingFrom: "€4.000"
    }
  },
  {
    id: "AUTO-04",
    title: "Automazioni",
    icon: Zap,
    tagline: "Workflow Optimization Protocols",
    shortDescription: "Colleghiamo le tue app. Eliminiamo il copia-incolla. Scaliamo i tuoi processi.",
    fullDescription: "L'errore umano e i compiti ripetitivi sono i freni della crescita. Progettiamo ecosistemi di automazione che fanno parlare tra loro software diversi. Dalla generazione automatica di fatture alla sincronizzazione tra e-commerce e logistica. Analizziamo i colli di bottiglia e costruiamo 'tubature digitali' invisibili ed efficienti.",
    features: [
      { title: "Cross-Platform Sync", description: "Sincronizzazione real-time tra CRM, Email, Fogli di calcolo e ERP." },
      { title: "Error Handling", description: "Sistemi robusti che gestiscono fallimenti e notificano gli amministratori." },
      { title: "Scalability", description: "Workflow progettati per gestire da 10 a 10.000 operazioni al giorno." }
    ],
    techStack: ["n8n", "Make.com", "Zapier", "Webhooks", "Node.js Custom Scripts"],
    useCases: ["Onboarding Clienti", "Social Media Publishing", "Gestione Ordini & Fatturazione", "Reportistica Automatica"],
    details: {
      timeline: "2-4 Settimane",
      startingFrom: "€1.000"
    }
  }
]
