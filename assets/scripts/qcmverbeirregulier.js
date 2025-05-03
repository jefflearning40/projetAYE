document.addEventListener('DOMContentLoaded', function() {
    const exerciseButton = document.getElementById('exerciseButton');
    const exerciseSection = document.getElementById('exerciseSection');
    const quizForm = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');

    exerciseButton.addEventListener('click', function() {
        exerciseSection.style.display = 'block'; // Affiche la section de l'exercice
    });

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        let score = 0;
        const answers = {
            q1: 'was',
            q2: 'gone',
            q3: 'drink'
        };

        const formData = new FormData(quizForm);

        for (const name in answers) {
            if (formData.get(name) === answers[name]) {
                score++;
            }
        }

        resultsDiv.textContent = `Votre score est de ${score} sur ${Object.keys(answers).length}.`;
    });
});