const prestamosService = require('../services/prestamosServices');

class PrestamoController {
    async savePrestamoNuevo(req,res){
        try{
            const prestamo = await prestamosService.savePrestamo(req.body);
            res.status(200).json(prestamo);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
    async getAllPrestamos(req,res){
        try{
            const prestamo = await prestamosService.getPrestamos();
            res.status(200).json(prestamo);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
    async getByNamePrestamo(req,res){
        try{
            const prestamo = await prestamosService.getByNamePrestamo(req.body.nombreCompleto);
            res.status(200).json(prestamo);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }
}
module.exports = new PrestamoController();
