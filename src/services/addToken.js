/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const addToken = (userdata) => {
  let token = jwt.sign({ userdata }, 'supersecret', { expiresIn: '6000s'});
  return token
};

module.exports = { addToken };
