const nextButton = document.getElementById("next-button");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const questionContainer = document.getElementById("question-container");
const resultContainerFinal = document.getElementById(
  "result-container-final"
);
const quizContainer = document.getElementById("quiz-container");

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

function startQuiz(theme) {
  currentQuestionIndex = 0;
  score = 0;
  console.log("Thème choisi : " + theme);
  if (theme === "irregularVerbs") {
    // Choisir aléatoirement entre les deux ensembles de verbes irréguliers
    const randomSet =
      Math.random() < 0.25
        ? irregularVerbs
        : Math.random() < 0.5
        ? irregularVerbs2
        : irregularVerbs3;
    console.log(
      "Ensemble de verbes irréguliers choisi : ",
      randomSet === irregularVerbs
        ? "irregularVerbs"
        : randomSet === irregularVerbs2
        ? "irregularVerbs2"
        : "irregularVerbs3"
    );
    questions = shuffleArray(randomSet);
  } else if (theme === "english") {
    const randomSet1 =
      Math.random() < 0.25
        ? english
        : Math.random() < 0.5
        ? english2
        : english3;
    console.log(
      "Ensemble de verbes irréguliers choisi : ",
      randomSet1 === english
        ? "english"
        : randomSet1 === english2
        ? "english2"
        : "english3"
    );
    questions = shuffleArray(randomSet1);
  }

  totalQuestions = questions.length;
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("restart-button").style.display = "none";
  document.getElementById("quit-button").style.display = "none";
  document.getElementById("menuContainer").style.display = "none";

  showQuestion();
}

function showQuestion() {
  questionContainer.innerHTML = questions[currentQuestionIndex].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestionIndex].options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.className = "options";
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;

  nextButton.style.display = "inline-block";
  console.log("cool");
  optionsContainer.style.pointerEvents = "none";
  resultContainer.style.display = "block";

  if (selectedOption.toLowerCase() === correctAnswer.toLowerCase()) {
    console.log("coucou1");
    score++;
    resultContainer.innerHTML = `<p class="correct">Correct ! La bonne réponse est : ${correctAnswer}.</p>`;
  } else {
    resultContainer.innerHTML = `<p class="incorrect">Incorrect ! La bonne réponse est : ${correctAnswer}.</p>`;
  }
  // nextQuestion();
}

function nextQuestion() {
  optionsContainer.style.pointerEvents = "auto";
  nextButton.style.display = "none";
  resultContainer.style.display = "none";
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    setTimeout(showQuestion, 20); // Pause de 2 secondes avant de montrer la prochaine question
  } else {
    optionsContainer.style.display = "none";
    questionContainer.style.display = "none";
    resultContainerFinal.style.display = "block";
    showResult();
  }
}

function showResult() {
  const resultContainer = document.getElementById(
    "result-container-final"
  );
  resultContainer.innerHTML = `Vous avez fait ${
    totalQuestions - score
  } fautes sur ${totalQuestions} questions.<br>`;
  if (score === totalQuestions) {
    resultContainer.innerHTML +=
      "Excellent travail ! Vous avez tout bon !";
  } else if (score >= totalQuestions / 2) {
    resultContainer.innerHTML +=
      "Bon travail ! Vous avez une bonne compréhension.";
  } else {
    resultContainer.innerHTML +=
      "Il semble que vous ayez besoin de plus de pratique.";
  }

  // Afficher les boutons recommencer et quitter
  document.getElementById("restart-button").style.display = "block";
  document.getElementById("quit-button").style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").innerHTML = "";  
  optionsContainer.style.display = "block";
  questionContainer.style.display = "block";
  resultContainerFinal.style.display = "none";
  quizContainer.style.display = "block";
  document.getElementById("restart-button").style.display = "none";
  document.getElementById("quit-button").style.display = "none";

}

function quitQuiz() {
  location.reload();
}
