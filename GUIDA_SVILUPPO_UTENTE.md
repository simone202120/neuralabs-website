# 📖 GUIDA SVILUPPO - NeuraLabs Website

Questa guida ti accompagna passo passo nello sviluppo del sito NeuraLabs.

---

## 🚀 Come Iniziare

### 1. Setup Ambiente

Prima di tutto, assicurati di avere installato:
- **Node.js 18+** ([download](https://nodejs.org/))
- **Git** ([download](https://git-scm.com/))
- Un editor come **VS Code** ([download](https://code.visualstudio.com/))

### 2. Setup Servizi Esterni

Dovrai creare account gratuiti su:

| Servizio | Link | A cosa serve |
|----------|------|--------------|
| **Supabase** | [supabase.com](https://supabase.com) | Database, autenticazione |
| **Sanity** | [sanity.io](https://sanity.io) | CMS per contenuti |
| **Anthropic** | [console.anthropic.com](https://console.anthropic.com) | Claude API per chat |
| **Resend** | [resend.com](https://resend.com) | Invio email |
| **Vercel** | [vercel.com](https://vercel.com) | Hosting |

### 3. Copia le API Keys

Dopo aver creato gli account, copia le chiavi API:

1. **Supabase:** Dashboard → Settings → API
2. **Sanity:** Dashboard → API → Tokens
3. **Anthropic:** Console → API Keys
4. **Resend:** Dashboard → API Keys

---

## 💻 Sviluppo con Claude Code

### Workflow Consigliato

1. **Apri Claude Code** nel terminale

2. **Dai il contesto:**
   ```
   Sto lavorando sul progetto NeuraLabs Website. 
   Leggi CLAUDE.md per il contesto.
   ```

3. **Scegli un task** da `docs/PIANO_IMPLEMENTAZIONE.md`

4. **Copia il prompt** del task e incollalo

5. **Revisiona** il codice generato

6. **Testa** le modifiche con `npm run dev`

7. **Committa** quando funziona

### Esempio Sessione di Lavoro

```
Tu: Leggi CLAUDE.md e PROGRESS.md. Qual è il prossimo task da fare?

Claude: Il prossimo task è 1.1 - Inizializzazione Progetto Next.js. 
        Vuoi che lo implementi?

Tu: Sì, procedi con il task 1.1

Claude: [implementa il task]

Tu: Perfetto! Aggiorna PROGRESS.md segnando il task come completato
```

---

## 📂 Struttura del Progetto

```
neuralabs-website/
│
├── 📄 README.md           ← Overview progetto
├── 📄 PROJECT_BRIEF.md    ← Brief completo
├── 📄 ARCHITECTURE.md     ← Architettura tecnica
├── 📄 DESIGN_SPEC.md      ← Specifiche design
├── 📄 PROGRESS.md         ← Stato avanzamento (aggiorna questo!)
├── 📄 CLAUDE.md           ← Istruzioni per Claude Code
│
├── 📁 docs/
│   ├── PIANO_IMPLEMENTAZIONE.md  ← Task dettagliati
│   └── CONVENTIONS.md            ← Convenzioni codice
│
├── 📁 src/                ← Codice sorgente
├── 📁 sanity/             ← CMS Sanity
├── 📁 public/             ← Asset statici
│
├── .env.example           ← Template variabili ambiente
└── .gitignore
```

---

## 🔄 Flusso di Sviluppo

### Per ogni Task:

```
1. 📖 Leggi il task in PIANO_IMPLEMENTAZIONE.md
           ↓
2. 🌿 Crea branch: git checkout -b feature/X.X-nome-task
           ↓
3. 💻 Implementa (usa Claude Code con il prompt fornito)
           ↓
4. 🧪 Testa: npm run dev + controlla browser
           ↓
5. ✅ Se funziona: aggiorna PROGRESS.md
           ↓
6. 📤 Committa: git add . && git commit -m "feat: descrizione"
           ↓
7. 🔀 Merge: git checkout main && git merge feature/X.X-nome-task
           ↓
8. 🚀 Push: git push
```

### Comandi Utili

```bash
# Sviluppo
npm run dev              # Avvia server locale
npm run build            # Build produzione
npm run lint             # Controlla errori
npm run type-check       # Controlla TypeScript

# Git
git status               # Vedi modifiche
git add .                # Aggiungi tutto
git commit -m "msg"      # Committa
git push                 # Pusha
git checkout -b nome     # Nuovo branch
git checkout main        # Torna a main
```

---

## 🎨 Design System

### Colori Principali

| Nome | HEX | Uso |
|------|-----|-----|
| **Coral** | `#FF6B35` | Primary, CTA, accenti |
| **Cream** | `#FFE8D6` | Secondary |
| **Charcoal** | `#1A1A1A` | Background dark |
| **Warm White** | `#FFFDF9` | Text, background light |

### Classi Tailwind Custom

```html
<!-- Colori -->
<div class="bg-coral text-coral border-coral">

<!-- Font -->
<h1 class="font-display">Titolo</h1>
<p class="font-body">Testo</p>
<code class="font-mono">Codice</code>

<!-- Effetti -->
<button class="hover:glow-coral">Glow on hover</button>
```

---

## 🧪 Testing Checklist

Prima di considerare un task completato:

### Funzionalità
- [ ] Funziona come previsto
- [ ] Nessun errore nella console

### Responsive
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1280px+)

### Tema
- [ ] Dark mode
- [ ] Light mode

### Codice
- [ ] `npm run lint` passa
- [ ] `npm run type-check` passa

---

## 🆘 Troubleshooting

### "Module not found"
```bash
npm install  # Reinstalla dipendenze
```

### "Port 3000 already in use"
```bash
# Trova e termina il processo
lsof -i :3000
kill -9 <PID>

# Oppure usa porta diversa
npm run dev -- -p 3001
```

### TypeScript errors
```bash
npm run type-check  # Vedi errori dettagliati
```

### Build fails su Vercel
1. Controlla che `.env.local` non sia pushato
2. Configura le env vars su Vercel Dashboard
3. Controlla i log di build

---

## 📅 Timeline Suggerita

### Settimana 1-2: Fondamenta
- Sprint 1: Setup completo
- Sprint 2: Layout e componenti

### Settimana 3: Effetti WOW
- Sprint 3: Animazioni, particelle, cursor

### Settimana 4: Homepage
- Sprint 4: Tutte le sezioni homepage

### Settimana 5: Contenuti
- Sprint 5: Pagine statiche e CMS

### Settimana 6: Funzionalità
- Sprint 6: Form, calculator, chat AI

---

## 🎯 Tips per Claude Code

### Sii Specifico
```
❌ "Crea un button"
✅ "Crea Button.tsx in src/components/ui/ con varianti primary/secondary, 
    sizes sm/md/lg, support per loading state"
```

### Dai Contesto
```
✅ "Stiamo lavorando su NeuraLabs. Leggi CLAUDE.md. 
    Implementa il task 2.2 seguendo le convenzioni in docs/CONVENTIONS.md"
```

### Chiedi Revisioni
```
✅ "Controlla questo codice per problemi di accessibilità"
✅ "Ottimizza questo componente per le performance"
```

### Aggiorna la Documentazione
```
✅ "Aggiorna PROGRESS.md segnando task 2.2 come completato"
```

---

## 📞 Supporto

Se hai problemi:

1. **Controlla la documentazione** in questo repo
2. **Cerca l'errore** su Google/Stack Overflow
3. **Chiedi a Claude** descrivendo il problema
4. **Controlla i log** della console e del terminale

---

Buon sviluppo! 🚀

*NeuraLabs - Il laboratorio dove nascono le idee intelligenti*
