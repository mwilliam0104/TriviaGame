$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
	


var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who killed the Emperor??',
	possibleAnswers : ['A. Leia',
				 "B. He didn't die",
				 'C. Darth Vader ',
				 'D. Luke'],
	flags : [false, false, true, false],
	answer : 'C. Darth Vader'
};

var q2 = {
	question: "What is the color of Obi-Wan's lightsaber?",
	possibleAnswers: ['A. Red',
				 'B. Blue',
				 'C. Purple',
				 'D. Green'],
	flags : [false, true, false, false],
	answer : 'B. Blue'
};

var q3 = {
	question : 'Who tells Luke, "Join me and I will complete your training"?',
	possibleAnswers : ['A. The Emperor',
				 'B. Darth Vader',
				 'C. Yoda',
				 'D. Obi-Wan'],
	flags : [false, true, false, false],
	answer : 'B. Darth Vader'
};

var q4 = {
	question : 'What color is the uniform of a TIE fighter pilot?',
	possibleAnswers : ['A. Gray',
				 'B. Green',
				 'C. Dark Blue',
				 'D. Black'],
	flags : [false, false, false, true],
	answer : 'D. Black'
};

var q5 = {
	question : 'What movie does the Emperor first appear in?',
	possibleAnswers : ['A. Episode 4',
				 'B. Episode 5',
				 'C. Episode 3',
				 'D. Episode 6'],
	flags : [false, true, false, false],
	answer : 'B. Episode 5'
};

var q6 = {
	question : "Who was the final rescuer to enter Jabba's palace?",
	possibleAnswers : ['A. Yoda',
				 'B. No one',
				 'C. Anakin',
				 'D. Obi-Wan'],
	flags : [true, false, false, false],
	answer : 'A. Yoda'
};

var q7 = {
	question : 'Who told Luke, "Size matters not"?',
	possibleAnswers : ['A. Obi-Wan',
				 'B. Anakin',
				 'C. Yoda',
				 'D. Han Solo'],
	flags : [false, false, true, false],
	answer : 'C. Yoda'
};

var q8 = {
	question : "What controls a Jedi's actions, but also obeys his commands?",
	possibleAnswers : ['A. Nothing',
				 'B. The Force',
				 'C. A Lightsaber',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. The Force'
};

var q9 = {
	question : 'What did Han use to slice open the belly of his tauntaun?',
	possibleAnswers : ['A. A sword',
				 'B. A knife',
				 'C. A ray-cutter',
				 'D. A Lightsaber'],
	flags : [false, false, false, true],
	answer : 'D. ALightsaber'
};

var q10 = {
	question : "What is R2-D2's name often shortened to?",
	possibleAnswers : ['A. D2',
				  'B. R2',
				  'C. 22',
				  'D. RD'],
	flags : [false, true, false, false],
	answer : 'B. R2'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide("");
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	console.log("correct");
}

function answerWrong() {
	wrong++;
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	if ( correct <= 5){
		$('.question').append("<h2><p>Sorry, young padawan. You still have much to learn.</p></h2>")
	}
	else{
		$('.question').append("<h2><p>The Force is strong indeed!! You are ready!</p></h2>")
	}
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});