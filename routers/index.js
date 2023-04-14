const express = require("express");
const router = express.Router();

const homecontroller = require("../controllers/homeContoller");


router.get('/', homecontroller.home);

router.post('/create-contact', homecontroller.creatContact);

// router.get('/delete-contact/:phone', homecontroller.deleteContact);  ==> for param value

router.get('/delete-contact', homecontroller.deleteContact);  // ==> for query


module.exports = router;  



