// import npm packages
import express from 'express';
import morgan from 'morgan';
import winston from 'winston';

// init app
const app = express();

app.use(morgan('dev'));

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
