/****************************** global init ********************/
const path = require('path');
const express = require('express');
const app = express();

/****************************** sever init ******************/
require('./modules/server-init')(app, 3001);

/****************************** view engine *******************/
app.set('view engine', 'pug');
app.set('views', './views-pug');
app.locals.pretty = true;
app.locals.headTitle = '뭐시깽이';

/****************************** middleware ********************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/***************************** static init ********************/
app.use('/', express.static(path.join(__dirname, 'public')));

/***************************** router init ********************/
const postRouter = require('./routes/post-router');
const userRouter = require('./routes/user-router');

app.use('/post', postRouter);
app.use('/user', userRouter);
