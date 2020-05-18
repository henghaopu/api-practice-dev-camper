const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from the .env file into Node.js' process.env
dotenv.config({ path: './config/config.env' });

// Initialize the app variable with express
const app = express();

// Create a GET method route
// to respond with "hello ..." when a GET request is made to the homepage
app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).send({ success: true, data: { msg: 'Show all bootcamps' } });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { msg: `Show bootcamp ${req.params.id}` } });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).send({ success: true, data: { msg: 'Create new bootcamp' } });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { msg: `Update bootcamp ${req.params.id}` } });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { msg: `Delete bootcamp ${req.params.id}` } });
});

const PORT = process.env.PORT || 5000;

// run the server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
