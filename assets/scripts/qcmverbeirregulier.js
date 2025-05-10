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
    let pauseButton;

    // Charger l'état précédent depuis localStorage
    const savedState = localStorage.getItem('qcmState');
    if (savedState) {
        const { index, savedScore } = JSON.parse(savedState);
        currentQuestionIndex = index;
        score = savedScore;
    }
    

    const verbesIrreguliers = [
        { infinitif: "abide", preterit: "abode", participe: "abode", traduction: "respecter, se conformer à" },
        { infinitif: "arise", preterit: "arose", participe: "arisen", traduction: "survenir" },
        { infinitif: "awake", preterit: "awoke", participe: "awoken", traduction: "se réveiller" },
        { infinitif: "be", preterit: "was/were", participe: "been", traduction: "être" },
        { infinitif: "bear", preterit: "bore", participe: "borne, born", traduction: "porter, supporter, naître" },
        { infinitif: "beat", preterit: "beat", participe: "beaten", traduction: "battre" },
        { infinitif: "become", preterit: "became", participe: "become", traduction: "devenir" },
        { infinitif: "beget", preterit: "begat, begot", participe: "begotten", traduction: "engendrer" },
        { infinitif: "begin", preterit: "began", participe: "begun", traduction: "commencer" },
        { infinitif: "bend", preterit: "bent", participe: "bent", traduction: "plier, se courber" },
        { infinitif: "bet", preterit: "bet", participe: "bet", traduction: "parier" },
        { infinitif: "bid", preterit: "bid, bade", participe: "bid, bidden", traduction: "offrir" },
        { infinitif: "bite", preterit: "bit", participe: "bitten", traduction: "mordre" },
        { infinitif: "bleed", preterit: "bled", participe: "bled", traduction: "saigner" },
        { infinitif: "blow", preterit: "blew", participe: "blown", traduction: "souffler, gonfler" },
        { infinitif: "break", preterit: "broke", participe: "broken", traduction: "casser" },
        { infinitif: "breed", preterit: "bred", participe: "bred", traduction: "élever (des animaux)" },
        { infinitif: "bring", preterit: "brought", participe: "brought", traduction: "apporter" },
        { infinitif: "broadcast", preterit: "broadcast", participe: "broadcast", traduction: "diffuser, émettre" },
        { infinitif: "build", preterit: "built", participe: "built", traduction: "construire" },
        { infinitif: "burn", preterit: "burnt, burned", participe: "burnt, burned", traduction: "brûler" },
        { infinitif: "burst", preterit: "burst", participe: "burst", traduction: "éclater" },
        { infinitif: "buy", preterit: "bought", participe: "bought", traduction: "acheter" },
        { infinitif: "can", preterit: "could", participe: "could", traduction: "pouvoir" },
        { infinitif: "cast", preterit: "cast", participe: "cast", traduction: "jeter, distribuer (rôles)" },
        { infinitif: "catch", preterit: "caught", participe: "caught", traduction: "attraper" },
        { infinitif: "chide", preterit: "chid, chode", participe: "chid, chidden", traduction: "gronder" },
        { infinitif: "choose", preterit: "chose", participe: "chosen", traduction: "choisir" },
        { infinitif: "cling", preterit: "clung", participe: "clung", traduction: "s'accrocher" },
        { infinitif: "clothe", preterit: "clad, clothed", participe: "clad, clothed", traduction: "habiller, recouvrir" },
        { infinitif: "come", preterit: "came", participe: "come", traduction: "venir" },
        { infinitif: "cost", preterit: "cost", participe: "cost", traduction: "coûter" },
        { infinitif: "creep", preterit: "crept", participe: "crept", traduction: "ramper" },
        { infinitif: "cut", preterit: "cut", participe: "cut", traduction: "couper" },
        { infinitif: "deal", preterit: "dealt", participe: "dealt", traduction: "distribuer" },
        { infinitif: "dig", preterit: "dug", participe: "dug", traduction: "creuser" },
        { infinitif: "dive", preterit: "dived", participe: "dived, dove", traduction: "plonger" },
        { infinitif: "do", preterit: "did", participe: "done", traduction: "faire" },
        { infinitif: "draw", preterit: "drew", participe: "drawn", traduction: "dessiner, tirer" },
        { infinitif: "dream", preterit: "dreamt, dreamed", participe: "dreamt, dreamed", traduction: "rêver" },
        { infinitif: "drink", preterit: "drank", participe: "drunk", traduction: "boire" },
        { infinitif: "drive", preterit: "drove", participe: "driven", traduction: "conduire" },
        { infinitif: "dwell", preterit: "dwelt", participe: "dwelt, dwelled", traduction: "habiter" },
        { infinitif: "eat", preterit: "ate", participe: "eaten", traduction: "manger" },
        { infinitif: "fall", preterit: "fell", participe: "fallen", traduction: "tomber" },
        { infinitif: "feed", preterit: "fed", participe: "fed", traduction: "nourrir" },
        { infinitif: "feel", preterit: "felt", participe: "felt", traduction: "se sentir, ressentir" },
        { infinitif: "fight", preterit: "fought", participe: "fought", traduction: "se battre" },
        { infinitif: "find", preterit: "found", participe: "found", traduction: "trouver" },
        { infinitif: "flee", preterit: "fled", participe: "fled", traduction: "s'enfuir" },
        { infinitif: "fling", preterit: "flung", participe: "flung", traduction: "lancer" },
        { infinitif: "fly", preterit: "flew", participe: "flown", traduction: "voler" },
        { infinitif: "forbid", preterit: "forbade", participe: "forbidden", traduction: "interdire" },
        { infinitif: "forecast", preterit: "forecast", participe: "forecast", traduction: "prévoir" },
        { infinitif: "foresee", preterit: "foresaw", participe: "foreseen", traduction: "prévoir, pressentir" },
        { infinitif: "forget", preterit: "forgot", participe: "forgotten, forgot", traduction: "oublier" },
        { infinitif: "forgive", preterit: "forgave", participe: "forgiven", traduction: "pardonner" },
        { infinitif: "forsake", preterit: "forsook", participe: "forsaken", traduction: "abandonner" },
        { infinitif: "freeze", preterit: "froze", participe: "frozen", traduction: "geler" },
        { infinitif: "get", preterit: "got", participe: "gotten, got", traduction: "obtenir" },
        { infinitif: "give", preterit: "gave", participe: "given", traduction: "donner" },
        { infinitif: "go", preterit: "went", participe: "gone", traduction: "aller" },
        { infinitif: "grind", preterit: "ground", participe: "ground", traduction: "moudre, opprimer" },
        { infinitif: "grow", preterit: "grew", participe: "grown", traduction: "grandir, pousser" },
        { infinitif: "hang", preterit: "hung", participe: "hung", traduction: "tenir, pendre" },
        { infinitif: "have", preterit: "had", participe: "had", traduction: "avoir" },
        { infinitif: "hear", preterit: "heard", participe: "heard", traduction: "entendre" },
        { infinitif: "hide", preterit: "hid", participe: "hidden", traduction: "cacher" },
        { infinitif: "hit", preterit: "hit", participe: "hit", traduction: "taper, appuyer" },
        { infinitif: "hold", preterit: "held", participe: "held", traduction: "tenir" },
        { infinitif: "hurt", preterit: "hurt", participe: "hurt", traduction: "blesser" },
        { infinitif: "keep", preterit: "kept", participe: "kept", traduction: "garder" },
        { infinitif: "kneel", preterit: "knelt, knelled", participe: "knelt, kneeled", traduction: "s'agenouiller" },
        { infinitif: "know", preterit: "knew", participe: "known", traduction: "connaître, savoir" },
        { infinitif: "lay", preterit: "laid", participe: "laid", traduction: "poser" },
        { infinitif: "lead", preterit: "led", participe: "led", traduction: "mener, guider" },
        { infinitif: "lean", preterit: "leant, leaned", participe: "leant, leaned", traduction: "s'incliner, se pencher" },
        { infinitif: "leap", preterit: "leapt, leaped", participe: "leapt, leaped", traduction: "sauter, bondir" },
        { infinitif: "learn", preterit: "learnt", participe: "learnt", traduction: "apprendre" },
        { infinitif: "leave", preterit: "left", participe: "left", traduction: "laisser, quitter, partir" },
        { infinitif: "lend", preterit: "lent", participe: "lent", traduction: "prêter" },
        { infinitif: "let", preterit: "let", participe: "let", traduction: "permettre, louer" },
        { infinitif: "lie", preterit: "lay", participe: "lain", traduction: "s'allonger" },
        { infinitif: "light", preterit: "lit, lighted", participe: "lit, lighted", traduction: "allumer" },
        { infinitif: "lose", preterit: "lost", participe: "lost", traduction: "perdre" },
        { infinitif: "make", preterit: "made", participe: "made", traduction: "fabriquer" },
        { infinitif: "mean", preterit: "meant", participe: "meant", traduction: "signifier" },
        { infinitif: "meet", preterit: "met", participe: "met", traduction: "rencontrer" },
        { infinitif: "mow", preterit: "mowed", participe: "mowed, mown", traduction: "tondre" },
        { infinitif: "offset", preterit: "offset", participe: "offset", traduction: "compenser" },
        { infinitif: "overcome", preterit: "overcame", participe: "overcome", traduction: "surmonter" },
        { infinitif: "partake", preterit: "partook", participe: "partaken", traduction: "prendre part à" },
        { infinitif: "pay", preterit: "paid", participe: "paid", traduction: "payer" },
        { infinitif: "plead", preterit: "pled, pleaded", participe: "pled, pleaded", traduction: "supplier, plaider" },
        { infinitif: "preset", preterit: "preset", participe: "preset", traduction: "programmer" },
        { infinitif: "prove", preterit: "proved", participe: "proven, proved", traduction: "prouver" },
        { infinitif: "put", preterit: "put", participe: "put", traduction: "mettre" },
        { infinitif: "quit", preterit: "quit", participe: "quit", traduction: "quitter" },
        { infinitif: "read", preterit: "read", participe: "read", traduction: "lire" },
        { infinitif: "relay", preterit: "relayed", participe: "relayed", traduction: "relayer" },
        { infinitif: "rend", preterit: "rent", participe: "rent", traduction: "déchirer" },
        { infinitif: "rid", preterit: "rid", participe: "rid", traduction: "débarrasser" },
        { infinitif: "ride", preterit: "rode", participe: "ridden", traduction: "monter (vélo, cheval)" },
        { infinitif: "ring", preterit: "rang", participe: "rung", traduction: "sonner, téléphoner" },
        { infinitif: "rise", preterit: "rose", participe: "risen", traduction: "lever" },
        { infinitif: "run", preterit: "ran", participe: "run", traduction: "courir" },
        { infinitif: "saw", preterit: "saw, sawed", participe: "sawn, sawed", traduction: "scier" },
        { infinitif: "say", preterit: "said", participe: "said", traduction: "dire" },
        { infinitif: "see", preterit: "saw", participe: "seen", traduction: "voir" },
        { infinitif: "seek", preterit: "sought", participe: "sought", traduction: "chercher" },
        { infinitif: "sell", preterit: "sold", participe: "sold", traduction: "vendre" },
        { infinitif: "send", preterit: "sent", participe: "sent", traduction: "envoyer" },
        { infinitif: "set", preterit: "set", participe: "set", traduction: "fixer" },
        { infinitif: "shake", preterit: "shook", participe: "shaken", traduction: "secouer" },
        { infinitif: "shed", preterit: "shed", participe: "shed", traduction: "répandre, laisser tomber" },
        { infinitif: "shine", preterit: "shone", participe: "shone", traduction: "briller" },
        { infinitif: "shoe", preterit: "shod", participe: "shod", traduction: "chausser" },
        { infinitif: "shoot", preterit: "shot", participe: "shot", traduction: "tirer, fusiller" },
        { infinitif: "show", preterit: "showed", participe: "shown", traduction: "montrer" },
        { infinitif: "shut", preterit: "shut", participe: "shut", traduction: "fermer" },
        { infinitif: "sing", preterit: "sang", participe: "sung", traduction: "chanter" },
        { infinitif: "sink", preterit: "sank, sunk", participe: "sunk, sunken", traduction: "couler" },
        { infinitif: "sit", preterit: "sat", participe: "sat", traduction: "s'asseoir" },
        { infinitif: "slay", preterit: "slew", participe: "slain", traduction: "tuer" },
        { infinitif: "sleep", preterit: "slept", participe: "slept", traduction: "dormir" },
        { infinitif: "slide", preterit: "slid", participe: "slid", traduction: "glisser" },
        { infinitif: "slink", preterit: "slunk, slinked", participe: "slunk, slinked", traduction: "s'en aller furtivement" },
        { infinitif: "slit", preterit: "slit", participe: "slit", traduction: "fendre" },
        { infinitif: "smell", preterit: "smelt", participe: "smelt", traduction: "sentir" },
        { infinitif: "sow", preterit: "sowed", participe: "sown, sowed", traduction: "semer" },
        { infinitif: "speak", preterit: "spoke", participe: "spoken", traduction: "parler" },
        { infinitif: "speed", preterit: "sped", participe: "sped", traduction: "aller vite" },
        { infinitif: "spell", preterit: "spelt", participe: "spelt", traduction: "épeler, orthographier" },
        { infinitif: "spend", preterit: "spent", participe: "spent", traduction: "dépenser, passer du temps" },
        { infinitif: "spill", preterit: "spilt, spilled", participe: "spilt, spilled", traduction: "renverser" },
        { infinitif: "spin", preterit: "spun", participe: "spun", traduction: "tourner, faire tourner" },
        { infinitif: "spit", preterit: "spat, spit", participe: "spat, spit", traduction: "cracher" },
        { infinitif: "split", preterit: "split", participe: "split", traduction: "fendre" },
        { infinitif: "spoil", preterit: "spoilt", participe: "spoilt", traduction: "gâcher, gâter" },
        { infinitif: "spread", preterit: "spread", participe: "spread", traduction: "répandre" },
        { infinitif: "spring", preterit: "sprang", participe: "sprung", traduction: "surgir, jaillir, bondir" },
        { infinitif: "stand", preterit: "stood", participe: "stood", traduction: "être debout" },
        { infinitif: "steal", preterit: "stole", participe: "stolen", traduction: "voler, dérober" },
        { infinitif: "stick", preterit: "stuck", participe: "stuck", traduction: "coller" },
        { infinitif: "sting", preterit: "stung", participe: "stung", traduction: "piquer" },
        { infinitif: "stink", preterit: "stank", participe: "stunk", traduction: "puer" },
        { infinitif: "strew", preterit: "strewed", participe: "strewn, strewed", traduction: "éparpiller" },
        { infinitif: "strike", preterit: "struck", participe: "stricken, struck", traduction: "frapper" },
        { infinitif: "strive", preterit: "strove", participe: "striven", traduction: "s'efforcer" },
        { infinitif: "swear", preterit: "swore", participe: "sworn", traduction: "jurer" },
        { infinitif: "sweat", preterit: "sweat, sweated", participe: "sweat, sweated", traduction: "suer" },
        { infinitif: "sweep", preterit: "swept", participe: "swept", traduction: "balayer" },
        { infinitif: "swell", preterit: "swelled, sweated", participe: "swollen", traduction: "gonfler, enfler" },
        { infinitif: "swim", preterit: "swam", participe: "swum", traduction: "nager" },
        { infinitif: "swing", preterit: "swung", participe: "swung", traduction: "se balancer" },
        { infinitif: "take", preterit: "took", participe: "taken", traduction: "prendre" },
        { infinitif: "teach", preterit: "taught", participe: "taught", traduction: "enseigner" },
        { infinitif: "tear", preterit: "tore", participe: "torn", traduction: "déchirer" },
        { infinitif: "tell", preterit: "told", participe: "told", traduction: "dire, raconter" },
        { infinitif: "think", preterit: "thought", participe: "thought", traduction: "penser" },
        { infinitif: "thrive", preterit: "throve, thrived", participe: "thriven, thrived", traduction: "prospérer" },
        { infinitif: "throw", preterit: "threw", participe: "thrown", traduction: "jeter" },
        { infinitif: "thrust", preterit: "thrust", participe: "thrust", traduction: "enfoncer" },
        { infinitif: "tread", preterit: "trod", participe: "trodden", traduction: "piétiner quelque chose" },
        { infinitif: "typeset", preterit: "typeset", participe: "typeset", traduction: "composer" },
        { infinitif: "undergo", preterit: "underwent", participe: "undergone", traduction: "subir" },
        { infinitif: "understand", preterit: "understood", participe: "understood", traduction: "comprendre" },
        { infinitif: "wake", preterit: "woke", participe: "woken", traduction: "réveiller" },
        { infinitif: "wear", preterit: "wore", participe: "worn", traduction: "porter (avoir sur soi)" },
        { infinitif: "weep", preterit: "wept", participe: "wept", traduction: "pleurer" },
        { infinitif: "wet", preterit: "wet, wetted", participe: "wet, wetted", traduction: "mouiller" },
        { infinitif: "win", preterit: "won", participe: "won", traduction: "gagner" },
        { infinitif: "wind", preterit: "wound", participe: "wound", traduction: "enrouler, remonter" },
        { infinitif: "withdraw", preterit: "withdrew", participe: "withdrawn", traduction: "se retirer" },
        { infinitif: "wring", preterit: "wrung", participe: "wrung", traduction: "tordre" },
        { infinitif: "write", preterit: "wrote", participe: "written", traduction: "écrire" }
    ];

    const fakeVerbesFrancais = [
        "manger", "boire", "courir", "écrire", "lire", "parler", "penser", "dormir", "jouer", "chanter",
        "danser", "nager", "sauter", "marcher", "regarder", "écouter", "cuisiner", "voyager", "dessiner",
        "peindre", "jardiner", "nettoyer", "laver", "repasser", "coudre", "tricoter", "skier", "surfer",
        "pêcher", "camper", "randonner", "escalader", "plonger", "voler", "conduire", "naviguer", "explorer"
    ];

    // Génération des questions à l'avance
    const allQuestions = verbesIrreguliers.flatMap((verbe) => [
        {
            question: `Quel est le prétérit de "${verbe.infinitif}" (${verbe.traduction}) ?`,
            options: [verbe.preterit, verbe.infinitif, verbe.participe],
            correctAnswer: verbe.preterit
        },
        {
            question: `Quel est le participe passé de "${verbe.infinitif}" (${verbe.traduction}) ?`,
            options: [verbe.participe, verbe.infinitif, verbe.preterit],
            correctAnswer: verbe.participe
        },
        {
            question: `Quelle est la traduction de "${verbe.infinitif}" ?`,
            options: [verbe.traduction, ...getRandomFakeVerbes(2)],
            correctAnswer: verbe.traduction
        }
    ]);

      exerciseButton.addEventListener('click', function() {
        console.log("Exercise button clicked");

        // Réinitialiser le score dans localStorage
        localStorage.setItem('irregularVerbsScore', '0.00');

        if (qcmSection.style.display === 'none' || qcmSection.style.display === '') {
            questions = getRandomQuestions(allQuestions, 100); // Sélectionner 100 questions aléatoires
            displayQuestion(currentQuestionIndex);
            addNavigationButtons(); // Ajouter les boutons de navigation une seule fois
            qcmSection.style.display = 'block';
            console.log("QCM section displayed");
        } else {
            qcmSection.style.display = 'none';
            console.log("QCM section hidden");
        }
    });

    function getRandomQuestions(questions, numQuestions) {
        const shuffled = questions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    }

    function getRandomFakeVerbes(num) {
        const shuffled = fakeVerbesFrancais.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function displayQuestion(index) {
        console.log("Displaying question:", index);
        qcmContent.innerHTML = ''; // Effacer le contenu précédent

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
                checkAnswer(radioButton.value, questionData);
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

    function checkAnswer(selectedOption, questionData) {
        if (selectedOption === questionData.correctAnswer) {
            playSuccessSound();
            showSuccessFeedback();
            score++;
        } else {
            playErrorSound();
            showErrorFeedback();
        }
    }

    function addNavigationButtons() {
        // Vérifier si les boutons existent déjà
        if (!document.getElementById('prevButton') && !document.getElementById('nextButton')) {
            const navContainer = document.createElement('div');
            navContainer.classList.add('qcm-navigation');

            prevButton = document.createElement('button');
            prevButton.id = 'prevButton';
            prevButton.textContent = 'Précédent';
            prevButton.classList.add('app-button');
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

            pauseButton = document.createElement('button');
            pauseButton.id = 'pauseButton';
            pauseButton.textContent = 'Pause';
            pauseButton.classList.add('app-button');
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

                // Rediriger vers pagetest.html
                window.location.href = 'pagetest.html';
            });

            nextButton = document.createElement('button');
            nextButton.id = 'nextButton';
            nextButton.textContent = 'Suivant';
            nextButton.classList.add('app-button');
            nextButton.addEventListener('click', handleNextButtonClick);

            navContainer.appendChild(prevButton);
            navContainer.appendChild(pauseButton);
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
        pauseButton.style.display = 'none';

        // Ajouter le bouton retour
        const returnButton = document.createElement('button');
        returnButton.id = 'returnButton';
        returnButton.textContent = 'Retour';
        returnButton.classList.add('app-button');
        returnButton.addEventListener('click', function() {
            window.location.href = 'pagetest.html'; 
        });

        qcmContent.appendChild(returnButton);

        // Enregistrer le score dans le localStorage
        const percentage = (scoreOutOfTen / questions.length) * 100;
        localStorage.setItem('irregularVerbsScore', percentage.toFixed(2));

        // Jouer les applaudissements si le score est de 100%
        if (percentage === 100) {
            playApplauseSound();
        }
    }

    function playErrorSound() {
        const errorSound = new Audio('assets/sounds/rire1.mp3');
        errorSound.play().catch(e => console.error("Error playing error sound:", e));
    }

    function playSuccessSound() {
        const successSound = new Audio('assets/sounds/ding.mp3');
        successSound.play().catch(e => console.error("Error playing success sound:", e));
    }

   function playApplauseSound() {
        const applauseSound = new Audio('assets/sounds/applause.mp3');
        applauseSound.play().catch(e => console.error("Error playing applause sound:", e));
    }
      function playPauseSound() {
        console.log("Playing pause sound"); 
        const pauseSound = new Audio('assets/sounds/arigato.mp3');
        pauseSound.play().catch(e => console.error("Error playing pause sound:", e));
    }

    function showErrorFeedback() {
        const feedbackElement = document.getElementById('visualFeedback');
        feedbackElement.style.backgroundColor = 'red';
        setTimeout(() => {
            feedbackElement.style.backgroundColor = 'transparent';
        }, 1000);
    }

    function showSuccessFeedback() {
        const feedbackElement = document.getElementById('visualFeedback');
        feedbackElement.style.backgroundColor = 'green';
        setTimeout(() => {
            feedbackElement.style.backgroundColor = 'transparent';
        }, 1000);
    }
});