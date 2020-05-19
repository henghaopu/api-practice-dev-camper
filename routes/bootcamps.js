const express = require('express');
const router = express.Router(); // mini-app

// Create a GET method route
// to respond with "hello ..." when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.status(200).send({ success: true, data: { msg: 'Show all bootcamps' } });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { msg: `Show bootcamp ${req.params.id}` } });
});

router.post('/', (req, res) => {
  res.status(200).send({ success: true, data: { msg: 'Create new bootcamp' } });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { msg: `Update bootcamp ${req.params.id}` } });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .send({ success: true, data: { msg: `Delete bootcamp ${req.params.id}` } });
});

module.exports = router;
