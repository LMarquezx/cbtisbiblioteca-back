const prestamo = require('../models/prestamo');
const Prestamo = require('../models/prestamo');

class PrestamoService {
  async savePrestamo(input) {
    try {
      return await Prestamo.create(input);
    } catch (err) {
      throw new Error('Error al crear la solicitud de prestamo: ' + err.message);
    }
  }
  async getPrestamos(){
    try{
      return await Prestamo.find();
    }catch(err){
      throw new Error('Error al obtener listado de prestamos.'+ err.message);
    }
  }
  async getByNamePrestamo(_nombre) {
    try {
        if (!_nombre || _nombre.trim() === '') {
            return await Prestamo.find({});
        }
        return await Prestamo.find({ nombreCompleto: { $regex: _nombre, $options: 'i' } });
    } catch (err) {
        throw new Error('Error al filtrar.', err);
    }
  }
}
module.exports = new PrestamoService();
