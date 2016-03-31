/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
(function(){
var winningNumber = generateWinningNumber();

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	return Math.floor(Math.random() * 99 + 1);
}
function playersGuessSubmission(){
	// add code here
	var playersGuess = +$('#input').value;
	checkGuess();
	$('#input').value = "";
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
	var guesses = [];
	if(winningNumber == playersGuess){
		var message = $('<h2>You win!</h2>');
		$('#number').append(message);
	}
	
	else if (!playersGuess in guesses){
		guesses.push(playersGuess);
		var message = 'Try again!'
		guessMessage();
		var messageHTML = $('<h2>' + message + '</h2>');
		$('#number').append(messageHTML);
	}
	else if (playersGuess in guesses) {
		var message = $('<h2>You already guessed that! Try a new number.</h2>');
		$('#number').append(message);
	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
	
		var hint = "Your number is one of the following numbers: " + winningNumber + ", " + Math.floor(Math.random() * 99 + 1) + ", " + Math.floor(Math.random() * 99 + 1) + ".";
		var hintHTML = $('<h2>' + hint + '</h2>');
		$('#hint').append(hintHTML);
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
	
		$('#hint').children().remove();
		$('#number').children().remove();
		winningNumber = generateWinningNumber();

}


/* **** Event Listeners/Handlers ****  */
$(document).ready(function(){
	$('#number').on('click', playersGuessSubmission);
	$('#playAgain').on('click', playAgain);
	$('#hint').on('click', provideHint);

});
})();
