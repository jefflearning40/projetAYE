document.querySelector("form").addEventListener("submit", function (e) {
    let isValid = true;

    // Réinitialiser tous les messages d'erreur
    document.querySelectorAll(".error").forEach(span => span.textContent = "");
    document.querySelectorAll("input").forEach(input => input.style.border = "");

    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const adresse = document.getElementById("adresse");
    const tel = document.getElementById("tel");
    const email = document.getElementById("email");
    const consentement = document.getElementById("consentement");

    if (nom.value.trim() === "") {
      document.getElementById("error-nom").textContent = "Le nom est requis.";
      nom.style.border = "1px solid red";
      isValid = false;
    }

    if (prenom.value.trim() === "") {
      document.getElementById("error-prenom").textContent = "Le prénom est requis.";
      prenom.style.border = "1px solid red";
      isValid = false;
    }

    if (adresse.value.trim() === "") {
      document.getElementById("error-adresse").textContent = "L'adresse est requise.";
      adresse.style.border = "1px solid red";
      isValid = false;
    }

    if (tel.value.trim() === "" || !/^[0-9]{10}$/.test(tel.value)) {
      document.getElementById("error-tel").textContent = "Téléphone invalide (10 chiffres).";
      tel.style.border = "1px solid red";
      isValid = false;
    }

    if (email.value.trim() === "" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      document.getElementById("error-email").textContent = "Adresse email invalide.";
      email.style.border = "1px solid red";
      isValid = false;
    }

    if (!consentement.checked) {
      document.getElementById("error-consentement").textContent = "Vous devez accepter les termes.";
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // Empêche l'envoi du formulaire
    }
  });