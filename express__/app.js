/******** Global require *******/
require('./modules/dotenv-init')();
const express = require('express');
const app = express();
const logger = require('./middlewares/logger-mw');

/********* Server Init *********/
require('./modules/server-init')(app, process.env.PORT);

/********* Views Init **********/
app.set('view engine', 'ejs');
app.set('views', './views');
app.locals.pretty = true;
app.locals.headTitle = 'Express';

/******* MiddleWare Init *******/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

/********* Router Init *********/
app.use('/', express.static('./public'));
const boardRouter = require('./routes/board-router');

app.use('/board', boardRouter);
