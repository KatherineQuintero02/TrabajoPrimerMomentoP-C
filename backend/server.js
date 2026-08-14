const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const juegosRoutes = require("./routes/juegos");
const usuariosRoutes = require("./routes/usuarios");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/juegos", juegosRoutes);
app.use("/api/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de MalumaVerse funcionando"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`);
});

mongoose
    .connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000
    })
    .then(() => {
        console.log("MongoDB conectado correctamente");
    })
    .catch((error) => {
        console.error("MongoDB no disponible:", error.message);
        console.log("El servidor continúa funcionando sin MongoDB.");
    });