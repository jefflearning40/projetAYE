<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Site pour pratiquer l'anglais page Contacte" />
    <title>Ace your Exam - Contacte</title>
    <link rel="stylesheet" href="dist/css/theme.css" />
</head>
<body>
    <nav class="navbar">
        <div class="logo"><img src="assets/pictures/iconplaces/logoAYE.jpeg" alt=""></div>
        <ul class="nav-links">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="formulaire.html">Inscription</a></li>
            <li><a href="login.html">Connexion</a></li>
        </ul>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    <section class="banner">
      <img  
        src="assets/pictures/bgpicture/bg-banner.jpg"
        alt="Bannière"
        class="banner-image"
      />
      <h1 class="banner-title">Contactez nous </h1>
    </section>
    <div class="formulaire-contacte">
        <form action="#" method="post">
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" required>

            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" required>

            <label for="email">Adresse mail</label>
            <input type="email" id="email" name="email" required>

            <label for="tel">Téléphone</label>
            <input type="tel" id="tel" name="tel" required>

            <label for="message">Votre message</label>
            <textarea id="message" name="message" rows="4" required placeholder="Écrivez votre message ici..."></textarea>

            <button type="submit">Envoyer</button>
        </form>
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
            <h2 id="popup-title">Laissez nous un message</h2>
            <p id="popup-description">si vous avez perdu votre id, mot de passe, ou vous n'arrivez pas a vous connecter ou vous rencontrez des problemes avec les achats de credits de temps, ecrivez le ici et nous vous repondrons dans les plus bref délais.</p>
        </div>
        <script src="assets/scripts/script.js"></script>
        <script src="assets/scripts/scriptachatminute.js"></script>
        <script src="assets/scripts/visiomodal.js"></script>
</body>
</html>