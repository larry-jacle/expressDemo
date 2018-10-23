var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require("express-session");

//声明路由模块
var indexRouter = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/reg');
var logout = require('./routes/logout');


var app = express();

// view engine setup
//设置view的目录
app.set('views', path.join(__dirname, 'views'));
//ejs是默认的使用引擎
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("jijiajia"));
app.use(session({secret:"jijiajia",resave:false,saveUninitialized:false,cookie:{maxAge:60*1000}}));
app.use(express.static(path.join(__dirname, 'public')));

//使用中间件
app.use('/', indexRouter);
app.use('/login', login);
//app.use('/reg', register);
//app.use('/logout', logout);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

//默认的端口是3000
app.listen(8100,function(){
  console.log("server started!");
})

module.exports = app;
