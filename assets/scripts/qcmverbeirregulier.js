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
    ];

    exerciseButton.addEventListener('click', function() {
        console.log("Exercise button clicked");
        if (qcmSection.style.display === 'none' || qcmSection.style.display === '') {
            questions = []; // Réinitialise les questions
            currentQuestionIndex = 0; // Réinitialise l'index
            generateQuestions();
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

    function generateQuestions() {
        const selectedVerbes = getRandomVerbes(verbesIrreguliers, 10);

        selectedVerbes.forEach((verbe, index) => {
            const options = [verbe.preterit, 'fake1', 'fake2']; // Remplacez 'fake1' et 'fake2' par des fausses réponses
            options.sort(() => Math.random() - 0.5); // Mélange les options

            questions.push({
                question: `Question ${index + 1} : Quel est le prétérit de "${verbe.infinitif}" (${verbe.traduction}) ?`,
                options: options,
                correctAnswer: verbe.preterit
            });
        });
    }

    function getRandomVerbes(array, num) {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function displayQuestion(index) {
        console.log("Displaying question:", index);
        qcmContent.innerHTML = ''; // Efface le contenu précédent

        const questionData = questions[index];
        const questionText = document.createElement('p');
        questionText.textContent = questionData.question;

        questionData.options.forEach(option => {
            const radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = `q${index + 1}`;
            radioButton.value = option;

            const label = document.createElement('label');
            label.textContent = option;

            qcmContent.appendChild(radioButton);
            qcmContent.appendChild(label);
            qcmContent.appendChild(document.createElement('br'));
        });

        qcmContent.insertBefore(questionText, qcmContent.firstChild);
    }

    function addNavigationButtons() {
        // Vérifie si les boutons existent déjà
        if (!document.getElementById('prevButton') && !document.getElementById('nextButton')) {
            const navContainer = document.createElement('div');
            navContainer.classList.add('qcm-navigation');

            const prevButton = document.createElement('button');
            prevButton.id = 'prevButton';
            prevButton.textContent = 'Précédent';
            prevButton.addEventListener('click', function() {
                console.log("Previous button clicked");
                if (currentQuestionIndex > 0) {
                    currentQuestionIndex--;
                    displayQuestion(currentQuestionIndex);
                }
            });

            const nextButton = document.createElement('button');
            nextButton.id = 'nextButton';
            nextButton.textContent = 'Suivant';
            nextButton.addEventListener('click', function() {
                console.log("Next button clicked");
                if (currentQuestionIndex < questions.length - 1) {
                    currentQuestionIndex++;
                    displayQuestion(currentQuestionIndex);
                } else {
                    console.log("No more questions");
                }
            });

            navContainer.appendChild(prevButton);
            navContainer.appendChild(nextButton);
            qcmSection.appendChild(navContainer);
        }
    }
});
