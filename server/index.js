const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const swaggerSpecs = require('../swagger');
// eslint-disable-next-line import/no-unresolved
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to banka API');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.all('*', (_req, res) => {
  res.status(404).json({
    error: 'This route does not exist yet!',
  });
});
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => {
      console.log('The server is active on port 3000');
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

module.exports = app;
