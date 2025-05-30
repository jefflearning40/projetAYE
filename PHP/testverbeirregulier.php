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
        <h1 class="banner-title">Verbes irréguliers</h1>
    </section>

    <section class="menu" role="region" aria-labelledby="menu-title">
        <h2 id="menu-title">Base verbale, prétérit, participe passé, traduction</h2>
        <p>Combien de verbes connaissez-vous ?</p>
        <div class="img-container">
            <div class=""></div>
        </div>
    </section>

    <section class="pdf-button-section" role="region">
        <div class="button-container">
            <a href="pagetest.html" class="pdf-button">⬅<br>retour</a>
            <a href="assets/pictures/docpdf/verbes_irreguliers.pdf" target="_blank" class="pdf-button">verbe<br>Irréguliers</a>
            <span id="scorePercentage">0%</span>
            <button class="exercise-button" id="exerciseButton">Exercice<br>QCM</button>
        </div>
    </section>

    <section class="qcm-section" id="qcmSection" role="region" aria-labelledby="qcm-title" style="display: none;">
        <h2 id="qcm-title">Exercice QCM sur les verbes irréguliers</h2>
        <div class="qcm-content"></div>
    </section>
    
    <div id="visualFeedback"></div>

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

    <div id="aboutPopup" class="popup" role="dialog" aria-labelledby="popup-title" aria-describedby="popup-description" aria-hidden="true">
        <div class="popup-content">
            <button class="close-btn" aria-label="Fermer le popup">&times;</button>
            <h2 id="popup-title">Pourquoi un test ?</h2>
            <p id="popup-description">Les verbes irréguliers sont très importants à connaître, ils vous permettent de vous situer dans le temps. En cliquant sur le bouton Verbes, un tableau complet des verbes irréguliers les plus utilisés est consultable.</p>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const scorePercentage = document.getElementById('scorePercentage');
            const savedScore = localStorage.getItem('irregularVerbsScore');

            if (savedScore) {
                scorePercentage.textContent = `${savedScore}%`;
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
    // Exemple pour scriptachatminute.js
    const element = document.getElementById('votreElement');
    if (element) {
        element.textContent = 'Votre texte';
    } else {
        console.error("L'élément n'existe pas dans le DOM.");
    }

    
});
pauseButton.addEventListener('click', function() {
    console.log("Pause button clicked");
    // Enregistrer l'état actuel dans localStorage
    const state = {
        index: currentQuestionIndex,
        savedScore: score
    };
    localStorage.setItem('qcmState', JSON.stringify(state));

    // Calculer et enregistrer le pourcentage
    const percentage = (score / questions.length) * 100;
    localStorage.setItem('irregularVerbsScore', percentage.toFixed(2));

    // Jouer le son de pause
    playPauseSound();

    // Rediriger vers pagetest.html
    window.location.href = 'pagetest.html';
});
    </script>

    <script src="assets/scripts/qcmverbeirregulier.js"></script>
    <script src="assets/scripts/script.js"></script>
    <script src="assets/scripts/scriptachatminute.js"></script>
    <script src="assets/scripts/visiomodal.js"></script>
</body>
</html>
