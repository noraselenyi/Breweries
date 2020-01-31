/* eslint-disable no-undef */
const { searchUsernameAndPassword } = require("../services/search_un_and_pw");
const { addToken } = require("../services/addToken-service");


const userLogin = (req, res) => {
  const { username, password } = req.body;

  searchUsernameAndPassword(username, password)
  .then((data) => addToken(data))
  .then((token) => { res.status(200).send(token) })
  .catch(err => {res.status(400).json(err.message)});
};

module.exports = { userLogin };
