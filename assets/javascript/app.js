$(document).ready(function() {

//let's psuedo code this B
//create global variable []s for questions, multiple choice, and correct answers
//ensure arrays coralate with one another corectly  
//append questions to html  
//create timewrapper 
//create if else for right answer, wrong answer, time out 
//tally correct and incorect answers 
//play music when time runs out 
//display "you win" or "you lose" gifs or jpgs
//reset button. my old enemy 
var startGame; // var startScreen;
 //var questionArray
var questions =["Richard O'Brien, who wrote the musical on which the movie was based, portrayed what character in the film version?", "The movie marked the feature film debut of which one of these principal actors?", "What was the title of Richard O'Brien's not-quite-sequel movie from 1980 that placed new actors in the roles of Brad and Janet?", "Which character in the film is the first to be turned into a statue by the Medusa Transducer?", "Known as The Home of Happiness, name the town in which the motion picture is set.", "Which cast member's mouth lip-synchs along with Science Fiction Double Feature during the opening credits of the film?","In 1990, the movie was released on VHS in the United States for the very first time. What was the retail price of this videocassette?","Near the movie's beginning, what historic event can be heard on the radio (and seen in the newspaper headline) when Brad and Janet are in the car on the way to Dr. Scott's home?","What song appeared on the Original Motion Picture Soundtrack, but was edited out of the U.S. version of the film?","What was the MPAA letter rating given to The Rocky Horror Picture Show?"];
//var answerArray
var choices = [["FrankNFurter", "Riff-Raff", "Brad Majors" , "Eddie" ], ["Meat Loaf", "Susan Sarandon", "Barry Bostwick", "Tim Curry"],["The Road to Transylvania", "Rocky's Revenge", "Crazy Sun", "Shock Treatment"],["Brad", "Dr. Scott", "Rocky", "Janet"],["Canton", "Denton", "Fenton", "Wharton"],["Meat Loaf (Eddie)", "Susan Sarandon (Janet)", "Patricia Quinn (Magenta)", "Tim Curry (Frank)"],["$12.95", "$29.95", "$49.95", "$89.95"],["the resignation of Richard Nixon", "the Three Mile Island nuclear accident" ,"the beginning of the Tet Offensive" ,"the breakup of the Beatles"],["Once in a While", "The Sword of Damocles", "Planet Schmanet Janet", "Super Heroes"],["PG", "PG-13", "R", "Not rated"]];
//var correctAnswers
var answers =["Riff-Raff", "Tim Curry", "Shock Treatment","Brad", "Denton","Patricia Quinn (Magenta)", "$89.95","the resignation of Richard Nixon","Super Heroes", "R"];
// var imageArray 
var imageArray =[]
//var correctTally
var correctAnswers = 0;
//incorrectTally
var incorrectAnswers = 0;
//unansweredTally
var noAnswer = 0;
//var selecterAnswer;
var chooseAnswer;
//gameHTML 
var gamePlay; 
//var questionCounter
var questionsLeft = 0; 
var timerNum;
var audio = new Audio("assets/rhps-jump2lft.wav");

//audio.play();
//oh look a bootstrap button i don't entirely understand. but i changed it to DANGER and that's nice
function initialize() {
	startGame = "<p class='text-center main-button-container'><a class='btn btn-danger btn-lg start-button' href='#' role='button'>Damnit Janet</a></p>";
	$(".theLab").html(startGame);
}

initialize();


function lostInTime() {

//set countdown to starting time
	var timeLeft = 25;
//set interval to create countdown 
	timerNum = setInterval(countdown, 1000);

	$(".timer").html("<div id='finalCountDown'><h5>Time Warp in . . .  " + timeLeft + "</h5></div>");
 
  			function countdown() {
		if (timeLeft < 0) {
			clearInterval(timerNum);
			$(".theLab").append( "ak! You've been Medusa Transducered!");		
			//questionsLeft++;
			//setTimeout(showQuestions, 3000);
			 audio.play();
		
		}
		else {
			$(".timer").html("<div id='finalCountDown'><h5>Time Warp in  . . . " + timeLeft + "</h5></div>");
			timeLeft--;
		}
	};

};
lostInTime();
})









