const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categorias.controller");

// GET todas las categorias
router.get("/", categoriasController.getCategorias);

// POST crear categoria
router.post("/", categoriasController.crearCategoria);

module.exports = router;