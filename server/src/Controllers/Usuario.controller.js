const UsuarioCtrl={}
const Usuario = require('../Models/Usuarios.model')
const jwt = require('jsonwebtoken');
const bcryptjs = require( 'bcryptjs' );

UsuarioCtrl.crear = async(req , res) => {

    const {nombre, correo, contrasena} = req.body
    const NuevoUsuario = new Usuario ({

        nombre,
        correo,
        contrasena,
    })

    const correousuario =await Usuario.findOne({correo:correo})

    if(correousuario){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }
    else{
        NuevoUsuario.contrasena = await bcryptjs.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoUsuario._id},'secreta')

        await NuevoUsuario.save()

        res.json({

            mensaje:'Bienvenido',
            id:NuevoUsuario._id,
            nombre:NuevoUsuario.nombre,
            correo:NuevoUsuario.correo,
            token
        })
    }
            }
    
UsuarioCtrl.eliminar = async (req, res) => {

    const id = req.params.id
    await Usuario.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Usuario eliminado'
    })
}
UsuarioCtrl.editar = async (req, res) => {

    const id = req.params.id
    await Usuario.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje:'Usuario editado'
    })
}

module.exports = UsuarioCtrl