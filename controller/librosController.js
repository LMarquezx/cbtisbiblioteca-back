const libroService = require('../services/librosServices');

class LibroController {
    //Obtener todos los libros
    async getAllLibros(req,res) {
        try {
        const libros = await libroService.getAllLibros();
        res.status(200).json(libros);
        } catch (err) {
        res.status(500).json({ message: err.message });
        }
    }
    //Filtrado por Categoria
    async getByCategoria(req,res){
        try{
            const libros = await libroService.filterByCat(req.body.cat);
            res.status(200).json(libros);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
    //Filtrado mostrando el Id y el titulo
    async getLibrosIdName(req,res){
        try{
            const libros = await libroService.librosPrestamo();
            res.status(200).json(libros);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
    //Filtrado por nombre
    async getByTitulo(req,res){
        try{
            const libros = await libroService.filterByName(req.body.titulo);
            res.status(200).json(libros);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}
module.exports = new LibroController();
