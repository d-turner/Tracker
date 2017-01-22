import request from 'supertest';
import assert from 'assert';
import app from '../src/app';

request(app)
  .get('/')
  .expect(200)
  .expect('Content-type', /text\/html/)
  .end((err, res) => {
    const expectedBody = 'Hello World';
    const actualBody = res.text;

    assert.equal(actualBody, expectedBody, 'Body retrieved successfully');
    assert.equal(err, null);
  });
