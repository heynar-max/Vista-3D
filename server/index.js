const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');

const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//aplication/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
app.use(cors({origen: '*'}));

//puerto
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'),function () {
    console.log('Example app listening on port' + app.get('puerto'));
});
