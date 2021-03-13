const path = require('path');
const morgan = require('morgan');
const express = require('express');

// * LOAD .env VARIABLES
require('dotenv').config();

/**
 * CONSTANTS
 */
const PORT = process.env.PORT || 8080;

/**
 * START EXPRESS
 */
const app = express();

/**
 * CREATE MIDDLEWARE
 */
morgan((tokens, req, res) => [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
].join(' '));
app.use(morgan('combined'));

/**
  * APP CONFIGURATION
  */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * ROUTES
 */
const indexRoute = require('./routes/indexRoute');
const errorRoute = require('./routes/errorRoute');

/**
  * MIDDLEWARE FOR EXPRESS
  */
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

/**
 * ROUTES MATCHERS
 */
app.use('/', indexRoute);
app.use('*', errorRoute);

/**
 * START SERVER
 */
app.listen(PORT, () => {
    console.log(`🚀 Server has started on port ${PORT} => http://localhost:${PORT}`);
});
