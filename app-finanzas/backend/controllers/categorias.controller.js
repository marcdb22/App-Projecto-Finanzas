const db = require('../database/db');

// Obtener todas las categorías
const getCategorias = (req, res) => {
  try {
    const categorias = db.getCategorias();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener categorías" });
  }
};

// Crear una nueva categoría
const crearCategoria = (req, res) => {
  try {
    const { nombre, limite } = req.body;

    // Validación básica
    if (!nombre || limite == null) {
      return res.status(400).json({ error: "El nombre y el límite (porcentaje) son requeridos" });
    }

    if(limite < 1 || limite > 100) {
      return res.status(400).json({ error: "El porcentaje debe estar entre 1 y 100" });
    }

    const nuevaCategoria = db.addCategoria({ nombre, limite: Number(limite) });
    
    // Status 201: Created
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};

module.exports = {
  getCategorias,
  crearCategoria
};
