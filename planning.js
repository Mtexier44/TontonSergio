document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('reservationForm');
    const planningDiv = document.getElementById('planning');
    let reservations = createInitialPlanning();
  
    // Création du planning initial
    function createInitialPlanning() {
      const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
      const creneaux = ['midi', 'soir'];
      const initialPlanning = {};
  
      jours.forEach(jour => {
        initialPlanning[jour] = {
          midi: [],
          soir: []
        };
      });
  
      return initialPlanning;
    }
  
    // Affichage du planning
    function displayPlanning() {
      planningDiv.innerHTML = '';
  
      const table = document.createElement('table');
      const thead = table.createTHead();
      const tbody = table.createTBody();
  
      // Création des en-têtes de colonnes
      const headerRow = thead.insertRow();
      headerRow.insertCell();
      const jours = Object.keys(reservations);
      jours.forEach(jour => {
        const th = document.createElement('th');
        th.textContent = jour;
        headerRow.appendChild(th);
      });
  
      // Remplissage du tableau avec les réservations
      const creneaux = ['midi', 'soir'];
      creneaux.forEach(creneau => {
        const row = tbody.insertRow();
        const cell = row.insertCell();
        cell.textContent = creneau.charAt(0).toUpperCase() + creneau.slice(1);
  
        jours.forEach(jour => {
          const reservationsForSlot = reservations[jour][creneau];
          const cell = row.insertCell();
  
          // Création d'une liste pour les réservations
          const ul = document.createElement('ul');
          ul.classList.add('reservation'); // Ajout de la classe pour le centrage
  
          // Ajout de chaque réservation à la liste
          reservationsForSlot.forEach(reservation => {
            const li = document.createElement('li');
            li.textContent = `${reservation.nom} ${reservation.prenom} (${reservation.nbPersonnes} pers à ${reservation.heure})`;
            li.style.color = 'white';
            li.style.backgroundColor = 'red';
            ul.appendChild(li);
          });
  
          // Ajout de la liste de réservations à la cellule
          cell.appendChild(ul);
        });
      });
  
      planningDiv.appendChild(table);
    }
    displayPlanning();
  
    // Gestion de la soumission du formulaire de réservation
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const jour = form.jour.value;
      const creneau = form.creneau.value;
      const heure = form.heure.value;
      const nbPersonnes = parseInt(form.nbPersonnes.value);
      const nom = form.nom.value;
      const prenom = form.prenom.value;
  
      // Vérifier si l'heure de la réservation est valide
      if (!isReservationHourValid(creneau, heure)) {
        alert(`La réservation ne peut pas être effectuée pour ${creneau} le ${jour} à ${heure}.`);
        return;
      }
  
      // Vérifier si le nombre total de réservations dépasse 45
      const totalReservationsForSlot = getTotalReservationsForSlot(jour, creneau);
      const totalReservationsAfterAddition = totalReservationsForSlot + nbPersonnes;
      if (totalReservationsAfterAddition > 45) {
        alert(`Il ne reste que ${45 - totalReservationsForSlot} places disponibles pour ${creneau} le ${jour}.`);
        return;
      }
  
      // Ajout de la réservation au planning
      reservations[jour][creneau].push({ nom, prenom, nbPersonnes, heure });
  
      // Réaffichage du planning avec les nouvelles réservations
      displayPlanning();
  
      // Réinitialisation du formulaire
      form.reset();
    });
  
    // Calcul du nombre total de personnes réservées pour un créneau donné
    function getTotalReservationsForSlot(jour, creneau) {
      const reservationsForSlot = reservations[jour][creneau];
      let totalReservations = 0;
      reservationsForSlot.forEach(reservation => {
        totalReservations += parseInt(reservation.nbPersonnes);
      });
      return totalReservations;
    }
  
    // Vérification si l'heure de réservation est valide
    function isReservationHourValid(creneau, heure) {
      heure = heure.split(':').map(num => parseInt(num));
      if (creneau === 'midi' && (heure[0] < 12 || heure[0] >= 14 || (heure[0] === 14 && heure[1] > 30))) {
        return false;
      }
      if (creneau === 'soir' && (heure[0] < 19 || heure[0] >= 21 || (heure[0] === 21 && heure[1] > 30))) {
        return false;
      }
      return true;
    }
  });
  