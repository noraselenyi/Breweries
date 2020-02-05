/* eslint-disable no-undef */
const { verifyToken } = require("../services/verifyToken");
const { getdata } = require("../services/getData");

const getBreweries = (req, res) => {
  const bearer = req.headers["authorization"].slice(7);
  let queryparam = '';
  
  if (req.query.query !== undefined) {
    queryparam = req.query.query}
    
  verifyToken(bearer)
    .then(() => getdata(queryparam))
    .then(data => res.status(200).json(data))
    .catch(err => res.status(401).send(err.message));
};

module.exports = { getBreweries };
