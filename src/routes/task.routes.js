//Inicializar la variable 'router' para la creación de las rutas de la aplicación
const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

const Tasks = require('../models/Task');

/***
 * API REST para las peticiones de REACT sobre las tareas
 */

//Obtención de todas las tareas
router.get('/', async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

//Obtener una única tarea
router.get('/:id', async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//Creación de una nueva tarea
router.post('/', async(req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: "Tarea Guardada" });
});

//Modificar una tarea
router.put('/:id', async(req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);

    res.json({ status: "Tarea Actualizada" })
});

//Eliminar una tarea
router.delete('/:id', async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ status: "Tarea eliminada" });
});



//Exportar las rutas que se creen
module.exports = router;