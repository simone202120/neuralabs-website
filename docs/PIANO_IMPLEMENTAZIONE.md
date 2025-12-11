# 📅 PIANO IMPLEMENTAZIONE - NeuraLabs Website

## Overview

| Metrica | Valore |
|---------|--------|
| **Sprint totali** | 6 |
| **Task totali** | 29 |
| **Ore stimate** | 70-85 ore |
| **Durata stimata** | 4-6 settimane (part-time) |

---

# 🏃 SPRINT 1: Setup & Fondamenta
*Obiettivo: Progetto funzionante con deploy automatico*

---

## Task 1.1: Inizializzazione Progetto Next.js

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | Nessuna |
| **Branch** | `feature/1.1-project-init` |

**Deliverable:**
- [ ] Progetto Next.js 14 con App Router
- [ ] TypeScript configurato
- [ ] Tailwind CSS installato e configurato
- [ ] Struttura cartelle base creata
- [ ] ESLint + Prettier configurati
- [ ] .env.example con variabili placeholder

**Prompt per Claude Code:**
```
Crea un nuovo progetto Next.js 14 con App Router per il sito NeuraLabs.

Requisiti:
- TypeScript strict mode
- Tailwind CSS con configurazione custom (colors: coral #FF6B35, cream #FFE8D6, charcoal #1A1A1A)
- Struttura cartelle: src/app, src/components (ui, layout, sections, three, chat, calculator), src/lib, src/hooks, src/types
- ESLint + Prettier con config standard
- .env.example con: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SANITY_PROJECT_ID, SANITY_DATASET, CLAUDE_API_KEY, RESEND_API_KEY
- next.config.js con configurazione immagini per domini esterni
- .gitignore appropriato

Font da configurare in Tailwind:
- Display: "Cabinet Grotesk" (fallback: system-ui)
- Body: "Inter" (fallback: sans-serif)
- Mono: "JetBrains Mono"
```

**File coinvolti:**
- `package.json` (nuovo)
- `next.config.js` (nuovo)
- `tailwind.config.js` (nuovo)
- `tsconfig.json` (nuovo)
- `.eslintrc.json` (nuovo)
- `.prettierrc` (nuovo)
- `.env.example` (nuovo)
- `src/app/layout.tsx` (nuovo)
- `src/app/globals.css` (nuovo)

---

## Task 1.2: Setup Supabase

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2h) |
| **Dipendenze** | 1.1 |
| **Branch** | `feature/1.2-supabase-setup` |

**Deliverable:**
- [ ] Progetto Supabase creato
- [ ] Tabelle database create (contacts, estimates, chat_logs, newsletter_subscribers)
- [ ] Row Level Security configurata
- [ ] Client Supabase in src/lib
- [ ] Types TypeScript generati

**Prompt per Claude Code:**
```
Configura Supabase per il progetto NeuraLabs.

1. Crea il file src/lib/supabase.ts con:
   - Client browser (createBrowserClient)
   - Client server (createServerClient) per Server Components
   - Tipi TypeScript per le tabelle

2. Crea il file supabase/migrations/001_initial_schema.sql con le tabelle:
   - contacts (id, created_at, name, email, company, phone, project_type, message, budget_range, timeline, source, status, notes, utm_source, utm_medium, utm_campaign, referrer)
   - estimates (id, created_at, contact_id FK, project_type, complexity, features JSONB, timeline, hours_estimate_min/max, price_estimate_min/max, requested_detailed, detailed_sent_at)
   - chat_logs (id, created_at, session_id, contact_id FK nullable, role, content, intent_detected, sentiment, converted_to_lead)
   - newsletter_subscribers (id, created_at, email UNIQUE, name, status, source, unsubscribed_at)

3. Crea RLS policies:
   - contacts: insert per tutti, select/update solo authenticated
   - estimates: insert per tutti, select/update solo authenticated
   - chat_logs: insert per tutti, select solo authenticated
   - newsletter_subscribers: insert per tutti, gestione solo authenticated

4. Crea src/types/database.ts con i tipi TypeScript che riflettono lo schema
```

**File coinvolti:**
- `src/lib/supabase.ts` (nuovo)
- `supabase/migrations/001_initial_schema.sql` (nuovo)
- `src/types/database.ts` (nuovo)

---

## Task 1.3: Setup Sanity CMS

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 1.1 |
| **Branch** | `feature/1.3-sanity-setup` |

**Deliverable:**
- [ ] Sanity Studio inizializzato nella cartella /sanity
- [ ] Schemi: project, blogPost, service, teamMember, testimonial
- [ ] Client Sanity in src/lib
- [ ] GROQ queries base

**Prompt per Claude Code:**
```
Configura Sanity CMS per NeuraLabs.

1. Inizializza Sanity Studio nella cartella /sanity con:
   - sanity.config.ts
   - sanity.cli.ts

2. Crea gli schemi in sanity/schemas/:
   - project.ts (title, slug, description, content blockContent, coverImage, gallery, category enum, technologies array, hoursSpent, clientName, clientLogo, testimonial, liveUrl, featured boolean, publishedAt)
   - blogPost.ts (title, slug, excerpt, content blockContent, coverImage, categories array, author reference, publishedAt, readingTime)
   - service.ts (title, slug, icon, shortDescription, fullDescription blockContent, technologies, startingPrice, features array, order)
   - teamMember.ts (name, slug, role, bio, image, social links)
   - testimonial.ts (quote, authorName, authorRole, company, image, projectRef)
   - blockContent.ts (rich text schema)

3. Crea src/lib/sanity.ts con:
   - Client configurato
   - Helper per image URL (urlFor)
   - GROQ queries per: getAllProjects, getProjectBySlug, getFeaturedProjects, getAllPosts, getPostBySlug, getAllServices, getTestimonials

4. Crea src/types/sanity.ts con i tipi TypeScript
```

**File coinvolti:**
- `sanity/` (nuova cartella)
- `sanity/sanity.config.ts` (nuovo)
- `sanity/schemas/*.ts` (nuovi)
- `src/lib/sanity.ts` (nuovo)
- `src/types/sanity.ts` (nuovo)

---

## Task 1.4: Deploy Vercel + CI/CD

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (1-2h) |
| **Dipendenze** | 1.1, 1.2, 1.3 |
| **Branch** | `feature/1.4-vercel-deploy` |

**Deliverable:**
- [ ] Repository GitHub creato
- [ ] Progetto Vercel collegato
- [ ] Environment variables configurate
- [ ] Deploy automatico su push
- [ ] Preview deployments su PR

**Prompt per Claude Code:**
```
Prepara il progetto per il deploy su Vercel.

1. Crea/aggiorna README.md con:
   - Descrizione progetto NeuraLabs
   - Istruzioni setup locale
   - Lista environment variables necessarie
   - Comandi npm disponibili

2. Verifica next.config.js per produzione:
   - Configurazione immagini ottimizzata
   - Headers di sicurezza

3. Crea vercel.json (se necessario) per:
   - Redirects
   - Headers custom
   - Configurazione build

4. Aggiungi script in package.json:
   - "build": "next build"
   - "start": "next start"
   - "lint": "next lint"
   - "type-check": "tsc --noEmit"

Il deploy effettivo su Vercel sarà fatto manualmente dall'utente tramite dashboard.
```

**File coinvolti:**
- `README.md` (nuovo/modifica)
- `vercel.json` (nuovo, se necessario)
- `package.json` (modifica)

---

# 🏃 SPRINT 2: Layout & Componenti Base
*Obiettivo: Shell navigabile con tema dark/light*

---

## Task 2.1: Sistema Design Tokens & Theme

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2h) |
| **Dipendenze** | 1.1 |
| **Branch** | `feature/2.1-design-tokens` |

**Deliverable:**
- [ ] CSS variables per colori dark/light
- [ ] Tailwind config con tutti i tokens
- [ ] ThemeProvider con next-themes
- [ ] Utility classes custom

**Prompt per Claude Code:**
```
Implementa il sistema di design tokens per NeuraLabs con supporto dark/light mode.

1. Aggiorna tailwind.config.js con la palette completa:

DARK MODE (default):
- background: #1A1A1A (charcoal)
- surface: #252525
- primary: #FF6B35 (coral)
- secondary: #FFE8D6 (cream)
- accent: #FF8C61 (peach)
- text-primary: #FFFDF9 (warm white)
- text-secondary: #A0A0A0

LIGHT MODE:
- background: #FFFDF9
- surface: #F5F0EB
- primary: #FF6B35
- secondary: #1A1A1A
- text-primary: #1A1A1A
- text-secondary: #666666

2. Configura next-themes in src/components/providers/ThemeProvider.tsx

3. Aggiorna src/app/globals.css con:
   - CSS variables per entrambi i temi
   - Transizioni smooth per cambio tema
   - Font-face per Cabinet Grotesk, Inter, JetBrains Mono
   - Utility classes: .text-glow, .bg-glow (per effetti neon arancio)

4. Aggiorna src/app/layout.tsx per includere ThemeProvider
```

**File coinvolti:**
- `tailwind.config.js` (modifica)
- `src/app/globals.css` (modifica)
- `src/components/providers/ThemeProvider.tsx` (nuovo)
- `src/app/layout.tsx` (modifica)

---

## Task 2.2: Componenti UI Base

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 2.1 |
| **Branch** | `feature/2.2-ui-components` |

**Deliverable:**
- [ ] Button (varianti: primary, secondary, ghost, outline)
- [ ] Card (con hover effects)
- [ ] Input, Textarea, Select
- [ ] Badge/Tag
- [ ] Container, Section

**Prompt per Claude Code:**
```
Crea i componenti UI base per NeuraLabs in src/components/ui/.

Stile: moderno, bordi arrotondati (rounded-xl), transizioni smooth, supporto dark/light.

1. Button.tsx
   - Varianti: primary (bg coral), secondary (outline), ghost, link
   - Sizes: sm, md, lg
   - Stati: hover (glow effect), disabled, loading
   - Props: asChild per composizione con Link

2. Card.tsx
   - Varianti: default, elevated, interactive
   - Hover: leggero scale + glow border
   - Slots: CardHeader, CardContent, CardFooter

3. Input.tsx e Textarea.tsx
   - Stile consistente con focus ring coral
   - Supporto error state
   - Label integrata opzionale

4. Select.tsx
   - Dropdown custom styled
   - Supporto per options con icone

5. Badge.tsx
   - Varianti per categorie: website, webapp, ai_agent, rag, automation
   - Colori diversi per tipo

6. Container.tsx - wrapper max-width responsive
7. Section.tsx - wrapper per sezioni pagina con padding consistente

Usa 'class-variance-authority' (cva) per gestire le varianti.
Tutti i componenti devono essere fully typed con TypeScript.
```

**File coinvolti:**
- `src/components/ui/Button.tsx` (nuovo)
- `src/components/ui/Card.tsx` (nuovo)
- `src/components/ui/Input.tsx` (nuovo)
- `src/components/ui/Textarea.tsx` (nuovo)
- `src/components/ui/Select.tsx` (nuovo)
- `src/components/ui/Badge.tsx` (nuovo)
- `src/components/ui/Container.tsx` (nuovo)
- `src/components/ui/Section.tsx` (nuovo)
- `src/components/ui/index.ts` (nuovo - barrel export)

---

## Task 2.3: Navbar & Mobile Menu

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 2.1, 2.2 |
| **Branch** | `feature/2.3-navbar` |

**Deliverable:**
- [ ] Navbar responsive con logo
- [ ] Menu desktop con hover effects
- [ ] Menu mobile hamburger fullscreen
- [ ] Theme toggle animato (sole/luna)
- [ ] CTA "Contattaci" evidenziato

**Prompt per Claude Code:**
```
Crea la Navbar per NeuraLabs in src/components/layout/Navbar.tsx.

Requisiti:
1. Layout desktop:
   - Logo "🧠 NeuraLabs" a sinistra (link a home)
   - Menu centrale: Servizi, Progetti, Blog, Chi Siamo
   - Destra: Theme toggle + Button "Contattaci"
   - Sticky con blur background su scroll
   - Hover sui link: underline animata coral

2. Layout mobile (< 768px):
   - Logo + hamburger icon
   - Menu fullscreen overlay con animazione slide-in
   - Link grandi, centrati
   - Theme toggle e CTA nel menu

3. ThemeToggle.tsx separato:
   - Icona sole/luna con animazione rotazione
   - Transizione smooth

4. Usa Framer Motion per:
   - Animazione menu mobile
   - Hover effects sui link
   - Transizione tema

5. Il componente deve rilevare la pagina attiva e evidenziare il link corrispondente.
```

**File coinvolti:**
- `src/components/layout/Navbar.tsx` (nuovo)
- `src/components/layout/ThemeToggle.tsx` (nuovo)
- `src/components/layout/MobileMenu.tsx` (nuovo)

---

## Task 2.4: Footer

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (1-2h) |
| **Dipendenze** | 2.1, 2.2 |
| **Branch** | `feature/2.4-footer` |

**Deliverable:**
- [ ] Footer con 4 colonne
- [ ] Link social
- [ ] Newsletter mini-form (solo email)
- [ ] Copyright e legal links
- [ ] Easter egg hint nascosto

**Prompt per Claude Code:**
```
Crea il Footer per NeuraLabs in src/components/layout/Footer.tsx.

Layout (4 colonne su desktop, stack su mobile):

1. Colonna 1 - Brand:
   - Logo NeuraLabs
   - Tagline breve
   - Link social: LinkedIn, Twitter/X, GitHub

2. Colonna 2 - Menu:
   - Home, Servizi, Progetti, Blog, Chi Siamo, Contatti

3. Colonna 3 - Servizi:
   - Siti Web, AI Agents, Sistemi RAG, Automazioni

4. Colonna 4 - Newsletter:
   - Titolo "Resta aggiornato"
   - Input email + button submit
   - Testo privacy breve

Bottom bar:
- © 2025 NeuraLabs
- P.IVA (placeholder)
- Link: Privacy Policy, Cookie Policy
- Easter egg: un piccolo "🎮" cliccabile che non fa nulla (per ora) - hint per Konami code

Stile: sfondo leggermente più scuro della pagina, padding generoso.
```

**File coinvolti:**
- `src/components/layout/Footer.tsx` (nuovo)
- `src/components/layout/SocialLinks.tsx` (nuovo)
- `src/components/layout/NewsletterForm.tsx` (nuovo)

---

## Task 2.5: Layout Shell Completa

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (1-2h) |
| **Dipendenze** | 2.3, 2.4 |
| **Branch** | `feature/2.5-layout-shell` |

**Deliverable:**
- [ ] Layout.tsx con Navbar + Footer
- [ ] Pagine placeholder per tutte le routes
- [ ] Navigazione funzionante
- [ ] Meta tags base

**Prompt per Claude Code:**
```
Assembla il layout completo e crea le pagine placeholder per NeuraLabs.

1. Aggiorna src/app/layout.tsx:
   - Includi Navbar e Footer
   - Meta tags SEO base (title, description, og:image)
   - Font loading ottimizzato
   - Favicon

2. Crea le pagine placeholder in src/app/:
   - page.tsx (home) - "Home - Coming Soon"
   - servizi/page.tsx - "Servizi - Coming Soon"
   - progetti/page.tsx - "Progetti - Coming Soon"
   - progetti/[slug]/page.tsx - dynamic route placeholder
   - blog/page.tsx - "Blog - Coming Soon"
   - blog/[slug]/page.tsx - dynamic route placeholder
   - chi-siamo/page.tsx - "Chi Siamo - Coming Soon"
   - contatti/page.tsx - "Contatti - Coming Soon"

3. Ogni placeholder deve avere:
   - Titolo pagina centrato
   - Breve descrizione
   - Pulsante "Torna alla Home"

4. Crea src/app/not-found.tsx per pagina 404 custom.

5. Verifica che la navigazione funzioni tra tutte le pagine.
```

**File coinvolti:**
- `src/app/layout.tsx` (modifica)
- `src/app/page.tsx` (modifica)
- `src/app/servizi/page.tsx` (nuovo)
- `src/app/progetti/page.tsx` (nuovo)
- `src/app/progetti/[slug]/page.tsx` (nuovo)
- `src/app/blog/page.tsx` (nuovo)
- `src/app/blog/[slug]/page.tsx` (nuovo)
- `src/app/chi-siamo/page.tsx` (nuovo)
- `src/app/contatti/page.tsx` (nuovo)
- `src/app/not-found.tsx` (nuovo)

---

# 🏃 SPRINT 3: Effetti WOW & Animazioni
*Obiettivo: Particelle 3D, cursor custom, glitch, scroll animations*

---

## Task 3.1: Particelle Neurali 3D (Hero)

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (3h) |
| **Dipendenze** | 2.5 |
| **Branch** | `feature/3.1-particles-hero` |

**Deliverable:**
- [ ] Canvas Three.js con particelle
- [ ] Connessioni tra particelle vicine (stile rete neurale)
- [ ] Reazione al movimento mouse
- [ ] Performance ottimizzata (requestAnimationFrame, instancing)
- [ ] Fallback per mobile (particelle ridotte)

**Prompt per Claude Code:**
```
Crea il componente ParticleField per l'hero di NeuraLabs usando Three.js + React Three Fiber.

File: src/components/three/ParticleField.tsx

Requisiti:
1. Particelle:
   - ~150 particelle su desktop, ~50 su mobile
   - Colore: coral (#FF6B35) con variazioni di opacità
   - Dimensione: piccole, 2-4px
   - Movimento: fluttuazione lenta organica

2. Connessioni:
   - Linee tra particelle vicine (distanza < threshold)
   - Colore: coral con opacità basata su distanza
   - Effetto "rete neurale"

3. Interattività:
   - Le particelle più vicine al mouse si allontanano leggermente
   - Effetto attrazione/repulsione fluido

4. Performance:
   - Usa InstancedMesh per le particelle
   - BufferGeometry per le linee
   - Limita update a 60fps
   - useFrame con delta time

5. Responsive:
   - Rileva mobile e riduci particelle
   - Disabilita interazione mouse su touch

6. Il canvas deve essere posizionato come background dell'hero (position absolute, z-index dietro al contenuto).

Crea anche un wrapper src/components/three/ParticleHero.tsx che gestisce il lazy loading con Suspense.
```

**File coinvolti:**
- `src/components/three/ParticleField.tsx` (nuovo)
- `src/components/three/ParticleHero.tsx` (nuovo)

---

## Task 3.2: Cursor Follower Custom

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2h) |
| **Dipendenze** | 2.1 |
| **Branch** | `feature/3.2-cursor-custom` |

**Deliverable:**
- [ ] Cursore custom (pallino + ring esterno)
- [ ] Trail luminoso che segue
- [ ] Stato hover su elementi interattivi (expand)
- [ ] Nascondi su mobile/touch
- [ ] Performance smooth

**Prompt per Claude Code:**
```
Crea il cursore custom per NeuraLabs.

File: src/components/ui/CustomCursor.tsx

Design:
1. Cursore composto da:
   - Dot centrale: 8px, coral pieno, segue mouse istantaneamente
   - Ring esterno: 32px, coral outline, segue con leggero delay (lerp)

2. Stati:
   - Default: dot + ring normali
   - Hover su link/button: ring si espande (48px) + cambia opacità
   - Hover su immagini: ring diventa quadrato arrotondato
   - Click: pulse animation

3. Trail (opzionale, se performance ok):
   - 3-5 dot più piccoli che seguono con delay crescente
   - Opacità decrescente

4. Implementazione:
   - Usa Framer Motion per animazioni fluide
   - Rileva touch device e nascondi completamente
   - Aggiungi CSS "cursor: none" al body quando attivo
   - Gestisci z-index per stare sopra tutto

5. Il componente deve essere aggiunto al layout principale e attivarsi solo su desktop.

Crea anche un hook src/hooks/useCursorState.ts per gestire lo stato (hover type) globalmente.
```

**File coinvolti:**
- `src/components/ui/CustomCursor.tsx` (nuovo)
- `src/hooks/useCursorState.ts` (nuovo)
- `src/app/layout.tsx` (modifica)

---

## Task 3.3: Glitch Text Effect

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2h) |
| **Dipendenze** | 2.1 |
| **Branch** | `feature/3.3-glitch-text` |

**Deliverable:**
- [ ] Componente GlitchText riusabile
- [ ] Effetto glitch intermittente
- [ ] Varianti: subtle, medium, intense
- [ ] Attivazione su hover o automatica

**Prompt per Claude Code:**
```
Crea il componente GlitchText per NeuraLabs.

File: src/components/ui/GlitchText.tsx

Effetto glitch stile cyberpunk/tech:
1. Testo base con pseudo-elementi ::before e ::after
2. Offset e color shift (cyan/magenta) sui layers
3. Clip-path animato per "rottura" visiva
4. Noise/static overlay opzionale

Props:
- children: testo da renderizzare
- variant: 'subtle' | 'medium' | 'intense'
- trigger: 'hover' | 'auto' | 'none'
- interval: tempo tra glitch automatici (default 5s)
- duration: durata effetto glitch (default 200ms)
- className: per styling aggiuntivo

Implementazione:
1. CSS-only per performance (no JS animation loop)
2. Usa CSS custom properties per colori (rispetta tema)
3. Keyframes per l'animazione glitch
4. Reduced motion: rispetta prefers-reduced-motion

Esempio uso:
<GlitchText variant="medium" trigger="auto">
  We build intelligent
</GlitchText>
```

**File coinvolti:**
- `src/components/ui/GlitchText.tsx` (nuovo)
- `src/app/globals.css` (modifica - aggiungi keyframes)

---

## Task 3.4: Scroll Animations (Framer Motion)

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 2.1 |
| **Branch** | `feature/3.4-scroll-animations` |

**Deliverable:**
- [ ] Hook useScrollAnimation
- [ ] Componenti wrapper: FadeIn, SlideIn, ScaleIn
- [ ] Stagger animations per liste
- [ ] Parallax leggero per backgrounds

**Prompt per Claude Code:**
```
Crea il sistema di scroll animations per NeuraLabs usando Framer Motion.

1. src/hooks/useScrollAnimation.ts
   - Hook che ritorna ref e controls per useInView
   - Configurable threshold e triggerOnce

2. src/components/animations/FadeIn.tsx
   - Wrapper che fa fade in quando entra in viewport
   - Props: direction ('up' | 'down' | 'left' | 'right'), delay, duration

3. src/components/animations/SlideIn.tsx
   - Slide + fade combinati
   - Props: direction, distance (px), delay

4. src/components/animations/ScaleIn.tsx
   - Scale da 0.8 a 1 + fade
   - Props: delay, duration

5. src/components/animations/StaggerContainer.tsx
   - Container che anima children in sequenza
   - Props: staggerDelay (default 0.1s)

6. src/components/animations/Parallax.tsx
   - Wrapper per effetto parallax su scroll
   - Props: speed (negativo = più lento, positivo = più veloce)
   - Usa useScroll e useTransform di Framer Motion

7. Tutti i componenti devono:
   - Rispettare prefers-reduced-motion
   - Essere type-safe
   - Avere default sensati

Crea anche un barrel export in src/components/animations/index.ts
```

**File coinvolti:**
- `src/hooks/useScrollAnimation.ts` (nuovo)
- `src/components/animations/FadeIn.tsx` (nuovo)
- `src/components/animations/SlideIn.tsx` (nuovo)
- `src/components/animations/ScaleIn.tsx` (nuovo)
- `src/components/animations/StaggerContainer.tsx` (nuovo)
- `src/components/animations/Parallax.tsx` (nuovo)
- `src/components/animations/index.ts` (nuovo)

---

## Task 3.5: Easter Egg (Konami Code)

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (1h) |
| **Dipendenze** | 3.1 |
| **Branch** | `feature/3.5-easter-egg` |

**Deliverable:**
- [ ] Hook useKonamiCode
- [ ] Effetto speciale quando attivato
- [ ] Persistenza in sessionStorage

**Prompt per Claude Code:**
```
Crea l'Easter Egg Konami Code per NeuraLabs.

1. src/hooks/useKonamiCode.ts
   - Rileva sequenza: ↑ ↑ ↓ ↓ ← → ← → B A
   - Callback quando completata
   - Reset dopo timeout di inattività

2. Effetto quando attivato (scegli uno o combinali):
   - Le particelle dell'hero cambiano colore (rainbow mode)
   - Appare un messaggio "You found it! 🎮 Built with ❤️ by NeuraLabs"
   - Confetti animation
   - Il logo fa una piccola animazione

3. Salva in sessionStorage che è stato attivato (non ripetere l'effetto ogni volta)

4. Integra in layout.tsx

Bonus: nel footer, il piccolo 🎮 se cliccato mostra un tooltip "Try the Konami Code..."
```

**File coinvolti:**
- `src/hooks/useKonamiCode.ts` (nuovo)
- `src/components/ui/EasterEgg.tsx` (nuovo)
- `src/app/layout.tsx` (modifica)
- `src/components/layout/Footer.tsx` (modifica)

---

# 🏃 SPRINT 4: Homepage & Sezioni
*Obiettivo: Homepage completa e funzionale*

---

## Task 4.1: Hero Section

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 3.1, 3.3, 3.4 |
| **Branch** | `feature/4.1-hero-section` |

**Deliverable:**
- [ ] Hero con ParticleField background
- [ ] Titolo con GlitchText
- [ ] Sottotitolo e lista servizi
- [ ] Due CTA buttons
- [ ] Scroll indicator animato

**Prompt per Claude Code:**
```
Crea la Hero Section per la homepage di NeuraLabs.

File: src/components/sections/Hero.tsx

Layout (riferimento wireframe):
1. Background: ParticleHero a tutto schermo
2. Contenuto centrato:
   - Titolo principale con GlitchText: "We build intelligent" (glitch) + "digital experiences" (normale)
   - Sottotitolo: lista servizi separati da " · "
   - Due CTA: "Scopri cosa possiamo creare" (primary) + "Parla con l'AI →" (secondary/ghost)
3. Scroll indicator in basso: chevron animato che rimbalza + "scroll"

Animazioni:
- Titolo: fade in + slide up con delay
- Sottotitolo: fade in dopo titolo
- CTA: fade in dopo sottotitolo
- Scroll indicator: appare dopo 2s

Responsive:
- Mobile: testo più piccolo, CTA stacked verticalmente
- Particelle gestite dal componente ParticleHero

Il componente deve essere full viewport height (min-h-screen).
```

**File coinvolti:**
- `src/components/sections/Hero.tsx` (nuovo)
- `src/app/page.tsx` (modifica)

---

## Task 4.2: Services Section (Home)

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 2.2, 3.4 |
| **Branch** | `feature/4.2-services-section` |

**Deliverable:**
- [ ] Grid 4 servizi con icone
- [ ] Hover effect: expand con descrizione
- [ ] Scroll animations
- [ ] CTA "Tutti i servizi"

**Prompt per Claude Code:**
```
Crea la Services Section per la homepage di NeuraLabs.

File: src/components/sections/ServicesPreview.tsx

Layout:
1. Titolo sezione: "Cosa Facciamo" con linea decorativa
2. Grid 4 colonne (2 su tablet, 1 su mobile):
   - Siti Web (🌐)
   - AI Agents (🤖)
   - Sistemi RAG (🧠)
   - Automazioni (⚡)

3. Ogni card servizio:
   - Icona grande
   - Titolo servizio
   - Hover: card si espande, appare descrizione breve + "Scopri →"
   - Glow effect coral sul bordo

4. CTA finale: "Tutti i servizi →" button centered

Animazioni:
- Titolo: FadeIn
- Cards: StaggerContainer con ScaleIn
- Hover: Framer Motion layoutId per smooth expand

I servizi per ora possono essere hardcoded, poi verranno da Sanity.
```

**File coinvolti:**
- `src/components/sections/ServicesPreview.tsx` (nuovo)
- `src/app/page.tsx` (modifica)

---

## Task 4.3: Projects Section (Home)

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 2.2, 3.4 |
| **Branch** | `feature/4.3-projects-section` |

**Deliverable:**
- [ ] Grid progetti in evidenza (4-6)
- [ ] Card progetto con immagine, titolo, categoria, ore
- [ ] Hover effect su immagine
- [ ] CTA "Vedi tutti i progetti"

**Prompt per Claude Code:**
```
Crea la Projects Section per la homepage di NeuraLabs.

File: src/components/sections/ProjectsPreview.tsx

Layout:
1. Titolo: "Progetti in Evidenza"
2. Grid 2 colonne (1 su mobile):
   - 4-6 progetti featured

3. ProjectCard component (src/components/ui/ProjectCard.tsx):
   - Immagine cover (aspect-video)
   - Overlay gradient su hover
   - Badge categoria (es. "AI Agent", "RAG System")
   - Titolo progetto
   - Ore stimate con icona ⏱️
   - Hover: immagine zoom leggero, overlay con "Vedi progetto →"

4. CTA: "Vedi tutti i progetti →"

Animazioni:
- Cards: StaggerContainer
- Hover: scale immagine + opacity overlay

Dati placeholder per ora:
- TechFlow AI (AI Agent, 120h)
- DataMind RAG (RAG System, 80h)
- StartupX MVP (WebApp, 200h)
- AutoFlow (Automation, 60h)

Crea anche interfaccia Project in src/types/index.ts
```

**File coinvolti:**
- `src/components/sections/ProjectsPreview.tsx` (nuovo)
- `src/components/ui/ProjectCard.tsx` (nuovo)
- `src/types/index.ts` (nuovo/modifica)
- `src/app/page.tsx` (modifica)

---

## Task 4.4: Approach Section + Testimonials

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2-3h) |
| **Dipendenze** | 2.2, 3.4 |
| **Branch** | `feature/4.4-approach-testimonials` |

**Deliverable:**
- [ ] Sezione "Il Nostro Approccio" con 3 step
- [ ] Quote/manifesto
- [ ] Carousel testimonials
- [ ] Loghi clienti (placeholder)

**Prompt per Claude Code:**
```
Crea le sezioni Approach e Testimonials per la homepage.

FILE 1: src/components/sections/Approach.tsx
1. Quote/manifesto:
   "Non siamo la solita agenzia. L'AI è il nostro partner creativo, non solo il nostro prodotto."

2. Timeline orizzontale 3 step:
   - 01: Ascolto & Discovery
   - 02: Design & Prototipo  
   - 03: Build & Deploy
   - Connessi da linea con pallini
   - Animazione: pallini si colorano in sequenza su scroll

FILE 2: src/components/sections/Testimonials.tsx
1. Titolo: "Dicono di Noi"
2. Carousel/slider con testimonial:
   - Quote text
   - Foto (placeholder avatar)
   - Nome, ruolo, azienda
   - Navigazione: frecce + dots

3. Sotto: fila loghi clienti (grayscale, colorati su hover)
   - Per ora placeholder

Usa Embla Carousel per lo slider (lightweight, accessible).

Dati placeholder testimonials:
- "NeuraLabs ha trasformato la nostra idea in realtà..." - Mario Rossi, CEO TechStartup
- "Professionali, veloci, e sempre disponibili..." - Laura Bianchi, Founder StartupX
- "Finalmente qualcuno che capisce l'AI..." - Marco Verdi, CTO DataCorp
```

**File coinvolti:**
- `src/components/sections/Approach.tsx` (nuovo)
- `src/components/sections/Testimonials.tsx` (nuovo)
- `src/app/page.tsx` (modifica)

---

## Task 4.5: CTA Section + Homepage Assembly

| Campo | Valore |
|-------|--------|
| **Durata** | 1 sessione (2h) |
| **Dipendenze** | 4.1, 4.2, 4.3, 4.4 |
| **Branch** | `feature/4.5-homepage-complete` |

**Deliverable:**
- [ ] CTA section finale
- [ ] Homepage completa assemblata
- [ ] Spacing e ritmo verificati
- [ ] Test responsive

**Prompt per Claude Code:**
```
Completa la homepage di NeuraLabs con la CTA section finale e assembla tutto.

FILE 1: src/components/sections/CTASection.tsx
- Box evidenziato (bg surface o gradient leggero)
- Titolo: "Hai un'idea? Parliamone."
- Due CTA affiancati:
  - "Calcola preventivo" (primary)
  - "Chatta con l'AI" (secondary)
- Decorazione: glow o border coral

FILE 2: Aggiorna src/app/page.tsx
Assembla tutte le sezioni nell'ordine:
1. Hero (full screen)
2. ServicesPreview
3. ProjectsPreview
4. Approach
5. Testimonials
6. CTASection

Verifica:
- Spacing consistente tra sezioni (py-20 o simile)
- Alternanza visiva (alcuni sfondo diverso per ritmo)
- Responsive su mobile, tablet, desktop
- Performance: lazy load componenti pesanti (Particles)

Aggiungi commenti per identificare ogni sezione.
```

**File coinvolti:**
- `src/components/sections/CTASection.tsx` (nuovo)
- `src/app/page.tsx` (modifica completa)

---

# 🏃 SPRINT 5: Pagine Contenuto & CMS
*Obiettivo: Tutte le pagine statiche + integrazione Sanity*

Vedi PROGRESS.md per i task 5.1-5.5 dettagliati.

---

# 🏃 SPRINT 6: Funzionalità Interattive
*Obiettivo: Calculator, Chat AI, Form contatto*

Vedi PROGRESS.md per i task 6.1-6.5 dettagliati.

---

## Riepilogo Ore

| Sprint | Task | Ore Min | Ore Max |
|--------|------|---------|---------|
| 1 | 4 | 7 | 10 |
| 2 | 5 | 8 | 12 |
| 3 | 5 | 10 | 12 |
| 4 | 5 | 10 | 14 |
| 5 | 5 | 11 | 14 |
| 6 | 5 | 13 | 16 |
| **TOTALE** | **29** | **59** | **78** |

---

*Documento generato durante sessione di progettazione strutturata.*
