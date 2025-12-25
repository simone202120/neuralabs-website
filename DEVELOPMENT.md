# Development Guide - Gestione Processi Next.js

## 🐛 Problema Risolto: Port Exhaustion

### Sintomi
- Impossibile usare porte 3000-3010 dopo riavvii multipli
- Errori nel browser dopo modifiche al codice
- Necessità di cambiare porta ad ogni riavvio del dev server

### Causa Radice
**Processi Node.js zombie** che rimangono attivi in background dopo aver fermato il server con Ctrl+C. Questi processi occupano le porte e causano conflitti.

---

## ✅ Soluzioni Implementate

### 1. Script di Cleanup Automatico

#### `npm run check`
Diagnostica lo stato attuale dei processi e porte occupate:
```bash
npm run check
```

**Usa questo comando quando:**
- Vuoi verificare se ci sono processi zombie
- Prima di avviare il dev server
- Per diagnosticare problemi di porte occupate

#### `npm run kill`
Uccide tutti i processi Node.js zombie e libera le porte:
```bash
npm run kill
```

**Usa questo comando quando:**
- Hai processi zombie in background
- Le porte 3000-3010 sono occupate
- Prima di un riavvio pulito del server

---

### 2. Script di Avvio Migliorati

#### `npm run dev:safe` (⭐ RACCOMANDATO)
Pulisce i processi zombie e avvia il dev server:
```bash
npm run dev:safe
```

**Questo è il comando PRINCIPALE da usare per lo sviluppo.**

#### `npm run dev:clean`
Come `dev:safe` ma pulisce anche la cache Next.js:
```bash
npm run dev:clean
```

**Usa questo quando:**
- Hai problemi di cache
- Le modifiche non si riflettono correttamente
- Dopo aggiornamenti di dipendenze

#### `npm run fresh`
Reset completo (kill + clean cache + dev):
```bash
npm run fresh
```

#### `npm run fresh:install`
Reset totale con reinstallazione dipendenze:
```bash
npm run fresh:install
```

---

### 3. Script Batch per Avvio Rapido

Puoi anche usare il file batch per un avvio rapido con doppio click:

```
kill-and-dev.bat
```

Questo script:
1. Uccide tutti i processi zombie
2. Avvia automaticamente il dev server

---

## 🎯 Best Practices

### ✅ DO - Fai così

1. **Usa sempre `npm run dev:safe` invece di `npm run dev`**
   - Previene l'accumulo di processi zombie
   - Garantisce un ambiente pulito

2. **Prima di iniziare a lavorare, esegui:**
   ```bash
   npm run check
   ```

3. **Se il server si blocca o hai errori strani:**
   ```bash
   npm run dev:clean
   ```

4. **Chiudi sempre il dev server con Ctrl+C**
   - Premi Ctrl+C una sola volta
   - Aspetta che il processo termini completamente
   - Se non termina entro 5 secondi, esegui `npm run kill`

### ❌ DON'T - Non fare così

1. **Non chiudere la finestra del terminale senza fermare il server**
   - Questo lascia processi zombie in background

2. **Non premere Ctrl+C multiple volte rapidamente**
   - Può causare la terminazione incompleta del processo

3. **Non cambiare manualmente la porta in next.config.js**
   - Usa sempre la porta 3000 di default
   - Se è occupata, esegui `npm run kill`

4. **Non eseguire `npm run dev` direttamente**
   - Usa sempre `npm run dev:safe` per evitare problemi

---

## 🔧 Troubleshooting

### Problema: "Port 3000 is already in use"

**Soluzione rapida:**
```bash
npm run kill
npm run dev:safe
```

**Soluzione completa:**
```bash
npm run fresh
```

---

### Problema: "Le modifiche al codice non si riflettono nel browser"

**Soluzione:**
```bash
npm run dev:clean
```

Se persiste:
```bash
npm run fresh
```

---

### Problema: "Errori strani dopo aver fatto modifiche"

1. Ferma il server (Ctrl+C)
2. Esegui:
   ```bash
   npm run check
   ```
3. Se ci sono processi zombie:
   ```bash
   npm run kill
   npm run dev:safe
   ```

---

### Problema: "Non riesco a uccidere i processi"

**Soluzione manuale (Windows):**

1. Apri Task Manager (Ctrl+Shift+Esc)
2. Cerca "Node.js JavaScript Runtime"
3. Termina tutti i processi Node.js
4. Oppure esegui manualmente lo script PowerShell:
   ```powershell
   powershell -ExecutionPolicy Bypass -File ./scripts/kill-dev-processes.ps1
   ```

---

## 📊 Monitoring

### Verificare lo stato attuale:

```bash
npm run check
```

Output esempio:
```
🔍 Node.js Processes:
Found 2 Node.js process(es):

  PID: 12345
  Memory: 156.32 MB
  Command: node.exe next-server.js
  ⚠️  This appears to be a Next.js process

🔍 Occupied Ports (3000-3020):
  Port 3000: node (PID: 12345)

💡 Recommendations:
  • Run 'npm run kill' to clean up zombie processes
```

---

## 🚀 Workflow Raccomandato

### Inizio Giornata di Sviluppo

```bash
# 1. Verifica lo stato
npm run check

# 2. Se ci sono processi zombie, pulisci
npm run kill

# 3. Avvia il dev server
npm run dev:safe
```

### Durante lo Sviluppo

```bash
# Se il server si comporta in modo strano:
Ctrl+C (per fermare)
npm run dev:clean
```

### Fine Giornata

```bash
# Ferma il server correttamente
Ctrl+C

# Verifica che non ci siano processi rimasti
npm run check
```

---

## 📝 Note Tecniche

### Perché succedeva?

Su Windows, quando premi Ctrl+C durante:
- Compilazione TypeScript
- Hot Module Replacement (HMR)
- WebSocket connection attiva

Il processo principale riceve il SIGINT, ma i processi figli (compiler, watcher, WebSocket server) possono rimanere attivi, occupando le porte.

### Come funziona la soluzione?

Lo script PowerShell `kill-dev-processes.ps1`:

1. **Scansiona le porte 3000-3020** per processi in LISTENING
2. **Identifica i PID** dei processi che occupano queste porte
3. **Cerca processi Node.js** con "next" o "neuralabs-website" nella command line
4. **Termina forzatamente** tutti i processi trovati
5. **Aspetta 2 secondi** per garantire il rilascio delle porte

---

## 🔐 Security Note

Gli script PowerShell usano `-ExecutionPolicy Bypass` solo per questi specifici file nel progetto. Questo è sicuro perché:
- Gli script sono locali e versionati
- Non eseguono codice da fonti esterne
- Puoi ispezionare il codice in `scripts/`

---

## 📚 Riferimenti

- Scripts: `scripts/kill-dev-processes.ps1`, `scripts/check-processes.ps1`
- Batch file: `kill-and-dev.bat`
- Config: `package.json` (sezione scripts)
