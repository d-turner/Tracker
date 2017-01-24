import request from 'supertest';
import assert from 'assert';
import winston from 'winston';
import app, {logger} from '../src/app';

// remove logger for testing
process.env.NODE_ENV = 'test';
logger.remove(winston.transports.Console);

describe('Endpoint "/"', () => {
  describe('GET', () => {
    it('should return Hello World', (done) => {
      request(app)
      .get('/')
      .expect(200)
      .expect('Content-type', /text\/html/)
      .end((err, res) => {
        const expectedBody = 'Hello World';
        const actualBody = res.text;

        assert.equal(actualBody, expectedBody, 'Body retrieval unsuccessful');
        assert.equal(err, null);
        done();
      });
    });
  });
});


describe('Endpoint "/anythingElse"', () => {
  describe('GET', () => {
    it('should return a 404 error', (done) => {
      request(app)
      .get('/anythingElse')
      .expect(404)
      .expect('Content-type', /text\/html/)
      .end((err, res) => {
        const expectedBody = '404: File not found.';
        const actualBody = res.text;

        assert.equal(actualBody, expectedBody, 'Body retrieval unsuccessful');
        assert.equal(err, null);
        done();
      });
    });
  });
  describe('Simulate a database error', () => {
    it('should return a 500 error', (done) => {
      request(app)
      .get('/simulate')
      .expect(500)
      .expect('Content-type', /text\/html/)
      .end((err, res) => {
        const expectedBody = 'Sorry something went wrong';
        const actualBody = res.text;

        assert.equal(actualBody, expectedBody, 'Body retrieval unsuccessful');
        assert.equal(err, null);
        done();
      });
    });
  });
  describe('POST', () => {
    it('should return a 403 error', (done) => {
      request(app)
      .post('/anythingElse')
      .expect(403)
      .expect('Content-type', /text\/html/)
      .end((err, res) => {
        const expectedBody = 'Forbidden: POST';
        const actualBody = res.text;

        assert.equal(actualBody, expectedBody, 'Body retrieval unsuccessful');
        assert.equal(err, null);
        done();
      });
    });
  });
});
