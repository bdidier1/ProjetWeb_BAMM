// Sélectionne la navbar
const navbar = document.getElementById("nav");

// Ajoute un événement qui s'exécute quand on défile
window.addEventListener("scroll", function() {
    // Vérifie si la position de défilement dépasse 50 pixels
    if (window.scrollY > 50) {
        // Ajoute une classe pour changer le style
        navbar.classList.add("scrolled");
    } else {
        // Retire la classe si on est revenu en haut de la page
        navbar.classList.remove("scrolled");
    }
});

// Sélectionne le menu burger et la liste de navigation
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Ajoute un événement au clic sur le menu burger
mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active"); // Ajoute ou retire la classe active
});

const carousel = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}


// Variable pour le compteur
let itemCount = 0;
const counterElement = document.getElementById('item-count');

// Fonction pour mettre à jour le compteur
function updateCounter() {
    itemCount += 1;
    counterElement.textContent = itemCount;
    counterElement.style.display = 'inline'; // Affiche le compteur
}

// Ajout d'un gestionnaire d'événements au bouton "Acheter"
const buyButtons = document.querySelectorAll('.buy-now-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', updateCounter);
});

// Initialisation du compteur
if (itemCount > 0) {
    counterElement.textContent = itemCount;
    counterElement.style.display = 'inline'; // Affiche le compteur
} else {
    counterElement.style.display = 'none'; // Cache le compteur
}