# superquizgamez


GIVEN I am taking a code quiz 
WHEN I click the start button (button with an id, event listener)
THEN a timer starts and I am presented with a question

for all the questions need an array of objects
each object should have the keys (question, a, b, c, d, correct, userAnswer)
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly

// setInterval clearInterval (keep track of the timerInterval)
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over

// localstorage and an object with keys (initials and score)
THEN I can save my initials and score

// if you use leaderboard, array of objects
// 1. Bobby 1000
// 2. Jackie 999

/ if(answerButtons[questions]["userAnswer"] === questions["correct"]){
//     score.textContent = "You got it correct";
//     setTimeout(function(){
//         questionIndex++;
//         initializeQuestion();
//         score.textContent= "";
//     }, 1000);
// }
// else{
//     score.textContent = "You got it wrong";
//     setTimeout(function(){
//         questionIndex++;
//         initializeQuestion();
//         score.textContent= "";
//     }, 1000);
// }
// }