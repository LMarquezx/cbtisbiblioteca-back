const Estudiantes = require('../models/estudiante');

class Students {
  async getAllEstudiantes() {
    try {
      return await Estudiantes.find();
    } catch (err) {
      throw new Error('Error al obtener los estudiantes: ' + err.message);
    }
  }
  async saveStudent(estudiante) {
    try {
      return await Estudiantes.create(estudiante);
    } catch (err) {
      throw new Error('Error al guardar el estudiante: ' + err.message);
    }
  }
}

module.exports = new Students();
