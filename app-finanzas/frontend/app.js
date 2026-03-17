const API_URL = 'http://localhost:3000/categorias';

// 1. Cargar las categorías nada más abrir la página
document.addEventListener('DOMContentLoaded', obtenerCategorias);

// 2. Escuchar cuando el usuario hace click en "Guardar"
document.getElementById('categoriaForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const nombre = document.getElementById('nombre').value;
  const limite = document.getElementById('limite').value;

  // Hacer la petición POST
  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, limite })
    });

    if(respuesta.ok) {
      // Limpiar el formulario
      document.getElementById('categoriaForm').reset();
      
      // Volver a cargar la lista para que aparezca la nueva
      obtenerCategorias();
    } else {
      alert("Error al guardar la categoría");
    }

  } catch (error) {
    console.error("Error de conexión:", error);
    alert("Hubo un problema contactando con el servidor");
  }
});

// Función para pedirle el GET al servidor y pintar la lista
async function obtenerCategorias() {
  try {
    const respuesta = await fetch(API_URL);
    const categorias = await respuesta.json();
    
    // Buscar la lista en el HTML
    const listaHtml = document.getElementById('listaCategorias');
    listaHtml.innerHTML = ''; // Limpiar lista actual
    
    if (categorias.length === 0) {
      listaHtml.innerHTML = '<p style="color:#777;">Todavía no has creado ninguna categoría.</p>';
      return;
    }

    // Dibujar cada categoría recibida
    categorias.forEach(cat => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="cat-nombre">${cat.nombre}</span>
        <span class="cat-limite">${cat.limite} %</span>
      `;
      listaHtml.appendChild(li);
    });

  } catch (error) {
    console.error("Error obteniendo categorías:", error);
  }
}

// 3. Cerrar sesión
const btnCerrarSesion = document.getElementById('btnCerrarSesion');
if (btnCerrarSesion) {
  btnCerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'log_in/index.html';
  });
}
