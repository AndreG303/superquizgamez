// Button variables  
var restartButton = document.querySelector("button.restartButton");
var clearButton = document.querySelector("button.clearButton");
// Get high scores from local storage 
var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
var scoreList = document.getElementById("hsList");

// Sort scores from high to low
highScores.sort(function (a, b) {
    return b.score - a.score;
});

//dispaly scores
for (var s = 0; s < highScores.length; s++) {
    var newLi = document.createElement("li");
    newLi.textContent = highScores[s].name + " - " + highScores[s].score;
    scoreList.appendChild(newLi);
}

// event listeners to restart and clear scoreboard
clearButton.addEventListener("click", function () {
    localStorage.clear();
    history.back();
});
restartButton.addEventListener("click", function () {
    history.back();
});