const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON
app.use(bodyParser.json());

// Middleware para manejar las rutas
app.use('/api', routes);

const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});