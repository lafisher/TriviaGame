$(document).ready(function() {

//let's psuedo code this B
//create global variable []s for questions, multiple choice, and correct answers
//ensure arrays coralate with one another corectly  
//append questions to html  
//create timewrapper 
//create if else for right answer, wrong answer, time out 
//tally correct and incorect answers 
//display "you win", "you lose", or timeout gifs or jpgs
//play mthe timewarp at the end of the game 
//reset button. my old enemy 
var startGame; 
var questions =["Richard O'Brien, who wrote the musical on which the movie was based, portrayed what character in the film version?", "The movie marked the feature film debut of which one of these principal actors?", "What was the title of Richard O'Brien's not-quite-sequel movie from 1980 that placed new actors in the roles of Brad and Janet?", "Which character in the film is the first to be turned into a statue by the Medusa Transducer?", "Known as The Home of Happiness, name the town in which the motion picture is set.", "Which cast member's mouth lip-synchs along with Science Fiction Double Feature during the opening credits of the film?","In 1990, the movie was released on VHS in the United States for the very first time. What was the retail price of this videocassette?","Near the movie's beginning, what historic event can be heard on the radio (and seen in the newspaper headline) when Brad and Janet are in the car on the way to Dr. Scott's home?","What song appeared on the Original Motion Picture Soundtrack, but was edited out of the U.S. version of the film?","What was the MPAA letter rating given to The Rocky Horror Picture Show?"];
var choices = [["Frank N. Furter", "Riff-Raff", "Brad Majors" , "Eddie" ], ["Meat Loaf", "Susan Sarandon", "Barry Bostwick", "Tim Curry"],["The Road to Transylvania", "Rocky's Revenge", "Crazy Sun", "Shock Treatment"],["Brad", "Dr. Scott", "Rocky", "Janet"],["Canton", "Denton", "Fenton", "Wharton"],["Meat Loaf (Eddie)", "Susan Sarandon (Janet)", "Patricia Quinn (Magenta)", "Tim Curry (Frank)"],["$12.95", "$29.95", "$49.95", "$89.95"],["the resignation of Richard Nixon", "the Three Mile Island nuclear accident" ,"the beginning of the Tet Offensive" ,"the breakup of the Beatles"],["Once in a While", "The Sword of Damocles", "Planet Schmanet Janet", "Super Heroes"],["PG", "PG-13", "R", "Not rated"]];
var answers =["b) Riff-Raff", "d) Tim Curry", "d) Shock Treatment","a) Brad", "b) Denton","c) Patricia Quinn (Magenta)", "d) $89.95","a) the resignation of Richard Nixon","d) Super Heroes", "c) R"];
var imageArray =[]
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswer = 0;
var chooseAnswer;
var gamePlay; 
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
//on click event to start game play
$("body").on("click", ".start-button", function(event){
	
function letThereBeQuestions() {
	gamePlay = "<p class='text-center'>" + questions[questionsLeft] + "</p><p class='first-answer answer'>a) " + choices[questionsLeft][0] + "</p><p class='answer'>b) " + choices[questionsLeft][1] + "</p><p class='answer'>c) " + choices[questionsLeft][2] + "</p><p class='answer'>d) " + choices[questionsLeft][3] + "</p>";
	$(".theLab").html(gamePlay);
}
letThereBeQuestions();

});
//on click event to choose answer 
//note to self - come up with a better naming system answer and answers not so much
$("body").on("click", ".answer", function(event){
	
	chooseAnswer = $(this).text();
	if(chooseAnswer === answers[questionsLeft]) {
		
		clearInterval(countdown);
		generateWin();
	}
	else {
		
		clearInterval(countdown);
		generateLoss();
	}
});

//recognize correct answer
function generateWin() {
	correctAnswers++;
	gamePlay = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + countdown + "</span></p>" + "<p class='text-center'>Yes! time for the floor show!" + answers[questionsLeft] + "</p>" ;
	$(".theLab").html(gamePlay);
	setTimeout(wait, 4000);  
};

//recognize incorrect answer 
function generateLoss() {
	incorrectAnswers++;
	gamePlay = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + countdown + "</span></p>" + "<p class='text-center'>Oh Rocky! must have half your brain" + answers[questionsLeft] + "</p>" ;
	$(".theLab").html(gamePlay);
	setTimeout(wait, 4000); 
};

//timer function 
//problem- countdown is inside, other functions can't see. tried to seperate. broke the world
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
			 audio.play();
		}
		else {
			$(".timer").html("<div id='finalCountDown'><h5>Time Warp in  . . . " + timeLeft + "</h5></div>");
			timeLeft--;
		}
	};

};
lostInTime(); // and lost in space. and meaning. 
})









