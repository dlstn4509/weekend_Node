/*************** Require ****************/
const express = require('express');
const app = express();

/************* Server Init **************/
require('./modules/server-init')(app, 3001);

/* view Init */
app.locals.pretty = true;
app.locals.headTitle = '뭐시깽이';
app.set('view engine', 'pug');
app.set('views', './views-pug');
// app.set('view engine', 'ejs');
// app.set('views', './views-ejs');

/************* Router Init **************/
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const boardRouter = require('./routes/board-router');
const cartRouter = require('./routes/cart-router');
const pugRouter = require('./routes/pug-router');
const ejsRouter = require('./routes/ejs-router');
app.use('/', express.static('./public'));
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/board', boardRouter);
app.use('/cart', cartRouter);
app.use('/pug', pugRouter);
app.use('/ejs', ejsRouter);

/* 
/auth/login(GET)  - 로그인 폼     
/auth/login(POST) - 로그인     
/auth/join(GET)   - 회원가입폼
/auth/join(POST)  - 회원저장
/user/form(GET)   - 회원수정폼
/user/form(POST)  - 회원수정
/board(GET)       - 전체게시글
/board/1(GET)     - 1번게시글
/cart             - 전체 장바구니 
/cart/5           - 장바구니에 담긴 5번 상품 
*/
