const estudianteServices = require('../services/estudiantesServices');

class EstudiantesController {
    async getAllStudent(req,res) {
        try {
        const libros = await estudianteServices.getAllEstudiantes();
        res.status(200).json(libros);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    }
    async saveStudent(req,res) {
        try {
        const estudiante = req.body;
        const newEstudiante = await estudianteServices.saveStudent(estudiante);
        res.status(201).json(newEstudiante);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    }
}
module.exports = new EstudiantesController();
