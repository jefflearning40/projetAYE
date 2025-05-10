// gestion du cheeseburger (celui que je préfère !)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// gestion du popup "à propos"
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('.nav-links li:nth-child(2) a');
    const popup = document.getElementById('aboutPopup');
    const closeBtn = document.querySelector('#aboutPopup .close-btn');

    // Ensure the popup is initially hidden
    popup.style.display = 'none';

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});