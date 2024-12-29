// scriptEval.js
import { evaluation } from './evaluationQuestion.js';

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = evaluation.length;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").innerHTML = ""; // Réinitialiser le résultat
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const currentQuestion = evaluation[currentQuestionIndex];

    questionContainer.innerHTML = currentQuestion.question;
    optionsContainer.innerHTML = ""; // Vider le conteneur des options

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "options";
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = evaluation[currentQuestionIndex].answer;
    const resultContainer = document.getElementById("result-container");

    if (selectedOption.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        resultContainer.innerHTML = `<span class="correct">Correct !</span>`;
    } else {
        resultContainer.innerHTML = `<span class="incorrect">Incorrect ! La bonne réponse est : ${correctAnswer}.</span>`;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `Vous avez fait ${totalQuestions - score} fautes sur ${totalQuestions} questions.<br>`;
    resultContainer.innerHTML += score === totalQuestions ? "Excellent travail ! Vous avez tout bon !" : "Il semble que vous ayez besoin de plus de pratique.";
}

// Démarrer le quiz lorsque le document est prêt
document.addEventListener("DOMContentLoaded", startQuiz);
