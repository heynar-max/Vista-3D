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

module.exports = UsuarioCtrl