document.addEventListener('DOMContentLoaded', function () {
    const termsLabel = document.getElementById('terms-label');
    const termsPopup = document.getElementById('termsPopup');
    const closeBtn = document.querySelector('.close-btn');
    const openPdfBtn = document.getElementById('open-pdf-btn');

    termsLabel.addEventListener('click', function (event) {
        event.preventDefault();
        termsPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
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
});