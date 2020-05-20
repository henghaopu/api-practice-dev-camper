const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
// Route files
const bootcamps = require('./routes/bootcamps');

// Load environment variables from the .env file into Node.js' process.env
dotenv.config({ path: './config/config.env' });

// Initialize the app variable with express
const app = express();

// Use dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount/connect routers to their own specific url
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

// Run the server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
