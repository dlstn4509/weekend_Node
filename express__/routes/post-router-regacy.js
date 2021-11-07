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
    const { data } = await axios.get(listURL);
    const startIdx = (page - 1) * 10;
    const lists = data.filter((v, i) => startIdx <= i && startIdx + 10 > i);
    for (let list of lists) {
      let { data: user } = await axios.get(userURL + '/' + list.userId);
      list.username = user.name;
    }
    // lists.forEach(async (v, i) => {
    //   let { data: user } = await axios.get(userURL + '/' + v.userId);
    //   v.username = user.name;
    // });
    res.render('post/list', { lists });
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
