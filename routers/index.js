const express = require("express");
const router = express.Router();

const homecontroller = require("../controllers/homeContoller");


router.get('/', homecontroller.home);

router.post('/create-contact', homecontroller.creatContact);

router.get('/delete-contact', homecontroller.deleteContact);


module.exports = router;  



