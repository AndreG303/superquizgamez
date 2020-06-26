
var highscoreDiv = document.querySelector("#highscore");
var gameTimerEl = document.querySelector("#gameTimer");
var quesTimerEl = document.querySelector("#quesTimer");
var mainEl = document.querySelector("#details");
var timerTab = document.querySelector("#timers");


var test = false;
var score = 0;
var quiz = {};
var quizType = "";

var gameDuration = 0;
var gameSecElapsed = 0;
var gameInterval;

var questionDuration = 15;
var questionSecElapsed = 0;
var questionInterval;

