const User = require('../models/User');

// redirect to login page
module.exports.login = function (req, res) {
    
    return res.render("login", {
        title : "Login",
    });

}

// redirect to Register Page
module.exports.register = function (req, res) {
    
    return res.render("register", {
        title : "Register",
    });
}

// Create new user
module.exports.create = async function (req, res) {

    try {
        
        if (req.body.password != req.body.confirm_password) {
            console.log("Passowrd and Confirm Password Does not Match");
            return res.redirect('back');
        }
       
        let user = await User.findOne({email : req.body.email});
       
        if(!user){

            let user = await User.create({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            });
            
            return res.redirect('/user/login');

        }else {
            console.log("This Email is already Register");
            return res.redirect('back');    
        }



    } catch (err) {
        console.log("Error in Creating new User, Error ==> ", err);
    }
}

// creating session
module.exports.createSession = function (req, res) {
    return res.redirect('/');
}