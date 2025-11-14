const dobs = require('dobs');

dobs.createDobsServer({ port: 5050 }).then((app) =>
  app.on('listening', () => {
    console.log('[run]');
  })
);
