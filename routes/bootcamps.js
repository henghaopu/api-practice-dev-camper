const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router(); // mini-app

router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// router.get('/', (req, res) => getBootcamps());
// router.get('/:id', (req, res) => getBootcamp());
// router.post('/', (req, res) => createBootcamp());
// router.put('/:id', (req, res) => updateBootcamp());
// router.delete('/:id', (req, res) => deleteBootcamp());

module.exports = router;
