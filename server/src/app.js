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
app.use((req, res, next) => {
  if (req.method === 'POST') {
    next(new Error('Forbidden: POST'));
    return;
  }
  // simulate database error for /simulate
  if (req.originalUrl === '/simulate') {
    next(new Error('Database error'));
    return;
  }
  res.status(404).send('404: File not found.');
  next();
});

  next();
});

export default app;
export {logger};
