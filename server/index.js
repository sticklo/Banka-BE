import express from 'express';
import swaggerUi from 'swagger-ui-express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import koii from 'koii';
import 'dotenv/config';

// import routes from './routes';
import swaggerSpecs from '../documentation/swagger.json';
import { connect } from './db';

const baseUrl = '/v1';
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

// app.use(`${baseUrl}`, routes);
app.get(baseUrl, (req, res) => {
  res.send('Welcome to Banka API');
});

app.get(`${baseUrl}/docs`, (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpecs);
});

app.use(`${baseUrl}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(koii);

app.all('*', (_req, res) => {
  res.status(404).json({
    error: 'This route does not exist yet!',
  });
});

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`The server is active on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

export default app;
