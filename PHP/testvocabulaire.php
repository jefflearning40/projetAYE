<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Site pour pratiquer l'anglais page test" />
    <title>Ace your Exam</title>
    <link rel="stylesheet" href="dist/css/theme.css" />
</head>
<body>
    <nav class="navbar" role="navigation" aria-label="Navigation principale">
        <div class="logo">
            <img src="assets/pictures/iconplaces/logoAYE.jpeg" alt="Logo Ace your Exam" />
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="#" aria-haspopup="dialog" aria-controls="aboutPopup">À propos</a></li>
            <li><a href="formulaire.html">Inscription</a></li>
            <li><a href="login.html">Connexion</a></li>
        </ul>
        <button class="hamburger" aria-label="Menu hamburger" aria-expanded="false" aria-controls="nav-links">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

    <section class="banner" role="banner">
        <img src="assets/pictures/bgpicture/bg-banner.jpg" alt="Bannière" class="banner-image" />
        <h1 class="banner-title">Un peu de vocabulaire</h1>
    </section>

    <section class="menu" role="region" aria-labelledby="menu-title">
        <h2 id="menu-title">Classés par famille, themes, usage</h2>
        <p>Does My dog know more words than me ?</p>
        <div class="img-container">
            <div class=""></div>
        </div>
    </section>
    <section class="pdf-button-section" role="region" aria-labelledby="section-title">
  <h2 id="section-title" class="visually-hidden">Navigation vers ressources PDF et retour</h2>
  <div class="button-container">
    <a href="pagetest.html" class="pdf-button" role="button" aria-label="Retour à la page de test">⬅<br>retour</a>
    <a href="assets/fichierspdf/vocabulaire1.pdf" target="_blank" class="pdf-button" role="button" aria-labe</section>
      <!-- carousel pour vocabulaire par theme -->
      <section class="pdf-carousel-section" aria-label="Carrousel PDF">
        <div class="carousel-container">
          <div class="carousel">
            <a href="assets/fichierspdf/vocabulaire1.pdf" target="_blank">
              <img src="assets/pictures/carousel/img1.jpg" alt="PDF 1 - Vocabulaire" />
            </a>
            <a href="assets/fichierspdf/vocabulaire2.pdf" target="_blank">
              <img src="assets/pictures/carousel/img2.jl="Ouvrir le fichier PDF : Vocabulaire général">Vocabulaire<br>général</a>
  </div>
pg" alt="PDF 2 - Expressions" />
            </a>
            <a href="assets/fichierspdf/vocabulaire3.pdf" target="_blank">
              <img src="assets/pictures/carousel/img3.jpg" alt="PDF 3 - Grammaire" />
            </a>
            
          </div>
        </div>
      </section>

    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 fil rouge de la formation.</p>
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
            <button class="close-btn" aria-label="Fermer le popup">&times;</button>
            <h2 id="popup-title">Pourquoi un test ?</h2>
            <p id="popup-description">Savez vous combien de mots enrichissent votre vocabulaire? Ce test fera la lumiere sur la quantité de termes connus. from Golden fish to man, what's your level ?</p>
        </div>
    </div>
    
     
    <script src="assets/scripts/script.js"></script>
    <script src="assets/scripts/scriptachatminute.js"></script>
    <script src="assets/scripts/visiomodal.js"></script>
    <script src="assets/scripts/test.js"></script>
   
   
</body>
</html>