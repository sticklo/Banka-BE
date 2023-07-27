import request from 'supertest';
import app from '../server/index';

test('GET / should return "Welcome to Banka API"', async () => {
  const response = await request(app).get('/v1');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Welcome to Banka API');
});


test('GET /random should throw an error if a route does not exist', async () => {
  const response = await request(app).get('/v1/random');
  console.log(response.body)
  expect(response.status).toBe(404);
  expect(response.body.error).toBe('This route does not exist yet!');
});