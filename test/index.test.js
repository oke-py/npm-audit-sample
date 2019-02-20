const expect = require('expect');
const request = require('supertest');

const {app} = require('../index');

describe('GET /', () => {
  it('should return hello world', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
	expect(res.text).toBe('Hello world');
      })
      .end(done);
  });
});

