document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les données utilisateur du stockage local
    var userData = JSON.parse(localStorage.getItem('userData'));

    // Remplir les champs du formulaire avec les données utilisateur actuelles
    document.getElementById('firstName').value = userData.firstName;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;
    document.getElementById('password').value = userData.password;

    // Ajouter un écouteur d'événements pour la soumission du formulaire
    document.getElementById('editProfileForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        var newFirstName = document.getElementById('firstName').value;
        var newEmail = document.getElementById('email').value;
        var newPhone = document.getElementById('phone').value;
        var newPassword = document.getElementById('password').value;

        // Récupérer le chemin de l'avatar sélectionné
        var selectedAvatar = document.getElementById('avatar').value;

        // Mettre à jour les données utilisateur dans le stockage local
        userData.firstName = newFirstName;
        userData.email = newEmail;
        userData.phone = newPhone;
        userData.password = newPassword;
        userData.avatar = selectedAvatar; // Enregistrer le chemin de l'avatar
        localStorage.setItem('userData', JSON.stringify(userData));

        // Rediriger vers la page de profil
        window.location.href = "profil.html";
    });

    // Sélection de l'élément de la liste déroulante pour l'avatar
    var avatarSelect = document.getElementById('avatar');

    // Écouteur d'événements pour le changement de sélection de l'avatar
    avatarSelect.addEventListener('change', function() {
        // Récupérer la valeur sélectionnée (le nom du fichier de l'avatar)
        var selectedAvatar = this.value;

        // Mise à jour de l'élément img avec le chemin de l'avatar sélectionné
        document.getElementById('avatarPreview').src = selectedAvatar;
    });
});
