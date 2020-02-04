/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const addToken = (userdata) => {
  let token = jwt.sign({ userdata }, 'supersecret', { expiresIn: '1h'});
  return token
};

module.exports = { addToken };
