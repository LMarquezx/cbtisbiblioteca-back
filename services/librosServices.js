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
  async filterByName(_titulo){
    try{
      return await Libro.find({Titulo:_titulo});
    }catch(err){
      throw new Error('Error al filtrar.',err);
    }
  }
  async librosPrestamo(){
    try{
        return await Libro.find({},{id_libro:1,Titulo:true,_id:0});
    }catch(err){
      throw new Error('Error al obtener los libros');
    }
  }
}
module.exports = new LibroService();
