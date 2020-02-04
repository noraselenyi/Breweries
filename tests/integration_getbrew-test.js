/* eslint-disable no-undef */
const app = require('../src/index');
const chai = require('chai');
const request = require('supertest');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('Get brewerties test', () => {
  let lettoken = '';

  it('/login succcess', (done) => {
    request(app)
      .post('/login')
      .send({ "username": "NewUser", "password": "NewPassword" })
      .end((err, res) => {
        lettoken = res.text;        
        expect(res.status).to.equal(200);
        expect(res.text).not.to.equal(null);
        done(err);
      });
  });

  it('/breweries succcess', (done) => {
    request(app)
      .get('/breweries')
      .set('Authorization', 'Bearer '+lettoken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done(err);
      });
  });

  it('/breweries with wrong token', (done) => {
    request(app)
      .get('/breweries')
      .set('Authorization', 'Bearer '+'wrongtoken')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.text).to.equal('Token is not right :(');
        done(err);
      });
  });


  it('/breweries withouth token', (done) => {
    request(app)
      .get('/breweries')
      .set('Authorization', 'Bearer ')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.text).to.equal('Token is not right :(');
        done(err);
      });
  });


  it('/breweries?query=dog success', (done) => {
    request(app)
      .get('/breweries?query=dog')
      .set('Authorization', 'Bearer '+lettoken)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.null;
        expect(res.body[0]).to.have.property('id')
        done(err);
      });
  });


  it('/breweriessomethingsomething not found', (done) => {
    request(app)
      .get('/breweriessomethingsomething')
      .set('Authorization', 'Bearer '+lettoken)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done(err);
      });
  });

});
