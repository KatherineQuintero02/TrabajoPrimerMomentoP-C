const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const juegosRoutes = require("./routes/juegos");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/juegos", juegosRoutes);

app.get("/", (req, res) => {

    res.json({
        mensaje: "API de MalumaVerse funcionando"
    });

});

const PORT = 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {

        console.log("MongoDB conectado correctamente");

        app.listen(PORT, () => {

            console.log(
                `Servidor backend ejecutándose en http://localhost:${PORT}`
            );

        });

    })
    .catch((error) => {

        console.error(
            "Error conectando a MongoDB:",
            error
        );

    });