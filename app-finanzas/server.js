const express = require("express");
const cors = require("cors");
const categoriasRoutes = require("./backend/routes/categorias.routes");
const path = require("path");

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones desde el navegador web
app.use(express.json()); // Permite procesar JSON en el req.body

// Servir la carpeta frontend estáticamente
app.use(express.static(path.join(__dirname, 'frontend')));

// Ruta principal
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Rutas APIS
// Si el frontend hace una petición a /categorias o /api/categorias, usará nuestras rutas
app.use("/categorias", categoriasRoutes);

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});