/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const verfyToken = (bearer) => new Promise((resolve, reject) => {
  jwt.verify(bearer, 'supersecret', (err, data) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        reject(new Error('Token expired :('))
      } else {
        reject(new Error('Token is not right :('))}
    } else {
      resolve(data);
    }})
});

module.exports = { verfyToken };
