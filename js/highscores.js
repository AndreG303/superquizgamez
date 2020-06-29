var restartButton = document.querySelector("button.restartButton"),
    clearButton = document.querySelector("button.clearButton"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("hsList");

    // sort scores from high to low
    highScores.sort(function (a,b){
        return b.score - a.score;
    });

    // display the scores
    for (var s = 0; s < highScores.length; s++) {
        var newLi = document.createElement("li");
        newLi.textContent = highScores[s].name + " - " + highScores[s].score;
        scoreList.appendChild(newLi);
    }


// click handlers for restart and clearing scoreboard
clearButton.addEventListener("click", function () {
    localStorage.clear();
    history.back();
});
restartButton.addEventListener("click", function () {
    history.back();
});