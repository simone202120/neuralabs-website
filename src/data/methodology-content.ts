import { Database, Layout, Terminal, Rocket, Search, PenTool, Code2, Server, ShieldCheck, Zap, Activity, GitBranch } from 'lucide-react'

export const methodologyData = [
  {
    id: "01-analisi",
    title: "Analisi & Blueprint",
    subtitle: "Discovery & Tech Specs",
    icon: Database,
    tagline: "Niente ambiguità",
    shortDescription: "Discovery workshop collaborativo per trasformare la tua idea in specifiche tecniche precise: roadmap, architettura dati e prototipi cliccabili.",
    fullDescription: "Investiamo il 20% del tempo in analisi per risparmiare il 60% in modifiche post-sviluppo. Definiamo architettura dati scalabile, mappiamo user flow, scegliamo stack tecnologico e creiamo prototipi interattivi. Ogni decisione è documentata e validata: quando iniziamo a codificare, sappiamo esattamente cosa costruire e come.",
    color: "from-blue-500 to-cyan-500",
    bgLightColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    features: [
      { title: "SRS Documentation", description: "Specifiche dei Requisiti Software dettagliate." },
      { title: "ER Diagram", description: "Modellazione del database e delle relazioni." },
      { title: "Tech Stack Selection", description: "Scelta ragionata delle tecnologie (Next.js, Supabase)." },
      { title: "User Stories", description: "Definizione chiara dei percorsi utente." }
    ],
    techStack: ["Miro", "Lucidchart", "Notion", "Figma"],
    deliverables: ["Technical Blueprint", "Database Schema", "Project Roadmap", "API Specs"]
  },
  {
    id: "02-architecture",
    title: "Architecture & Strategy",
    subtitle: "Tech Stack & Data Modeling",
    icon: Layout,
    tagline: "Fondamenta Solide",
    shortDescription: "Le fondamenta che reggono milioni di utenti: progettazione infrastruttura, schema database relazionale e strategie di caching per performance estreme.",
    fullDescription: "Questa fase previene il 90% dei problemi di scalabilità futuri. Modelliamo database con indici ottimizzati e relazioni normalizzate, implementiamo autenticazione sicura con JWT e Row-Level Security, scegliamo stack moderno che riduce i costi cloud. Pianifichiamo backup automatici, monitoring in tempo reale e strategie di failover. Quando il tuo prodotto avrà 100k utenti, ringrazierai le decisioni prese qui.",
    color: "from-purple-500 to-pink-500",
    bgLightColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    features: [
      { title: "System Design", description: "Progettazione dell'infrastruttura cloud e servizi." },
      { title: "Database Modeling", description: "Schema ERD ottimizzato per performance e scalabilità." },
      { title: "Security Planning", description: "Implementazione policy RLS e autenticazione sicura." },
      { title: "Scalability Strategy", description: "Piano di crescita per gestire alti carichi." }
    ],
    techStack: ["Supabase", "PostgreSQL", "Next.js", "Redis"],
    deliverables: ["System Architecture Diagram", "Entity-Relationship Diagram", "Tech Stack Documentation", "Security Protocols"]
  },
  {
    id: "03-sviluppo",
    title: "Sviluppo Agile",
    subtitle: "Clean Code & Sprint",
    icon: Terminal,
    tagline: "Codice che scala",
    shortDescription: "Zero sorprese in fase di lancio: ogni funzionalità è testata, ogni integrazione verificata, ogni scenario previsto e gestito.",
    fullDescription: "Testiamo scenari che i tuoi utenti scopriranno: form con emoji, upload di file PDF corrotti, login simultanei su 3 dispositivi, connessione lenta 3G. Scriviamo test per edge cases, gestiamo errori con messaggi utili (non \"Error 500\"), implementiamo loading states piacevoli. Quando vai in produzione, hai già visto il software fallire e riprendersi in staging 100 volte. Zero panic al lancio.",
    color: "from-amber-500 to-orange-500",
    bgLightColor: "bg-amber-500/10",
    iconColor: "text-amber-500",
    features: [
      { title: "CI/CD Pipelines", description: "Automazione di test e deploy." },
      { title: "Clean Architecture", description: "Codice strutturato per la manutenibilità." },
      { title: "Type Safety", description: "TypeScript strict mode ovunque." },
      { title: "Automated Testing", description: "Unit e Integration test (Jest/Vitest)." }
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "React Query"],
    deliverables: ["Source Code", "Test Reports", "Documentation", "Staging Environment"]
  },
  {
    id: "04-deploy",
    title: "Deploy & Scale",
    subtitle: "Production & Monitoring",
    icon: Rocket,
    tagline: "Lancio e Crescita",
    shortDescription: "Produzione dal day one: SSL configurato, analytics attivi, error tracking funzionante e dashboard monitoring accessibile H24.",
    fullDescription: "Lanciamo in produzione e iniziamo a imparare dai tuoi utenti. Tracking analytics mostra quali feature usano di più, heatmaps rivelano dove cliccano, session recordings catturano comportamenti inaspettati. Sentry notifica errori in tempo reale con stack trace completo. Dashboard Vercel mostra performance, traffico e costi cloud. Quando un bug viene scoperto, lo vediamo prima che ci scrivano 10 email arrabbiate. Ottimizziamo iterativamente in base a dati, non opinioni.",
    color: "from-emerald-500 to-green-500",
    bgLightColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    features: [
      { title: "Global CDN", description: "Distribuzione contenuti edge-based." },
      { title: "Real-time Analytics", description: "Monitoraggio traffico e conversioni." },
      { title: "Error Tracking", description: "Identificazione proattiva dei bug." },
      { title: "Auto-scaling", description: "Infrastruttura che cresce col traffico." }
    ],
    techStack: ["Vercel", "Sentry", "PostHog", "Cloudflare"],
    deliverables: ["Production URL", "Analytics Dashboard", "Maintenance Plan", "SLA Reports"]
  }
]