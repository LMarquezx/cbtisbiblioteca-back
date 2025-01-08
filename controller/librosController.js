const libroService = require('../services/librosServices');

class LibroController {
    async getAllLibros(req,res) {
        try {
        const libros = await libroService.getAllLibros();
        res.status(200).json(libros);
        } catch (err) {
        res.status(500).json({ message: err.message });
        }
    }

    async getByCategoria(req,res){
        try{
            console.log("Entra al controlador: ");
            const libros = await libroService.filterByCat(req.body.cat);
            res.status(200).json(libros);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}
module.exports = new LibroController();
