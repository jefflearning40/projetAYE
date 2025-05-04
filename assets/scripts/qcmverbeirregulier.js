document.addEventListener('DOMContentLoaded', function() {
    const exerciseButton = document.getElementById('exerciseButton');
    const qcmSection = document.getElementById('qcmSection');
    const qcmContent = document.querySelector('.qcm-content');

    if (!exerciseButton || !qcmSection || !qcmContent) {
        console.error("Un des éléments nécessaires est manquant dans le DOM.");
        return;
    }

    let currentQuestionIndex = 0;
    let questions = [];
    let score = 0;
    let nextButton;
    let prevButton;

    const verbesIrreguliers = [
        { infinitif: "go", preterit: "went", participe: "gone", traduction: "aller" },
        { infinitif: "be", preterit: "was/were", participe: "been", traduction: "être" },
        { infinitif: "do", preterit: "did", participe: "done", traduction: "faire" },
        { infinitif: "have", preterit: "had", participe: "had", traduction: "avoir" },
        { infinitif: "say", preterit: "said", participe: "said", traduction: "dire" },
        { infinitif: "make", preterit: "made", participe: "made", traduction: "faire" },
        { infinitif: "know", preterit: "knew", participe: "known", traduction: "savoir" },
        { infinitif: "take", preterit: "took", participe: "taken", traduction: "prendre" },
        { infinitif: "see", preterit: "saw", participe: "seen", traduction: "voir" },
        { infinitif: "come", preterit: "came", participe: "come", traduction: "venir" },
        // Ajoutez plus de verbes ici si nécessaire
    ];

    const fakeVerbesFrancais = ["manger", "boire", "courir", "écrire", "lire", "parler", "penser", "dormir", "jouer", "chanter"];

    exerciseButton.addEventListener('click', function() {
        console.log("Exercise button clicked");
        if (qcmSection.style.display === 'none' || qcmSection.style.display === '') {
            questions = []; // Réinitialise les questions
            currentQuestionIndex = 0; // Réinitialise l'index
            score = 0; // Réinitialise le score
            generateQuestions(100); // Génère 100 questions
            console.log("Questions generated:", questions);
            displayQuestion(currentQuestionIndex);
            addNavigationButtons(); // Ajoute les boutons de navigation une seule fois
            qcmSection.style.display = 'block';
            console.log("QCM section displayed");
        } else {
            qcmSection.style.display = 'none';
            console.log("QCM section hidden");
        }
    });

    function generateQuestions(numQuestions) {
        const allQuestions = [];

        verbesIrreguliers.forEach((verbe) => {
            // Ajouter des questions sur le prétérit et le participe passé
            allQuestions.push({
                question: `Quel est le prétérit de "${verbe.infinitif}" (${verbe.traduction}) ?`,
                options: [verbe.preterit, verbe.infinitif, verbe.participe],
                correctAnswer: verbe.preterit
            });

            allQuestions.push({
                question: `Quel est le participe passé de "${verbe.infinitif}" (${verbe.traduction}) ?`,
                options: [verbe.participe, verbe.infinitif, verbe.preterit],
                correctAnswer: verbe.participe
            });

            // Ajouter des questions sur la traduction avec des fausses réponses en français
            const fakeOptions = getRandomFakeVerbes(2);
            allQuestions.push({
                question: `Quelle est la traduction de "${verbe.infinitif}" ?`,
                options: [verbe.traduction, ...fakeOptions],
                correctAnswer: verbe.traduction
            });
        });

        // Sélectionner un sous-ensemble aléatoire de questions
        const selectedQuestions = [];
        while (selectedQuestions.length < numQuestions && allQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * allQuestions.length);
            selectedQuestions.push(allQuestions.splice(randomIndex, 1)[0]);
        }

        questions = selectedQuestions;
    }

    function getRandomFakeVerbes(num) {
        const shuffled = fakeVerbesFrancais.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function displayQuestion(index) {
        console.log("Displaying question:", index);
        qcmContent.innerHTML = ''; // Efface le contenu précédent

        const questionData = questions[index];
        const questionText = document.createElement('p');
        questionText.textContent = questionData.question;

        questionData.options.sort(() => Math.random() - 0.5); // Mélanger les options

        questionData.options.forEach(option => {
            const radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = `q${index + 1}`;
            radioButton.value = option;
            radioButton.addEventListener('change', function() {
                if (radioButton.value === questionData.correctAnswer) {
                    score++;
                }
            });

            const label = document.createElement('label');
            label.textContent = option;

            qcmContent.appendChild(radioButton);
            qcmContent.appendChild(label);
            qcmContent.appendChild(document.createElement('br'));
        });

        qcmContent.insertBefore(questionText, qcmContent.firstChild);

        // Afficher le compteur de questions
        const questionCounter = document.createElement('p');
        questionCounter.textContent = `Question ${index + 1}/${questions.length}`;
        qcmContent.appendChild(questionCounter);
    }

    function addNavigationButtons() {
        // Vérifie si les boutons existent déjà
        if (!document.getElementById('prevButton') && !document.getElementById('nextButton')) {
            const navContainer = document.createElement('div');
            navContainer.classList.add('qcm-navigation');

            prevButton = document.createElement('button');
            prevButton.id = 'prevButton';
            prevButton.textContent = 'Précédent';
            prevButton.addEventListener('click', function() {
                console.log("Previous button clicked");
                if (currentQuestionIndex > 0) {
                    currentQuestionIndex--;
                    displayQuestion(currentQuestionIndex);
                    if (currentQuestionIndex < questions.length - 1) {
                        nextButton.textContent = 'Suivant';
                        nextButton.removeEventListener('click', showScore);
                        nextButton.addEventListener('click', handleNextButtonClick);
                    }
                }
            });

            nextButton = document.createElement('button');
            nextButton.id = 'nextButton';
            nextButton.textContent = 'Suivant';
            nextButton.addEventListener('click', handleNextButtonClick);

            navContainer.appendChild(prevButton);
            navContainer.appendChild(nextButton);
            qcmSection.appendChild(navContainer);
        }
    }

    function handleNextButtonClick() {
        console.log("Next button clicked");
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        } else {
            nextButton.textContent = 'Terminé';
            nextButton.removeEventListener('click', handleNextButtonClick);
            nextButton.addEventListener('click', showScore);
        }
    }

    function showScore() {
        const scoreOutOfTen = score;
        qcmContent.innerHTML = `
            <h2>Votre Score</h2>
            <p>Vous avez obtenu ${scoreOutOfTen} sur ${questions.length}.</p>
        `;

        // Masquer les boutons de navigation
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';

        // Ajouter le bouton retour
        const returnButton = document.createElement('button');
        returnButton.id = 'returnButton';
        returnButton.textContent = 'Retour';
        returnButton.classList.add('app-button'); // Utilisez la classe CSS pour le style
        returnButton.addEventListener('click', function() {
            window.location.href = 'pagetest.html'; // Redirige vers pagetest.html
        });

        qcmContent.appendChild(returnButton);

        // Enregistrer le score dans le localStorage
        const percentage = (scoreOutOfTen / questions.length) * 100;
        localStorage.setItem('irregularVerbsScore', percentage.toFixed(2));
    }
});
