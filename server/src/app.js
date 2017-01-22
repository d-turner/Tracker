// import npm packages
import express from 'express';

// init app
const app = express();

// test method
app.get('/', (req, res) => {
  res.send('Hello World');
});

// catch all other requests
app.use((err, req, res) => {
  console.error(err.stack);
  res.send(err);
});

export default app;
