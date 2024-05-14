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

    function updateCalendar(monthIndex) {
        monthDiv.innerHTML = '';

        const daysDiv = document.createElement('div');
        daysDiv.classList.add('days');

        const firstDay = new Date(new Date().getFullYear(), monthIndex, 1);
        const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0);
        const daysInMonth = lastDay.getDate();

        for (let j = 0; j < 7; j++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = daysOfWeek[j];
            daysDiv.appendChild(dayDiv);
        }

        for (let k = 0; k < firstDay.getDay(); k++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('day');
            daysDiv.appendChild(emptyDiv);
        }

        for (let l = 1; l <= daysInMonth; l++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = l;
            const month = monthIndex;
            dayDiv.addEventListener('click', function (event) {
                showPopup(event, l, month);
            });
            daysDiv.appendChild(dayDiv);
        }

        monthDiv.appendChild(daysDiv);
        currentMonthDiv.textContent = months[monthIndex];
    }

    updateCalendar(currentMonth);

    prevMonthBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) currentMonth = 11;
        updateCalendar(currentMonth);
    });

    nextMonthBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) currentMonth = 0;
        updateCalendar(currentMonth);
    });

    function showPopup(event, day, month) {
        const selectedDate = new Date(new Date().getFullYear(), month, day);
        const selectedDateString = `${daysOfWeek[selectedDate.getDay()]} ${day} ${months[month]}`;

        const popupTitle = document.createElement('div');
        popupTitle.classList.add('popup-title');
        popupTitle.textContent = `${selectedDateString}`;
        popup.innerHTML = '';
        popup.appendChild(popupTitle);

        const closePopupButton = document.createElement('div');
        closePopupButton.classList.add('close-popup');
        closePopupButton.textContent = 'X';
        popup.appendChild(closePopupButton);

        const midiSection = document.createElement('div');
        midiSection.innerHTML = `
            <h3>MIDI :</h3>
            <button class="midi-button" data-time="12h00">12h00</button>
            <button class="midi-button" data-time="12h30">12h30</button>
            <button class="midi-button" data-time="13h00">13h00</button>
            <button class="midi-button" data-time="13h30">13h30</button>
        `;
        popup.appendChild(midiSection);

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

        closePopupButton.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        // Ajout d'un gestionnaire de clic pour chaque bouton MIDI
        const midiButtons = popup.querySelectorAll('.midi-button');
        midiButtons.forEach(button => {
            button.addEventListener('click', function() {
                const time = button.getAttribute('data-time');
                window.open(`reservation2.html?date=${selectedDateString}&time=${time}`, '_blank');
            });
        });

        // Ajout d'un gestionnaire de clic pour chaque bouton SOIR
        const soirButtons = popup.querySelectorAll('.soir-button');
        soirButtons.forEach(button => {
            button.addEventListener('click', function() {
                const time = button.getAttribute('data-time');
                window.open(`reservation2.html?date=${selectedDateString}&time=${time}`, '_blank');
            });
        });

        const popupWidth = popup.offsetWidth; // Largeur du popup
        const popupHeight = popup.offsetHeight; // Hauteur du popup
        const tableRect = calendarDiv.getBoundingClientRect(); // Rectangle du tableau

        // Position verticale
        let topPos = tableRect.top + (tableRect.height - popupHeight) / 2;
        if (topPos < 0) topPos = 0; // Assurer que le popup ne dépasse pas le haut de la fenêtre
        else if (topPos + popupHeight > window.innerHeight) topPos = window.innerHeight - popupHeight; // Assurer que le popup ne dépasse pas le bas de la fenêtre

        // Position horizontale
        let leftPos = tableRect.left - popupWidth - 10;
        if (leftPos < 0) leftPos = 10; // Assurer que le popup ne dépasse pas le bord gauche de la fenêtre

        popup.style.top = `${topPos}px`;
        popup.style.left = `${leftPos}px`;
        popup.style.display = 'block';
    }
});
