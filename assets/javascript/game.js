
var wordSelection = [
    "barrel",
    "hangloose",
    "gnarly",
    "shred",
    "pitted",
    "hangten",
    "hawaii",
    "mavericks",
];

var maxTries = 10;  //Maximum attempts for the user
var guessedLetters = [];  //stores user's guessed letters
var currentWordIndex; //index of word array
var guessingWord = []; //the word user is trying to match
var remainGuess = 0; //how many attempts the user has left
var wins = 0;         // How many wins user has  
var gameStart = false;  // Tells user game has started
var userGuess;

// variables for random word generator
var length;// wordSelection.length; 
var randomSelection; //Math.floor((Math.random() * length));
var selectedWord; //wordSelection[randomSelection];
// split variable word into array
var selectedWord; //selectedWord.split("");




// resets global variables 
function resetPage() {
 length = wordSelection.length; 
 randomSelection =Math.floor((Math.random() * length));
 selectedWord =  wordSelection[randomSelection];
 selectedWord=selectedWord.split("");
}

// creates div for each letter pertaining to array, puts in "guessing word"
function generateBlank() {
    for (var i=0; i < selectedWord.length; i++) {
     var targetDiv=document.getElementById("guessingWord");
     var newText=document.createElement("div")
      newText.innerHTML= "_";
      newText.setAttribute("style","float:left")
      targetDiv.appendChild(newText);
      newText.setAttribute("id", "elem" + i);
    };
    }



if (guessingWord.length === 0) {
    resetPage();
    generateBlank();
};
// on keyup event
document.onkeyup = function(event) {
userGuess = event.key;


//do some stuff if a match
for (var i=0; i < selectedWord.length; i++) {
    if (userGuess === selectedWord[i]) 
    {
        // var matchedLetter=selectedWord.indexOf(userGuess);
        document.querySelector( "#elem" + i + "").innerHTML=userGuess;
    
        //subtract from guesses left
    };
};
//do some stuff if no match
return userGuess;





};
















