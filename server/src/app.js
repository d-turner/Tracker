// import npm packages
import express from 'express';
import morgan from 'morgan';

// local packages
import logger from './util/logger';

// init app
const app = express();

// setup logging
app.use(morgan('combined', {stream: logger.stream}));

// test method
app.get('/', (req, res) => {
  res.send('Hello World');
});

// catch all other requests
app.use((err, req, res, next) => {
  if (err) {
    logger.error(err.stack);
    res.status(505).send(err);
  }
  res.status(404).send('Not implemented (1)');
  next();
}, (req, res, next) => {
  if (req.method === 'POST') res.status(505).send('No POST requests on this server');
  res.status(404).send('Not implemented (2)');
  next();
});

export default app;
export {logger};
