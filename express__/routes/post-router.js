/* 
[GET]  /post : 전체 게시물
[GET]  /post/1 : 특정 게시물
[GET]  /post/1/comment : 특정 게시글 코멘트
[POST]  /post/1 : 특정 게시글 저장
*/

const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const listURL = 'https://jsonplaceholder.typicode.com/posts';
const userURL = 'https://jsonplaceholder.typicode.com/users';

router.get('/', async (req, res, next) => {
  try {
    const page = Number(req.query.page || 1);
    const { data: _lists } = await axios.get(listURL);
    const { data: _users } = await axios.get(userURL);
    const pagerCnt = Math.ceil(_lists.length / 8);
    const lists = _lists.filter((v, i) => (page - 1) * 8 <= i && (page - 1) * 8 + 8 > i);
    for (let list of _lists) {
      let [{ name }] = _users.filter((v) => v.id === list.userId);
      list.username = name;
    }
    res.render('post/list', { lists, pagerCnt, pagerPath: 'post' });
  } catch (err) {
    console.log(err);
  }
});
router.get('/:id', (req, res, next) => {
  res.send(req.params.id + '번 글');
});
router.get('/:id/comment', (req, res, next) => {
  res.send(req.params.id + '번 저장 글');
});
router.post('/:id', (req, res, next) => {
  res.send(req.params.id + '번 저장');
});

module.exports = router;
