document.addEventListener('DOMContentLoaded', function () {
    const months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

    const calendarDiv = document.querySelector('.calendar');
    const monthDiv = document.querySelector('.month');
    const prevMonthBtn = document.querySelector('.prev-month');
    const nextMonthBtn = document.querySelector('.next-month');
    const currentMonthDiv = document.querySelector('.current-month');
    const popup = document.querySelector('.popup');

    let currentMonth = new Date().getMonth();

    // Fonction pour mettre à jour le calendrier
    function updateCalendar(monthIndex) {
        monthDiv.innerHTML = ''; // Efface le contenu précédent

        const daysDiv = document.createElement('div');
        daysDiv.classList.add('days');

        const firstDay = new Date(new Date().getFullYear(), monthIndex, 1);
        const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0);
        const daysInMonth = lastDay.getDate();

        // Ajoute les noms des jours de la semaine
        for (let j = 0; j < 7; j++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = daysOfWeek[j];
            daysDiv.appendChild(dayDiv);
        }

        // Ajoute les jours vides pour aligner les jours correctement
        for (let k = 0; k < firstDay.getDay(); k++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('day');
            daysDiv.appendChild(emptyDiv);
        }

        // Ajoute les jours du mois
        for (let l = 1; l <= daysInMonth; l++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = l;
            const month = monthIndex;
            // Ajoute un événement click pour afficher la popup
            dayDiv.addEventListener('click', function (event) {
                showPopup(event, l, month);
            });
            daysDiv.appendChild(dayDiv);
        }

        monthDiv.appendChild(daysDiv); // Ajoute les jours au mois
        currentMonthDiv.textContent = months[monthIndex]; // Affiche le mois actuel
    }

    updateCalendar(currentMonth); // Affiche le calendrier du mois actuel

    // Gestion du clic sur le bouton du mois précédent
    prevMonthBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) currentMonth = 11; // Si c'est janvier, passe à décembre
        updateCalendar(currentMonth);
    });

    // Gestion du clic sur le bouton du mois suivant
    nextMonthBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) currentMonth = 0; // Si c'est décembre, passe à janvier
        updateCalendar(currentMonth);
    });

    // Fonction pour afficher la popup avec les options de réservation
    function showPopup(event, day, month) {
        const selectedDate = new Date(new Date().getFullYear(), month, day);
        const selectedDateString = `${daysOfWeek[selectedDate.getDay()]} ${day} ${months[month]}`;

        const popupTitle = document.createElement('div');
        popupTitle.classList.add('popup-title');
        popupTitle.textContent = `${selectedDateString}`;
        popup.innerHTML = ''; // Efface le contenu précédent de la popup
        popup.appendChild(popupTitle);

        const closePopupButton = document.createElement('div');
        closePopupButton.classList.add('close-popup');
        closePopupButton.textContent = 'X';
        popup.appendChild(closePopupButton);

        // Ajoute les options de réservation pour le midi
        const midiSection = document.createElement('div');
        midiSection.innerHTML = `
            <h3>MIDI :</h3>
            <button class="midi-button" data-time="12h00">12h00</button>
            <button class="midi-button" data-time="12h30">12h30</button>
            <button class="midi-button" data-time="13h00">13h00</button>
            <button class="midi-button" data-time="13h30">13h30</button>
        `;
        popup.appendChild(midiSection);

        // Ajoute les options de réservation pour le soir
        const soirSection = document.createElement('div');
        soirSection.innerHTML = `
            <h3>SOIR :</h3>
            <button class="soir-button" data-time="19h00">19h00</button>
            <button class="soir-button" data-time="19h30">19h30</button>
            <button class="soir-button" data-time="20h00">20h00</button>
            <button class="soir-button" data-time="20h30">20h30</button>
            <button class="soir-button" data-time="21h00">21h00</button>
            <button class="soir-button" data-time="21h30">21h30</button>
        `;
        popup.appendChild(soirSection);

        // Gestion de la fermeture de la popup
        closePopupButton.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        // Gestion du clic sur les boutons de réservation MIDI
        const midiButtons = popup.querySelectorAll('.midi-button');
        midiButtons.forEach(button => {
            button.addEventListener('click', function() {
                const time = button.getAttribute('data-time');
                window.open(`reservation2.html?date=${selectedDateString}&time=${time}`, '_blank');
            });
        });

        // Gestion du clic sur les boutons de réservation SOIR
        const soirButtons = popup.querySelectorAll('.soir-button');
        soirButtons.forEach(button => {
            button.addEventListener('click', function() {
                const time = button.getAttribute('data-time');
                window.open(`reservation2.html?date=${selectedDateString}&time=${time}`, '_blank');
            });
        });

        // Positionnement de la popup par rapport à la position du calendrier
        const popupWidth = popup.offsetWidth; // Largeur de la popup
        const popupHeight = popup.offsetHeight; // Hauteur de la popup
        const tableRect = calendarDiv.getBoundingClientRect(); // Rectangle du calendrier

        // Position verticale
        let topPos = tableRect.top + (tableRect.height - popupHeight) / 2;
        if (topPos < 0) topPos = 0; // Assurer que la popup ne dépasse pas le haut de la fenêtre
        else if (topPos + popupHeight > window.innerHeight) topPos = window.innerHeight - popupHeight; // Assurer que la popup ne dépasse pas le bas de la fenêtre

        // Position horizontale
        let leftPos = tableRect.left - popupWidth - 10;
        if (leftPos < 0) leftPos = 10; // Assurer que la popup ne dépasse pas le bord gauche de la fenêtre

        // Définit la position de la popup
        popup.style.top = `${topPos}px`;
        popup.style.left = `${leftPos}px`;
        popup.style.display = 'block'; // Affiche la popup
    }
});
