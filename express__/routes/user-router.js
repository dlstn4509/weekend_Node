const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const userURL = 'https://jsonplaceholder.typicode.com/users';

router.get('/', async (req, res, next) => {
  try {
    const page = Number(req.query.page || 1);
    const { data: _lists } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const pagerCnt = Math.ceil(_lists.length / 8);
    const users = _lists.filter((v, i) => (page - 1) * 8 <= i && (page - 1) * 8 + 8 > i);
    res.render('user/list', { users, pagerCnt, pagerPath: 'user' });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
