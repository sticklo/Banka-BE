/* eslint-disable no-undef */
const request = require('supertest');
const getApp = require('../server/index');

let app;

beforeAll(async () => {
  app = await getApp();
});

test('GET / should return "Welcome to banka API"', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Welcome to banka API');
});
