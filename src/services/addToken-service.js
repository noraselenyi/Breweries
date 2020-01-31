/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const addToken = (userdata) => {
  let token = jwt.sign({ userdata }, 'supersecret', { expiresIn: '60s'});
  return token
};

module.exports = { addToken };
