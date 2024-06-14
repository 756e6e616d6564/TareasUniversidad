function scrollToSection(selector, duration, offset) {
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

