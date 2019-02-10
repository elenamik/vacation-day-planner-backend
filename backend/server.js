require('dotenv').config({ path: 'variables.env' });

// **** mongodb and models must be defined before express app ****
const mongoose = require('mongoose');
//const MongoStore = require('connect-mongo')(session);
mongoose.connect(process.env.DATABASE);
//import data models - will make MongoDB aware of all data models throughout session
require('./models/User');

// ------------ connect to database in a session -----------
// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
// app.use(session({
//     secret: 'this-is-a-secret',
//     key: 'sweet-sesh',
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection })
//   }));

/*  -------------------- some available middleware --------------------
//const helpers = require('./helpers');
//const errorHandlers = require('./handlers/errorHandlers');


//const path = require('path');

//const passport = require('passport');
//const promisify = require('es6-promisify');
//const flash = require('connect-flash');
//const expressValidator = require('express-validator');

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());


// // Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

// // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
app.use(flash());

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

 -------------------- end of middleware options -------------------- */
 
const express = require('express');
//const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// home-made routes
const routes = require('./routes/index');

// cross origin resources
const cors = require('cors');

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Handle our own routes
app.use('/', routes);

/*  -------------------- error handling --------------------
// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  // Development Error Handler - Prints stack trace 
  app.use(errorHandlers.developmentErrors);
}
// production error handler
app.use(errorHandlers.productionErrors);
-------------------- error handling -------------------- */


// launch our backend into a port
const API_PORT=3001;
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
