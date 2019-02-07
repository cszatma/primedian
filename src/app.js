const express = require('express');

const primeRoutes = require('./routes/prime');
const errorHandlers = require('./middlewares/error-handlers');

const app = express();

app.use('/', primeRoutes);

// Register the error handlers
app.use(errorHandlers.handleErrorType);
app.use(errorHandlers.handleUncaughtError);

// If in production mode server the client files
// This is not necessary in development as the webpack dev server provided by create-react-app will be running
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  const clientBuildDir = '../client/build';

  // Express will server up production assets from the client
  app.use(express.static(path.resolve(__dirname, clientBuildDir)));

  // Express will serve up the index.html file
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, clientBuildDir, 'index.html'));
  });

  // Redirect if Express doesn't recognize the route
  app.get('*', (req, res) => {
    res.redirect('/');
  });
}

module.exports = app;
