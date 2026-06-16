  const largo = 60;
  const buscador = document.getElementById('buscador');
  const cards = document.querySelectorAll('.card');

  buscador.addEventListener('input', function() {
    const textoBusqueda = this.value.toLowerCase();
    
    cards.forEach(card => {
      const nombrePez = card.querySelector('h2').textContent.toLowerCase();
      if (nombrePez.includes(textoBusqueda)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
  function truncarTexto(texto, largo) {
    return texto.slice(0, largo) + '...';
  }
  
  window.addEventListener("DOMContentLoaded", () => {
  const txt = document.querySelectorAll(".rec");
  
  txt.forEach(parrafo => {
    parrafo.dataset.original = parrafo.textContent.trim();
    
    parrafo.textContent = truncarTexto(parrafo.dataset.original, largo);
    
    const card = parrafo.closest('.card');
    if (!card) return;
    
    card.addEventListener('mouseenter', () => {
      parrafo.textContent = parrafo.dataset.original;
    });
    
    card.addEventListener('mouseleave', () => {
      parrafo.textContent = truncarTexto(parrafo.dataset.original, largo);
    });
  });
});

  // MENU HAMBURGUESA RESPONSIVE
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Cerrar menú al hacer click en un enlace
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    }
  });