const {Router} = require('express');
const router = Router ();
const UsuarioCtrl = require('../Controllers/Usuario.controller')

router.post('/crear', UsuarioCtrl.crear)


module.exports = router