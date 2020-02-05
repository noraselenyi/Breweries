/* eslint-disable no-undef */
require("dotenv").config();
const un = process.env.username;
const pw = process.env.password;

const data = { username: un, password: pw }

const { searchUsernameAndPassword } = require("../src/services/search-un-and-pw");
const { addToken } = require("../src/services/addToken");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);

describe('Checking login', () => {
  it('wrong password', () =>
    searchUsernameAndPassword('NewUser', 'wrongPassword')
      .should.be.rejectedWith('Username or password incorrect.'));

  it('wrong username', () =>
    searchUsernameAndPassword( 'wrongUser', 'NewPassword')
      .should.be.rejectedWith('Username or password incorrect.'));

  it('wrong username and password', () =>
    searchUsernameAndPassword( 'wrongUser','wrongPassword')
      .should.be.rejectedWith('Username or password incorrect.'));

  it('empty username and password', () =>
    searchUsernameAndPassword('', '')
      .should.be.rejectedWith('Username or password incorrect.'));

  it('empty username', () =>
  searchUsernameAndPassword('', 'NewPassword')
    .should.be.rejectedWith('Username or password incorrect.'));

  it('empty password', () =>
  searchUsernameAndPassword('NewUser', '')
    .should.be.rejectedWith('Username or password incorrect.'));

  it('undefined inputs', () =>
  searchUsernameAndPassword(undefined, undefined)
    .should.be.rejectedWith('Username or password incorrect.'));


  it('all fields are correct', () =>
    searchUsernameAndPassword( 'NewUser', 'NewPassword')
    .should.become(
      { username: un,
        password: pw }))
});



describe('Checking token', () => {
  it('token can be created', () =>
    addToken(data)
      .should.not.equal(null));

  it('token should be a string', () =>
    addToken()
      .should.be.a('string'));
});
