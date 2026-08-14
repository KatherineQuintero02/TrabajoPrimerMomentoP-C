const express = require("express");
const Juego = require("../models/Juego");

const router = express.Router();

// GET - Obtener juegos
router.get("/", async (req, res) => {
    try {
        const juegos = await Juego.find();
        res.json(juegos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los juegos",
            error: error.message
        });
    }
});

// POST - Crear juego
router.post("/", async (req, res) => {
    try {
        const nuevoJuego = new Juego(req.body);
        const juegoGuardado = await nuevoJuego.save();

        res.status(201).json(juegoGuardado);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear el juego",
            error: error.message
        });
    }
});

module.exports = router;