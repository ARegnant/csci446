var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

$(function() {
  updateScore(guessesLeft);
  populateHighScores(highScores);
});

window.onload = function(){
    generateNumberToGuess();
}

function generateNumberToGuess(confirmIt) {
    numToGuess = Math.floor(Math.random()*100)+1;
}

function populateHighScores(scores) {
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').append(score);
}

function yourGuess() {
	guessesLeft = guessesLeft - 1;
	updateScore(guessesLeft);
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
	
	if (isNaN(guess) || guess == "" || guess == " "){
		guesses.innerText = "Bad input!";
	} else {
		if (guess == numToGuess) {
			guesses.innerText = "You have guessed correctly!";
		} else if (guess > numToGuess) {
			guesses.innerText = "You guessing too high!";
		} else {
			guesses.innerText = "You guessing too low!";
		}
	}
}

function showNumberToGuess() {
    if (document.getElementById('cheat').checked) {
        document.getElementById('numberToGuess').value = numToGuess;
        document.getElementById('cheatShow').style.display = 'inline';
    } else {
        document.getElementById('numberToGuess').value = '';
        document.getElementById('cheatShow').style.display = 'none';
    }
}