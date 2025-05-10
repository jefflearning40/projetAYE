document.addEventListener("DOMContentLoaded", function() {
    const testProgress = {
        irregularVerbs: 0,
        vocabulary: 0,
        grammar: 0
    };

    function updateProgressDisplay() {
        const irregularVerbsButton = document.getElementById('irregular-verbs');
        const vocabularyButton = document.getElementById('vocabulary');
        const grammarButton = document.getElementById('grammar');

        const irregularVerbsPercentage = document.getElementById('irregular-verbs-percentage');
        const vocabularyPercentage = document.getElementById('vocabulary-percentage');
        const grammarPercentage = document.getElementById('grammar-percentage');

        irregularVerbsPercentage.textContent = `${testProgress.irregularVerbs}%`;
        vocabularyPercentage.textContent = `${testProgress.vocabulary}%`;
        grammarPercentage.textContent = `${testProgress.grammar}%`;

        updateButtonColor(irregularVerbsButton, testProgress.irregularVerbs);
        updateButtonColor(vocabularyButton, testProgress.vocabulary);
        updateButtonColor(grammarButton, testProgress.grammar);
    }

    function updateButtonColor(button, percentage) {
        if (percentage >= 100) {
            button.classList.add('completed');
            button.classList.remove('half-completed');
        } else if (percentage >= 50) {
            button.classList.add('half-completed');
            button.classList.remove('completed');
        } else {
            button.classList.remove('half-completed', 'completed');
        }
    }

    function updateTestProgress(testName, percentage) {
        if (testProgress.hasOwnProperty(testName)) {
            testProgress[testName] = percentage;
            updateProgressDisplay();
        }
    }

    // Récupérer le score du localStorage pour les verbes irréguliers
    const irregularVerbsScore = localStorage.getItem('irregularVerbsScore');
    if (irregularVerbsScore !== null) {
        updateTestProgress('irregularVerbs', parseFloat(irregularVerbsScore));
    }

    updateProgressDisplay();
});