/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
(function(){
var winningNumber = generateWinningNumber();
var guesses = [];
var playersGuess;

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	return Math.floor(Math.random() * 99 + 1);
}
function playersGuessSubmission(){
	// add code here
	playersGuess = +$('#input').value;
	$('#input').value = "";
	checkGuess();
}

// Fetch the Players Guess

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
	if(playersGuess < winningNumber){
		message+=" Your number is too low!";
	}
	else if(playersGuess > winningNumber){
		message+=" Your number is too high!";
	}
}

function guessMessage(){
	lowerOrHigher();
	if (Math.abs(playersGuess-winningNumber) <= 5){
		message+=" You are within 5 digits of my number";
	}
	else if (Math.abs(playersGuess-winningNumber) > 5 && Math.abs(playersGuess-winningNumber) <= 10){
		message+=" You are within 10 digits of my number";
	}
	else if (Math.abs(playersGuess-winningNumber) > 10 && Math.abs(playersGuess-winningNumber) <= 15){
		message+=" You are within 15 digits of my number";
	}
}
// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
	for(var i = 0; i < guesses.length; i++){
		if (guesses[i] == playersGuess){
			$('p').text('You already guessed that! Try a new number.');
		}
	}

	if (guesses.length > 5){
		$('p').text('You used all five guesses! Press the Play Again! button to try again.');
	}
	else if(winningNumber == playersGuess){
		$('p').text('You win!');
	}

	else {
		guesses.push(playersGuess);
		var message = 'Try again!'
		guessMessage();
		$('p').text(message);
	}

}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
		var hint = "Your number is one of the following numbers: " + winningNumber + ", 2, 58.";
		
		$('p').text(hint);
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
		$('p').text("");
		winningNumber = generateWinningNumber();

}


/* **** Event Listeners/Handlers ****  */
$(document).ready(function(){
	$('p').css({'color' : '#00bf00', 'font-family' : 'Arial', 'font-size' : '20px'})
	$('#number').on('click', playersGuessSubmission);
	$('#input').on('enter', playersGuessSubmission)
	$('#playAgain').on('click', playAgain);
	$('#hint').on('click', provideHint);

});
})();
