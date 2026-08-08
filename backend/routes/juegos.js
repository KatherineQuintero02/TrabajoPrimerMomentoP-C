const express = require("express");
const Juego = require("../models/Juego");

const router = express.Router();

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

module.exports = router;