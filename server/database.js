const mongoose = require("mongoose");

const uri = "mongodb+srv://vista:94480750@vista.9ands.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/vista";
const option = {useNewurlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, option).then(
    () => {console.log('Conectado a MA') },
    err => {console.log(err) }
);

module.exports = mongoose