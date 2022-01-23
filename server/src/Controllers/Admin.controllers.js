const AdminCtrl = {}
const Admin = require('../Models/Admin.model');
const jwt = require('jsonwebtoken');
const bcryptjs = require( 'bcryptjs' );

// AdminCtrl.crearAdmin = async(req, res) => {

//     const {nombre, correo, contrasena} = req.body
//     const NuevoAdmin = new Admin ({

//         nombre,
//         correo,
//         contrasena,
//     })

//     const correoadmin =await Admin.findOne({correo:correo})

//     if(correoadmin){
//         res.json({
//             mensaje: 'El correo ya existe'
//         })
//     }
//     else{
//         NuevoAdmin.contrasena = await bcryptjs.hash(contrasena,10)
//         const token = jwt.sign({_id:NuevoAdmin._id},'secreta')

//         await NuevoAdmin.save()

//         res.json({

//             mensaje:'Bienvenido',
//             id:NuevoAdmin._id,
//             nombre:NuevoAdmin.nombre,
//             token
//         })
//     }
// }

AdminCtrl.login = async(req,res) => {

    const {correo, contrasena} = req.body
    const admin = await Admin.findOne({correo:correo})
    if (!admin){

        return res.json({

            mensaje:'Correo incorrecto'
        })
    }

    const match =  await bcryptjs.compare(contrasena,admin.contrasena)

    if(match){

        const token = jwt.sign({_id: admin._id},'secreta')
        res.json({
            mensaje:'Bienvenido de Nuevo',
            id: admin._id,
            nombre: admin.nombre,
            token
        })
    }
    else{
        res.json({

            mensaje:'contraseña incorrecta'
        })
    }
}


module.exports=AdminCtrl