/* eslint-disable no-undef */
const app = require('../src/index');
const chai = require('chai');
const request = require('supertest');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('Login test', () => {
  it('wrong endpoint', (done) => {
    request(app)
      .post('/something')
      .end((err, res) => {        
        expect(res.status).to.equal(404);
        done(err);
      });
  });

  it('/login succcess', (done) => {
    request(app)
      .post('/login')
      .send({ "username": "NewUser", "password": "NewPassword" })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).not.to.equal(null);
        done(err);
      });
  });

  it('/login failure, wrong username', (done) => {
    request(app)
      .post('/login')
      .send({ "username": "wronguser", "password": "NewPassword" })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.text).to.equal('"Username or password incorrect."');
        done(err);
      });
  });

  it('/login failure, wrong password', (done) => {
    request(app)
      .post('/login')
      .send({ "username": "NewUser", "password": "wrongPassword" })
      .end((err, res) => {        
        expect(res.status).to.equal(400);
        expect(res.text).to.equal('"Username or password incorrect."');
        done(err);
      });
  });

  it('/login failure, empty body', (done) => {
    request(app)
      .post('/login')
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done(err);
      });
  });
});
