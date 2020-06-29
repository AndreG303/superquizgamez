
var timeEl = document.getElementById("time");
var questionTitle = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var startButton = document.getElementById("startButton");
var submitButton = document.querySelector("button.submitButton");
var uScoreEl = document.getElementById("uScore");

var secondsLeft = (questions.length * 20 + 1);
var userNameInput;
var questionNumber = -1;
var answer;
var questions;
var answerButton;

// timer starts and the main content changes to questions
function startTimer() {

    document.getElementById("main-content").classList.add('d-none');
    document.getElementById("start").classList.remove('d-none');
    setTimer();
    initializeQuestion();
}

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;


        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

// When the question is answered the user is presented with another question
function initializeQuestion() {
    questionNumber++;
    if (questionNumber !== 12) {
        answer = questions[questionNumber].answer;
        questionTitle.textContent = questions[questionNumber].title;
        answerChoices.innerHTML = "";

        var choices = questions[questionNumber].choices;
        for (var q = 0; q < choices.length; q++) {
            var nextChoice = document.createElement("button");

            nextChoice.textContent = choices[q];
            answerButton = answerChoices
                .appendChild(nextChoice)
                .setAttribute("class", "p-3 m-1 btn btn-light btn-block");
        }
    }
}

// Right or Wrong feedback to user - when user answers incorrectly time is substracted from the clock
function hideFeedback() {
    var pEl = document.getElementsByClassName("feedback")[0];
    pEl.style.display = 'none';
}

function showFeedback() {
    var pEl = document.getElementsByClassName("feedback")[0];
    pEl.removeAttribute('style');
}

answerChoices.addEventListener("click", function (event) {
    var pEl = document.getElementsByClassName("feedback")[0];

    if (answer === event.target.textContent) {
        pEl.innerHTML = "YOU GOT IT RIGHT!";
        setTimeout(hideFeedback, 1000);
        showFeedback();
    } else {
        pEl.innerHTML = "YOU GOT IT WRONG!";
        setTimeout(hideFeedback, 1000);
        secondsLeft = secondsLeft - 10;
        showFeedback();
    }
    initializeQuestion();
});

// Score is displayed to user and the score is = time left on clock
function displayScore() {
    document.getElementById("start").classList.add('d-none');
    document.getElementById("subScore").classList.remove('d-none');
    uScoreEl.textContent = "Final Score " + secondsLeft + ".";
}

// Event listeners for start and submit buttons
startButton.addEventListener("click", startTimer);
submitButton.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();

    window.location.href = './highscores.html';
});

// User name and score input
function addScore() {
    userNameInput = document.getElementById("uName").value;
    var newScore = {
        name: userNameInput,
        score: secondsLeft
    };

//Local storage data recovery and push
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

    highScores.push(newScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

}
