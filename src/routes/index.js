/* eslint-disable no-undef */

const express = require("express");
const router = express.Router();

const { userLogin } = require("../controllers/login");
const { getBreweries } = require("../controllers/getbreweries");

router.post("/login", userLogin);
router.get("/breweries", getBreweries);

module.exports = router;
