document.addEventListener('DOMContentLoaded', function() {
    var checkoutButton = document.querySelector('button[type="submit"]');

    checkoutButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'payement.html'; // Redirige vers payment.html
    });
  });