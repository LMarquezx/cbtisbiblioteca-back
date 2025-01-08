const express =require('express');
const router = express.Router();
const libroController = require('../controller/librosController');
const estudianteController = require('../controller/estudiantesController');

router.get('/libros', libroController.getAllLibros);
router.post('/libros/byCategoria', libroController.getByCategoria);
router.get('/estudiantes', estudianteController.getAllStudent);
router.post('/newStudent', estudianteController.saveStudent);

module.exports = router;
