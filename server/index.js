const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');

// const bodyParser = require('body-parser')
const app = express();

require('./database');

//middleware
app.use(morgan('dev'));
app.use(express.json());

//aplication/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
app.use(cors({origen: '*'}));

app.use('/admin', require('./src/Routes/Admin.route'));
app.use('/usuario', require('./src/Routes/Usuarios.router'))

//puerto
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'),function () {
    console.log('Example app listening on port' + app.get('puerto'));
});
