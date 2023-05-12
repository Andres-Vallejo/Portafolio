// script.js

// Cambiar el color de fondo del header al hacer scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.style.backgroundColor = '#333';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
  
  // Agregar animación suave al hacer clic en los enlaces de navegación
  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
  
      var targetSection = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  