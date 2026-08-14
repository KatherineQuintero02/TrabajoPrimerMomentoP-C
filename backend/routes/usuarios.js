const express = require("express");
const Usuario = require("../models/Usuario");

const router = express.Router();

// GET - Obtener usuarios
router.get("/", async (req, res) => {
    try {

        const usuarios = await Usuario.find().select("-password");

        res.json(usuarios);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener los usuarios",
            error: error.message
        });

    }
});

// POST - Registrar usuario
router.post("/", async (req, res) => {
    try {

        const { nombre, email, password } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios"
            });
        }

        const usuarioExistente = await Usuario.findOne({ email });

        if (usuarioExistente) {
            return res.status(400).json({
                mensaje: "El usuario ya existe"
            });
        }

        const nuevoUsuario = new Usuario({
            nombre,
            email,
            password
        });

        const usuarioGuardado = await nuevoUsuario.save();

        res.status(201).json({
            mensaje: "Usuario registrado correctamente",
            usuario: {
                id: usuarioGuardado._id,
                nombre: usuarioGuardado.nombre,
                email: usuarioGuardado.email
            }
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al registrar usuario",
            error: error.message
        });

    }
});

module.exports = router;