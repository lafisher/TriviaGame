//let's psuedo code this B
//create global variable []s for questions, multiple choice, and correct answers
//ensure arrays coralate with one another corectly  
//create game form in html? append to? 
//create timewrapper 
//create if else for right answer, wrong answer, time out 
//tally correct and incorect answers 
//play music when time runs out 
//display "you win" or "you lose" gifs or jpgs
//reset button. my old enemy 
var startGame;
var questions =[];
var choices =[];
var answers =[];
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswer = 0;
var timeWarp = 30;
var chooseAnswer;
var tickTock;
var audio = new Audio("assets/rhps-jump2lft.wav");

//audio.play();

setTimeout(lostInTime, 1000 * 90);

function lostInTime() {

 $("#finalCountDown").append("<h2>setTimeout</h2>");
  audio.play();
};