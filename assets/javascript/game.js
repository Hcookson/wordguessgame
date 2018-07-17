
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

const maxTries = 10;  //Maximum attempts for the user
var remainGuess = [];  //stores user's guessed letters
var currentWordIndex; //index of word array
var guessingWord = []; //the word user is trying to match
var remainGuess = 0; //how many attempts the user has left
var wins = 0;         // How many wins user has  
var gameStart = false;  // Tells user game has started

// variables for random word generator
var length = wordSelection.length; 
var randomSelection =Math.floor((Math.random() * length));
var selectedWord =  wordSelection[randomSelection];

// split variable word into array
var selectedWord=selectedWord.split("");

for (var i=0; i < selectedWord.length; i++) {
 var targetDiv=document.getElementById("guessingWord");
 var newText=document.createElement("div")
  newText.innerHTML= "_";
  newText.setAttribute("style","float:left")
  targetDiv.appendChild(newText);
  newText.setAttribute("Id",i);

};



// 

    



















