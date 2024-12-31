const libroService = require('../services/librosServices');

class LibroController {
    async getAllLibros(req,res) {
        try {
        const libros = await libroService.getAllLibros();
        res.status(200).json(libros);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    }
}
module.exports = new LibroController();
