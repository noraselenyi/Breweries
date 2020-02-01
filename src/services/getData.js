/* eslint-disable no-undef */
const fetch = require('node-fetch');

const getdata = () => {
  return fetch('https://api.openbrewerydb.org/breweries/search?query=dog')
    .then(res => res.json())
}

module.exports = { getdata };