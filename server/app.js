const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ["userId"],
  
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/users', usersRouter);



module.exports = app;
