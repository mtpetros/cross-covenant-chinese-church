const express = require('express');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')));

// favicon
app.use(favicon(path.resolve(__dirname, '..', 'public', 'assets', 'img', 'favicon.png' )));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;