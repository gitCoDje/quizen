const nextButton = document.getElementById("next-button");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const questionContainer = document.getElementById("question-container");
const resultContainerFinal = document.getElementById("result-container-final");
const quizContainer = document.getElementById("quiz-container");

let isHardMode = false; // Variable pour le mode difficile

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
    const randomSet1 =
      Math.random() < 0.2
        ? english
        : Math.random() < 0.4
        ? english2
        : Math.random() < 0.6
        ? english3
        : Math.random() < 0.8
        ? english4
        : english5;
    questions = shuffleArray(randomSet1);
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




