const express = require("express");
const router = express.Router();

// Rotta per ottenere i post
router.get("/", (req, res) => {
  res.send("Lista dei post");
});
