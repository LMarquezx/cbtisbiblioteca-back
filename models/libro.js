const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    id_libro:{type:String, required:true},
    Titulo:{type:String, required:true},
    Autor:{type:String, required:true},
    Año_publicacion:{type:String },
    Editorial:{type:String },
    categoria_id:{type:String, required:true},
    Estado:{type:String, required:true}
});
module.exports = mongoose.model('Libro', libroSchema);