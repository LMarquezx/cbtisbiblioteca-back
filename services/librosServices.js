const Libro = require('../models/libro');

class LibroService {
  async getAllLibros() {
    try {
      return await Libro.find();
    } catch (err) {
      throw new Error('Error al obtener los libros: ' + err.message);
    }
  }
}

module.exports = new LibroService();
