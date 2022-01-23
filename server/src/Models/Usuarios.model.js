const mongoose = require('mongoose')
const {Schema} = mongoose

const UsuarioSchema = new Schema({
    nombre: String,
    correo: String, 
    contrasena: String,
    // ciudad: { type: String, required: true, max: 40 },
    // departamento: { type: String, required: true, max: 40 },
    // direccion: { type: String, required: true, max: 40 },
    // telefono: { type: String, required: true, max: 40 },
    // avatar: { data: Buffer, contentType: String },
});

module.exports=mongoose.model('usuario', UsuarioSchema)