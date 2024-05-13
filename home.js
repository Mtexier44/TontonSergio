document.addEventListener('DOMContentLoaded', function() {
    var userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        // Mettre à jour l'avatar sur la page d'accueil
        document.getElementById('homeAvatar').src = userData.avatar;

        // Afficher le nom de l'utilisateur
        document.getElementById('userName').textContent = userData.firstName;
    }
});

function deconnexion() {
    // Supprimer les données utilisateur du stockage local lors de la déconnexion
    localStorage.removeItem('userData');
    // Rediriger vers la page de connexion
    window.location.href = "connexion.html";
}