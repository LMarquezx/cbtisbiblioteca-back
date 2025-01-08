const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
    _id:{type:String, required:true},
    nombreCompleto: {type:String, required:true},
    noControl: {type:Number, required:true },
    semestre:{type:Number, required:true},
    tituloLibro:{type:String,required:true},
    id_libro:{type:String,required:true},
    fechaDevolucion:{type:String,required:true}
});
module.exports = mongoose.model('Prestamo', prestamoSchema);
