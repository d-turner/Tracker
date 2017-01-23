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

        assert.equal(actualBody, expectedBody, 'Body retrieved successfully');
        assert.equal(err, null);
        done();
      });
    });
  });
});
