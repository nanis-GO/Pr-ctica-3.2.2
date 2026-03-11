// src/index.js
const express = require('express');
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.send('API base');
});

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});