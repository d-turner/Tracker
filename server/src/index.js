import app from './app';

app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  console.log(`Started listening at http://${host}:${port}`);
});

process.on('uncaughtException', err => console.error('uncaught exception: ', err)); // thrown exceptions
process.on('unhandledRejection', err => console.error('unhandled rejection: ', err)); // unhandled promises