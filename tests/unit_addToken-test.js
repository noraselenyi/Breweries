/* eslint-disable no-undef */
require("dotenv").config();
const un = process.env.username;
const pw = process.env.password;

const data = { username: un, password: pw }

const { addToken } = require("../src/services/addToken");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);


describe('Checking token', () => {
  it('token can be created', () =>
    addToken(data)
      .should.not.equal(null));

  it('token should be a string', () =>
    addToken()
      .should.be.a('string'));
});
