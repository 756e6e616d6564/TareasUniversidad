function scrollToSection(selector, duration, offset) { // selector = '#id', duration = 1000, offset = 0
    const element = document.querySelector(selector);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset + (offset || 0);
      window.scrollTo({
        top: topPos, 
        behavior: 'smooth'
      });
    }
  };



  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav li a');
  
    function updateNavLinks() {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3) && pageYOffset < (sectionTop + sectionHeight - sectionHeight / 3)) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        // Quita active de todos los enlaces
        link.classList.remove('active');
        const sectionId = link.getAttribute('onclick').match(/'#(.*?)'/)[1];

        if (sectionId === currentSection) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', updateNavLinks);
    updateNavLinks(); // Llama a la función inicialmente para establecer el estado activo correcto al cargar la página
  });

// EXPERIMENTAAAL!






// Reproducción inicial del video en un punto específico
document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video'); 
  video.addEventListener('loadedmetadata', function() {
    this.currentTime = this.duration * 0.25; // inicio del video 0.X * 100 == x% de la duración del video
  });
});


// Estructura para almacenar los productos seleccionados
let carroDeCompras = [];

// Función para añadir un producto al carro
function añadirProducto(id, nombre, precio) {
  const productoExistente = carroDeCompras.find(producto => producto.id === id);
  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carroDeCompras.push({ id, nombre, precio, cantidad: 1 });
  }
}

// Función para remover un producto del carro
function removerProducto(id) {
  carroDeCompras = carroDeCompras.filter(producto => producto.id !== id);
}

// Función para actualizar la cantidad de un producto en el carro
function actualizarCantidad(id, cantidad) {
  const producto = carroDeCompras.find(producto => producto.id === id);
  if (producto) {
    producto.cantidad = cantidad;
  }
}

// Función para calcular el total del carro
function calcularTotal() {
  return carroDeCompras.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

// Función para mostrar el carro
function mostrarCarro() {
  carroDeCompras.forEach(producto => {
    console.log(`${producto.nombre} - ${producto.cantidad} unidad(es): $${producto.precio * producto.cantidad}`);
  });
  console.log(`Total a pagar: $${calcularTotal()}`);
}

// Ejemplo de uso
añadirProducto(1, 'Manzana', 0.5);
añadirProducto(2, 'Pan', 1.5);
añadirProducto(1, 'Manzana', 0.5); // Añade otra manzana
mostrarCarro();

