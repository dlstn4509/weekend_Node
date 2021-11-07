const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>ALL POST</h1>");
});

router.get("/:id", (req, res) => {
  res.send("<h1>" + req.params.id + " POST</h1>");
});

module.exports = router;
