# Vincenzo Vetro — Portfolio

## Struttura

```
portfolio/
├── index.html              ← Punto di ingresso
├── README.md
│
├── css/
│   ├── style.css           ← Stili globali (variabili, nav, layout, widget)
│   ├── loader.css          ← Schermata di caricamento animata
│   ├── home.css            ← Hero, griglia progetti, footer home
│   └── bio.css             ← Pagina biografia
│
├── js/
│   ├── nav.js              ← Navigazione SPA: showPage() / switchProject()
│   ├── reveal.js           ← Scroll reveal + parallax hero
│   ├── reveal-widget.js    ← Widget drag wireframe↔render
│   ├── bg.js               ← Canvas animato: particelle + orb di luce
│   ├── cursor.js           ← Cursore custom con ring
│   └── loader.js           ← Animazione barra di caricamento
│
├── pages/
│   ├── home.html           ← Sezione Home
│   ├── project.html        ← Sezione Progetti (capanna, lampada, cuffie)
│   └── bio.html            ← Sezione Biografia
│
└── images/
    ├── capanna.jpg
    ├── lamp_render.jpg
    ├── shadingcuffie.jpg
    ├── shadinglampada.jpg
    ├── stanzarender.jpg
    ├── stanzawireframe.jpg
    ├── wireframelampada.jpg
    └── cuffiewireframe.jpg
```

## Come aprirlo

Le pagine vengono caricate via `fetch()`, quindi serve un server locale:

```bash
# Python (nella cartella del progetto)
python3 -m http.server 8080

# Node.js
npx serve .

# VS Code → installa "Live Server" → clicca "Go Live"
```

Poi apri: **http://localhost:8080**

> ⚠️ Non aprire `index.html` direttamente come file (`file://`) —
> il browser blocca i fetch locali per sicurezza.

## Personalizzazione rapida

| Cosa modificare         | Dove                        |
|-------------------------|-----------------------------|
| Testi e contenuti       | `pages/home.html` ecc.      |
| Colori principali       | `css/style.css` → `:root`   |
| Numero particelle       | `js/bg.js` → `120`          |
| Velocità marquee        | `css/style.css` → `18s`     |
| Immagini                | `images/` → stesso nome     |
