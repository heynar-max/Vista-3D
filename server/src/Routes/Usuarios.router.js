const {Router} = require('express');
const router = Router ();

const UsuarioCtrl = require('../Controllers/Usuario.controller')
const Auth = require ('../Helper/Auth')

router.post('/crear',Auth.verificartoken, UsuarioCtrl.crear)
router.delete('/eliminar/:id',Auth.verificartoken, UsuarioCtrl.eliminar)
router.put('/editar/:id',Auth.verificartoken, UsuarioCtrl.editar)



module.exports = router