
var cookieSession = require('cookie-session')
var createError = require('http-errors')
var express = require('express')
var bodyParser = require('body-parser')
var Keygrip = require('keygrip')
var path = require('path');
var cookieParser = require('cookie-parser')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var adminRouter = require('./routes/admin');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

/*
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'c38kej3884lwjldjfjlad'
}));
*/


app.use(cookieSession({
  name: 'session',
  keys: new Keygrip([
    'cd0b6e41eb2c84a7b973b4a2ee39b55de67aa80b', 
    '11761a609c4ca44108ab9753f33f865aa423feaa'
  ], 'SHA384', 'base64'),

  // Expiración de la sesión
  maxAge: 0.5 * 60 * 60 * 1000 // 30 Minutes
}));

/*
// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});
*/

// Envia la actualización a la sesión cada minuto en lugar de cada request
app.use(function (req, res, next) {
  req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

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

module.exports = app;
