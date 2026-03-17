let categorias = [];

const getCategorias = () => {
  return categorias;
};

const addCategoria = (categoria) => {
  const nuevaCategoria = {
    id: categorias.length > 0 ? categorias[categorias.length - 1].id + 1 : 1,
    nombre: categoria.nombre,
    limite: categoria.limite
  };
  categorias.push(nuevaCategoria);
  return nuevaCategoria;
};

module.exports = {
  getCategorias,
  addCategoria
};