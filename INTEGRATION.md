# Guida all'Integrazione dei Servizi

## Stato Attuale del Progetto

Il sito è stato deployato su Vercel **senza** le seguenti integrazioni, che sono state temporaneamente disabilitate per permettere il build:

- ✅ **Supabase** - Database e autenticazione
- ✅ **Resend** - Invio email
- ⚠️ **Claude API** - (opzionale, se utilizzata nel progetto)

---

## File Modificati Temporaneamente

I seguenti file contengono codice commentato che deve essere ripristinato dopo l'integrazione:

1. **`src/lib/supabase.ts`** - Client Supabase commentato
2. **`src/app/api/contact/route.ts`** - API route per form di contatto disabilitata
3. **`src/app/api/calculate/route.ts`** - API route per calcolo preventivi (funziona parzialmente, ma non salva su DB)

### Cosa funziona attualmente:
- ✅ Calcolo preventivi (ma non vengono salvati nel database)
- ❌ Form di contatto (ritorna errore 501 - Not Implemented)
- ❌ Salvataggio dati su Supabase

---

## Come Integrare i Servizi

### STEP 1: Configurare Supabase

#### 1.1 Creare un progetto Supabase

1. Vai su [supabase.com](https://supabase.com)
2. Crea un nuovo progetto
3. Annota:
   - **Project URL**: `https://xxx.supabase.co`
   - **Anon/Public Key**: La chiave pubblica del progetto

#### 1.2 Creare le tabelle necessarie

Esegui questi comandi SQL nel SQL Editor di Supabase:

```sql
-- Tabella per i contatti dal form
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabella per i preventivi calcolati
CREATE TABLE estimates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_type TEXT,
  complexity TEXT,
  features JSONB,
  timeline TEXT,
  hours_estimate_min INTEGER,
  hours_estimate_max INTEGER,
  price_estimate_min DECIMAL,
  price_estimate_max DECIMAL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Abilita Row Level Security (opzionale ma consigliato)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE estimates ENABLE ROW LEVEL SECURITY;

-- Policy per permettere inserimenti (modifica secondo le tue esigenze)
CREATE POLICY "Enable insert for all users" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for all users" ON estimates
  FOR INSERT WITH CHECK (true);
```

### STEP 2: Configurare Resend (per le email)

1. Vai su [resend.com](https://resend.com)
2. Crea un account e verifica il tuo dominio
3. Genera una API Key
4. Annota la **API Key**

### STEP 3: Aggiungere le Variabili d'Ambiente su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Seleziona il progetto **neuralabs-website**
3. Vai in **Settings** → **Environment Variables**
4. Aggiungi le seguenti variabili:

| Nome | Valore | Ambiente |
|------|--------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | La tua anon key di Supabase | Production, Preview, Development |
| `SANITY_PROJECT_ID` | Il tuo Project ID di Sanity (se usato) | Production, Preview, Development |
| `SANITY_DATASET` | `production` o il nome del tuo dataset | Production, Preview, Development |
| `RESEND_API_KEY` | La tua API key di Resend | Production, Preview, Development |
| `ADMIN_EMAIL` | L'email dove ricevere le notifiche | Production, Preview, Development |
| `CLAUDE_API_KEY` | (Opzionale) La tua API key Claude | Production, Preview, Development |

### STEP 4: Ripristinare il Codice Commentato

#### 4.1 Ripristina `src/lib/supabase.ts`

Decommentare le import e rimuovere le funzioni stub:

```typescript
import { createBrowserClient } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';

export const createSupabaseBrowserClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const createSupabaseServerClient = (cookies: any) =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies }
  );
```

#### 4.2 Ripristina `src/app/api/contact/route.ts`

Rimuovere il return temporaneo e decommentare tutto il codice originale marcato come "ORIGINAL CODE - TO BE RESTORED".

#### 4.3 Ripristina `src/app/api/calculate/route.ts`

Decommentare il codice per il salvataggio su Supabase marcato come "ORIGINAL CODE - TO BE RESTORED".

### STEP 5: Testare Localmente (Opzionale ma Consigliato)

1. Crea un file `.env.local` nella root del progetto:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
RESEND_API_KEY=your-resend-key
ADMIN_EMAIL=your-email@example.com
SANITY_PROJECT_ID=your-sanity-id
SANITY_DATASET=production
```

2. Installa le dipendenze e avvia il server di sviluppo:

```bash
npm install
npm run dev
```

3. Testa il form di contatto e il calcolatore preventivi

### STEP 6: Committare e Deployare

```bash
git add .
git commit -m "feat: enable Supabase and Resend integration"
git push origin main
```

Vercel farà automaticamente il re-deploy con le nuove modifiche.

---

## Verifica dell'Integrazione

### Checklist Post-Integrazione:

- [ ] Il form di contatto invia correttamente i dati
- [ ] Ricevi email di notifica quando qualcuno compila il form
- [ ] L'utente riceve email di conferma
- [ ] I preventivi vengono salvati nel database Supabase
- [ ] Verificare i log su Vercel per eventuali errori

### Dove Verificare:

1. **Supabase Dashboard** → Table Editor → Controlla le tabelle `contacts` e `estimates`
2. **Resend Dashboard** → Logs → Verifica l'invio delle email
3. **Vercel Dashboard** → Deployments → Controlla i log del build

---

## Troubleshooting

### Errore: "Supabase is not configured"
- Verifica che le variabili d'ambiente siano state aggiunte su Vercel
- Riavvia il deployment dopo aver aggiunto le variabili

### Email non vengono inviate
- Verifica che `RESEND_API_KEY` sia configurata
- Controlla che il dominio sia verificato su Resend
- Modifica `from: 'NeuraLabs <noreply@yourdomain.com>'` con il tuo dominio verificato

### Build fallisce dopo il ripristino
- Assicurati di aver decommentato **tutte** le import necessarie
- Verifica che non ci siano errori di sintassi nel codice ripristinato
- Controlla i log di build su Vercel per dettagli specifici

---

## Note Importanti

- ⚠️ **Non committare mai** file `.env.local` o `.env` nel repository Git (già protetto da `.gitignore`)
- 🔒 Le variabili che iniziano con `NEXT_PUBLIC_` sono esposte al browser (ok per URL e chiavi pubbliche)
- 🔐 Le altre variabili (`RESEND_API_KEY`, `CLAUDE_API_KEY`) rimangono server-side
- 📧 Ricorda di sostituire `noreply@yourdomain.com` con il tuo dominio verificato su Resend

---

## Supporto

Per domande o problemi:
- Documentazione Supabase: [https://supabase.com/docs](https://supabase.com/docs)
- Documentazione Resend: [https://resend.com/docs](https://resend.com/docs)
- Documentazione Vercel: [https://vercel.com/docs](https://vercel.com/docs)
