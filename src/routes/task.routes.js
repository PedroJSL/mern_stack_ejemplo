//Inicializar la variable 'router' para la creación de las rutas de la aplicación
const express = require('express');
const router = express.Router();

/***
 * API REST para las peticiones de REACT sobre las tareas
 */

//creación de la ruta inicial de tipo get
router.get('/', (req, res) => {
    res.json({ status: 'API OK' });
});


//Exportar las rutas que se creen
module.exports = router;