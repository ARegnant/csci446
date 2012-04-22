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
	$('div#highScores').text("");
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
	$('h2#score').text("");
	if (score == 1) {
		$('h2#score').text(score + " guess left");
	} else {
		$('h2#score').text(score + " guesses left");
	}
}

function addScore(){
	highScores.push([guessesLeft,document.getElementById("name").value]);
	populateHighScores(highScores);
	document.getElementById('newScore').style.display="none";
	document.getElementById('output').style.display="none";
}

function yourGuess() {
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
	
	if (isNaN(guess) || guess == "" || guess == " "){
		guesses.innerText = "Bad input!";
	} else if (guessesLeft == 1) {
		guessesLeft = 0;
		updateScore(guessesLeft);
		guesses.innerText = "YOU LOSE";
		document.getElementById('guess').style.display="none";
		document.getElementById('submit').style.display="none";
		document.getElementById('new').style.display="block";
	} else {
		if (guess == numToGuess) {
			guesses.innerText = "CORRECT";
			guessesLeft = guessesLeft - 1;
			updateScore(guessesLeft);
			document.getElementById('guess').style.display="none";
			document.getElementById('submit').style.display="none";
			document.getElementById('new').style.display="block";
			document.getElementById('newScore').style.display="block";
		} else if (guess > numToGuess) {
			guesses.innerText = "Too High!";
			guessesLeft = guessesLeft - 1;
			updateScore(guessesLeft);
		} else {
			guesses.innerText = "Too Low!";
			guessesLeft = guessesLeft - 1;
			updateScore(guessesLeft);
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

function newGame(){
	generateNumberToGuess();
}