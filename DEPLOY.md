# Guida al Deploy su Vercel - NeuraLabs Website

## Problemi Risolti

### 1. Cache Headers Globali
**PROBLEMA CRITICO RISOLTO**: Il sito applicava una cache di 1 anno a tutte le pagine, impedendo di vedere le modifiche senza cambiare porta.

**Soluzione**: Rimossi cache headers globali da `next.config.js` e applicata cache solo a risorse statiche (_next/static, fonts, images).

### 2. Event Listeners Instabili
**PROBLEMI RISOLTI**:
- `useKonamiCode`: Dependencies instabili causavano re-creazione continua dell'event listener
- `CustomCursor`: MotionValues nelle dependencies causavano re-subscription

**Soluzione**: Usato `useRef` per callbacks stabili e rimosso dependencies non necessarie.

### 3. Performance Three.js
**PROBLEMA**: Allocazione di nuovi oggetti THREE.Vector3 ogni frame (60/sec) causava overhead di garbage collection.

**Soluzione**: Riusati oggetti Three.js con `useMemo` in `ParticleBrain.tsx`.

### 4. Font Duplicati
**PROBLEMA**: 50 file font locali (9.6MB) inutilizzati perché il sito usa Google Fonts.

**Soluzione**: Rimossa directory `public/fonts/fonts/`.

### 5. Errore Build TypeScript
**PROBLEMA**: Variabile `theme` definita due volte in `MethodologyDeepDive.tsx`.

**Soluzione**: Rimossa duplicazione.

---

## Preparazione Deploy

### 1. Script di Pulizia Disponibili

Aggiunti nuovi script npm per gestire cache e processi:

```bash
# Pulisce solo .next
npm run clean

# Pulisce .next e node_modules/.cache
npm run clean:all

# Killa processi Node.js sulle porte 3000-3002 (Windows)
npm run kill:ports

# Pulizia completa + avvio server fresco
npm run fresh

# Reinstallazione completa + server
npm run fresh:install
```

**IMPORTANTE per Windows**: Se hai processi bloccati sulle porte, usa `npm run fresh` invece di `npm run dev`.

### 2. Environment Variables

Copia `.env.local.example` in `.env.local` e configura:

```env
# Obbligatorio per Sanity CMS
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production

# Opzionale - per form contatti
RESEND_API_KEY=your-resend-key
RESEND_FROM_EMAIL=noreply@yourdomain.com
RESEND_TO_EMAIL=info@neuralabs.it

# Opzionale - Supabase (se lo userai)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key

# Production URL
NEXT_PUBLIC_SITE_URL=https://www.neuralabs.it
```

---

## Deploy su Vercel

### Passo 1: Push su GitHub

```bash
# Aggiungi tutti i cambiamenti
git add .

# Crea commit
git commit -m "Fix cache issues and optimize for Vercel deployment

- Remove aggressive global cache headers
- Fix useKonamiCode and CustomCursor dependencies
- Optimize Three.js ParticleBrain performance
- Remove unused local fonts (9.6MB saved)
- Fix MethodologyDeepDive TypeScript error
- Add cleanup scripts for development
- Update lang to 'it' in layout
- Add .env.local.example for Vercel

🤖 Generated with Claude Code
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push al repository
git push origin main
```

### Passo 2: Configura Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "Add New Project"
3. Importa il repository GitHub `neuralabs-website`
4. Configurazione automatica rilevata Next.js

### Passo 3: Environment Variables su Vercel

Nel pannello Vercel, vai su **Settings → Environment Variables** e aggiungi:

**Production + Preview + Development**:
- `SANITY_PROJECT_ID` = tuo-project-id
- `SANITY_DATASET` = production
- `NEXT_PUBLIC_SITE_URL` = https://www.neuralabs.it
- `RESEND_API_KEY` = (se usi Resend)
- `RESEND_FROM_EMAIL` = noreply@yourdomain.com
- `RESEND_TO_EMAIL` = info@neuralabs.it

### Passo 4: Deploy Settings

Vercel automaticamente rileverà:
- **Framework**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Clicca **Deploy** e aspetta che finisca (~2-3 minuti).

### Passo 5: Dominio Personalizzato

1. Vai su **Settings → Domains**
2. Aggiungi `www.neuralabs.it` e `neuralabs.it`
3. Configura DNS come indicato da Vercel:
   - A record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

---

## Verifica Post-Deploy

### 1. Cache Funziona Correttamente?
- Visita il sito
- Fai modifiche e push
- Il deploy automatico aggiorna il sito senza cambiare porta

### 2. Performance Check
- Apri DevTools → Network
- Verifica che solo `/next/static/` e `/fonts/` abbiano cache lunga
- Pagine HTML non devono essere cached

### 3. Sanity CMS
- Se non hai ancora configurato Sanity, le pagine mostreranno array vuoti
- Team members, servizi, testimonials saranno vuoti
- **Questo è OK** - il sito funziona comunque

---

## Troubleshooting

### Build Fails su Vercel

Se la build fallisce:

1. **Check Environment Variables**: Assicurati che TUTTE le variabili siano impostate
2. **Check Build Logs**: Vercel mostra errori dettagliati
3. **Test locale**: `npm run build` deve funzionare localmente

### Modifiche Non Si Vedono

Se fai modifiche ma il sito non aggiorna:

1. **Vercel Auto-Deploy**: Ogni push su `main` triggera deploy automatico
2. **Hard Refresh**: CTRL+SHIFT+R per pulire cache browser
3. **Vercel Cache**: Settings → Data Cache → Purge Everything

### Porte Bloccate in Locale

Se `npm run dev` usa porte diverse da 3000:

```bash
# Windows
npm run fresh

# Manuale
npx kill-port 3000 3001 3002
npm run dev
```

---

## Performance Ottimizzazioni Applicate

✅ **Cache Headers**: Solo risorse statiche cached a lungo termine
✅ **useKonamiCode**: Event listener stabile, no re-creation
✅ **CustomCursor**: Dependencies ottimizzate, no re-renders
✅ **ParticleBrain**: Oggetti Three.js riusati, -60 allocazioni/secondo
✅ **Font Loading**: Rimossi 9.6MB di font inutilizzati
✅ **TypeScript**: Risolti errori di build
✅ **Next.js 14**: Configurazione ottimizzata per App Router

---

## Next Steps (Opzionali)

### 1. Configurare Sanity CMS

Se vuoi content dinamico:

1. Vai su [sanity.io](https://sanity.io)
2. Crea nuovo progetto
3. Copia Project ID
4. Aggiungi a Vercel Environment Variables
5. Re-deploy automaticamente si trigge

### 2. Analytics

Vercel Analytics è automatico su piani Pro.

Per Google Analytics:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Email Service (Resend)

Per far funzionare il form contatti:

1. Registrati su [resend.com](https://resend.com)
2. Verifica il dominio
3. Crea API Key
4. Aggiungi a Vercel Environment Variables

---

## Contatti

Per supporto: [GitHub Issues](https://github.com/tuouser/neuralabs-website/issues)

**Documenti correlati**:
- `.env.local.example` - Template environment variables
- `next.config.js` - Configurazione Next.js
- `package.json` - Scripts disponibili
