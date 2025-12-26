# Piano Implementazione: AI Chat Assistant "Neura"

## Executive Summary

Implementazione di un assistente AI conversazionale che funziona H24 per:
- Rispondere a domande sui servizi SigmaLabs
- Qualificare lead automaticamente
- Prenotare call di consulenza
- Fornire stime di prezzo indicative
- Valutare fattibilità di idee/progetti

**Tecnologie**: Next.js 14, Claude API (Sonnet 3.5), Supabase, TypeScript
**Tempo implementazione**: 2-4 settimane (a seconda della fase)
**Costi operativi**: €20-50/mese iniziali

---

# 1. COSA VERRÀ IMPLEMENTATO

## Componenti Principali

### A. Widget Chat Floating
- **Bottone floating** (bottom-right) con badge notifica prima visita
- **Pannello chat** che si apre con animazione spring
- **Desktop**: 380×600px pannello
- **Mobile**: Fullscreen overlay
- Tema dark/light automatico
- Persistenza conversazioni in localStorage

### B. Interfaccia Conversazione
- **Area messaggi** con scroll automatico
- **Bolle messaggio** distinte (user: coral, assistant: surface-light)
- **Typing indicator** con animazione "tre puntini"
- **Quick replies** (bottoni suggeriti per risposte rapide)
- **Input field** auto-resizing (1-4 righe)
- **Timestamp** per ogni messaggio

### C. Backend & AI
- **API endpoint** `/api/chat` per comunicazione con Claude
- **Claude 3.5 Sonnet** per generazione risposte
- **System prompt** specializzato per SigmaLabs
- **Database logging** di tutte le conversazioni in Supabase
- **Session management** con ID univoci
- **Rate limiting** per prevenire abusi

### D. Funzionalità Avanzate (Opzionali - Fase 2+)
- **RAG System**: indicizzazione contenuti sito per risposte accurate
- **Lead capture form**: raccolta info inline durante conversazione
- **Calendar integration**: booking call direttamente in chat
- **Analytics dashboard**: metriche su engagement e conversioni
- **Email notifications**: alert al team per nuovi lead

## Fasi di Implementazione

### **FASE 1: MVP Chat Base** (Settimana 1-2)
✅ Widget floating con apertura/chiusura
✅ Interfaccia chat completa
✅ Integrazione Claude API
✅ Persistenza conversazioni
✅ Design system "Warm Tech"
✅ Mobile responsive

**Risultato**: Chat funzionante che risponde a domande base

### **FASE 2: RAG & Knowledge Base** (Settimana 3)
✅ Indicizzazione contenuti sito
✅ Semantic search con pgvector
✅ Risposte contestuali accurate
✅ Citazioni a case study/blog

**Risultato**: Risposte più precise e specifiche su servizi

### **FASE 3: Lead Capture & Calendar** (Settimana 4)
✅ Form raccolta contatti inline
✅ Integrazione calendario (Calendly)
✅ Email notifications
✅ Intent detection
✅ CRM logging

**Risultato**: Conversione automatica da chat a lead qualificato

### **FASE 4: Analytics & Optimization** (Settimana 5+)
✅ Dashboard analytics
✅ Streaming responses (SSE)
✅ A/B testing prompts
✅ Performance optimization

**Risultato**: Sistema ottimizzato e scalabile

---

# 2. COSA SARÀ CAPACE DI FARE

## Capacità dell'AI Assistant

### ✅ COSA PUÒ FARE

**Rispondere a Domande**
- Spiegare i 4 servizi principali (Web, AI Software, Automazioni, MVP)
- Confrontare servizi ("Qual è la differenza tra AI Agent e RAG?")
- Spiegare tecnologie (Next.js, Claude API, LangChain, ecc.)
- Parlare di progetti passati e case study
- Rispondere a FAQ generiche

**Guidare gli Utenti**
- Consigliare il servizio più adatto basandosi su esigenze descritte
- Fare domande per capire meglio il bisogno
- Reindirizzare al preventivatore per stime precise
- Suggerire di prenotare call per progetti complessi
- Fornire link a pagine/blog rilevanti

**Fornire Stime**
- Range di prezzo indicativi per tipo di progetto
- Tempistiche approssimative
- Disclaimer chiaro: "per preventivo preciso usa il calculator"

**Valutare Fattibilità**
- Analizzare idee/progetti descritti dall'utente
- Identificare componenti tecnici necessari
- Segnalare potenziali sfide
- Suggerire alternative economiche o più rapide
- Spiegare cosa è fattibile vs cosa non lo è

**Raccogliere Lead (Fase 3)**
- Rilevare interesse serio dell'utente
- Chiedere contatti in modo naturale
- Prenotare call nel calendario
- Inviare email di conferma
- Loggare informazioni nel CRM

**Esempi Concreti di Conversazioni**

```
ESEMPIO 1: Scoperta Servizio
User: "Cosa sono gli AI Agents?"
Neura: "Gli AI Agents sono assistenti intelligenti che lavorano
       autonomamente 24/7 per raggiungere obiettivi specifici.

       Ad esempio possono:
       • Rispondere ai clienti H24
       • Analizzare dati e generare report
       • Automatizzare task ripetitivi

       Ti interessa per la tua azienda?"

ESEMPIO 2: Pricing
User: "Quanto costa un sito web?"
Neura: "Dipende dal tipo! Fammi 3 domande veloci:
       1. Sito vetrina o con funzionalità (shop, booking)?
       2. Quante pagine?
       3. Serve CMS per gestire contenuti?"

[Dopo risposte]

Neura: "Per un sito vetrina 5-6 pagine con CMS:
       💰 €2.500-4.500
       ⏱️ 3-5 settimane

       Per una stima precisa usa il Preventivatore (2 min).
       Ti va? [Vai al preventivatore] [Preferisco una call]"

ESEMPIO 3: Fattibilità
User: "Voglio un'app che traduce documenti legali con AI"
Neura: "Bella idea! È assolutamente fattibile. 🚀

       Architettura:
       • Upload PDF/DOCX → parsing testo
       • AI (GPT-4/Claude) specializzato traduzioni legali
       • Database terminologia legale (RAG)
       • Revisione umana per precisione

       ⚠️ Considerazioni:
       • Traduzioni legali richiedono validazione professionale
       • Privacy GDPR: server EU, dati criptati

       💰 Stima MVP: €8.000-15.000 | 8-12 settimane

       Vuoi approfondire? [Fissa una call] [Altro]"
```

### ❌ COSA NON PUÒ FARE

**Limitazioni Importanti**
- ❌ **Non fornisce preventivi vincolanti** (solo range indicativi)
- ❌ **Non fa promesse** per conto dell'azienda
- ❌ **Non accede a dati privati** dell'utente
- ❌ **Non gestisce pagamenti** o transazioni
- ❌ **Non fa consulenza legale/fiscale**
- ❌ **Non debugga codice** dell'utente
- ❌ **Non prenota call** (Fase 1-2, lo farà nella Fase 3)
- ❌ **Limitato a contenuti del sito** (fino a implementazione RAG)

**Escalation a Umano**
Quando Neura non può aiutare, reindirizza a:
- Form contatti per richieste complesse
- Email per domande specifiche non coperte
- Numero telefono per urgenze

---

# 3. COME VERRÀ VISTO DALL'UTENTE

## Esperienza Utente Completa

### A. Scoperta del Chat Widget

**Desktop**
```
Visitatore arriva su homepage
     ↓
In basso a destra appare bottone floating
┌──────────┐
│  💬      │ ← Colore Coral (#FF6B35)
│  Neura   │    Badge notifica "①" (prima visita)
└──────────┘    Pulse animation leggera

Dopo 30 secondi (solo prima visita):
  → Piccolo tooltip: "Ciao! Posso aiutarti? 👋"
```

**Mobile**
```
Bottone più piccolo (56×56px)
Posizionato sopra eventuale menu mobile
Sempre accessibile scrollando
```

### B. Apertura Chat

**Animazione Apertura (Desktop)**
```
Click su bottone
     ↓
Pannello scala da 0 a 1 con spring animation
Origine: bottom-right
Durata: 400ms

Risultato:
┌─────────────────────────────────┐
│ 💬 Neura - Assistente AI  [─][×]│ ← Header coral
├─────────────────────────────────┤
│                                 │
│ 🤖 Ciao! 👋 Sono Neura,        │ ← Messaggio benvenuto
│    l'assistente AI di           │
│    SigmaLabs.                   │
│                                 │
│    Posso aiutarti a:            │
│    • Scoprire i nostri servizi  │
│    • Capire di cosa hai bisogno │
│    • Darti una stima di massima │
│                                 │
│    Come posso aiutarti oggi?    │
│    [14:32]                      │
│                                 │
├─────────────────────────────────┤
│ ┌──────────────┐ ┌────────────┐│ ← Quick replies
│ │🤖 AI Agents  │ │💰 Prezzi   ││
│ └──────────────┘ └────────────┘│
│ ┌──────────────────────────────┐│
│ │📅 Consulenza gratuita        ││
│ └──────────────────────────────┘│
├─────────────────────────────────┤
│ [Scrivi un messaggio...]   [➤] │ ← Input
└─────────────────────────────────┘

Dimensioni: 380px (W) × 600px (H)
```

**Animazione Apertura (Mobile)**
```
Click su bottone
     ↓
Fullscreen slide up from bottom
Occupa tutto lo schermo
Header ha pulsante "←" per chiudere
```

### C. Conversazione

**Flow Tipico**

```
1. MESSAGGIO UTENTE
┌─────────────────────────────────┐
│                            👤   │
│  ┌────────────────────────────┐ │
│  │ Quanto costa un AI Agent?  │ │ ← Bubble coral
│  └────────────────────────────┘ │
│                         [14:33] │
└─────────────────────────────────┘

2. TYPING INDICATOR (2 secondi)
┌─────────────────────────────────┐
│ 🤖 [● ● ●]                      │ ← Animazione wave
│    Neura sta scrivendo...       │
└─────────────────────────────────┘

3. RISPOSTA ASSISTANT
┌─────────────────────────────────┐
│ 🤖                              │
│ ┌─────────────────────────────┐ │
│ │ Il costo dipende dalla      │ │ ← Bubble surface-light
│ │ complessità:                │ │   Fade in animation
│ │                             │ │
│ │ 💡 Agent Base (FAQ)         │ │
│ │ → Da €5.000 | ~60-80 ore    │ │
│ │                             │ │
│ │ 🚀 Agent Avanzato (DB)      │ │
│ │ → Da €8.000 | ~100-120 ore  │ │
│ │                             │ │
│ │ Per stima precisa ti serve  │ │
│ │ il Preventivatore (3 min)   │ │
│ └─────────────────────────────┘ │
│ [14:33]                         │
└─────────────────────────────────┘

4. QUICK REPLIES APPAIONO
┌─────────────────────────────────┐
│ ┌──────────────┐ ┌────────────┐ │
│ │🧮 Preventivo │ │📞 Call     │ │ ← Bottoni cliccabili
│ └──────────────┘ └────────────┘ │   Border coral on hover
│ ┌──────────────────────────────┐ │
│ │💬 Ho altre domande          │ │
│ └──────────────────────────────┘ │
└─────────────────────────────────┘
```

### D. Stati Speciali

**Lead Capture (Fase 3)**
```
Quando utente mostra interesse:

🤖 Perfetto! Per organizzare la call,
   mi dai un paio di info?

┌──────────────────────────────────┐
│ Nome: [___________________]      │ ← Form inline
│ Email: [___________________]     │
│ Tel: [___________________] (opt) │
│ Note sul progetto:               │
│ [____________________________]   │
│ [____________________________]   │
│                                  │
│  [✓ Accetto privacy policy]      │
│                                  │
│  [Invia]  [← Torna indietro]     │
└──────────────────────────────────┘
```

**Errore Rete**
```
┌─────────────────────────────────┐
│ ⚠️ Ops! Qualcosa è andato       │
│    storto.                      │
│                                 │
│ [Riprova]  [Parla con un umano] │
└─────────────────────────────────┘
```

**Offline**
```
┌─────────────────────────────────┐
│ 📡 Nessuna connessione          │
│                                 │
│    Il tuo messaggio verrà       │
│    inviato quando torni online  │
└─────────────────────────────────┘
```

### E. Design Details

**Colori (Dark Mode - default)**
- Background chat: `#252525` (surface)
- Header: `#FF6B35` (coral)
- User bubble: `#FF6B35` (coral)
- Assistant bubble: `#2F2F2F` (surface-light)
- Text: `#FFFDF9` (cream)
- Border: `#333333`

**Colori (Light Mode)**
- Background chat: `#F5F0EB` (cream)
- Header: `#FF6B35` (coral)
- User bubble: `#FF6B35` (coral)
- Assistant bubble: `#FFFFFF` (white)
- Text: `#1A1A1A` (charcoal)
- Border: `#E0D8D0`

**Typography**
- Messaggi: Inter 14px, line-height 1.5
- Header: Outfit 16px, weight 600
- Timestamp: JetBrains Mono 11px
- Input placeholder: Inter 14px, color muted

**Animazioni**
- Apertura pannello: Spring (stiffness 300, damping 30)
- Messaggi: Fade in 300ms ease-out
- Typing indicator: Wave animation infinita
- Hover bottoni: Scale 1.05, duration 200ms
- Quick replies: Slide in da destra staggered

**Accessibilità**
- Supporto completo tastiera (Tab, Enter, Esc)
- ARIA labels su tutti gli elementi
- Screen reader friendly (role="log" per messaggi)
- Contrasto WCAG AA compliant
- Touch target 44×44px minimum
- Focus visible su tutti i controlli

---

# 4. COSA SERVE PER IMPLEMENTARLO BENE

## Requisiti Tecnici

### A. API & Servizi Esterni

**1. Anthropic Claude API** (OBBLIGATORIO)
```
Servizio: Claude AI per conversazioni
Sign up: https://console.anthropic.com
Costo: Pay-as-you-go
  - Input: ~$3 per 1M token
  - Output: ~$15 per 1M token
  - Stima mensile: €20-50 (500-1000 conversazioni)

Configurazione:
1. Creare account Anthropic
2. Generare API key
3. Aggiungere a .env.local:
   ANTHROPIC_API_KEY=sk-ant-xxxxx

Modello consigliato: claude-3-5-sonnet-20241022
(miglior rapporto qualità/prezzo)
```

**2. Supabase** (GIÀ CONFIGURATO)
```
Servizio: Database PostgreSQL + pgvector per RAG
Configurazione: Già presente in .env.local
Costo: €0 (free tier sufficiente per inizio)

Già configurato:
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

Nuove tabelle da creare:
- chat_logs (log conversazioni)
- chat_sessions (analytics sessioni)
- knowledge_base (Fase 2 - RAG)
```

**3. Resend** (GIÀ CONFIGURATO - per Fase 3)
```
Servizio: Email transazionali
Configurazione: Già presente in .env.local
Costo: €0 (free tier 100 email/giorno)

Già configurato:
RESEND_API_KEY=...

Uso: Notifiche lead al team, conferme agli utenti
```

**4. Calendly/Cal.com** (OPZIONALE - Fase 3)
```
Servizio: Booking calendario
Costo: €0 (Calendly free tier o Cal.com self-hosted)

Setup:
- Creare account Calendly
- Configurare meeting type
- Ottenere embed link o API key
- Aggiungere a .env.local:
  CALENDLY_API_KEY=... (se serve API)
```

### B. Pacchetti NPM da Installare

```bash
# Core AI
npm install @anthropic-ai/sdk@^0.9.1

# Streaming & parsing
npm install eventsource-parser@^1.1.1

# Markdown rendering in chat
npm install react-markdown@^9.0.1
npm install remark-gfm@^4.0.0
npm install rehype-highlight@^7.0.0

# Utilities
npm install date-fns@^3.0.6
npm install react-textarea-autosize@^8.5.3

# Optional - Fase 2 (RAG)
npm install openai@^4.0.0  # Per embeddings
npm install @pinecone-database/pinecone@^1.1.0  # Se usi Pinecone
```

**Dimensione bundle aggiuntiva stimata**: ~150KB (gzipped)

### C. Variabili di Ambiente Complete

**File: `.env.local`**
```bash
# ==========================================
# ESISTENTI (già configurati)
# ==========================================
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
RESEND_API_KEY=your_resend_key

# ==========================================
# NUOVI - Chat AI (OBBLIGATORI Fase 1)
# ==========================================
ANTHROPIC_API_KEY=sk-ant-xxxxx

# ==========================================
# NUOVI - Configurazioni Chat (OPZIONALI)
# ==========================================
NEXT_PUBLIC_CHAT_ENABLED=true
CHAT_MAX_MESSAGES_PER_SESSION=50
CHAT_RATE_LIMIT_PER_IP=20
CHAT_SESSION_TIMEOUT=1800

# ==========================================
# NUOVI - Fase 2+ (RAG & Advanced)
# ==========================================
# OpenAI per embeddings
OPENAI_API_KEY=sk-...

# Pinecone per vector search (alternativa a Supabase pgvector)
PINECONE_API_KEY=...
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX=sigmalabs-knowledge

# Calendly per booking (Fase 3)
CALENDLY_API_KEY=...
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/sigmalabs/consultation
```

### D. Database Schema (Supabase)

**Migration 1: Chat Logs**
```sql
-- File: supabase/migrations/001_chat_logs.sql

CREATE TABLE IF NOT EXISTS chat_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),

    session_id VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content TEXT NOT NULL,

    -- Analytics
    page_url TEXT,
    user_agent TEXT,
    metadata JSONB DEFAULT '{}'
);

CREATE INDEX idx_chat_logs_session ON chat_logs(session_id, created_at DESC);
CREATE INDEX idx_chat_logs_created ON chat_logs(created_at DESC);
```

**Migration 2: Chat Sessions**
```sql
-- File: supabase/migrations/002_chat_sessions.sql

CREATE TABLE IF NOT EXISTS chat_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_activity_at TIMESTAMPTZ DEFAULT NOW(),

    -- User info (se fornito)
    contact_id UUID REFERENCES contacts(id),
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    user_phone VARCHAR(50),

    -- Analytics
    messages_count INT DEFAULT 0,
    converted_to_lead BOOLEAN DEFAULT FALSE,
    intent_detected VARCHAR(100),

    -- Context
    first_page_url TEXT,
    utm_source VARCHAR(255),
    utm_medium VARCHAR(255),
    utm_campaign VARCHAR(255),
    user_agent TEXT
);

CREATE INDEX idx_chat_sessions_session_id ON chat_sessions(session_id);
CREATE INDEX idx_chat_sessions_created ON chat_sessions(created_at DESC);
CREATE INDEX idx_chat_sessions_converted ON chat_sessions(converted_to_lead);
```

**Migration 3: Knowledge Base (Fase 2 - RAG)**
```sql
-- File: supabase/migrations/003_knowledge_base.sql

-- Enable vector extension
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS knowledge_base (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),

    content TEXT NOT NULL,
    content_type VARCHAR(50) NOT NULL, -- 'service', 'project', 'blog', 'faq'
    title VARCHAR(255),
    url TEXT,

    embedding vector(1536), -- OpenAI ada-002 dimensions

    metadata JSONB DEFAULT '{}'
);

-- Index for similarity search
CREATE INDEX ON knowledge_base
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Function for similarity search
CREATE OR REPLACE FUNCTION match_knowledge(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  content text,
  content_type varchar,
  title varchar,
  url text,
  similarity float
)
LANGUAGE sql STABLE
AS $$
  SELECT
    id,
    content,
    content_type,
    title,
    url,
    1 - (embedding <=> query_embedding) AS similarity
  FROM knowledge_base
  WHERE 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
$$;
```

### E. Struttura File da Creare

**Nuovi file principali:**

```
src/
├── components/
│   └── chat/
│       ├── ChatWidget.tsx          # Entry point, floating button + panel
│       ├── ChatPanel.tsx           # Container principale chat
│       ├── ChatHeader.tsx          # Header con titolo e close/minimize
│       ├── ChatMessages.tsx        # Lista messaggi con scroll
│       ├── ChatMessage.tsx         # Singolo messaggio bubble
│       ├── ChatInput.tsx           # Input field + send button
│       ├── ChatTypingIndicator.tsx # Animazione "..."
│       ├── ChatQuickReplies.tsx    # Bottoni quick reply
│       ├── ChatLeadForm.tsx        # Form inline (Fase 3)
│       └── ChatWelcome.tsx         # Messaggio benvenuto
│
├── hooks/
│   └── useChatStore.ts             # Zustand store per state management
│
├── app/api/
│   └── chat/
│       ├── route.ts                # POST /api/chat - main endpoint
│       ├── log/route.ts            # POST /api/chat/log - logging
│       └── convert-lead/route.ts   # POST /api/chat/convert-lead (Fase 3)
│
├── lib/
│   ├── claude.ts                   # Claude API wrapper
│   ├── chat-prompts.ts             # System prompts
│   ├── embeddings.ts               # Generazione embeddings (Fase 2)
│   └── vectorSearch.ts             # Semantic search (Fase 2)
│
└── supabase/
    └── migrations/
        ├── 001_chat_logs.sql
        ├── 002_chat_sessions.sql
        └── 003_knowledge_base.sql (Fase 2)
```

### F. Modifiche a File Esistenti

**1. `app/layout.tsx`**
```typescript
// Aggiungere ChatWidget globalmente
import { ChatWidget } from '@/components/chat/ChatWidget';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ChatWidget /> {/* ← AGGIUNGERE */}
      </body>
    </html>
  );
}
```

**2. `next.config.js`** (opzionale - rate limiting)
```javascript
// Se serve rate limiting a livello di config
module.exports = {
  // ... existing config
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};
```

**3. `.gitignore`**
```
# Assicurarsi che .env.local sia ignorato
.env*.local
```

### G. Content Preparation (Fase 2 - RAG)

**Script di Indicizzazione Contenuti**

Creare `scripts/index-content.ts`:
```typescript
// Script per indicizzare contenuti del sito
// Crawla pagine, genera embeddings, salva in Supabase

import { createClient } from '@supabase/supabase-js';
import { OpenAI } from 'openai';

async function indexContent() {
  // 1. Estrai contenuti da:
  //    - Pagine statiche (servizi, metodo, chi siamo)
  //    - Sanity CMS (progetti, blog)
  //    - File markdown FAQ

  // 2. Genera embeddings con OpenAI

  // 3. Salva in knowledge_base table

  console.log('✅ Contenuti indicizzati!');
}
```

**FAQ Document da Creare**

Creare `content/faq.md` con domande comuni:
```markdown
# FAQ SigmaLabs

## Prezzi
Q: Quanto costa un sito web?
A: Da €2.500 per landing page a €8.000 per sito corporate complesso...

## Tempistiche
Q: Quanto tempo serve per un MVP?
A: 3-5 settimane per un MVP base, 6-8 per MVP più complesso...

## Tecnologie
Q: Quali tecnologie usate?
A: Next.js, React, TypeScript, Tailwind, Supabase...

[... altre 20-30 domande]
```

---

## Metriche di Successo (KPI)

### Engagement
- **Chat open rate**: Target >15% visitatori
- **Messaggi per sessione**: Target >3
- **Durata sessione**: Target >2 minuti

### Conversioni
- **Chat → Lead**: Target >5%
- **Lead qualificati**: Target >70%
- **Redirect a calculator**: Tracciare %

### Performance
- **Response time**: Target <2 secondi
- **Uptime**: Target >99.5%
- **Costo per conversazione**: Target <€0.10

### Qualità
- **User satisfaction**: Target >4/5 (se survey)
- **Sentiment positivo**: Target >80%
- **Escalation a umano**: Monitorare %

---

## Rischi & Mitigazioni

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|------------|---------|-------------|
| Costi API alti | Media | Medio | Budget alerts, caching, rate limiting |
| Risposte imprecise | Bassa | Alto | RAG system, extensive testing, disclaimer |
| Basso engagement | Media | Medio | A/B test trigger, ottimizzazione first message |
| Spam/Abuse | Bassa | Medio | Rate limiting, honeypot, CAPTCHA se serve |
| GDPR issues | Bassa | Alto | Consent, data retention policy, right to delete |

---

## Timeline & Budget

### Fase 1 (MVP - 2 settimane)
**Ore stimate**: 15-20h
**Deliverable**: Chat funzionante con Claude

### Fase 2 (RAG - 1 settimana)
**Ore stimate**: 12-18h
**Deliverable**: Risposte accurate basate su contenuti sito

### Fase 3 (Lead Capture - 1 settimana)
**Ore stimate**: 15-20h
**Deliverable**: Conversione automatica lead + calendar

### Fase 4 (Optimization - ongoing)
**Ore stimate**: 15-20h
**Deliverable**: Analytics, performance, polish

**TOTALE**: 57-78 ore (~2 mesi part-time o 3-4 settimane full-time)

### Costi Operativi Mensili
- Claude API: €20-50
- Supabase: €0 (free tier)
- Resend: €0 (free tier)
- **Totale iniziale**: €20-50/mese

Con crescita (5.000 visitatori/mese): €50-150/mese

---

## File Critici per Implementazione

I **5 file più critici** da creare/modificare:

1. **`src/components/chat/ChatWidget.tsx`**
   - Entry point del widget
   - Gestione apertura/chiusura
   - Integrazione tutti i sub-component

2. **`src/app/api/chat/route.ts`**
   - Endpoint API principale
   - Integrazione Claude
   - Logging e analytics

3. **`src/hooks/useChatStore.ts`**
   - State management globale
   - Persistenza localStorage
   - Logica invio messaggi
   - Gestione sessioni

4. **`src/lib/claude.ts`**
   - Wrapper Claude API
   - System prompts specializzati
   - Gestione streaming (opzionale)

5. **`src/app/layout.tsx`**
   - Inclusione widget globale
   - Hydration corretta

**Altri file importanti**:
- `supabase/migrations/001_chat_logs.sql` - Schema database
- `src/components/chat/ChatPanel.tsx` - UI container
- `src/components/chat/ChatMessage.tsx` - Rendering messaggi

---

## Prossimi Passi

### Step 1: Setup Iniziale (1 giorno)
1. Creare account Anthropic e ottenere API key
2. Aggiungere `ANTHROPIC_API_KEY` in `.env.local`
3. Installare dipendenze NPM
4. Creare migrations Supabase (chat_logs, chat_sessions)

### Step 2: Implementazione Fase 1 - MVP (1-2 settimane)
1. Creare struttura componenti chat
2. Implementare `useChatStore` con Zustand
3. Build API endpoint `/api/chat` con Claude
4. Styling con design system esistente
5. Testing mobile + desktop
6. Deploy su staging per testing

### Step 3: Valutazione e Iterazione
1. Raccogliere feedback su MVP
2. Monitorare metriche (open rate, engagement)
3. Ottimizzare system prompt
4. Decidere se procedere con Fase 2 (RAG)

### Step 4 (Opzionale): Fasi Avanzate
- **Fase 2**: Implementare RAG per risposte accurate (+ 1 settimana)
- **Fase 3**: Aggiungere lead capture + calendario (+ 1 settimana)
- **Fase 4**: Analytics e optimization (ongoing)

---

## Conclusioni

L'**AI Chat Assistant "Neura"** è la soluzione ideale per SigmaLabs perché:

✅ **Dimostra competenza**: Praticate quello che predicate (offrite sistemi RAG e chatbot AI)
✅ **Genera lead H24**: Disponibile sempre, qualifica automaticamente i contatti
✅ **Migliora conversione**: Riduce friction, risponde subito invece di aspettare email
✅ **Differenziante**: Pochi competitor in Italia hanno AI così integrato
✅ **Scalabile**: Architettura serverless, cresce con il traffico

### Investimento Totale

**Tempo**: 2-4 settimane (a seconda della fase)
**Costi sviluppo**: 57-78 ore (~€3.500-€6.000 se esternalizzato)
**Costi operativi**: €20-50/mese iniziali

**ROI stimato**: Se converte anche solo 1 lead extra al mese (media €5.000), ROI = 100x in un anno

### Raccomandazione Finale

**Approccio consigliato**: Implementare **Fase 1 (MVP)** subito per validare l'idea e raccogliere dati. Poi iterare con Fasi 2-4 in base ai risultati.

Questo permette di:
- Lanciare velocemente (2 settimane)
- Testare con utenti reali
- Investire gradualmente
- Ottimizzare in base a metriche concrete

Il chatbot diventerà un asset fondamentale per il vostro business, lavorando H24 per qualificare lead e dimostrare la vostra expertise in AI.
