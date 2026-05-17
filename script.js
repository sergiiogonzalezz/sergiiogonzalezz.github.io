// script.js

document.addEventListener("DOMContentLoaded", () => {

  // Animación suave al cargar
  const cards = document.querySelectorAll(".card, .gallery img, .album");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }

    });

  }, {
    threshold:0.15
  });

  cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
  });

});