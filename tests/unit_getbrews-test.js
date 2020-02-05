/* eslint-disable no-undef */
const { verifyToken } = require("../src/services/verifyToken");
const { getdata } = require("../src/services/getData");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);

describe('Verify token', () => {
  it('wrong token', () =>
    verifyToken('wrong')
      .should.be.rejectedWith('Token is not right :('));


  it('fetching without param success', () =>
    getdata()
      .should.not.equal(null));


  it('fetching with param success', () =>
    getdata('dog')
      .should.not.equal(null));
  
});
