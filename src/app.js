const express = require('express');

const primeRoutes = require('./routes/prime');

const app = express();

app.use('/', primeRoutes);

// If in production mode server the client files
// This is not necessary in development as the webpack dev server provided by create-react-app will be running
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  const clientBuildDir = '../client/build';

  // Express will server up production assets from the client
  app.use(express.static(path.resolve(__dirname, clientBuildDir)));

  // Express will serve up the index.html file if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, clientBuildDir, 'index.html'));
  });
}

module.exports = app;
