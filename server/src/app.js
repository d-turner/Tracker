// import npm packages
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// local packages
import logger from './util/logger';
// import routes from './routes';
// {...} app.use(routes);

// init app
const app = express();

// setup logging
// morgan logs every request that comes into express in a nice format
// morgan stream your output to the logger
app.use(morgan('combined', {stream: logger.stream}));

// add body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname.join('/public')));

// index method
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

app.use((err, req, res, next) => {
  if (err.message === 'Forbidden: POST') {
    res.status(403).send(err.message);
    return;
  }
  logger.error(err);
  res.status(500).send('Sorry something went wrong');
  next();
});

export default app;
export {logger};
