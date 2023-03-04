const express = require("express")
const userSchema = require("../models/user")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const user = express.Router()
dotenv.config();

// create user
user.post("/signup", async (req, res) => {
    const { usuario, contraseña, fullName, email } = req.body;
    if (usuario == "")
        return res
            .status(404)
            .json({ mensaje: "Se requiere usuario para esta peticion" });
    try {
        const alreadyUser = await userSchema.findOne({
            usuario: usuario,
            email: email,
        });
        if (alreadyUser)
            return res
                .status(404)
                .json({ mensaje: "Ya existe un usuario con ese email" });
        const usuarios = userSchema({
            usuario,
            contraseña,
            fullName,
            email,
        });
        await usuarios.save();
        res.json({ mensaje: "Usuario creado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Hable con el admin" });
    }
})

// obtener usuarios
user.get("/", (req, res) => {
    userSchema.find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
// encontrar un usuario en especifico
user.get("/:ide", (req, res) => {
    const { ide } = req.params;
    userSchema.findById(ide)
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
//actualizar un usuario
user.put("/:id", (req, res) => {
    const { id } = req.params;
    const { tarea, descripcion } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { tarea, descripcion } })
        .then((data) => {
            res.json(data = "actualizado")
        })
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
user.patch("/login", async (req, res) => {
    const { usuario, contraseña } = req.body;
    if (!usuario || !contraseña) {
        return res.status(404).json({ mensaje: "Se requiere el usuario y la contraseña" })
    }
    try {
        const usuarios = await userSchema.findOne({ usuario: usuario, contraseña: contraseña })
        if (!usuarios) return res.status(404).json({ mensaje: "Usuario no registrado bro", usuarios: null })
        const token = jwt.sign({ usuarios }, process.env.SECRET_KEY, { expiresIn: 60 * 60 })
        res.json({ usuarios, mensaje: "Logueado correctamente", token })
    } catch (error) {
        res.status(500).json({ mensaje: "Habla con el Admin bro" })
    }
})
//eliminar un usuario
user.delete("/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .remove({ _id: id })
        .then((data) => res.json(data = `la tarea ha sido eliminada`))
        .catch((error) => {
            res.json({ mensaje: error })
        })
})
module.exports = user