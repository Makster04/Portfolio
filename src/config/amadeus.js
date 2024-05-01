const Amadeus = require('amadeus');

const dotenv = require('dotenv').config();

const amadeus = new Amadeus({
  clientId: 'Gyn48TPDX6ZMOmG3TzXw97gfoS7dsG7A',
  clientSecret: 'OuNGK4DUoTFuMmxr',
});


module.exports = amadeus;
