const path = require('path');
const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
  res.send('ejs');
});

module.exports = router;
