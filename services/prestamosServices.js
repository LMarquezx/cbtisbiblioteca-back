const Prestamo = require('../models/prestamo');

class PrestamoService {
  async savePrestamo(input) {
    try {
      return await Prestamo.create(input);
    } catch (err) {
      throw new Error('Error al crear la solicitud de prestamo: ' + err.message);
    }
  }

}
module.exports = new PrestamoService();
