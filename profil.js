document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les données utilisateur du stockage local
    var userData = JSON.parse(localStorage.getItem('userData'));

    // Vérifier si des données utilisateur sont disponibles
    if (userData) {
        // Remplir les champs de profil avec les données utilisateur
        document.getElementById('userName').textContent = userData.firstName + ' ' + userData.lastName;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('userPhone').textContent = userData.phone;
        document.getElementById('userPassword').textContent = '*********'; // Vous ne devriez pas afficher le mot de passe réel dans le profil
        
        // Charger l'avatar de l'utilisateur
        document.getElementById('avatarPreview').src = userData.avatar; // Mettre à jour l'avatar avec celui sélectionné
    } else {
        // Gérer le cas où aucune donnée utilisateur n'est disponible
        console.log("Aucune donnée utilisateur disponible.");
    }
});
