function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function validateConnexionForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Vérifier si les champs sont vides
    if (username == "" || password == "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }
    // Vous pouvez ajouter plus de validations ici si nécessaire
    return true;
}

function validateInscriptionForm() {
    var type = document.getElementById("type").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var num = document.getElementById("num").value;
    var mail = document.getElementById("mail").value;
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    // Vérifier si les champs sont vides
    if (type == "" || nom == "" || prenom == "" || num == "" || mail == "" || newUsername == "" || newPassword == "") {
        alert("Veuillez remplir tous les champs.");
        return false;
    }
    // Vous pouvez ajouter plus de validations ici si nécessaire
    return true;
}
