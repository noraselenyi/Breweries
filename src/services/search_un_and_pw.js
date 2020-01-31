/* eslint-disable no-undef */
const un = process.env.username;
const pw = process.env.password;

const searchUsernameAndPassword = (usernamep, passwordp) =>
  new Promise((resolve, reject) => {
    if (
      usernamep !== un ||
      passwordp !== pw
    ) {
      reject(new Error("Username or password incorrect."));
    } else {
      resolve();
    }
  });

module.exports = { searchUsernameAndPassword };
