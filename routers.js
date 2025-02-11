const express = require("express");
const router = express.Router();

// Rotta per ottenere i post
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// Rotta per ottenere un singolo post
router.get("/:id", (req, res) => {
  res.send(`Dettaglio del post ${req.params.id}`);
});

// Rotta per creare un nuovo post
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// Rotta per aggiornare un post esistente
router.put("/:id", (req, res) => {
  res.send(`Aggiornamento del post ${req.params.id}`);
});
