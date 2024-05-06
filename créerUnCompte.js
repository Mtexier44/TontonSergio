document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var accountType = document.getElementById('accountType').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var confirmationCode = document.getElementById('confirmationCode').value;

  if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
  }

  console.log("Type de Compte:", accountType);
  console.log("Prénom:", firstName);
  console.log("Nom:", lastName);
  console.log("Adresse Email:", email);
  console.log("Numéro de Téléphone:", phone);
  console.log("Mot de Passe:", password);

  // Stocker les informations dans le stockage local
  var userData = {
      accountType: accountType,
      firstName: firstName,
      lastName: lastName,
      email: email,
      document.getElementById('registerForm').addEventListener('submit', function(event)) {
        event.preventDefault();
  
        var accountType = document.getElementById('accountType').value;
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var confirmationCode = document.getElementById('confirmationCode').value;
    
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }
    
        console.log("Type de Compte:", accountType);  
        console.log("Prénom:", firstName);
        console.log("Nom:", lastName);
        console.log("Adresse Email:", email);
        console.log("Numéro de Téléphone:", phone);
        console.log("Mot de Passe:", password);
    
        // Stocker les informations dans le stockage local
        var userData = {
            accountType: accountType,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password,
            role: accountType === 'employé' ? 'employé' : 'client' // Ajoutez cette ligne pour déterminer le rôle
        };
    
        localStorage.setItem('userData', JSON.stringify(userData));
    
        document.getElementById('registerForm').reset();
    
        // Rediriger vers la page de connexion
        window.location.href = "seConnecter.html";
    
        if (accountType === "employé") {
            // Vérifiez le code de confirmation
            if (confirmationCode === "tonton sergio") { // Remplacez "code_de_confirmation_employé" par le code réel
                // Code de confirmation correct, créez le compte employé
                alert("Compte employé créé avec succès !");
                // Réinitialisez le formulaire après la création du compte
                document.getElementById('registerForm').reset();
            } else {
                // Code de confirmation incorrect, affichez un message d'erreur
                alert("Code de confirmation incorrect. Veuillez contacter le personnel du restaurant.");
            }
        } else {
            // Ajoutez ici la logique pour les autres types de compte
            // Par exemple, envoyez les données à un serveur pour traitement
            // et redirigez vers une page de confirmation
            alert("Compte créé avec succès !");
            // Réinitialisez le formulaire après la soumission
            document.getElementById('registerForm').reset();
        }
  }}});
