var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// tracking for wins, losses, ties
var wins = 0;
var losses = 0;
var guesses = 10;
var guessChoices = [];




document.onkeypress = function(event) {
    var userGuess = event.key;

    var computerGuess = choices[Math.floor(Math.random() * choices.length)];
    
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        if (options.indexOf(userGuess) > -1) {

            if (userGuess === computerGuess) {

                    wins++;
                    guesses = 10;
                    guessChoices = [];
                    alert ("you've won!");
            }
            if (userGuess != computerGuess) {
                guesses --;
                guessChoices.push(userGuess);
            }
            if (guesses === 0) {
                guesses = 10;
                losses ++;
                guessChoices = [];
                alert ("you've lost, try again");
            }
            

            var html = 
			"<h1> The Psychic Game </h1>" +
			"<h4>Guess the letter!</h4>" +
			"<h4>Wins: " + wins + "</h4>" +
			"<h4>Losses: " + losses + "</h4>" +
			"<h4>Guesses Left: " + guesses + "</h4>" +
			"<h4>Your Guesses: " + guessChoices.join(", ") + "</h4>";


            document.querySelector("#gamecontainer").innerHTML=html;
        }
    };