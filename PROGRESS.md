Ho trovato e risolto il problema della "linea doppia".

C'era un piccolo padding laterale (`pl-2`, circa 8px) sul contenitore principale che spostava il contenuto (icone e testo) ma *non* la linea di sfondo (che era posizionata in modo assoluto). Questo creava quel fastidioso disallineamento di pochi pixel che faceva vedere la linea grigia "sbucare" a lato.

Ho rimosso quel padding superfluo. Ora:
1.  **Allineamento Perfetto**: La linea di sfondo grigia e la linea colorata di avanzamento sono matematicamente sovrapposte (entrambe centrate a 28px dal bordo).
2.  **Pulizia**: Non dovresti più vedere "doppie linee" o sbavature laterali.

Il design ora dovrebbe essere nitido e preciso al pixel su mobile. Fammi sapere come ti sembra!