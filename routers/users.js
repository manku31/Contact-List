const express = require("express");
const passport = require("passport");
const router = express.Router();

const userController = require("../controllers/usersController");


router.get('/login', userController.login);

router.get('/register', userController.register);

router.post('/create', userController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    "local",
    {failureRedirect : "/user/login"}
) , userController.createSession);

module.exports = router; 