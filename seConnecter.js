document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Récupérer les données utilisateur du stockage local
        var storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            var userData = JSON.parse(storedUserData);

            // Vérifier les informations de connexion
            if (email === userData.email && password === userData.password) {
                // Informations de connexion correctes, stockez le rôle de l'utilisateur dans une variable locale
                var userRole = userData.role;
                
                // Rediriger en fonction du rôle de l'utilisateur
                if (userRole === 'employés') {
                    window.location.href = "homeConnecté.html"; // Rediriger vers l'accueil des employés
                } else {
                    window.location.href = "home.html"; // Rediriger vers l'accueil standard
                }
            } else {
                alert("Adresse Email ou Mot de Passe incorrect");
            }
        } else {
            alert("Aucun compte enregistré. Veuillez créer un compte d'abord.");
        }
    });
});
