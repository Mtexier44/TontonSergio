document.addEventListener("DOMContentLoaded", function() {
    const monthHeader = document.querySelector(".month-header");
    const weekdaysContainer = document.querySelector(".weekdays");
    const daysContainer = document.querySelector(".days");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("close-popup");
    const closePopupButton = document.getElementById("close-popup-btn");
    const popupDate = document.getElementById("popup-date");
    const timeOptions = document.getElementById("time-options");

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Create an array of month names
    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    // Set month header
    monthHeader.textContent = monthNames[currentMonth] + " " + currentYear;

    // Set weekdays
    const weekdays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    weekdays.forEach(function(day) {
        const weekdayElement = document.createElement("div");
        weekdayElement.textContent = day;
        weekdayElement.classList.add("day");
        weekdaysContainer.appendChild(weekdayElement);
    });

    // Function to show the popup with available and booked times
    function showPopup(date) {
        popupDate.textContent = date;

        // Clear previous time options
        timeOptions.innerHTML = "";

        // Add time options
        const timeSlots = {
            "Midi": ["11h30", "12h", "12h30", "13h", "13h30"],
            "Soir": ["19h", "19h30", "20h", "20h30", "21h", "21h30"]
        };

        for (const period in timeSlots) {
            const periodHeader = document.createElement("h3");
            periodHeader.textContent = period;
            timeOptions.appendChild(periodHeader);

            timeSlots[period].forEach(function(time) {
                const timeButton = document.createElement("button");
                timeButton.textContent = time;
                timeButton.classList.add("time-option");
                timeButton.addEventListener("click", function() {
                    const selectedTime = this.textContent;
                    alert("Vous avez sélectionné le " + date + " à " + selectedTime);
                    hidePopup();
                });
                timeOptions.appendChild(timeButton);
            });
        }

        popup.style.display = "block";
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = "none";
    }

    // Event listener for closing the popup using the close button
    closePopupBtn.addEventListener("click", hidePopup);

    // Event listener for closing the popup using the close button inside the popup
    closePopupButton.addEventListener("click", hidePopup);

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    let startingDay = firstDayOfMonth.getDay();

    if (currentMonth === 4) { // Mai commence un mercredi
        startingDay = 3; // 3 représente le Mercredi (0 pour Dimanche, 1 pour Lundi, ..., 6 pour Samedi)
    }

    // Get the number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create the calendar days
    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            const dayElement = document.createElement("div");
            if (i === 0 && j < startingDay) {
                dayElement.classList.add("day-item", "placeholder");
            } else if (dayCount > daysInMonth) {
                dayElement.classList.add("day-item", "placeholder");
            } else {
                dayElement.textContent = dayCount;
                dayElement.classList.add("day-item");
                dayElement.addEventListener("click", function() {
                    const clickedDate = new Date(currentYear, currentMonth, dayCount);
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    const dateString = clickedDate.toLocaleDateString("fr-FR", options);
                    showPopup(dateString);
                });
                dayCount++;
            }
            daysContainer.appendChild(dayElement);
        }
    }

    // Mouse hover effect on calendar days
    const calendarDays = document.querySelectorAll(".day-item");
    calendarDays.forEach(day => {
        day.addEventListener("mouseover", function() {
            this.style.backgroundColor = "lightgray";
        });
        day.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
        });
    });
});
