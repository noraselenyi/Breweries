/* eslint-disable no-undef */
const { getdata } = require("../services/getData");
const jwt = require("jsonwebtoken");

const getBreweries = (req, res) => {
  const bearer = req.headers["authorization"].slice(7);
  const result = jwt.decode(bearer);
  
  if (!result) { res.status(400).send('Token is not right :(')
  } else {
    getdata()
    res.status(200).send('holá')
  }


  // checktoken(bearer, res)
  //   // .then(thingie => console.log(thingie))
  //   // .then((result) => searchUsernameAndPassword(result.userdata.username, result.userdata.password))
  //   .then(() => { res.status(200).send('okiiiiii') })
  //   .catch((err) => {
  //     if (err) {
  //       res.status(400).json({ status: 'error', message: err.message });
  //     }
  //   });
};

module.exports = { getBreweries };
