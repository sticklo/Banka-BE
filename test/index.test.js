/* eslint-disable no-undef */
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server/index');
require('dotenv').config();

// let app;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
});
afterAll(async () => {
  await mongoose.connection.close();
});

test('GET / should return "Welcome to banka API"', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Welcome to banka API');
});
