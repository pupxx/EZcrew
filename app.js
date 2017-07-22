var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./server/routes/APIindex');
var users = require('./server/routes/usersRoutes');
var practices = require('./server/routes/practicesRoutes');
var erg = require('./server/routes/ergRoutes');
var admin = require('./server/routes/adminRoutes');

var app = express();


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/api-users', users);
app.use('/api-practices', practices);
app.use('/api-erg', erg);
app.use('/api-admin', admin)
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
