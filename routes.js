const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/libros', controllers.getAllLibros);
router.get('/libros/:id', controllers.getLibroById);
router.post('/libros', controllers.addLibro);
router.put('/libros/:id', controllers.updateLibro);
router.delete('/libros/:id', controllers.deleteLibro);

module.exports = router;