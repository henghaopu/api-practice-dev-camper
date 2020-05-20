const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load environment variables from the .env file into Node.js' process.env
dotenv.config({ path: './config/config.env' });

// Initialize the app variable with express
const app = express();

// Create middleware
const logger = (req, res, next) => {
  // set a value on req obj, then we can access in any route that come after this middleware
  // req.hello = 'Hello World!';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  // we need to call next() in every middleware we create, so it can move on to the next middleware
  next();
};

// Use middleware
app.use(logger);

// Mount/connect routers to their own specific url
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

// Run the server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
