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
  winston.log('error', err.stack);
  // if (err) res.send(err);
  res.status(500).send('Not working');
});

export default app;
export {winston, morgan};
