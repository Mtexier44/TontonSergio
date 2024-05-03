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

    const popup = document.createElement('div');
    popup.classList.add('popup');
    document.body.appendChild(popup);

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
        const popupTitle = document.createElement('div');
        popupTitle.classList.add('popup-title');
        popupTitle.textContent = `${daysOfWeek[new Date(new Date().getFullYear(), month, day).getDay()]} ${day} ${months[month]}`;
        popup.innerHTML = '';
        popup.appendChild(popupTitle);
    
        const closePopupButton = document.createElement('div');
        closePopupButton.classList.add('close-popup');
        closePopupButton.textContent = 'X';
        popup.appendChild(closePopupButton);
    
        const midiSection = document.createElement('div');
        midiSection.innerHTML = `
            <h3>MIDI :</h3>
            <button>12h00</button>
            <button>12h30</button>
            <button>13h00</button>
            <button>13h30</button>
        `;
        popup.appendChild(midiSection);
    
        const soirSection = document.createElement('div');
        soirSection.innerHTML = `
            <h3>SOIR :</h3>
            <button>19h00</button>
            <button>19h30</button>
            <button>20h00</button>
            <button>20h30</button>
            <button>21h00</button>
            <button>21h30</button>
        `;
        popup.appendChild(soirSection);
    
        closePopupButton.addEventListener('click', function () {
            popup.style.display = 'none';
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
    document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuContent = document.querySelector('.menu-content');
    const menuOverlay = document.querySelector('.menu-overlay');

    menuIcon.addEventListener('click', function () {
        menuContent.classList.toggle('menu-open');
        menuOverlay.style.display = 'block';
    });

    menuOverlay.addEventListener('click', function () {
        menuContent.classList.remove('menu-open');
        menuOverlay.style.display = 'none';
    });
});
});
