# 🎨 DESIGN SPEC - NeuraLabs Website

## Design System

### Filosofia: "Warm Tech"

NeuraLabs adotta uno stile **Warm Tech**: tecnologia calda e accessibile, non fredda e distante. Il design combina:
- Elementi tech/futuristici (particelle, glitch, animazioni)
- Palette calda e accogliente (coral, cream)
- Professionalità senza essere "corporate"
- Creatività audace ma controllata

---

## 🎨 Palette Colori

### Dark Mode (Principale)

| Nome | HEX | RGB | Utilizzo |
|------|-----|-----|----------|
| **Charcoal** | `#1A1A1A` | 26, 26, 26 | Background principale |
| **Surface** | `#252525` | 37, 37, 37 | Card, elementi elevati |
| **Surface Light** | `#2F2F2F` | 47, 47, 47 | Hover states |
| **Coral** | `#FF6B35` | 255, 107, 53 | Primary, CTA, accenti |
| **Peach** | `#FF8C61` | 255, 140, 97 | Secondary accent |
| **Cream** | `#FFE8D6` | 255, 232, 214 | Text secondary, soft accents |
| **Warm White** | `#FFFDF9` | 255, 253, 249 | Text primary |
| **Gray** | `#A0A0A0` | 160, 160, 160 | Text muted, placeholders |
| **Gray Dark** | `#666666` | 102, 102, 102 | Borders, dividers |

### Light Mode

| Nome | HEX | Utilizzo |
|------|-----|----------|
| **Cream** | `#FFFDF9` | Background principale |
| **Cream Dark** | `#F5F0EB` | Surface, cards |
| **Coral** | `#FF6B35` | Primary (invariato) |
| **Charcoal** | `#1A1A1A` | Text primary |
| **Gray** | `#666666` | Text secondary |

### CSS Variables

```css
:root {
  /* Dark mode (default) */
  --color-background: #1A1A1A;
  --color-surface: #252525;
  --color-surface-light: #2F2F2F;
  --color-primary: #FF6B35;
  --color-primary-light: #FF8C61;
  --color-secondary: #FFE8D6;
  --color-text-primary: #FFFDF9;
  --color-text-secondary: #A0A0A0;
  --color-text-muted: #666666;
  --color-border: #333333;
  
  /* Glow effects */
  --glow-primary: 0 0 20px rgba(255, 107, 53, 0.4);
  --glow-primary-strong: 0 0 30px rgba(255, 107, 53, 0.6);
}

[data-theme="light"] {
  --color-background: #FFFDF9;
  --color-surface: #F5F0EB;
  --color-surface-light: #EDE6DF;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #E0D8D0;
}
```

---

## ✏️ Typography

### Font Stack

| Ruolo | Font | Fallback | Weight |
|-------|------|----------|--------|
| **Display** | Cabinet Grotesk | system-ui, sans-serif | 700, 800, 900 |
| **Body** | Inter | system-ui, sans-serif | 400, 500, 600 |
| **Mono** | JetBrains Mono | monospace | 400, 500 |

### Scale Tipografica

```css
/* Mobile-first, poi scale up */

/* Display - Hero, titoli principali */
.text-display-xl { font-size: 3rem; line-height: 1.1; }    /* 48px */
.text-display-lg { font-size: 2.5rem; line-height: 1.15; } /* 40px */
.text-display-md { font-size: 2rem; line-height: 1.2; }    /* 32px */

/* Headings */
.text-h1 { font-size: 2rem; line-height: 1.2; }     /* 32px */
.text-h2 { font-size: 1.5rem; line-height: 1.3; }   /* 24px */
.text-h3 { font-size: 1.25rem; line-height: 1.4; }  /* 20px */
.text-h4 { font-size: 1.125rem; line-height: 1.4; } /* 18px */

/* Body */
.text-body-lg { font-size: 1.125rem; line-height: 1.6; } /* 18px */
.text-body { font-size: 1rem; line-height: 1.6; }        /* 16px */
.text-body-sm { font-size: 0.875rem; line-height: 1.5; } /* 14px */

/* Small/Caption */
.text-caption { font-size: 0.75rem; line-height: 1.4; }  /* 12px */

/* Desktop scale (md breakpoint) */
@media (min-width: 768px) {
  .text-display-xl { font-size: 4.5rem; }  /* 72px */
  .text-display-lg { font-size: 3.5rem; }  /* 56px */
  .text-display-md { font-size: 2.5rem; }  /* 40px */
  .text-h1 { font-size: 2.5rem; }
  .text-h2 { font-size: 2rem; }
  .text-h3 { font-size: 1.5rem; }
}
```

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
      }
    }
  }
}
```

---

## 📐 Spacing & Layout

### Spacing Scale

```css
/* Base: 4px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; }
}
```

### Section Spacing

```css
.section {
  padding: 4rem 0;  /* py-16 */
}

@media (min-width: 768px) {
  .section { padding: 5rem 0; }  /* py-20 */
}

@media (min-width: 1024px) {
  .section { padding: 6rem 0; }  /* py-24 */
}
```

### Grid

```css
/* Grid standard per cards */
.grid-auto {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid-auto { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-auto { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1280px) {
  .grid-auto { grid-template-columns: repeat(4, 1fr); }
}
```

---

## 🧩 Componenti

### Button

```
┌─────────────────────────────────┐
│          Button Text            │
└─────────────────────────────────┘

Variants:
- Primary: bg-coral, text-white, hover:glow
- Secondary: border-coral, text-coral, hover:bg-coral/10
- Ghost: text-coral, hover:bg-coral/10
- Link: text-coral, underline on hover

Sizes:
- sm: px-4 py-2 text-sm
- md: px-6 py-3 text-base (default)
- lg: px-8 py-4 text-lg

States:
- Default
- Hover: scale(1.02), glow
- Active: scale(0.98)
- Disabled: opacity-50, cursor-not-allowed
- Loading: spinner + "Loading..."

Border-radius: rounded-xl (12px)
Transition: all 200ms ease
```

### Card

```
┌─────────────────────────────────────┐
│                                     │
│  [Content Area]                     │
│                                     │
│                                     │
└─────────────────────────────────────┘

Variants:
- Default: bg-surface, border-subtle
- Elevated: bg-surface, shadow-lg
- Interactive: hover:scale(1.02), hover:border-coral

Border-radius: rounded-2xl (16px)
Padding: p-6 (24px)
Border: 1px solid var(--color-border)
```

### Input

```
┌─────────────────────────────────────┐
│ Placeholder text                    │
└─────────────────────────────────────┘

Label (sopra): text-sm, text-secondary
Input: bg-surface, border, rounded-xl
- Focus: ring-2 ring-coral, border-coral
- Error: border-red-500, ring-red-500

Padding: px-4 py-3
```

### Badge

```
┌───────────────┐
│  AI Agent     │
└───────────────┘

Per categoria:
- Website: bg-blue-500/20, text-blue-400
- WebApp: bg-purple-500/20, text-purple-400
- AI Agent: bg-coral/20, text-coral
- RAG: bg-green-500/20, text-green-400
- Automation: bg-yellow-500/20, text-yellow-400

Size: px-3 py-1, text-xs, rounded-full
```

---

## 📄 Wireframes Pagine

### Homepage

```
┌─────────────────────────────────────────────────────────────────┐
│  🧠 NEURA LABS               [Servizi] [Progetti] [Blog] [☀/🌙] │
│                                                    [Contattaci] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│        ╭─────────────────────────────────────────╮              │
│        │   ░░░ PARTICELLE NEURALI 3D ░░░        │              │
│        │         che seguono il mouse           │              │
│        ╰─────────────────────────────────────────╯              │
│                                                                 │
│           W̷e̷ ̷b̷u̷i̷l̷d̷ ̷i̷n̷t̷e̷l̷l̷i̷g̷e̷n̷t̷                          │
│              d i g i t a l   e x p e r i e n c e s             │
│                                                                 │
│    Siti web · AI Agents · RAG Systems · App · Automazioni       │
│                                                                 │
│         [Scopri cosa possiamo creare] [Parla con l'AI →]        │
│                                                                 │
│                         ↓ scroll                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ─────── COSA FACCIAMO ───────                                 │
│                                                                 │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│   │  🌐     │  │  🤖     │  │  🧠     │  │  ⚡     │           │
│   │ Web     │  │ AI      │  │ RAG     │  │ Auto-   │           │
│   │ Sites   │  │ Agents  │  │ Systems │  │ mation  │           │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
│                    [Tutti i servizi →]                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ─────── PROGETTI IN EVIDENZA ───────                          │
│                                                                 │
│   ┌──────────────────────┐    ┌──────────────────────┐          │
│   │   [IMMAGINE]         │    │   [IMMAGINE]         │          │
│   │   Progetto Alpha     │    │   Progetto Beta      │          │
│   │   AI Agent · 120h    │    │   RAG System · 80h   │          │
│   └──────────────────────┘    └──────────────────────┘          │
│                    [Vedi tutti i progetti →]                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ─────── IL NOSTRO APPROCCIO ───────                           │
│                                                                 │
│   "Non siamo la solita agenzia. L'AI è il nostro               │
│    partner creativo, non solo il nostro prodotto."              │
│                                                                 │
│        ┌─────┐         ┌─────┐         ┌─────┐                  │
│        │ 01  │ ──────► │ 02  │ ──────► │ 03  │                  │
│        │Ascolto        │Design         │Build                   │
│        └─────┘         └─────┘         └─────┘                  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ─────── TESTIMONIALS ───────                                  │
│                                                                 │
│   ┌─────────────────────────────────────────────────┐           │
│   │  "NeuraLabs ha trasformato la nostra idea       │           │
│   │   in un prodotto reale in tempi record."        │           │
│   │   — Mario Rossi, CEO TechStartup               │           │
│   └─────────────────────────────────────────────────┘           │
│              ◄  ●  ○  ○  ○  ►                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │    HAI UN'IDEA? PARLIAMONE.                             │   │
│   │    [Calcola preventivo]    [Chatta con l'AI]            │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
│  🧠 NeuraLabs · Menu · Servizi · Social · Newsletter           │
│  © 2025 · Privacy · Cookie                                      │
└─────────────────────────────────────────────────────────────────┘
```

### Pagina Contatti (Tab Calculator)

```
┌─────────────────────────────────────────────────────────────────┐
│  🧠 NEURA LABS               [Servizi] [Progetti] [Blog] [☀/🌙] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│           P̷A̷R̷L̷I̷A̷M̷O̷N̷E̷                                          │
│                                                                 │
│   [📝 Form]  [🧮 Calculator]  [💬 Chat AI]                      │
│              ═══════════════                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  STEP 1/4 - Tipo di progetto                               │ │
│  │                                                            │ │
│  │  ○ Sito Web       ○ WebApp        ○ AI Agent               │ │
│  │  ○ Sistema RAG    ○ Automazione   ○ Non so ancora          │ │
│  │                                                            │ │
│  │                                            [Avanti →]      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│  Progress: ████░░░░░░░░░░░░ 25%                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  INFO CONTATTO                                                  │
│  📧 ciao@neuralabs.it                                           │
│  📍 Padova, Italia                                              │
│  🕒 Lun-Ven 9-18                                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Chat AI Widget

```
┌─────────────────────────────────────┐
│  💬 Neura - AI Assistant      [─] [×]│
├─────────────────────────────────────┤
│                                     │
│  🤖 Ciao! Sono l'assistente AI di   │
│     NeuraLabs. Come posso aiutarti? │
│                                     │
│     • Spiegarti i nostri servizi    │
│     • Aiutarti a capire cosa ti     │
│       serve                         │
│     • Darti una stima di massima    │
│                                     │
│  ─────────────────────────────────  │
│                                     │
│  👤 Quanto costa un chatbot per     │░
│     il mio e-commerce?              │░
│                                     │░
│  🤖 Un chatbot per e-commerce può   │░
│     variare molto in base alla      │░
│     complessità. Per un bot base... │░
│                                     │░
├─────────────────────────────────────┤
│  [Scrivi un messaggio...]     [➤]   │
└─────────────────────────────────────┘

Position: fixed, bottom-right
Size: 380px width, max 500px height
Border-radius: rounded-2xl
Shadow: shadow-2xl
```

---

## ✨ Animazioni & Effetti

### Particelle 3D (Hero)

```
Configurazione:
- Numero: 150 (desktop), 50 (mobile)
- Colore: #FF6B35 (coral)
- Dimensione: 2-4px
- Connessioni: linee tra particelle vicine
- Interazione: repulsione dal mouse

Implementazione: Three.js + React Three Fiber
Performance: InstancedMesh, 60fps cap
```

### Cursor Custom

```
Composizione:
┌──────────────────┐
│                  │
│    ╭───────╮     │  ← Ring esterno (32px)
│    │   ●   │     │  ← Dot centrale (8px)
│    ╰───────╯     │
│                  │
└──────────────────┘

Stati:
- Default: dot + ring
- Hover link: ring espande a 48px
- Hover image: ring diventa quadrato
- Click: pulse animation

Colore: var(--color-primary)
Blend mode: difference (opzionale)
```

### Glitch Text

```css
/* Effetto glitch sui titoli */
.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  color: #0ff; /* cyan */
  animation: glitch-1 2s infinite linear alternate-reverse;
}

.glitch::after {
  color: #f0f; /* magenta */
  animation: glitch-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-1 {
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-2px, 0); }
  20% { clip-path: inset(30% 0 60% 0); transform: translate(2px, 0); }
  40% { clip-path: inset(50% 0 30% 0); transform: translate(-2px, 0); }
  /* ... altri keyframes */
}
```

### Scroll Animations

```javascript
// Pattern base con Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Stagger per liste
const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Transizione Dark/Light

```css
/* Smooth transition per cambio tema */
* {
  transition: 
    background-color 300ms ease,
    border-color 300ms ease,
    color 200ms ease;
}

/* Icona tema animata */
.theme-toggle-icon {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle-icon[data-theme="dark"] {
  transform: rotate(360deg);
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile first */
/* Base: 0-639px (mobile) */

@media (min-width: 640px) {
  /* sm: 640-767px (large mobile) */
}

@media (min-width: 768px) {
  /* md: 768-1023px (tablet) */
}

@media (min-width: 1024px) {
  /* lg: 1024-1279px (desktop) */
}

@media (min-width: 1280px) {
  /* xl: 1280-1535px (large desktop) */
}

@media (min-width: 1536px) {
  /* 2xl: 1536px+ (extra large) */
}
```

### Adattamenti Mobile

| Elemento | Desktop | Mobile |
|----------|---------|--------|
| Navbar | Links visibili | Hamburger menu |
| Hero text | 72px | 48px |
| Grid progetti | 2-4 colonne | 1 colonna |
| Particelle | 150 | 50 |
| Cursor custom | Attivo | Disabilitato |
| Chat widget | Floating | Fullscreen quando aperta |

---

## ♿ Accessibilità

### Requisiti
- Contrasto minimo 4.5:1 per testo normale
- Contrasto minimo 3:1 per testo grande
- Focus visibile su tutti gli elementi interattivi
- Alt text su tutte le immagini
- ARIA labels dove necessario
- Keyboard navigation completa
- Rispetto `prefers-reduced-motion`

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Rimuovi outline default solo se custom presente */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

*Documento generato durante sessione di progettazione strutturata.*
