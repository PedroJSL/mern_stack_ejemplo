//Inicialización del modulo de conexión con la bbdd
const mongoose = require("mongoose");

const URI = 'mongodb://localhost/mern-tasks';

//Conexión con la bbdd
mongoose.connect(URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(db => console.log("BBDD conectada")) //En caso de conexión correcta
    .catch(err => console.error(err)); //En caso de error

module.exports = mongoose;