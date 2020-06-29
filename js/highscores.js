var restartButton = document.querySelector("button.restartButton");
var clearButton = document.querySelector("button.clearButton");
var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
var scoreList = document.getElementById("hsList");


highScores.sort(function (a, b) {
    return b.score - a.score;
});


for (var s = 0; s < highScores.length; s++) {
    var newLi = document.createElement("li");
    newLi.textContent = highScores[s].name + " - " + highScores[s].score;
    scoreList.appendChild(newLi);
}


clearButton.addEventListener("click", function () {
    localStorage.clear();
    history.back();
});
restartButton.addEventListener("click", function () {
    history.back();
});