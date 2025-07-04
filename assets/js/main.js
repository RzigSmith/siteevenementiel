// Gestion du formulaire
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Réservation envoyée !');  // À remplacer par un appel API ou stockage local
});

// Animation au scroll (optionnel)
// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     header.style.background = window.scrollY > 100 ? '#222' : '#333';
// });

// Exemple dans main.js
const form = document.getElementById('reservation-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());
    localStorage.setItem('reservation', JSON.stringify(entries));
});