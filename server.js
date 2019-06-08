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
const cors=require('cors');
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
}


mongoose.connect(process.env.DATABASE, options)
.then(
  ()=> {console.log("connected to MongoDB")},
  (err)=>{console.log(err);}
);

// When the mongodb server goes down, mongoose emits a 'disconnected' event
mongoose.connection.on('disconnected', () => { console.log('-> lost connection'); });
// The driver tries to automatically reconnect by default, so when the
// server starts the driver will reconnect and emit a 'reconnect' event.
mongoose.connection.on('reconnect', () => { console.log('-> reconnected'); });

// Mongoose will also emit a 'connected' event along with 'reconnect'. These
// events are interchangeable.
mongoose.connection.on('connected', () => { console.log('-> connected'); });



require('./models/User'); //models must come before routes are included
require('./models/Config');
require('./models/Events');
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
app.use(cors());

app.use('/', indexRouter);

// **** Error handling switched off. UNCOMMENT FOR PROD
// // catch 404 and forward to error handler
// app.use((req, res, next) =>{
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

// launch backend into a port
const API_PORT=3001;
// const server=app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
const server=app.listen(process.env.PORT || API_PORT)

module.exports = app;

//graceful shutdown
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
   // boolean means [force], see in mongoose doc
   mongoose.connection.close(() => {
    console.log('MongoDb connection closed.');
  });

  process.exit(0);
});
