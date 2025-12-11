# 📝 CONVENTIONS - NeuraLabs Website

## Naming Conventions

### Files & Folders

| Tipo | Convenzione | Esempio |
|------|-------------|---------|
| Componenti React | PascalCase | `Button.tsx`, `ProjectCard.tsx` |
| Hooks | camelCase con "use" | `useScrollAnimation.ts` |
| Utilities | camelCase | `calculateEstimate.ts` |
| Types/Interfaces | PascalCase | `Project.ts`, `ContactForm.ts` |
| API Routes | kebab-case (folder) | `api/contact/route.ts` |
| Pages | kebab-case (folder) | `chi-siamo/page.tsx` |
| CSS/Styles | kebab-case | `globals.css` |
| Constants | SCREAMING_SNAKE_CASE | `API_ENDPOINTS.ts` |

### Codice

| Tipo | Convenzione | Esempio |
|------|-------------|---------|
| Variabili | camelCase | `userName`, `isLoading` |
| Funzioni | camelCase | `handleSubmit`, `formatDate` |
| Costanti | SCREAMING_SNAKE_CASE | `MAX_ITEMS`, `API_URL` |
| Classi/Types | PascalCase | `UserProfile`, `ProjectData` |
| Enum values | PascalCase | `ProjectType.WebApp` |
| Boolean | is/has/should prefix | `isActive`, `hasError` |
| Event handlers | handle prefix | `handleClick`, `handleChange` |
| CSS classes | kebab-case o Tailwind | `btn-primary`, `text-coral` |

---

## Component Structure

### Standard Component Pattern

```typescript
// 1. Imports (ordine specifico)
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Button, Card } from '@/components/ui';
import { useScrollAnimation } from '@/hooks';
import { formatDate } from '@/lib/utils';
import type { Project } from '@/types';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// 3. Constants (se specifici del componente)
const ANIMATION_DURATION = 0.3;

// 4. Component
export function ComponentName({ 
  title, 
  description = 'Default description',
  onClick,
  children 
}: ComponentProps) {
  // 5. Hooks (in ordine: React, custom, derived)
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useScrollAnimation();
  
  // 6. Derived state
  const displayTitle = title.toUpperCase();
  
  // 7. Effects
  useEffect(() => {
    // effect logic
  }, [dependency]);
  
  // 8. Handlers
  const handleClick = () => {
    setIsOpen(true);
    onClick?.();
  };
  
  // 9. Render helpers (se necessari)
  const renderItems = () => {
    return items.map(item => <Item key={item.id} {...item} />);
  };
  
  // 10. Return JSX
  return (
    <div ref={ref} className="...">
      {children}
    </div>
  );
}

// 11. Sub-components (se piccoli e correlati)
function SubComponent() {
  return <span>...</span>;
}

// 12. Default export (opzionale, preferire named)
export default ComponentName;
```

---

## Import Order

Ordine degli import (con linea vuota tra gruppi):

```typescript
// 1. React/Next built-ins
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// 2. External libraries
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// 3. Internal components
import { Button, Card, Input } from '@/components/ui';
import { Navbar, Footer } from '@/components/layout';

// 4. Hooks
import { useScrollAnimation, useLocalStorage } from '@/hooks';

// 5. Utilities/Lib
import { cn, formatDate } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

// 6. Types (sempre con 'type' keyword)
import type { Project, ContactForm } from '@/types';

// 7. Styles (se non Tailwind)
import styles from './Component.module.css';

// 8. Assets
import logo from '@/public/images/logo.svg';
```

---

## TypeScript

### Types vs Interfaces

```typescript
// ✅ Interface per oggetti estendibili (props, data shapes)
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// ✅ Type per unions, tuples, utilities
type ProjectCategory = 'website' | 'webapp' | 'ai_agent' | 'rag' | 'automation';
type Coordinates = [number, number];
type Nullable<T> = T | null;

// ✅ Preferire tipi espliciti
function getUser(id: string): Promise<User | null> { ... }

// ❌ Evitare any
const data: any = response;  // NO

// ✅ Usare unknown per dati sconosciuti
const data: unknown = response;
if (isUser(data)) { ... }
```

### Generics

```typescript
// ✅ Generics con nomi significativi
interface ApiResponse<TData> {
  data: TData;
  error: string | null;
  status: number;
}

// ✅ Default generics
interface PaginatedList<TItem = unknown> {
  items: TItem[];
  total: number;
  page: number;
}
```

---

## React Patterns

### Props con Default Values

```typescript
// ✅ Default nel destructuring
function Button({ 
  variant = 'primary', 
  size = 'md',
  disabled = false 
}: ButtonProps) { ... }

// ❌ Non usare defaultProps (deprecated)
Button.defaultProps = { variant: 'primary' };
```

### Conditional Rendering

```typescript
// ✅ Short-circuit per singoli elementi
{isVisible && <Modal />}

// ✅ Ternary per alternative
{isLoading ? <Spinner /> : <Content />}

// ✅ Early return per logica complessa
if (!data) return <EmptyState />;
if (error) return <ErrorState error={error} />;
return <DataDisplay data={data} />;
```

### Event Handlers

```typescript
// ✅ Inline per logica semplice
<button onClick={() => setOpen(true)}>Open</button>

// ✅ Funzione separata per logica complessa
const handleSubmit = async (data: FormData) => {
  setLoading(true);
  try {
    await submitForm(data);
    toast.success('Sent!');
  } catch (error) {
    toast.error('Error');
  } finally {
    setLoading(false);
  }
};

<form onSubmit={handleSubmit}>...</form>
```

---

## CSS/Tailwind

### Class Order

Ordine consigliato per classi Tailwind:

```tsx
<div className="
  {/* 1. Layout */}
  flex flex-col items-center justify-center
  
  {/* 2. Sizing */}
  w-full max-w-md h-screen
  
  {/* 3. Spacing */}
  p-4 m-2 gap-4
  
  {/* 4. Typography */}
  font-display text-lg text-center
  
  {/* 5. Colors */}
  bg-surface text-primary
  
  {/* 6. Borders */}
  border border-coral rounded-xl
  
  {/* 7. Effects */}
  shadow-lg opacity-90
  
  {/* 8. Transitions */}
  transition-all duration-300
  
  {/* 9. States */}
  hover:bg-coral hover:scale-105
  focus:ring-2 focus:ring-coral
  
  {/* 10. Responsive */}
  md:flex-row md:text-left lg:max-w-lg
">
```

### CN Helper

```typescript
// Usa cn() per conditional classes
import { cn } from '@/lib/utils';

<button 
  className={cn(
    'px-4 py-2 rounded-xl transition-all',
    variant === 'primary' && 'bg-coral text-white',
    variant === 'secondary' && 'border border-coral text-coral',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )}
>
```

---

## File Organization

### Co-location

```
src/components/
├── ui/
│   ├── Button/
│   │   ├── Button.tsx        # Component
│   │   ├── Button.test.tsx   # Tests (se presenti)
│   │   └── index.ts          # Re-export
│   └── index.ts              # Barrel export
```

### Barrel Exports

```typescript
// src/components/ui/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Input } from './Input';

// Usage
import { Button, Card, Input } from '@/components/ui';
```

---

## Git Conventions

### Branch Names

```
feature/1.1-project-init
feature/2.3-navbar
fix/header-scroll-bug
refactor/button-component
docs/readme-update
```

### Commit Messages

```
feat: add hero section with particle background
fix: resolve mobile menu animation glitch
style: improve button hover states
refactor: extract form validation logic
docs: update API documentation
chore: upgrade dependencies
test: add unit tests for calculator
```

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Feature
- [ ] Bug fix
- [ ] Refactor
- [ ] Documentation

## Checklist
- [ ] Code follows conventions
- [ ] Responsive tested
- [ ] Dark/light mode tested
- [ ] No TypeScript errors
- [ ] No ESLint warnings
```

---

## Performance Guidelines

### Images

```typescript
// ✅ Usa next/image
import Image from 'next/image';

<Image
  src={src}
  alt="Description"
  width={800}
  height={600}
  priority={isAboveFold}  // Solo per above-fold
  placeholder="blur"
  blurDataURL={blurUrl}
/>
```

### Dynamic Imports

```typescript
// ✅ Lazy load componenti pesanti
import dynamic from 'next/dynamic';

const ParticleField = dynamic(
  () => import('@/components/three/ParticleField'),
  { 
    ssr: false,
    loading: () => <div className="h-screen bg-charcoal" />
  }
);

const ChatWidget = dynamic(
  () => import('@/components/chat/ChatWidget'),
  { ssr: false }
);
```

### Memoization

```typescript
// ✅ useMemo per calcoli costosi
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// ✅ useCallback per funzioni passate come props
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// ❌ Non memoizzare tutto indiscriminatamente
// Solo se ci sono problemi di performance misurati
```

---

## Accessibility

### Checklist

- [ ] Tutti gli elementi interattivi sono raggiungibili da tastiera
- [ ] Focus states visibili (`:focus-visible`)
- [ ] Alt text su tutte le immagini
- [ ] ARIA labels dove necessario
- [ ] Contrasto colori sufficiente (4.5:1 minimo)
- [ ] Skip link per navigazione
- [ ] Form labels associati correttamente
- [ ] `prefers-reduced-motion` rispettato

### Esempi

```tsx
// ✅ Button accessibile
<button
  onClick={handleClick}
  aria-label="Close modal"
  aria-pressed={isActive}
>
  <XIcon aria-hidden="true" />
</button>

// ✅ Form accessibile
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-describedby="email-error"
  aria-invalid={!!error}
/>
{error && <span id="email-error" role="alert">{error}</span>}

// ✅ Reduced motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<motion.div
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
/>
```

---

*Convenzioni aggiornate al: Dicembre 2024*
