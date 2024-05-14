document.addEventListener('DOMContentLoaded', function() {
    const reservationBody = document.getElementById('reservation-body');
    const searchNameInput = document.getElementById('search-name');
    const searchDateInput = document.getElementById('search-date');
    const searchDaySelect = document.getElementById('search-day');
    const searchButton = document.getElementById('search-btn');

    // Charger les réservations et les afficher
    function afficherReservations(reservations) {
        reservationBody.innerHTML = ''; // Effacer le contenu actuel du tableau

        reservations.forEach(function(reservation) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${reservation.username}</td>
                <td>${reservation.name}</td>
                <td>${reservation.numberOfPeople}</td>
                <td>${reservation.date}</td>
                <td>${reservation.time}</td>
            `;
            reservationBody.appendChild(row);
        });
    }

    // Fonction pour rechercher dans les réservations
    searchButton.addEventListener('click', function() {
        var searchName = searchNameInput.value.toLowerCase();
        var searchDate = searchDateInput.value;
        var searchDay = searchDaySelect.value;

        var filteredReservations = reservations.filter(function(reservation) {
            var matchName = reservation.name.toLowerCase().includes(searchName);
            var matchDate = (!searchDate || reservation.date === searchDate);
            var matchDay = (!searchDay || new Date(reservation.date).toLocaleDateString('en-US', { weekday: 'long' }) === searchDay);

            return matchName && matchDate && matchDay;
        });

        afficherReservations(filteredReservations);
    });

    // Afficher toutes les réservations au chargement de la page
    afficherReservations(reservations);
});

