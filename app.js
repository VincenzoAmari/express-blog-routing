const express = require("express");
const app = express();
const port = 3000;

// Importiamo il router
const router = require("./routers/posts");

app.use(express.static("public"));

app.use("/posts", router);

app.get("/img/:imageName", (req, res) => {
  res.send(`<img src="/public/img/${req.imageName}" alt="Immagine">`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
