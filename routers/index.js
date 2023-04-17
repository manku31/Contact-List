const express = require("express");
const passport = require('passport')
const router = express.Router();

const homeController = require("../controllers/homeContoller");


router.get('/', passport.authenticate(
    "local",
    {failureRedirect : "/user/login"}
) ,homeController.home);

router.post('/create-contact', homeController.creatContact);

router.get('/delete-contact', homeController.deleteContact);


// Sending all the request to users.js router
router.use('/user', require('./users'));


module.exports = router;
