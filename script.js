// script.js - Portfolio Francky - Version Corrigée

/* ===== SCROLL NAVBAR ===== */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== ANIMATIONS AU SCROLL ===== */
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner tous les éléments à animer
  const animatedElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');

  // Observer pour détecter quand les éléments entrent dans le viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Anime une seule fois
      }
    });
  }, { 
    threshold: 0.2, // L'élément doit être visible à 20% pour déclencher l'animation
    rootMargin: '0px 0px -50px 0px' // Déclenche un peu avant que l'élément soit complètement visible
  });

  // Observer tous les éléments
  animatedElements.forEach(element => observer.observe(element));
});

/* ===== VALIDATION FORMULAIRE CONTACT ===== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi automatique

    let isValid = true;

    // Validation Email
    const email = document.getElementById("email");
    const emailError = email.parentElement.querySelector(".error-txt");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {
      emailError.style.display = "block";
      emailError.textContent = "Mail invalide";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validation des autres champs
    ["name", "sujet", "message"].forEach((id) => {
      const input = document.getElementById(id);
      const error = input.parentElement.querySelector(".error-txt");

      if (input.value.trim() === "") {
        error.style.display = "block";
        error.textContent = "Veuillez remplir ce champ";
        isValid = false;
      } else {
        error.style.display = "none";
      }
    });

    // Si tout est valide, envoyer le formulaire
    if (isValid) {
      form.submit();
    }
  });

  // Enlever les erreurs au fur et à mesure que l'utilisateur tape
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      const error = this.parentElement.querySelector('.error-txt');
      if (error && this.value.trim() !== '') {
        error.style.display = 'none';
      }
    });
  });
});

/* ===== SMOOTH SCROLL POUR LES LIENS DE NAVIGATION ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 75; // 75px pour la navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});