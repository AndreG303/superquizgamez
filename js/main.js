

var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var playButton = document.querySelector("#button");
var QuestionElements = document.querySelector("#questions");
var AnswersElements = document.querySelector("#answers");
var NameInput = document.querySelector("#name");
var ScoreInput = document.querySelector("#score");

var Index = 0;
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var userAnswer = 0;


function runClockCb() {
    secondsElapsed++;
    minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60)
    secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;

}


function startTimer() {

    var minutes = 10;
    totalSeconds = minutes * 60;
    console.log(totalSeconds)
    secondsElapsed = 0;
    if (typeof interval !== 'undefined') {
        (clearInterval(interval));
    }

    interval = setInterval(runClockCb, 1000);
    DisplayQuestions();
}

playButton.addEventListener("click", startTimer);



var Questions = [
    {
        title: "is the sky blue",
        answers: ["a", "b", "c", "d"],
        correct: "b",
        userAnswer: null
    },
    {
        title: "is the sky green",
        answers: ["a", "b", "c", "d"],
        correct: "c",
        userAnswer: null
    },
    {
        title: "is the sky red",
        answers: ["a", "b", "c", "d"],
        correct: "a",
        userAnswer: null
    }
]

function DisplayQuestions(){
QuestionElements.textContent = Questions[Index].title
for (var i = 0; i < Questions[Index].answers.length;i++){
    var answerButtons = document.createElement("button")
    answerButtons.textContent = Questions[Index].answers[i]
    AnswersElements.appendChild(answerButtons)
}
}

// if (userAnswer === "correct") {
// }
// else {secondsElapsed = secondsElapsed + 1;

// }

// var highScore ={
//     name:""
//     points: 1000
// };
 
// localStorage.setItem("user", JSON.stringify("user"));
// localStorage.setItem ("highScore", JSON.stringify("highScore"));

// var score = JSON.parse(localStorage.getItem("highScore"));
//     scoreNameSpan.textContent = score.Name;
//     scoreNameSpan.textContent = score.Name;
    