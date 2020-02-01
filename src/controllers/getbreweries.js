/* eslint-disable no-undef */
const { getdata } = require("../services/getData");
const jwt = require("jsonwebtoken");

const getBreweries = (req, res) => {
  const bearer = req.headers["authorization"].slice(7);
  const token = jwt.decode(bearer);
  
  if (!token) { res.status(401).send('Token is not right :(')
  } else {
    getdata()
    .then((data) => res.status(200).send(data))
  }
};

module.exports = { getBreweries };
