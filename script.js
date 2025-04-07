// script.js
// Aquí puedes añadir interacciones si deseas

// Ejemplo: animación al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
      }
    });
  });
  