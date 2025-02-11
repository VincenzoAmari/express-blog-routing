const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/img/:imageName", (req, res) => {
  res.send(`<img src="/public/img/${req.imageName}" alt="Immagine">`);
});

// Array di post

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      titolo: "Ciambellone",
      contenuto:
        "Un dolce soffice e profumato, perfetto per la colazione o la merenda.",
      immagine: "/public/img/ciambellone.jpeg",
      tags: ["Dolce", "Colazione", "Merenda"],
    },
    {
      titolo: "Cracker alla Barbabietola",
      contenuto:
        "Croccanti e dal colore vivace, questi cracker sono ideali come snack o accompagnamento.",
      immagine: "/img/cracker_barbabietola.jpeg",
      tags: ["Snack", "Salato", "Barbabietola"],
    },
    {
      titolo: "Pane Fritto Dolce",
      contenuto:
        "Una ricetta golosa e semplice, perfetta per riciclare il pane avanzato.",
      immagine: "/img/pane_fritto_dolce.jpeg",
      tags: ["Dolce", "Fritto", "Riciclo"],
    },
    {
      titolo: "Pasta alla Barbabietola",
      contenuto:
        "Un primo piatto colorato e saporito, perfetto per sorprendere gli ospiti.",
      immagine: "/img/pasta_barbabietola.jpeg",
      tags: ["Pasta", "Primo", "Barbabietola"],
    },
    {
      titolo: "Torta Paesana",
      contenuto:
        "Un dolce della tradizione lombarda, ricco di sapori e storia.",
      immagine: "/img/torta_paesana.jpeg",
      tags: ["Dolce", "Tradizione", "Lombardia"],
    },
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
