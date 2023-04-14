const express = require("express");
const app = express();
const port = 8000;

const db = require("./config/mongoose");

// setup view engine
app.set("view engine", "ejs");
app.set("views", 'views');

// setup the middleware ==> to access that value we pass in the eg: value send by form we access
app.use(express.urlencoded());

//for access the css and js file
app.use(express.static('assets'));



// Routers request
app.use('/', require('./routers'));

// Server Running
app.listen(port, function (err) {
    if(err) {
        console.log(`Error in the Server, The Error is ${err}`);
    }

    console.log(`Server Running Fine on Port : ${port}`);
});