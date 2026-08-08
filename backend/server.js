const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de MalumaVerse funcionando"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`);
});