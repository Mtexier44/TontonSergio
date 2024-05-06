document.addEventListener('DOMContentLoaded', function() {
    var userData = localStorage.getItem('userData');
    if (userData) {
        var userRole = JSON.parse(userData).role;
        if (userRole === 'employé') {
            document.getElementById('boutonEmploye').style.display = 'block';
        }
    }
});
