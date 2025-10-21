// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

  // === GSAP ANIMACIONES ===
  gsap.registerPlugin(ScrollTrigger);

  // Animaciones de entrada en la sección hero
  gsap.to(".hero h1", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.to(".hero p", {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
  });

  // Efecto de apilado al hacer scroll
  ScrollTrigger.create({
    trigger: ".hero",
    start: "top top",
    end: "10% top",
    pin: true,
    pinSpacing: true,
    scrub: true
  });

  // === FUNCIONALIDAD DE CALENDARIO ===
  const days = document.querySelectorAll('.day');
  const modal = document.getElementById('letter-modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');

  const cartas = {
    1: 'cartas/carta1.jpg',
    2: 'cartas/carta2.jpg',
    3: 'cartas/carta3.jpg',
    4: 'cartas/carta4.jpg',
    5: 'cartas/carta5.jpg',
    6: 'cartas/carta6.jpg',
    7: 'cartas/carta7.jpg',
    8: 'cartas/carta8.jpg',
    9: 'cartas/carta9.jpg',
    10: 'cartas/carta10.jpg',
    11: 'cartas/carta11.jpg',
    12: 'cartas/carta12.jpg',
    13: 'cartas/carta13.jpg',
    14: 'cartas/carta14.jpg',
    15: 'cartas/carta15.jpg',
    16: 'cartas/carta16.jpg',
    17: 'cartas/carta17.jpg',
    18: 'cartas/carta18.jpg',
    19: 'cartas/carta19.jpg',
    20: 'cartas/carta20.jpg',
    21: 'cartas/carta21.jpg',
  };

  // Asignar eventos de clic a cada día
  days.forEach(day => {
    day.addEventListener('click', () => {
      const numero = parseInt(day.textContent.trim());
      if (cartas[numero]) {
        modalImage.src = cartas[numero];
        modal.style.display = 'block';
      } else {
        alert(`No hay carta disponible para el día ${numero}.`);
      }
    });
  });

  // Cerrar modal al presionar la X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // === ANIMACIONES DE SECCIÓN VIDEO ===
  gsap.from(".video-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 80%",
    }
  });

  gsap.from(".video-subtitle", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 80%",
    }
  });

  gsap.from(".video-player", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 80%",
    }
  });

  // ==== CALIFICACIÓN DE SOLES ====
  const suns = document.querySelectorAll('.sun');

  // Recuperar calificación guardada
  const savedRating = localStorage.getItem('sunRating');
  if (savedRating) {
    highlightSuns(parseInt(savedRating));
  }

  suns.forEach(sun => {
    sun.addEventListener('click', () => {
      const value = parseInt(sun.getAttribute('data-value'));
      
      // Guarda la calificación
      localStorage.setItem('sunRating', value);

      // Muestra visualmente los soles activos
      highlightSuns(value);
    });
  });

  // Función para iluminar los soles seleccionados
  function highlightSuns(value) {
    suns.forEach((s, i) => {
      s.classList.toggle('active', i < value);

      if (i < value) {
        s.classList.add('shine');
        setTimeout(() => s.classList.remove('shine'), 600);
      }
    });
  }

});
