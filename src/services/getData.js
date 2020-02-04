/* eslint-disable no-undef */
const fetch = require('node-fetch');

const getdata = (queryparam) => {
    let searchFor = '';

  if (queryparam !== '') {
    searchFor = `/search?query=${queryparam}`
  }
  
  return fetch(`https://api.openbrewerydb.org/breweries${searchFor}`)
  .then(res => res.json())
}

module.exports = { getdata };