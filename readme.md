Step 01 : install express and creat a server
Step 02 : setup routers and controller
Step 03 : install ejs and set view engine
Step 04 : setup your ejs file setup and ejs structure (play with ejs to give a shape to your ejs => <%=%> to acces the js value)
Step 05 : setup the middle ware to access the value of that thing we send in form
Step 06 :
Step 07 :
Step 08 :
Step 09 :
Step 10 :


**********************Authentication***************************************
step 1 : npm install cookie-parser
step 2 : required the cookie-parser in main index file and add middleware
         ==> app.use(cookieParser());
step 3 : npm install passport and the passport-local
step 4 : config the passport-local-stategy (same as mongoose)
step 5 : 



const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

//authentication using passport
passport.use(new LocalStrategy({
        usernameField : 'email',
        passReqToCallback : true
    },

    async function(req, email, password, done){

        try {

            // Finding a user and establish the identity
            const user = await User.findOne({email : email})

            console.log("user ==> ", user," ","email ==> ", email );

            console.log("req.body.email...........", req.body.email);

            console.log("req.body.pqassss...........", req.body.password);
            
            if(!user || (user.password != password)){
                console.log('Error, Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
            
        } catch (err) {
            console.log('Error in passport ==> Error : ', err);
            return;
        }
    }
));

//Serializing the user to decide which key is to kept in the cookies ==> encrypting the deta which show in browser application 
passport.serializeUser(function(user, done){
    done(null, user.id);
});

//deserializinf the user from the key in the cookies ==> dencrypting the deta and send to the browser to know who he is
passport.deserializeUser(async function(id, done){
    const user = await User.findById(id)
    return done(null,user);
});


//Check if user is authenticated
passport.checkAuthentication = function(req, res, next){

    //if user is signing in, then pass on the request to next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }

    //if user is not signing in
    return res.redirect('/login');
}

passport.setAuthenticatedUser = function(req, res, next){

    if(req.isAuthenticated()){

        //req.user contains the current signed in user from the session cookie and we are just sending this to locals for the views
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;