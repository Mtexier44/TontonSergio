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
  
    document.getElementById('registerForm').reset();
  });
  