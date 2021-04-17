const express = require('express');
const morgan = require('morgan');
const path = require('path'); //Para manejar las rutas de los directorios
const app = express();


// Sección de configuración
app.set('port', process.env.PORT || 3000); //Establecimiento del puerto

// Sección de Middlewares
app.use(morgan('dev')); //Configuración del uso del middleware morgan
app.use(express.json()); //Verificar que los datos enviados tengan un formato JSON.

// Sección de Rutas
app.use('/api/tasks', require('./routes/task.routes'));


// Sección de archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); //Configuración de la carpeta public


//Inicio del servidor en el puerto 3000
app.listen(app.get('port'), () => {
    console.log(`Server iniciado en puerto ${app.get('port')}`);
})