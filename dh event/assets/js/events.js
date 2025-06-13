// events.js - Gestion centralisée des événements

// Liste simulée d'événements avec ID unique
const EVENTS = [
    {
        id: "evt1",
        titre: "Ouverture",
        description: "Discours d'ouverture et présentation de l'événement.",
        heure: "09:00"
    },
    {
        id: "evt2",
        titre: "Atelier Web",
        description: "Atelier interactif sur les technologies web modernes.",
        heure: "10:30"
    },
    {
        id: "evt3",
        titre: "Pause déjeuner",
        description: "Buffet et networking.",
        heure: "12:00"
    },
    {
        id: "evt4",
        titre: "Conférence IA",
        description: "Présentation sur l'intelligence artificielle.",
        heure: "14:00"
    },
    {
        id: "evt5",
        titre: "Clôture",
        description: "Remerciements et clôture de la journée.",
        heure: "17:00"
    }
];

// Affichage dynamique du programme avec bouton "Réserver"
function renderProgramme() {
    const eventList = document.getElementById('event-list');
    if (eventList) {
        eventList.innerHTML = '';
        EVENTS.forEach(ev => {
            const div = document.createElement('div');
            div.className = 'event-item';
            div.innerHTML = `
                <h2>${ev.titre} <span>${ev.heure}</span></h2>
                <p>${ev.description}</p>
                <button class="reserve-btn" data-event-id="${ev.id}">Réserver</button>
            `;
            eventList.appendChild(div);
        });

        // Ajout du listener sur chaque bouton "Réserver"
        document.querySelectorAll('.reserve-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const eventId = this.getAttribute('data-event-id');
                localStorage.setItem('selectedEventId', eventId);
                window.location.href = 'billets.html';
            });
        });
    }
}

// Affichage du nom de l'événement sélectionné sur billets.html
function showSelectedEventOnBillet() {
    const eventName = document.getElementById('selected-event-name');
    const eventIdInput = document.getElementById('event-id');
    if (eventName && eventIdInput) {
        const eventId = localStorage.getItem('selectedEventId');
        const event = EVENTS.find(e => e.id === eventId);
        if (event) {
            eventName.textContent = `Événement sélectionné : ${event.titre} (${event.heure})`;
            eventIdInput.value = event.id;
        } else {
            eventName.textContent = "Aucun événement sélectionné.";
            eventIdInput.value = "";
        }
    }
}

// Gestion du compteur de places restantes (optionnel)
function updateRemainingSeats() {
    const totalSeats = 100;
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    document.getElementById('remaining-seats').textContent = `Places restantes : ${totalSeats - reservations.length}`;
}

// Initialisation selon la page
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('event-list')) {
        renderProgramme();
    }
    if (document.getElementById('selected-event-name')) {
        showSelectedEventOnBillet();
        updateRemainingSeats();
    }
});