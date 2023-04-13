const express = require("express");
const router = express.Router();

const homecontroller = require("../controllers/homeContoller");


router.get('/', homecontroller.home);

router.post('/create-contact', homecontroller.creatContact);



module.exports = router;  



