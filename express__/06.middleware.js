/******** Global require *******/
const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const test = require('./middlewares/test-mw');
const test2 = require('./middlewares/test2-mw');
const test3 = require('./middlewares/test3-mw');
const app = express();

/********* Server Init *********/
require('./modules/server-init')(app, 3000);

/********* Views Init **********/
app.set('view engine', 'ejs');
app.set('views', './views');
app.locals.pretty = true;
app.locals.headTitle = 'Express Twitter';

/******* MiddleWare Init *******/
// app.use(test);
// app.use(test('dlstn'));

/********* Router Init *********/
app.use('/', test('dlstn'), test2('first'), test3('second'), express.static('./public'));
app.get('/board', (req, res, next) => {
  try {
    res.send(req.user.name + ' HERE');
  } catch (err) {
    next(createError(401));
  }
});

/********** Error Init *********/
const notFoundRouter = require('./routes/404-router');
const errorRouter = require('./routes/500-router');
app.use(notFoundRouter);
app.use(errorRouter);
