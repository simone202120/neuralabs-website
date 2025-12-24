import { AudioWaveform, CircuitBoard, Infinity as InfinityIcon, FileCode2, Database, Scale, Cpu, ShieldCheck, Zap, Laptop, GitBranch, Search, PenTool, Layers } from 'lucide-react'

export const methodologyData = [
  {
    id: "01-sintonia",
    title: "Sintonia",
    subtitle: "Discovery & Vision",
    icon: AudioWaveform,
    tagline: "L'ascolto prima del codice",
    shortDescription: "Non iniziamo mai con una riga di codice senza aver capito il 'perché'. Ci allineiamo alla tua frequenza per trasformare idee astratte in requisiti concreti.",
    fullDescription: "La fase di Sintonia è il momento in cui il caos delle idee prende forma. Attraverso workshop intensivi e analisi dei competitor, definiamo il perimetro del progetto. Non si tratta solo di capire cosa vuoi, ma di cosa hanno bisogno i tuoi utenti. Creiamo una mappa mentale condivisa che guiderà ogni scelta tecnica successiva.",
    color: "from-cyan-500 to-blue-500",
    bgLightColor: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    features: [
      {
        title: "Workshop Strategici",
        description: "Sessioni collaborative per estrarre il valore core del business."
      },
      {
        title: "Analisi Competitor",
        description: "Studio del mercato per identificare opportunità e gap."
      },
      {
        title: "User Personas",
        description: "Definizione profonda del target e dei suoi bisogni."
      },
      {
        title: "KPI Definition",
        description: "Stabilire metriche di successo misurabili prima di partire."
      }
    ],
    techStack: ["Miro", "Figma", "Notion", "Google Analytics"],
    deliverables: ["Project Brief", "User Stories", "Moodboard", "Functional Specs"]
  },
  {
    id: "02-architettura",
    title: "Architettura",
    subtitle: "Specs, Stack & Engineering",
    icon: CircuitBoard,
    tagline: "Solidità ingegneristica",
    shortDescription: "Definiamo le fondamenta. Selezioniamo lo stack tecnologico perfetto, disegniamo le architetture dati e scriviamo le specifiche tecniche dettagliate.",
    fullDescription: "Qui è dove l'ingegneria prende il sopravvento. Non improvvisiamo: progettiamo. Scegliamo le tecnologie non per moda, ma per efficienza e scalabilità. Disegniamo lo schema del database, i flussi API e l'architettura dei componenti. È il momento in cui il progetto diventa un 'blueprint' pronto per la costruzione, eliminando le incertezze dello sviluppo.",
    color: "from-violet-500 to-purple-500",
    bgLightColor: "bg-violet-500/10",
    iconColor: "text-violet-500",
    features: [
      {
        title: "System Design",
        description: "Progettazione dell'infrastruttura cloud e dei microservizi."
      },
      {
        title: "Database Modeling",
        description: "Schema ER ottimizzato per performance e integrità dati."
      },
      {
        title: "Tech Selection",
        description: "Scelta dello stack (Next.js, Supabase, AI) basata sui requisiti."
      },
      {
        title: "Security & Compliance",
        description: "Analisi preliminare GDPR e security best practices."
      }
    ],
    techStack: ["Next.js", "Supabase", "Vercel", "TypeScript", "Tailwind"],
    deliverables: ["System Architecture Diagram", "ERD Schema", "API Documentation", "Tech Stack Report"]
  },
  {
    id: "03-evoluzione",
    title: "Evoluzione",
    subtitle: "Growth & Scale",
    icon: InfinityIcon,
    tagline: "Crescita continua",
    shortDescription: "Il lancio è solo l'inizio. Monitoriamo, ottimizziamo e facciamo evolvere il prodotto basandoci sui dati reali degli utenti.",
    fullDescription: "Un prodotto digitale non è mai 'finito'. Una volta online, inizia la fase di Evoluzione. Utilizziamo sistemi di monitoraggio avanzati per capire come gli utenti interagiscono con l'applicazione. Implementiamo cicli di feedback rapidi per introdurre nuove feature, migliorare le performance e scalare l'infrastruttura man mano che il traffico cresce.",
    color: "from-primary to-orange-500",
    bgLightColor: "bg-primary/10",
    iconColor: "text-primary",
    features: [
      {
        title: "Performance Monitoring",
        description: "Tracciamento in tempo reale dei Core Web Vitals e latenze."
      },
      {
        title: "User Analytics",
        description: "Analisi comportamentale per ottimizzare la UX/UI."
      },
      {
        title: "CI/CD & Testing",
        description: "Pipeline automatizzate per rilasci frequenti e sicuri."
      },
      {
        title: "Scalabilità",
        description: "Upgrade infrastrutturale dinamico in base al carico."
      }
    ],
    techStack: ["Vercel Analytics", "Sentry", "PostHog", "GitHub Actions"],
    deliverables: ["Performance Reports", "User Journey Maps", "A/B Test Results", "Roadmap Updates"]
  }
]
