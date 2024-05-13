document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    const summaryPopup = document.getElementById('summary-popup');
    const closeButton = document.getElementById('close-popup');

    loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Récupérer les données utilisateur du stockage local
        var storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            var userData = JSON.parse(storedUserData);

            // Vérifier les informations de connexion
            if (username === userData.username && password === userData.password) {
                const name = document.getElementById('name').value;
                const numberOfPeople = document.getElementById('number-of-people').value;

                // Vérifier si toutes les informations de la réservation sont remplies et correctes
                if (name && numberOfPeople > 0) {
                    // Afficher le résumé dans le popup
                    document.getElementById('summary-date').textContent = `${date} à ${time}`;
                    document.getElementById('summary-name').textContent = name;
                    document.getElementById('summary-people').textContent = numberOfPeople;

                    // Afficher le popup
                    summaryPopup.style.display = 'block';
                } else {
                    alert("Veuillez remplir toutes les informations de la réservation.");
                }
            } else {
                alert("Nom d'utilisateur ou Mot de Passe incorrect");
            }
        } else {
            alert("Aucun compte enregistré. Veuillez créer un compte d'abord.");
        }
    });

    closeButton.addEventListener('click', function() {
        summaryPopup.style.display = 'none';
    });
});

const urlParams = new URLSearchParams(window.location.search);
const date = urlParams.get('date');
const time = urlParams.get('time');

document.getElementById('reservation-title').textContent = `Réservation du ${date} à ${time}`;
