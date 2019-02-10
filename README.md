Boiler plate for a react, express, and mongoDB app.

/Boilerplate
    /client
        - create react app installed, remove unessential files
        - npm i -S axios (get/post requests)
    /backend
        - npm init
        - npm i -S mongoose express body-parser express-session cookie-parses



BACKEND : to test, run node server.js

*NOTE* you must make a backend/variables.env file to add db link, and any other env variables you want
server.js:
- run server with server.js
- require express and mongoose
- pull in and use routes from routes/index
- listen on port
- middleware and error handling commented out
- import some middleware - session and body/cookie parser 

routes/index.js:
- use express and express Router
- pull in and use Controller from controllers/data1Controller (this is what express router will use to know what actions to perform based on specified url. Controllers will be split up by data they are affecting)

controllers/dataController.js:
- import mongoose and data schema for data model in that controller
- export controller methods that:
    1. handle req and res
    2. use async await to request from DB
    3. res.redirect('/whatever')

models/data.js
- specifies data schema 



FRONTEND




