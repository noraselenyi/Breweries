/* eslint-disable no-undef */

const express = require("express");
const router = express.Router();

const { userLogin } = require("../controllers/login-controller");

router.post("/login", userLogin);



module.exports = router;
