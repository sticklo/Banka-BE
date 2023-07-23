const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('mongoose');
const specs = require('../swagger');

const app = express();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome to Banka API
 *     description: Returns a welcome message for Banka API.
 *     responses:
 *       200:
 *         description: A successful response with the welcome message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to Banka API
 */
app.get('/', (req, res) => {
  res.send('Welcome to banka API');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
mongoose
  .connect('mongodb://localhost:27017/acmedb', { useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('The server is active on port 3000');
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

module.exports = async () => {
  await mongoose.connection;
  return app;
};
