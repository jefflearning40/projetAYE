document.addEventListener('DOMContentLoaded', function() {
  const exerciseButton = document.getElementById('exerciseButton');
  const qcmSection = document.getElementById('qcmSection');
  const qcmForm = document.getElementById('qcmForm');
  const nextButton = document.getElementById('nextQuestion');
  const questionCounter = document.getElementById('questionCounter');
  const questions = document.querySelectorAll('#qcmSection .question');
  const scorePopup = document.getElementById('scorePopup');
  const finalScoreDisplay = document.getElementById('finalScore');
  const closePopupButton = scorePopup.querySelector('.close-btn');

  let currentQuestionIndex = 0;
  let score = 0;
  const correctAnswers = {
    q1: 'went',
    q2: 'eaten',
    q3: 'saw',
    q4: 'drunk',
    q5: 'took',
    q6: 'spoken',
    q7: 'wrote',
    q8: 'driven',
    q9: 'come',
    q10: 'been'
  };

  function showQuestion(index) {
    questions.forEach(question => question.style.display = 'none');
    questions[index].style.display = 'block';
    questionCounter.textContent = `${index + 1}/${questions.length}`;
    if (index === questions.length - 1) {
      nextButton.textContent = 'Terminer';
    } else {
      nextButton.textContent = 'Suivant';
    }
  }

  function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${currentQuestionIndex + 1}`]) {
      score++;
    }
  }

  function nextQuestionHandler() {
    checkAnswer();
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
    } else {
      // Fin du QCM
      finalScoreDisplay.textContent = `Vous avez obtenu ${score} / ${questions.length}`;
      scorePopup.style.display = 'flex'; // Affiche le popup
      qcmSection.style.display = 'none'; // Cache la section QCM APRÈS l'affichage du popup
    }
  }

  function closePopup() {
    scorePopup.style.display = 'none';
    // Vous pouvez réinitialiser le QCM ici si vous le souhaitez
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionIndex);
    nextButton.textContent = 'Suivant';
    qcmSection.style.display = 'none'; // Cache à nouveau le QCM pour la prochaine tentative
  }

  if (exerciseButton && qcmSection) {
    exerciseButton.addEventListener('click', function() {
      currentQuestionIndex = 0;
      score = 0;
      showQuestion(currentQuestionIndex);
      qcmSection.style.display = 'block';
    });
  }

  nextButton.addEventListener('click', nextQuestionHandler);
  closePopupButton.addEventListener('click', closePopup);

  // Initialise l'affichage de la première question au chargement si la section est visible
  if (qcmSection && qcmSection.style.display === 'block') {
    showQuestion(0);
  }
});