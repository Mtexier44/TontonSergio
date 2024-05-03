document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var accountType = document.getElementById('accountType').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

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
    role: accountType === 'employé' ? 'employé' : 'clients' // Ajoutez cette ligne pour déterminer le rôle
};

  localStorage.setItem('userData', JSON.stringify(userData));

  document.getElementById('registerForm').reset();

  // Rediriger vers la page de connexion
  window.location.href = "seConnecter.html";
});
