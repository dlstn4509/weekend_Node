const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const { pool } = require('../modules/mysql-init');
const moment = require('moment');

/* ---------------- 리스트 GET ---------------- */
router.get('/', async (req, res, next) => {
  try {
    const { page = 1, type } = req.query;
    if (type === 'create') next();
    else {
      let sql = `SELECT * FROM board ORDER BY id DESC`;
      const [lists] = await pool.execute(sql);
      lists.filter((v) => (v.wdate = moment(v.createdAt).format('YYYY-MM-DD')));
      res.render('board/list', { lists });
      // res.json(process.env);
    }
  } catch (err) {
    next(createError(err));
  }
});
/* ---------------- type=create GET ---------------- */
router.get('/', async (req, res, next) => {
  try {
    res.render('board/form');
  } catch (err) {
    next(createError(err));
  }
});
/* ---------------- type=create POST ---------------- */
router.post('/', async (req, res, next) => {
  try {
    const { title, writer, content } = req.body;
    let sql = `INSERT INTO board SET title=?, writer=?, content=?`;
    const [rs] = await pool.execute(sql, [title, writer, content]);
    res.redirect('/');
  } catch (err) {
    next(createError(err));
  }
});
/* ----------------  ---------------- */
router.get('/', async (req, res, next) => {
  try {
    res.render('board/list');
  } catch (err) {
    next(createError(err));
  }
});
/* ----------------  ---------------- */
router.get('/', async (req, res, next) => {
  try {
    res.render('board/list');
  } catch (err) {
    next(createError(err));
  }
});
/* ----------------  ---------------- */
router.get('/', async (req, res, next) => {
  try {
    res.render('board/list');
  } catch (err) {
    next(createError(err));
  }
});
/* ----------------  ---------------- */
router.get('/', async (req, res, next) => {
  try {
    res.render('board/list');
  } catch (err) {
    next(createError(err));
  }
});

module.exports = router;
