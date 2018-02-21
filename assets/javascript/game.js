
var colors = ["red", "blue", "green", "white", "yellow", "black", "purple", "orange"];

var wordSelector = colors[Math.floor(Math.random()*colors.length)];
console.log(wordSelector);

var remainingLtrs = wordSelector.length;


var goodGuess = document.getElementById("goodGuess");

var badGuess = document.getElementById("badGuess");

var attempts = document.getElementById("attempts");

var wins = document.getElementById("wins");

var loses = document.getElementById("loses");




var blankSpc = [];

var wrongGuess = [];


for (var i = 0; i < wordSelector.length; i++){
    blankSpc[i] = "_";
    console.log(blankSpc);
}

goodGuess.innerHTML = blankSpc.join(" ");

// ///////////////////////////////////////////// Experimental Line



document.onkeypress = function(event){
var userGuess = String.fromCharCode(event.which);
    for(var j = 0; j < wordSelector.length; j++){
        if(wordSelector[j] === userGuess){
            blankSpc[j] = userGuess;
            goodGuess.innerHTML = blankSpc.join(" ");
            console.log(blankSpc);
        }
    }
}














 
