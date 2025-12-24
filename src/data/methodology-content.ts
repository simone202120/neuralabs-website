import { Database, Layout, Terminal, Rocket, Search, PenTool, Code2, Server, ShieldCheck, Zap, Activity, GitBranch } from 'lucide-react'

export const methodologyData = [
  {
    id: "01-analisi",
    title: "Analisi & Blueprint",
    subtitle: "Discovery & Tech Specs",
    icon: Database,
    tagline: "Niente ambiguità",
    shortDescription: "Traduciamo la tua visione in specifiche tecniche. Niente ambiguità: usiamo wireframe, diagrammi di flusso e user stories chiare.",
    fullDescription: "Ogni grande progetto inizia con una mappa precisa. Non ci limitiamo a raccogliere requisiti: analizziamo i flussi dati, definiamo l'architettura del database e scegliamo lo stack tecnologico più adatto. Il risultato è un 'Blueprint' tecnico che elimina le sorprese in fase di sviluppo.",
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
    id: "02-ux-ui",
    title: "UX/UI Engineering",
    subtitle: "Design System & Prototyping",
    icon: Layout,
    tagline: "Design Sistemico",
    shortDescription: "Non solo design, ma sistemi scalabili. Creiamo interfacce che uniscono estetica mozzafiato e usabilità rigorosa.",
    fullDescription: "L'estetica deve servire la funzione. Progettiamo Design System atomici che garantiscono coerenza visiva e facilità di manutenzione. Ogni componente è pensato per essere accessibile, reattivo e perfettamente integrato con la logica di business sottostante.",
    color: "from-purple-500 to-pink-500",
    bgLightColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    features: [
      { title: "Component Library", description: "Libreria di componenti UI riutilizzabili." },
      { title: "Interactive Prototypes", description: "Prototipi navigabili ad alta fedeltà." },
      { title: "Accessibility (a11y)", description: "Compliance con gli standard WCAG." },
      { title: "Responsive Design", description: "Ottimizzazione per ogni device." }
    ],
    techStack: ["Figma", "Tailwind CSS", "Framer Motion", "Radix UI"],
    deliverables: ["Figma Design File", "Design System", "Interactive Prototype", "UI Assets"]
  },
  {
    id: "03-sviluppo",
    title: "Sviluppo Agile",
    subtitle: "Clean Code & Sprint",
    icon: Terminal,
    tagline: "Codice che scala",
    shortDescription: "Sprint bisettimanali e codice pulito. Architetture scalabili su Next.js e Supabase, tipizzate e testate.",
    fullDescription: "Adottiamo la metodologia Agile con sprint di 2 settimane. Scriviamo codice TypeScript rigorosamente tipizzato, modulare e testato. L'obiettivo è rilasciare funzionalità funzionanti frequentemente, mantenendo il debito tecnico vicino allo zero.",
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
    shortDescription: "Il lancio è solo l'inizio. Monitoriamo le performance in tempo reale e iteriamo basandoci sui dati.",
    fullDescription: "Portiamo il tuo prodotto in produzione su infrastrutture Edge globali. Configuriamo sistemi di monitoraggio avanzati per tracciare errori, performance e comportamento degli utenti in tempo reale, garantendo uptime e velocità massimi.",
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