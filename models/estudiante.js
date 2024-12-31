const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    id:{type:String, required:true},
    nombre:{type:String, required:true},
    correo:{type:String },
    password:{type:String },
    especialidad:{type:String},
    semestre:{type:String, required:true}
});
module.exports = mongoose.model('Estudiante', estudianteSchema);