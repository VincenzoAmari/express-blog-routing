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
