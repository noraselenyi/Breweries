/* eslint-disable no-undef */
const { verfyToken } = require("../services/verfyToken");
const { getdata } = require("../services/getData");

const getBreweries = (req, res) => {
  const bearer = req.headers["authorization"].slice(7);
  let queryparam = '';
  
  if (req.query.query !== undefined) {
    queryparam = req.query.query}
    
  verfyToken(bearer)
    .then(() => getdata(queryparam))
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).send(err.message));
};

module.exports = { getBreweries };
