import app, {logger} from './app';

app.listen(8080, function() {
  const host = this.address().address;
  const port = this.address().port;
  logger.info(`Started listening at http://${host}:${port}`);
});

process.on('uncaughtException', err => logger.error('uncaught exception: ', err)); // thrown exceptions
process.on('unhandledRejection', err => logger.error('unhandled rejection: ', err)); // unhandled promises
