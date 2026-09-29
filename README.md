# RESPIRO — Quale respirazione ti rappresenta?

Un quiz interattivo in italiano ispirato a *Demon Slayer*. Dieci domande sulla personalità conducono a una delle otto respirazioni, con un risultato personalizzato e una card da condividere. L’esperienza unisce illustrazioni originali, carta ruvida e animazioni in stile graffiti sketch.

> **Progetto fan non ufficiale.** Non è affiliato né approvato dai titolari di *Demon Slayer*.

## Repository e sito

Il link della **repository GitHub** mostra i file del progetto e questo README. Per giocare online serve il link separato di **GitHub Pages**. Dopo aver attivato Pages nelle impostazioni della repository, scegli `main` e `/(root)` come sorgente: GitHub pubblicherà `index.html` come pagina iniziale del quiz.

## Cosa puoi fare

- Rispondere a **10 domande**, una alla volta, tornando indietro senza perdere le scelte.
- Scoprire uno degli **8 stili**: Acqua, Fiamma, Fulmine, Vento, Pietra, Nebbia, Fiore o Insetto.
- Leggere tre tratti caratteriali e una spiegazione legata alle risposte date.
- Condividere il risultato tramite un link che contiene solo il nome della respirazione.
- Creare e scaricare una **card PNG** illustrata con il proprio stile.
- Saltare la sequenza finale e usare il quiz anche con movimento ridotto.

Il quiz è un’esperienza di intrattenimento: il risultato non è una valutazione psicologica.

## Prova il progetto

Apri `index.html` nel browser. Il sito è realizzato con **HTML, CSS e JavaScript** e non richiede installazione, account, chiavi API o compilazione. Mantieni le cartelle `css`, `js` e `assets` accanto al file HTML.

```text
.
├── index.html                 # Pagina e finestre informative
├── css/
│   └── style.css             # Grafica, layout responsive e animazioni
├── js/
│   └── app.js                # Domande, punteggi, risultati e card
├── assets/
│   ├── katana-hero.png       # Illustrazione della home
│   └── elemental-emblems.png # Simboli delle otto respirazioni
├── README.md
├── LICENSE.md
└── .nojekyll
```

Quando carichi il progetto su GitHub, metti **il contenuto** della cartella nella radice della repository: `index.html` deve trovarsi al primo livello.

## Come funziona il risultato

Ogni risposta assegna **3 punti** a una respirazione principale e **1 punto** a una respirazione affine. Vince lo stile con il punteggio più alto. In caso di parità prevale quello scelto più spesso come principale; una seconda parità viene risolta con un ordine fisso. La descrizione personale richiama alcune delle scelte effettivamente fatte.

Il foglio illustrato in `assets/elemental-emblems.png` contiene i simboli in quattro colonne e due righe, nell’ordine Acqua, Fiamma, Fulmine, Vento, Pietra, Nebbia, Fiore e Insetto.

## Pubblicazione con GitHub Pages

Dopo aver caricato i file:

1. Apri **Settings → Pages** nella repository.
2. In **Build and deployment**, scegli **Deploy from a branch**.
3. Seleziona il branch che contiene il sito, solitamente `main`, e la cartella **/(root)**.
4. Salva e usa il link mostrato da GitHub al termine della pubblicazione.

Consulta la [guida ufficiale di GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) per i dettagli. I link ai risultati sono condivisibili quando il sito è pubblicato e accessibile ai destinatari.

## Privacy e accessibilità

Le risposte restano nella memoria temporanea della pagina e non vengono inviate a un server. Il codice del quiz non usa cookie, `localStorage`, `sessionStorage`, pubblicità o strumenti di analisi. Il provider scelto per pubblicare il sito può gestire propri dati tecnici di connessione.

Il sito supporta navigazione da tastiera, pulsanti adatti al tocco, finestre informative chiudibili con **Esc** e la preferenza di sistema `prefers-reduced-motion`. La sequenza animata del risultato può essere saltata.

## Copyright e contatti

© 2026 Manuel Deliguoro. Per ricreare, riprodurre o riutilizzare il design e i contenuti originali del sito, chiedi l’autorizzazione a [deliguoromanuel@gmail.com](mailto:deliguoromanuel@gmail.com). Puoi condividere la tua card personale mantenendo i crediti. Ulteriori dettagli sono nel file `LICENSE.md` della cartella del progetto.

*Demon Slayer* e i relativi elementi appartengono ai rispettivi titolari. L’autorizzazione sui materiali originali di questo progetto non attribuisce diritti su tali elementi.

