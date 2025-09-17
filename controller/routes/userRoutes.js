const express = require("express");
const { getUser } = require("../controller/userController");
const router = express.Router();

router.get('/',getUser);
router.post('/',require("../controller/userController").postUser);
module.exports = router;

