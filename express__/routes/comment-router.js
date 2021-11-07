const express = require('express');
const router = express.Router();
const axios = require('axios');
const commentURL = 'https://jsonplaceholder.typicode.com/comments';

router.get('/', async (req, res, next) => {
  try {
    const page = Number(req.query.page || 1);
    const { data: _lists } = await axios.get(commentURL);
    const pagerCnt = Math.ceil(_lists.length / 10);
    const lists = _lists.filter(
      (v, i) => (page - 1) * 10 <= i && (page - 1) * 10 + 10 > i
    );
    res.render('comment/list', { lists, pagerCnt });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
