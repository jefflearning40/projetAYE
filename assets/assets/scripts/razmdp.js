document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const backToLoginLink = document.getElementById('back-to-login-link');
    const loginForm = document.getElementById('login-form');
    const resetPasswordForm = document.getElementById('reset-password-form');

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        resetPasswordForm.style.display = 'block';
    });

    backToLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        resetPasswordForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});