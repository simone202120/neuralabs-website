# 🏗️ ARCHITECTURE - NeuraLabs Website

## Overview Architettura

Il sito NeuraLabs utilizza un'architettura **Jamstack** moderna con:
- Frontend: Next.js 14 (App Router) su Vercel
- Backend: Serverless API Routes + Supabase
- CMS: Sanity.io (headless)
- AI: Claude API (Anthropic)

---

## 🔧 Stack Tecnologico

### Frontend

| Tecnologia | Versione | Utilizzo |
|------------|----------|----------|
| Next.js | 14.x | Framework React, SSR/SSG |
| React | 18.x | UI Library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling utility-first |
| Framer Motion | 10.x | Animazioni |
| Three.js | 0.160.x | Grafica 3D |
| React Three Fiber | 8.x | Three.js per React |
| tsParticles | 3.x | Sistema particelle |

### Backend & Database

| Tecnologia | Utilizzo |
|------------|----------|
| Supabase | Database PostgreSQL + Auth + Storage |
| Sanity.io | CMS headless per contenuti |
| Vercel Functions | API serverless |
| Resend | Invio email transazionali |

### AI & Integrazioni

| Tecnologia | Utilizzo |
|------------|----------|
| Claude API | Chat AI assistente |
| Anthropic SDK | Client per Claude |

### DevOps & Monitoring

| Tecnologia | Utilizzo |
|------------|----------|
| Vercel | Hosting, CI/CD, Edge |
| GitHub | Version control |
| Sentry | Error tracking |
| Vercel Analytics | Web analytics |

---

## 📊 Diagramma Architettura

```
                                    ┌─────────────────────────────────────┐
                                    │            CLOUDFLARE               │
                                    │         (DNS + CDN + DDoS)          │
                                    └──────────────────┬──────────────────┘
                                                       │
                                                       ▼
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                      VERCEL                                          │
│  ┌────────────────────────────────────────────────────────────────────────────────┐  │
│  │                           NEXT.JS 14 (App Router)                              │  │
│  │                                                                                │  │
│  │   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐               │  │
│  │   │   PAGES (SSG)   │  │  COMPONENTS     │  │  API ROUTES     │               │  │
│  │   │                 │  │                 │  │  (Serverless)   │               │  │
│  │   │  / (home)       │  │  Hero3D         │  │                 │               │  │
│  │   │  /servizi       │  │  Navbar         │  │  /api/contact   │               │  │
│  │   │  /progetti      │  │  ProjectCard    │  │  /api/chat      │               │  │
│  │   │  /progetti/[id] │  │  Calculator     │  │  /api/calculate │               │  │
│  │   │  /blog          │  │  ChatWidget     │  │  /api/newsletter│               │  │
│  │   │  /blog/[slug]   │  │  Footer         │  │                 │               │  │
│  │   │  /chi-siamo     │  │  ThemeToggle    │  │                 │               │  │
│  │   │  /contatti      │  │  GlitchText     │  │                 │               │  │
│  │   │                 │  │  ParticlesBg    │  │                 │               │  │
│  │   └─────────────────┘  └─────────────────┘  └────────┬────────┘               │  │
│  │                                                      │                         │  │
│  └──────────────────────────────────────────────────────┼─────────────────────────┘  │
│                                                         │                            │
└─────────────────────────────────────────────────────────┼────────────────────────────┘
                                                          │
                    ┌─────────────────────────────────────┼─────────────────────────────┐
                    │                                     │                             │
                    ▼                                     ▼                             ▼
         ┌─────────────────┐                   ┌─────────────────┐            ┌─────────────────┐
         │    SUPABASE     │                   │   SANITY.IO     │            │   CLAUDE API    │
         │                 │                   │                 │            │                 │
         │  ┌───────────┐  │                   │  Blog Posts     │            │  Chat AI        │
         │  │ PostgreSQL│  │                   │  Projects       │            │  Pre-qualifica  │
         │  │           │  │                   │  Team Members   │            │  Preventivi     │
         │  │ contacts  │  │                   │  Testimonials   │            │                 │
         │  │ leads     │  │                   │  Services       │            │                 │
         │  │ estimates │  │                   │                 │            │                 │
         │  │ chat_logs │  │                   │                 │            │                 │
         │  └───────────┘  │                   └─────────────────┘            └─────────────────┘
         │                 │
         │  ┌───────────┐  │                   ┌─────────────────┐
         │  │  Storage  │  │                   │     RESEND      │
         │  │  (files)  │  │                   │                 │
         │  └───────────┘  │◄──────────────────│  Email invio    │
         │                 │                   │  notifiche      │
         └─────────────────┘                   └─────────────────┘
```

---

## 🗄️ Schema Database (Supabase)

### Tabella: `contacts`

Memorizza tutti i contatti/lead ricevuti.

```sql
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Info base
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    
    -- Dettagli richiesta
    project_type VARCHAR(50),
    message TEXT,
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    
    -- Tracking
    source VARCHAR(100) DEFAULT 'form',
    status VARCHAR(50) DEFAULT 'new',
    notes TEXT,
    
    -- UTM
    utm_source VARCHAR(255),
    utm_medium VARCHAR(255),
    utm_campaign VARCHAR(255),
    referrer TEXT
);

-- Indexes
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);
```

**Valori ENUM:**
- `project_type`: website, webapp, ai_agent, rag, automation, other
- `source`: form, calculator, chat
- `status`: new, contacted, qualified, proposal, won, lost

### Tabella: `estimates`

Memorizza le stime generate dal calculator.

```sql
CREATE TABLE estimates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    contact_id UUID REFERENCES contacts(id),
    
    -- Parametri calculator
    project_type VARCHAR(50) NOT NULL,
    complexity VARCHAR(50) NOT NULL,
    features JSONB DEFAULT '[]',
    timeline VARCHAR(50),
    
    -- Output calcolo
    hours_estimate_min INT,
    hours_estimate_max INT,
    price_estimate_min DECIMAL(10,2),
    price_estimate_max DECIMAL(10,2),
    
    -- Follow up
    requested_detailed BOOLEAN DEFAULT FALSE,
    detailed_sent_at TIMESTAMPTZ
);

CREATE INDEX idx_estimates_contact ON estimates(contact_id);
```

**Valori:**
- `complexity`: simple, medium, complex
- `features`: JSON array es. `["auth", "dashboard", "ai_integration"]`
- `timeline`: rush, standard, flexible

### Tabella: `chat_logs`

Log delle conversazioni chat per analytics.

```sql
CREATE TABLE chat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    session_id VARCHAR(255) NOT NULL,
    contact_id UUID REFERENCES contacts(id),
    
    role VARCHAR(20) NOT NULL,
    content TEXT NOT NULL,
    
    -- Metadata
    intent_detected VARCHAR(100),
    converted_to_lead BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_chat_session ON chat_logs(session_id);
CREATE INDEX idx_chat_created ON chat_logs(created_at DESC);
```

### Tabella: `newsletter_subscribers`

Iscritti alla newsletter.

```sql
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    
    status VARCHAR(50) DEFAULT 'active',
    source VARCHAR(100),
    
    unsubscribed_at TIMESTAMPTZ
);

CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscribers(status);
```

### Row Level Security (RLS)

```sql
-- Abilita RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies: insert per tutti (anon), read/update solo authenticated
CREATE POLICY "Allow anonymous insert" ON contacts
    FOR INSERT TO anon WITH CHECK (true);
    
CREATE POLICY "Allow authenticated read" ON contacts
    FOR SELECT TO authenticated USING (true);

-- Ripetere pattern per altre tabelle...
```

---

## 📝 Sanity CMS Schema

### Schema: `project`

```typescript
export default {
  name: 'project',
  title: 'Progetto',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titolo', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Descrizione Breve', type: 'text', rows: 3 },
    { name: 'content', title: 'Contenuto', type: 'blockContent' },
    { name: 'coverImage', title: 'Immagine Cover', type: 'image', options: { hotspot: true } },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
    { 
      name: 'category', 
      title: 'Categoria', 
      type: 'string',
      options: { 
        list: [
          { title: 'Sito Web', value: 'website' },
          { title: 'WebApp', value: 'webapp' },
          { title: 'AI Agent', value: 'ai_agent' },
          { title: 'Sistema RAG', value: 'rag' },
          { title: 'Automazione', value: 'automation' },
          { title: 'App', value: 'app' }
        ]
      }
    },
    { name: 'technologies', title: 'Tecnologie', type: 'array', of: [{ type: 'string' }] },
    { name: 'hoursSpent', title: 'Ore Impiegate', type: 'number' },
    { name: 'clientName', title: 'Nome Cliente', type: 'string' },
    { name: 'clientLogo', title: 'Logo Cliente', type: 'image' },
    { name: 'testimonial', title: 'Testimonial', type: 'text' },
    { name: 'liveUrl', title: 'URL Live', type: 'url' },
    { name: 'featured', title: 'In Evidenza', type: 'boolean', initialValue: false },
    { name: 'publishedAt', title: 'Data Pubblicazione', type: 'datetime' }
  ],
  preview: {
    select: { title: 'title', media: 'coverImage', category: 'category' },
    prepare({ title, media, category }) {
      return { title, media, subtitle: category }
    }
  }
}
```

### Schema: `blogPost`

```typescript
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titolo', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'content', title: 'Contenuto', type: 'blockContent' },
    { name: 'coverImage', title: 'Immagine Cover', type: 'image', options: { hotspot: true } },
    { name: 'categories', title: 'Categorie', type: 'array', of: [{ type: 'string' }] },
    { name: 'author', title: 'Autore', type: 'reference', to: [{ type: 'teamMember' }] },
    { name: 'publishedAt', title: 'Data Pubblicazione', type: 'datetime' },
    { name: 'readingTime', title: 'Tempo Lettura (min)', type: 'number' }
  ]
}
```

### Schema: `service`

```typescript
export default {
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titolo', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    { name: 'icon', title: 'Emoji Icona', type: 'string' },
    { name: 'shortDescription', title: 'Descrizione Breve', type: 'text', rows: 2 },
    { name: 'fullDescription', title: 'Descrizione Completa', type: 'blockContent' },
    { name: 'technologies', title: 'Tecnologie', type: 'array', of: [{ type: 'string' }] },
    { name: 'startingPrice', title: 'Prezzo Base (€)', type: 'number' },
    { name: 'features', title: 'Features Incluse', type: 'array', of: [{ type: 'string' }] },
    { name: 'order', title: 'Ordine Visualizzazione', type: 'number' }
  ],
  orderings: [{ title: 'Ordine', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }]
}
```

---

## 🔌 API Routes

### `POST /api/contact`

Gestisce invio form contatto.

```typescript
// Input
{
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  message: string;
  source?: 'form' | 'calculator' | 'chat';
}

// Output
{ success: true, id: string }
// oppure
{ success: false, error: string }
```

**Flow:**
1. Valida input con Zod
2. Salva in Supabase `contacts`
3. Invia email notifica admin (Resend)
4. Invia email conferma utente (Resend)
5. Return response

### `POST /api/chat`

Proxy verso Claude API con streaming.

```typescript
// Input
{
  messages: Array<{ role: 'user' | 'assistant', content: string }>;
  sessionId: string;
}

// Output
ReadableStream (text/event-stream)
```

**System Prompt:**
```
Sei l'assistente AI di NeuraLabs, un'agenzia specializzata in sviluppo web, 
AI Agents, sistemi RAG e automazioni.

Il tuo compito è:
- Rispondere a domande sui servizi NeuraLabs
- Aiutare i visitatori a capire di cosa hanno bisogno
- Fornire stime di massima (rimanda al calculator per stime precise)
- Raccogliere informazioni per qualificare i lead
- Proporre di fissare una call se il visitatore è interessato

Tono: professionale ma friendly, entusiasta dell'AI, mai "salesy".

Servizi e prezzi base:
- Siti Web & WebApp: da €2.500
- AI Agents: da €5.000
- Sistemi RAG: da €4.000
- Automazioni: da €1.000
```

### `POST /api/calculate`

Calcola preventivo e salva stima.

```typescript
// Input
{
  projectType: string;
  complexity: 'simple' | 'medium' | 'complex';
  features: string[];
  timeline: 'rush' | 'standard' | 'flexible';
  email?: string; // Se vuole ricevere dettagli
}

// Output
{
  hoursMin: number;
  hoursMax: number;
  priceMin: number;
  priceMax: number;
  estimateId: string;
}
```

**Logica Calcolo:**
```typescript
const BASE_HOURS = {
  website: 40,
  webapp: 80,
  ai_agent: 100,
  rag: 80,
  automation: 30
};

const COMPLEXITY_MULTIPLIER = {
  simple: 1,
  medium: 1.5,
  complex: 2.5
};

const FEATURE_HOURS = {
  auth: 20,
  dashboard: 40,
  ai_integration: 30,
  complex_db: 25,
  external_api: 15,
  premium_design: 20
};

const TIMELINE_MODIFIER = {
  rush: 1.3,
  standard: 1,
  flexible: 0.9
};

const HOURLY_RATE = 60; // €/ora
```

### `POST /api/newsletter`

Iscrizione newsletter.

```typescript
// Input
{ email: string; name?: string; source?: string; }

// Output
{ success: true }
```

---

## 🗂️ Struttura Cartelle

```
neuralabs-website/
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (marketing)/              # Route group pagine pubbliche
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── servizi/
│   │   │   │   └── page.tsx
│   │   │   ├── progetti/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── chi-siamo/
│   │   │   │   └── page.tsx
│   │   │   └── contatti/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/                      # API Routes
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   ├── chat/
│   │   │   │   └── route.ts
│   │   │   ├── calculate/
│   │   │   │   └── route.ts
│   │   │   └── newsletter/
│   │   │       └── route.ts
│   │   │
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   ├── not-found.tsx             # 404 page
│   │   ├── sitemap.ts                # Dynamic sitemap
│   │   └── robots.ts                 # Robots.txt
│   │
│   ├── components/
│   │   ├── ui/                       # Componenti base riutilizzabili
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── GlitchText.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/                   # Componenti layout
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── sections/                 # Sezioni pagine
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── ProjectsPreview.tsx
│   │   │   ├── Approach.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── three/                    # Componenti 3D
│   │   │   ├── ParticleField.tsx
│   │   │   └── ParticleHero.tsx
│   │   │
│   │   ├── chat/                     # Chat AI
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── ChatPanel.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   └── ChatInput.tsx
│   │   │
│   │   ├── calculator/               # Calculator preventivi
│   │   │   ├── Calculator.tsx
│   │   │   └── CalculatorStep.tsx
│   │   │
│   │   ├── forms/                    # Form components
│   │   │   ├── ContactForm.tsx
│   │   │   └── NewsletterForm.tsx
│   │   │
│   │   ├── animations/               # Animation wrappers
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideIn.tsx
│   │   │   ├── ScaleIn.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   ├── Parallax.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── providers/                # Context providers
│   │       └── ThemeProvider.tsx
│   │
│   ├── lib/                          # Utilities e clients
│   │   ├── supabase.ts               # Supabase client
│   │   ├── sanity.ts                 # Sanity client + queries
│   │   ├── claude.ts                 # Claude API wrapper
│   │   ├── resend.ts                 # Email client
│   │   ├── calculator.ts             # Logica calcolo preventivi
│   │   ├── seo.ts                    # SEO helpers
│   │   └── utils.ts                  # Utilities generiche
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useScrollAnimation.ts
│   │   ├── useCursorState.ts
│   │   ├── useKonamiCode.ts
│   │   ├── useChat.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── types/                        # TypeScript types
│   │   ├── index.ts
│   │   ├── database.ts               # Types Supabase
│   │   └── sanity.ts                 # Types Sanity
│   │
│   └── data/                         # Mock data (development)
│       ├── projects.ts
│       └── posts.ts
│
├── sanity/                           # Sanity Studio
│   ├── schemas/
│   │   ├── project.ts
│   │   ├── blogPost.ts
│   │   ├── service.ts
│   │   ├── teamMember.ts
│   │   ├── testimonial.ts
│   │   ├── blockContent.ts
│   │   └── index.ts
│   ├── sanity.config.ts
│   └── sanity.cli.ts
│
├── public/
│   ├── fonts/
│   │   ├── CabinetGrotesk-Variable.woff2
│   │   ├── Inter-Variable.woff2
│   │   └── JetBrainsMono-Variable.woff2
│   ├── images/
│   │   └── ...
│   ├── og/
│   │   └── og-default.png
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── manifest.json
│
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
│
├── docs/
│   ├── PIANO_IMPLEMENTAZIONE.md
│   ├── CONVENTIONS.md
│   └── decisions/
│
├── .env.example
├── .env.local                        # (gitignored)
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔒 Sicurezza

### Environment Variables
- Mai committare `.env.local`
- Usare Vercel Environment Variables per produzione
- Separare variabili `NEXT_PUBLIC_*` (esposte al client) da quelle server-only

### API Security
- Validazione input con Zod su tutte le API routes
- Rate limiting su endpoints sensibili (contact, chat)
- CORS configurato correttamente

### Database
- RLS abilitato su tutte le tabelle Supabase
- Service role key solo server-side
- Anon key solo per operazioni pubbliche (insert)

---

## 📈 Performance

### Ottimizzazioni
- **Images:** next/image con lazy loading, formati moderni (WebP/AVIF)
- **Fonts:** Self-hosted, font-display: swap
- **3D:** Lazy load particelle, riduzione su mobile
- **Bundle:** Tree shaking, code splitting automatico Next.js
- **Caching:** ISR per pagine Sanity, SWR per dati dinamici

### Target Metrics
| Metrica | Target |
|---------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| TTFB | < 200ms |
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID | < 100ms |

---

## 🚀 Deploy

### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Environment Variables (Vercel)
Configurare in Vercel Dashboard → Settings → Environment Variables:
- Tutte le variabili da `.env.example`
- Separare Production / Preview / Development se necessario

### Branch Strategy
- `main` → Production (auto-deploy)
- `develop` → Staging/Preview
- `feature/*` → Preview deployments per PR

---

*Documento generato durante sessione di progettazione strutturata.*
