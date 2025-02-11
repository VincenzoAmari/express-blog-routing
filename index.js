const express = require("express");
const app = express();
const port = 3000;

// Importiamo il router
const Router = require("");

app.use(express.static("public"));

app.get("/img/:imageName", (req, res) => {
  res.send(`<img src="/public/img/${req.imageName}" alt="Immagine">`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
