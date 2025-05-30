<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Site pour pratiquer l'anglais page formulaire d'inscription" />
  <title>Ace your Exam - Inscription</title>
  <link rel="stylesheet" href="dist/css/theme.css" />
</head>
<body>
  <nav class="navbar" aria-label="Navigation principale">
    <div class="logo">
      <img src="assets/pictures/iconplaces/logoAYE.jpeg" alt="Logo du site" />
    </div>
    <ul class="nav-links">
      <li><a href="index.html">Accueil</a></li>
      <li><a href="#">À propos</a></li>
      <li><a href="formulaire.html">Inscription</a></li>
      <li><a href="login.html">Connexion</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
  <section class="banner" aria-labelledby="banner-title">
    <img src="assets/pictures/bgpicture/bg-banner.jpg" alt="Bannière" class="banner-image" />
    <h1 id="banner-title" class="banner-title">Inscription</h1>
  </section>
  <div class="formulaire">
    <form action="" aria-labelledby="form-title" novalidate>
      <h2 id="form-title">Formulaire d'inscription</h2>
  
      <label for="nom">Nom</label>
      <input type="text" id="nom" name="nom" aria-required="true" />
      <span class="error" id="error-nom"></span>
  
      <label for="prenom">Prénom</label>
      <input type="text" id="prenom" name="prenom" aria-required="true" />
      <span class="error" id="error-prenom"></span>
  
      <label for="adresse">Adresse</label>
      <input type="text" id="adresse" name="adresse" aria-required="true" />
      <span class="error" id="error-adresse"></span>
  
      <label for="tel">Téléphone</label>
      <input type="tel" id="tel" name="tel" aria-required="true" />
      <span class="error" id="error-tel"></span>
  
      <label for="email">Adresse mail</label>
      <input type="email" id="email" name="email" aria-required="true" />
      <span class="error" id="error-email"></span>
  
      <div class="checkbox-container">
        <input type="checkbox" id="consentement" name="consentement" aria-describedby="terms-label" />
        <label id="terms-label" for="consentement">
          <a href="#">J'accepte les termes et conditions</a>
        </label>
        <span class="error" id="error-consentement"></span>
      </div>    
  
      <button type="submit">S'inscrire</button>
    </form>
  </div>
   </div>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Afec Dax.</p>
      <ul class="footer-links">
        <li><a href="#">Politique de confidentialité</a></li>
        <li><a href="#">Conditions d'utilisation</a></li>
        <li><a href="contact.html">Contactez-nous</a></li>
      </ul>
    </div>
  </footer>

  <!-- Popup about -->
  <div id="aboutPopup" class="popup" role="dialog" aria-labelledby="popup-title" aria-describedby="popup-description" aria-hidden="true">
    <div class="popup-content">
      <span class="close-btn" aria-label="Fermer le popup">&times;</span>
      <h2 id="popup-title">À propos de l'inscription</h2>
      <p id="popup-description">
        Ici, inscrivez-vous afin que je puisse vous envoyer votre identifiant et un mot de passe provisoire que vous pourrez changer ultérieurement. Sans inscription, il est impossible de rejoindre le salon de discussion mais vous avez la possibilité de recevoir le résultat de votre test de niveau.
      </p>
    </div>
  </div>

  <div id="termsPopup" class="popup" role="dialog" aria-labelledby="terms-popup-title" aria-describedby="terms-popup-description" aria-hidden="true">
    <div class="popup-content">
      <span class="close-btn" aria-label="Fermer le popup">&times;</span>
      <h2 id="terms-popup-title">Termes et Conditions</h2>
      <p id="terms-popup-description">Ici, vous pouvez lire les termes et conditions avant de valider... puis fermer le PDF pour revenir au site.</p>
      <button id="open-pdf-btn">Ouvrir le PDF</button>
    </div>
  </div>

  <script src="assets/scripts/script.js"></script>
  <script src="assets/scripts/scriptachatminute.js"></script>
  <script src="assets/scripts/visiomodal.js"></script>
  <script src="assets/scripts/termes.js"></script>
  <script src="assets/scripts/errorform.js"></script>
</body>
</html>
