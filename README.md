# 🧠 NeuraLabs Website

> Il laboratorio dove nascono le idee intelligenti.

Questo è il repository ufficiale per il sito web di NeuraLabs, una startup innovativa specializzata in sviluppo web, AI Agents, sistemi RAG e automazioni. Questo progetto non è solo la nostra vetrina, ma anche un esempio pratico delle nostre competenze, integrando tecnologie all'avanguardia come Next.js 14, Three.js per la grafica 3D e l'API di Claude per l'assistenza AI.

Sito web corporate per **NeuraLabs**, startup specializzata in sviluppo web, AI Agents, sistemi RAG e automazioni.

## ✨ Caratteristiche

- 🎨 Design moderno "Warm Tech" con palette coral/cream
- 🌟 Effetti WOW: particelle 3D neurali, cursor custom, glitch text
- 🌓 Dark/Light mode
- 💬 Chat AI integrata (Claude API)
- 🧮 Calculator preventivi interattivo
- 📝 Blog e Portfolio dinamici (Sanity CMS)
- ⚡ Performance ottimizzate (Next.js 14)
- 📱 Fully responsive

## 🛠️ Tech Stack

| Layer | Tecnologia |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + Framer Motion |
| 3D | Three.js + React Three Fiber |
| Database | Supabase (PostgreSQL) |
| CMS | Sanity.io |
| AI | Claude API (Anthropic) |
| Email | Resend |
| Hosting | Vercel |

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+
- npm o yarn
- Account Supabase
- Account Sanity
- API Key Anthropic (Claude)
- API Key Resend

### Installazione

```bash
# Clone repository
git clone https://github.com/tuousername/neuralabs-website.git
cd neuralabs-website

# Installa dipendenze
npm install

# Copia environment variables
cp .env.example .env.local

# Configura le variabili in .env.local (vedi sezione sotto)

# Avvia development server
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Claude AI
CLAUDE_API_KEY=your_anthropic_api_key

# Resend (Email)
RESEND_API_KEY=your_resend_api_key

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ADMIN_EMAIL=ciao@neuralabs.it
```

## 📁 Struttura Progetto

```
neuralabs-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/
│   │   ├── ui/                 # Componenti base
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Sezioni pagine
│   │   ├── three/              # Componenti 3D
│   │   ├── chat/               # Chat AI widget
│   │   ├── calculator/         # Calculator preventivi
│   │   ├── forms/              # Form components
│   │   └── animations/         # Animation wrappers
│   ├── lib/                    # Utilities e clients
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript types
│   └── data/                   # Mock data (dev)
├── sanity/                     # Sanity Studio
├── public/                     # Static assets
└── docs/                       # Documentazione
```

## 🧪 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
npm run sanity       # Start Sanity Studio
```

## 📖 Documentazione

- [PROJECT_BRIEF.md](./PROJECT_BRIEF.md) - Brief completo del progetto
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architettura tecnica
- [DESIGN_SPEC.md](./DESIGN_SPEC.md) - Specifiche design
- [PROGRESS.md](./PROGRESS.md) - Stato avanzamento
- [docs/PIANO_IMPLEMENTAZIONE.md](./docs/PIANO_IMPLEMENTAZIONE.md) - Task dettagliati
- [docs/CONVENTIONS.md](./docs/CONVENTIONS.md) - Convenzioni codice

## 🤝 Contributing

Progetto interno NeuraLabs. Per contribuire, contatta il team.

## 📄 License

Proprietario - NeuraLabs © 2025

---

Built with ❤️ and 🤖 by NeuraLabs
