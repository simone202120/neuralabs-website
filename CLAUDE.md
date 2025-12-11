# 🤖 Istruzioni per Claude Code

## NeuraLabs Website - Regole di Sviluppo

---

## 📖 Chi Sono

Sono l'assistente AI per lo sviluppo del **sito web NeuraLabs**, una startup specializzata in sviluppo web, AI Agents, sistemi RAG e automazioni.

### Stack Tecnologico

| Componente | Tecnologia |
|------------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + Framer Motion |
| 3D | Three.js + React Three Fiber |
| Database | Supabase (PostgreSQL + pgvector) |
| CMS | Sanity.io |
| AI Chat | Claude API (Anthropic) |
| Email | Resend |
| Hosting | Vercel |

---

## 🚀 Come Iniziare una Sessione

### Passo 1: Leggi lo Stato Attuale
```
SEMPRE leggere prima PROGRESS.md per capire:
- Quale sprint/task è in corso
- Cosa è stato completato
- Note dalla sessione precedente
```

### Passo 2: Identifica il Task Corrente
```
Leggi docs/PIANO_IMPLEMENTAZIONE.md per:
- Trovare il prossimo task da completare
- Leggere il prompt specifico del task
- Capire i deliverable attesi
```

### Passo 3: Consulta Architettura se Necessario
```
Se hai dubbi su decisioni tecniche:
- ARCHITECTURE.md per visione generale e schema DB
- DESIGN_SPEC.md per colori, tipografia, componenti
- docs/CONVENTIONS.md per stile codice
```

---

## 📏 Regole di Sviluppo

### ✅ Generale

| Regola | Descrizione |
|--------|-------------|
| **Chiedi prima** | Mai modificare file esistenti senza conferma |
| **Conferma struttura** | Chiedere conferma prima di creare nuove cartelle |
| **Un task alla volta** | Completare un task prima di passare al successivo |
| **Un branch per task** | Ogni task ha il suo branch dedicato |
| **Aggiorna PROGRESS** | Aggiornare PROGRESS.md dopo ogni task completato |

### 📘 TypeScript/React

```typescript
// ✅ Strict mode - mai usare `any`
// ✅ Componenti funzionali con hooks
// ✅ Props tipizzate con interface

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant, 
  size = 'md', 
  disabled = false,
  children,
  onClick 
}: ButtonProps) {
  // ✅ Stati tipizzati
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // ✅ Handler con tipi corretti
  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);
  
  return (
    <button 
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={cn(
        'rounded-xl transition-all',
        variant === 'primary' && 'bg-coral text-white',
        // ...
      )}
    >
      {children}
    </button>
  );
}
```

### 🔤 Naming Conventions

| Tipo | Convenzione | Esempio |
|------|-------------|---------|
| File componenti | PascalCase | `Button.tsx`, `ProjectCard.tsx` |
| File utilities | camelCase | `calculateEstimate.ts` |
| File hooks | camelCase con use | `useScrollAnimation.ts` |
| Componenti React | PascalCase | `ChatWidget` |
| Hooks | camelCase con use | `useKonamiCode` |
| Funzioni | camelCase | `handleSubmit()` |
| Variabili | camelCase | `isLoading`, `userName` |
| Costanti | UPPER_SNAKE | `MAX_TOKENS`, `API_URL` |
| CSS classes | kebab-case o Tailwind | `btn-primary` |
| Tipi/Interface | PascalCase | `Project`, `ContactForm` |

### 💬 Commenti

```typescript
// ✅ Commenti per "PERCHÉ", non per "COSA"
// Usiamo lazy loading perché Three.js è pesante (~500KB)
const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
  loading: () => <div className="h-screen bg-charcoal" />
});

// ✅ TODO con contesto
// TODO(sprint3): Aggiungere caching per ridurre chiamate Sanity

// ✅ FIXME per bug noti
// FIXME: Glitch animation non funziona su Safari < 15
```

### 📂 Imports Order

```typescript
// 1. React/Next built-ins
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// 2. External libraries
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

// 3. Internal components
import { Button, Card, Input } from '@/components/ui';
import { Navbar, Footer } from '@/components/layout';

// 4. Hooks
import { useScrollAnimation } from '@/hooks';

// 5. Utilities/Lib
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

// 6. Types (sempre con 'type' keyword)
import type { Project, ContactForm } from '@/types';
```

---

## 🎨 Design System Rapido

### Colori Principali
```
Primary (Coral):    #FF6B35  → bg-coral, text-coral
Secondary (Cream):  #FFE8D6  → bg-cream
Background Dark:    #1A1A1A  → bg-charcoal
Surface Dark:       #252525  → bg-surface
Text Primary:       #FFFDF9  → text-warm-white
```

### Font
```
Titoli:  font-display (Cabinet Grotesk)
Body:    font-body (Inter)
Code:    font-mono (JetBrains Mono)
```

### Spacing Sezioni
```
Mobile:  py-16 (64px)
Desktop: py-24 (96px)
```

---

## 🌳 Git Workflow

### Branch Naming
```
feature/1.1-project-init
feature/2.3-navbar
feature/3.1-particles
bugfix/mobile-menu-animation
```

### Commit Messages
```
feat(ui): add Button component with variants
feat(hero): implement particle background
fix(navbar): resolve mobile menu z-index issue
style(button): improve hover states
refactor(chat): extract message component
docs: update PROGRESS.md after session
```

### Workflow Sessione
```bash
# 1. Inizio sessione
git checkout main
git pull origin main
git checkout -b feature/X.Y-nome-task

# 2. Durante sviluppo (ogni 20-30 min)
git add .
git commit -m "feat(scope): description"

# 3. Fine sessione
git push origin feature/X.Y-nome-task
# Poi aggiornare PROGRESS.md
```

---

## ❌ Cosa NON Fare

| ❌ Non Fare | ✅ Invece |
|-------------|-----------|
| Installare dipendenze senza chiedere | Chiedere conferma prima di `npm install` |
| Cambiare struttura cartelle esistente | Proporre la modifica e attendere ok |
| Modificare file di config senza conferma | Mostrare le modifiche necessarie prima |
| Fare refactoring non richiesto | Concentrarsi solo sul task corrente |
| Aggiungere feature "bonus" | Attenersi al deliverable definito |
| Assumere contesto da sessioni precedenti | Basarsi solo su PROGRESS.md |
| Usare `any` in TypeScript | Usare tipi specifici o `unknown` |
| Creare componenti senza tipi | Sempre definire interface per props |
| Dimenticare responsive | Testare sempre mobile-first |
| Ignorare dark/light mode | Testare entrambi i temi |

---

## 📋 Fine Sessione Checklist

Prima di concludere una sessione, SEMPRE:

### 1. Elencare File Modificati
```
File modificati in questa sessione:
- src/components/ui/Button.tsx (nuovo)
- src/components/ui/Card.tsx (nuovo)
- src/components/ui/index.ts (nuovo)
- tailwind.config.js (modificato)
```

### 2. Aggiornare PROGRESS.md
```markdown
## Sprint 2: Layout & Componenti Base

### Task 2.2: Componenti UI Base
- [x] Button (varianti: primary, secondary, ghost)
- [x] Card (con hover effects)
- [x] Input, Textarea
- [ ] Select (da completare)
- [ ] Badge

**Stato:** 🟡 In corso (80%)

## 📝 Note per Prossima Sessione
- Completare Select component
- Testare su Safari
```

### 3. Suggerire Commit
```
Commit suggerito:
feat(ui): add base UI components

- Add Button with primary/secondary/ghost variants
- Add Card with hover effects
- Add Input and Textarea components
- Update Tailwind config with custom colors
```

### 4. Segnalare Problemi
```
⚠️ Problemi da tenere presente:
- Glitch animation richiede test su Safari
- Font Cabinet Grotesk da scaricare e aggiungere a /public/fonts
```

---

## 🆘 Quando Qualcosa va Storto

### Se sembra che il contesto sia perso:
```
"STOP. Rileggi PROGRESS.md e dimmi:
1. Qual è lo sprint/task corrente?
2. Quali file sono stati modificati di recente?
3. Cosa dovremmo fare ora?"
```

### Se sto facendo qualcosa di non richiesto:
```
"Fermati. Il task corrente è [X]. 
Concentrati solo su quello, non aggiungere altro."
```

### Se ho dubbi su design/architettura:
```
"Leggi DESIGN_SPEC.md sezione [X] e dimmi cosa vedi
riguardo a [domanda specifica]."
```

### Se il codice non funziona:
```
"Esegui npm run lint e npm run type-check.
Mostrami gli errori."
```

---

## 📚 Riferimenti Rapidi

| Documento | Quando Usarlo |
|-----------|---------------|
| `PROGRESS.md` | **SEMPRE** - Prima di ogni sessione |
| `docs/PIANO_IMPLEMENTAZIONE.md` | Dettagli task, prompt, deliverable |
| `ARCHITECTURE.md` | Schema DB, API routes, struttura |
| `DESIGN_SPEC.md` | Colori, font, componenti, wireframe |
| `docs/CONVENTIONS.md` | Stile codice dettagliato |
| `PROJECT_BRIEF.md` | Contesto business, target, servizi |
| `src/data/mock-data.ts` | Dati placeholder per sviluppo |

---

## 🔧 Comandi Utili

```bash
# Sviluppo
npm run dev          # Avvia dev server (localhost:3000)
npm run build        # Build produzione
npm run lint         # ESLint
npm run type-check   # TypeScript check

# Git
git status           # Stato modifiche
git diff             # Vedi differenze
git log --oneline -5 # Ultimi 5 commit

# Sanity (dopo setup)
npm run sanity       # Avvia Sanity Studio
```

---

## ✅ Checklist Pre-Commit

Prima di ogni commit, verificare:

- [ ] `npm run lint` passa senza errori
- [ ] `npm run type-check` passa senza errori
- [ ] Nessun `any` nel codice TypeScript
- [ ] Componenti testati su mobile (375px)
- [ ] Componenti testati in dark mode E light mode
- [ ] Props tipizzate con interface
- [ ] Import ordinati correttamente
- [ ] Nessun `console.log` dimenticato

---

*Queste istruzioni sono specifiche per lo sviluppo di NeuraLabs Website con Claude Code.*
