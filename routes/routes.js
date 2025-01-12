const express =require('express');
const router = express.Router();
const libroController = require('../controller/librosController');
const estudianteController = require('../controller/estudiantesController');
const prestamoController = require('../controller/prestamoController')


router.get('/libros', libroController.getAllLibros);
router.post('/libros/byCategoria', libroController.getByCategoria);
router.get('/libros/prestamo', libroController.getLibrosIdName);
router.post('/libros/filterName',libroController.getByTitulo);
router.get('/estudiantes', estudianteController.getAllStudent);
router.post('/newStudent', estudianteController.saveStudent);
router.post('/prestamo', prestamoController.savePrestamoNuevo);
router.get('/prestamos/all', prestamoController.getAllPrestamos);
router.post('/prestamos/byName', prestamoController.getByNamePrestamo);

module.exports = router;
