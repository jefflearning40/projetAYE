document.addEventListener('DOMContentLoaded', function () {
    const termsLabel = document.getElementById('terms-label');
    const termsPopup = document.getElementById('termsPopup');
    const termsCloseBtn = termsPopup.querySelector('.close-btn'); // Sélecteur spécifique pour le popup des termes
    const openPdfBtn = document.getElementById('open-pdf-btn');

    const aboutPopup = document.getElementById('aboutPopup');
    const aboutCloseBtn = aboutPopup.querySelector('.close-btn'); // Sélecteur spécifique pour le popup "à propos"

    if (!termsLabel || !termsPopup || !termsCloseBtn || !openPdfBtn || !aboutPopup || !aboutCloseBtn) {
        console.error('One or more elements not found in the DOM');
        return;
    }

    termsLabel.addEventListener('click', function (event) {
        event.preventDefault();
        termsPopup.style.display = 'flex';
    });

    termsCloseBtn.addEventListener('click', function () {
        termsPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == termsPopup) {
            termsPopup.style.display = 'none';
        }
    });

    openPdfBtn.addEventListener('click', function () {
        window.open('assets/termes/rgpd.pdf', '_blank');
    });

    // Gestion du popup "à propos"
    const openAboutBtn = document.getElementById('open-about-btn'); // Assurez-vous d'avoir un bouton pour ouvrir ce popup
    if (openAboutBtn) {
        openAboutBtn.addEventListener('click', function () {
            aboutPopup.style.display = 'flex';
        });
    }

    aboutCloseBtn.addEventListener('click', function () {
        aboutPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == aboutPopup) {
            aboutPopup.style.display = 'none';
        }
    });
});