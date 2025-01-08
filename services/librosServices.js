const Libro = require('../models/libro');

class LibroService {
  async getAllLibros() {
    try {
      return await Libro.find();
    } catch (err) {
      throw new Error('Error al obtener los libros: ' + err.message);
    }
  }

  async filterByCat(id_cat){
    try{
      return await Libro.find({categoria_id: id_cat});
    }catch(err){
      throw new Error('Error al filtrar los libros: ',err.message);
    }
  }
}
module.exports = new LibroService();
