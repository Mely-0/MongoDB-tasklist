const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const taskSchema = require('../models/taks')
const router = express.Router()


// crear tarea
router.post("/", verifyToken, (req, res) => {
    const tarea = taskSchema(req.body);
    tarea.user = req.headers._id
    tarea.save()
        .then((data) => res.json(data = "tarea agregada"))
        .catch((error) => res.json(error))
})

// obtener tareas
router.get("/", verifyToken, (req, res) => {
    const { _id } = req.headers
    taskSchema.find({ user: `${_id}` })
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
// obtener una tarea por id 
router.get("/:ide", verifyToken, (req, res) => {
    const { ide } = req.params;
    taskSchema.findById(ide)
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
//actualizar una tarea
router.put("/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    const { tarea, descripcion } = req.body;
    taskSchema
        .updateOne({ _id: id }, { $set: { tarea, descripcion } })
        .then((data) => {
            res.json(data = "actualizado")
        })
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
//eliminar una tarea
router.delete("/:id", verifyToken, (req, res) => {
    const { id } = req.params;
    taskSchema
        .remove({ _id: id })
        .then(() => res.json({ data: `The task has been deleted` }))
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
module.exports = router;