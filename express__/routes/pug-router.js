const path = require('path');
const express = require('express');
const router = express.Router();

router.use('/lists', (req, res, next) => {
  const lists = [
    { id: 1, title: '테스트 글', date: '2021-11-07' },
    { id: 2, title: '테스트 글', date: '2021-11-08' },
    { id: 3, title: '테스트 글', date: '2021-11-09' },
    { id: 4, title: '테스트 글', date: '2021-11-10' },
    { id: 5, title: '테스트 글', date: '2021-11-11' },
    { id: 6, title: '테스트 글', date: '2021-11-12' },
  ];
  res.render('lists.pug', { lists });
});

router.use('/', (req, res, next) => {
  res.render('main.pug');
});

module.exports = router;
