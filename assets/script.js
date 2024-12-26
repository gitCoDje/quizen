const nextButton = document.getElementById("next-button");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const questionContainer = document.getElementById("question-container");
const resultContainerFinal = document.getElementById("result-container-final");
const quizContainer = document.getElementById("quiz-container");

let isHardMode = false; // Variable pour le mode difficile

document.getElementById('hard-mode-checkbox').addEventListener('change', function() {
  isHardMode = this.checked; // true si coché, false sinon
  console.log('isHardMode:', isHardMode); // Affiche la valeur dans la console
});

document.getElementById('start-button').addEventListener('click', function() {
  // Ici, vous pouvez utiliser la valeur de isHardMode pour démarrer le quiz
  console.log('Démarrer le quiz avec isHardMode:', isHardMode);
});

const startButton = document.getElementById("start-button");

startButton.onclick = () => {
  const selectedTheme = document.getElementById("theme").value; // Récupérer le thème sélectionné
  startQuiz(selectedTheme, isHardMode); // Démarrer le quiz avec le thème sélectionné
};

// Fonction pour mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let questions = [];
let currentTheme = ""; // Variable pour stocker le thème actuel
let test = false;

// Fonction pour démarrer le quiz
function startQuiz(theme, hardMode = false) {
  currentQuestionIndex = 0;
  score = 0;
  currentTheme = theme; // Stocker le thème actuel
  isHardMode = hardMode; // Mettre à jour le mode difficile
  console.log("Thème choisi : " + theme);

  // Objet contenant les thèmes et leurs questions

  // etape 2 --------------------
  const themes = {
    english1: english1,
    english2: english2,
    english3: english3,
    english4: english4,
    english5: english5,
    english6: english6,
    english7: english7,
    english8: english8,
    english9: english9,
    english10: english10,
    english11: english11,
    english12: english12,
    english13: english13,
    english14: english14,
    english15: english15,
    english16: english16,
    english17: english17,
    english18: english18,
    english19: english19,
    english20: english20,
  };

  // Logique pour la liste déroulante
  questions = themes[theme] || []; // Si le thème n'existe pas, questions sera un tableau vide

  // Logique pour choisir les questions selon le thème
  if (theme === "irregularVerbs") {
    const randomSet =
      Math.random() < 0.33
        ? irregularVerbs
        : Math.random() < 0.5
        ? irregularVerbs2
        : irregularVerbs3;
    questions = shuffleArray(randomSet);
  } else if (theme === "english") {

    // Etape 3
    const englishSets = [english1, english2, english3, english4, english5, english6, english7, english8, english9, english10, english11, english12, english13, english14, english15, english16, english17, english18, english19, english20];
    const randomIndex = Math.floor(Math.random() * englishSets.length);
    const randomSet1 = englishSets[Math.floor(Math.random() * englishSets.length)];
    questions = shuffleArray(randomSet1);

    // affiche le theme choisi
    console.log(`Thème choisi : english${randomIndex + 1}`);
}

  totalQuestions = questions.length;
  if (totalQuestions === 0) {
    console.error("Aucune question disponible.");
    return;
  }

  document.getElementById("quiz-container").style.display = "block";
  resultContainer.innerHTML = "";
  document.getElementById("restart-button").style.display = "none";
  document.getElementById("quit-button").style.display = "none";
  document.getElementById("menuContainer").style.display = "none";

  showQuestion();
}

// Fonction pour afficher la question actuelle
function showQuestion() {
  questionContainer.innerHTML = questions[currentQuestionIndex].question;
  optionsContainer.innerHTML = ""; // Vider le conteneur des options

  if (isHardMode) {
    // Créer un champ de saisie pour la réponse
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Tapez votre réponse ici...";
    input.className = "answer-input";
    input.onkeydown = (event) => {
      if (event.key === "Enter") {
        checkAnswer(input.value); // Vérifier la réponse lorsque l'utilisateur appuie sur Entrée
      }
    };
    optionsContainer.appendChild(input);
  } else {
    // Afficher les options comme avant
    questions[currentQuestionIndex].options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.className = "options";
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
}

// Fonction pour vérifier la réponse
function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;

  nextButton.style.display = "inline-block";
  optionsContainer.style.pointerEvents = "none";
  resultContainer.style.display = "block";

  if (selectedOption.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;

    resultContainer.innerHTML = `<p class="correct">Correct ! La bonne réponse est : ${correctAnswer}.</p>`;
  } else {
    resultContainer.innerHTML = `<p class="incorrect">Incorrect ! La bonne réponse est : ${correctAnswer}.</p>`;
  }
}

// Fonction pour passer à la question suivante
function nextQuestion() {
  test = false;
  optionsContainer.style.pointerEvents = "auto";
  nextButton.style.display = "none";
  resultContainer.style.display = "none";
  currentQuestionIndex++;

  if (currentQuestionIndex < totalQuestions) {
    showQuestion();
  } else {
    optionsContainer.style.display = "none";
    questionContainer.style.display = "none";
    resultContainerFinal.style.display = "block";
    showResult();
  }
}

// Fonction pour afficher le résultat final
function showResult() {
  resultContainerFinal.innerHTML = `Vous avez fait ${
    totalQuestions - score
  } fautes sur ${totalQuestions} questions.<br>`;

  if (score === totalQuestions) {
    resultContainerFinal.innerHTML +=
      "Excellent travail ! Vous avez tout bon !";
  } else if (score >= totalQuestions / 2) {
    resultContainerFinal.innerHTML +=
      "Bon travail ! Vous avez une bonne compréhension.";
  } else {
    resultContainerFinal.innerHTML +=
      "Il semble que vous ayez besoin de plus de pratique.";
  }
  // Afficher les boutons recommencer et quitter
  document.getElementById("restart-button").style.display = "block";
  document.getElementById("quit-button").style.display = "block";
}

// Fonction pour redémarrer le quiz
function restartQuiz() {
  currentQuestionIndex = 0; // Réinitialiser l'index des questions
  score = 0; // Réinitialiser le score

  // Cacher les éléments du quiz
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.innerHTML = "";
  optionsContainer.style.display = "block";
  questionContainer.style.display = "block";
  resultContainerFinal.style.display = "none";
  quizContainer.style.display = "block";

  // Cacher les boutons de redémarrage et de quitter
  document.getElementById("restart-button").style.display = "none";
  document.getElementById("quit-button").style.display = "none";

  // Relancer le quiz avec le même thème et le mode actuel
  startQuiz(currentTheme, isHardMode); // Utiliser le thème et le mode stockés
}

// Fonction pour quitter le quiz
function quitQuiz() {
  window.location.reload(true);
}
