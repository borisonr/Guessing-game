/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.




/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	// add code here
	var winningNumber = Math.floor(Math.random() * 99 + 1);
}

// Fetch the Players Guess
$(document).ready(function(){
	$('#number').on('click', function playersGuessSubmission(){
	// add code here
	var playersGuess = +$('#input').Val();
});
});

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */

