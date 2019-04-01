const createError = require('http-errors');
const express = require('express');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator=require('express-validator');
const session = require('express-session')
const logger = require('morgan');
const mongoose=require('mongoose');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config({ path: 'config/variables.env' });
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, 
  {useNewUrlParser: true})
.then(
  ()=> {console.log("connected to MongoDB")},
  (err)=>{console.log(err);}
);

require('./models/User'); //models must come before routes are included
const indexRouter = require('./routes/index');

const passport=require('passport');
require('./config/passport');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const database = mongoose.connection;
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: database })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) =>{
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

// launch backend into a port
const API_PORT=3001;
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

module.exports = app;
