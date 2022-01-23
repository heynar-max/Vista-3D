const Auth={}
const jwt = require('jsonwebtoken')
Auth.verificartoken = (req, res, next) => {
    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'No estas Autorizado'
        })
    }
    const token = req.headers.autorizacion

    if(token==='null'){
        return res.json({
            mensaje: 'No estas Autorizado'
        })
    }
    jwt.verify(token, 'secreta', (error, resultado) =>{
        if(error) return res.json({
            mensaje:'No estar Autorizado'
        })
        next()
    })
}

module.exports=Auth