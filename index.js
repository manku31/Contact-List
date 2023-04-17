const express = require("express");
const app = express();
const port = 8000;

const cookieParser = require('cookie-parser');          // its help to view the cookie
const db = require("./config/mongoose");                // database
const session = require('express-session');             // use for session cookie
const passport = require('passport');                   // passport for authentication
const passportLocal = require('./config/passport');     // path of passport-local (One type of authentication in passport)

//**********************************************_MiddleWarer_************************************************************************************//

app.use(express.urlencoded());                  // to access that value we pass in the eg: value send by form we access
app.use(cookieParser());                        // to access that cookie
app.use(express.static('assets'));              // for access the css and js file

//**********************************************_<>_************************************************************************************//

// setup view engine
app.set("view engine", "ejs");
app.set("views", 'views');


app.use(session({
    name : "contact list",
    secret : "secret",
    saveUninitialized : false, 
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('/', require('./routers'));             // Routers request

//******************************************_Server Running_**********************************************************************************//

app.listen(port, function (err) {                
    if(err) {
        console.log(`Error in the Server, The Error is ${err}`);
    }

    console.log(`Server Running Fine on Port : ${port}`);
});