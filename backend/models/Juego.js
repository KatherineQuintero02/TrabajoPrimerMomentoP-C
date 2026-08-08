const mongoose = require("mongoose");

const juegoSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true
    },

    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    icono: {
        type: String,
        required: true
    },

    disponible: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model("Juego", juegoSchema);