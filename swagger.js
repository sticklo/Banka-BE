const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Banka API Documentation',
      version: '1.0.0',
      description: 'Welcome to Banka API Documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./swaggerRoutes.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
