const questions = [
    { question: "What is Jennie's middle name?", options: ["Marie", "Elizabeth", "Ann", "Rose"], answer: 1 },
    { question: "Where did Jennie and her fiancé meet?", options: ["At a party", "Through friends", "At work", "Online"], answer: 2 },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        showResult();
    } else {
        displayQuestion();
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultElement = document.getElementById("result");

    quizContainer.style.display = "none";
    resultElement.innerText = `Game over! You scored ${score} out of ${questions.length}.`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        showResult();
    } else {
        displayQuestion();
    }
}

displayQuestion();
