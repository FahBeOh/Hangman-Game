// Array/Database for hangman words
var names = ["leslie", "ron", "ben", "april", "andy", "tom", "ann", "chris", "jerry", "donna", "craig"];

// Variable use to "grab" HTML element guess-word for purpose of "printing" random generated name//
var guessName = document.getElementById("guess-word");

// Variable use to "grab" HTML element wrong-guess for purpose of "printing" wrong guessed letters//
var wrongGuess = document.getElementById("wrong-guess");

// Variable that takes "names" array and picks random item from the array//
var word = names[Math.floor(Math.random()*names.length)];
console.log(word)

//Empty array for the purpose of being filled with blank spaces "_"
var blank = [];

var wrongAnswers = [];

var attempts = 10;

// Variable that keeps track of the length/letters of the randomly picked word from the "names" array
var remainingLetters = word.length;

// Loop that adds blank spaces to the "blank" array according to the number of characters in the randomly chosen word from the "names" array

for (var i = 0; i < word.length; i++){
    blank[i] = "_";
}


// Prints the "blanks" array to "guess-word" div and gets rid of the commas in the array and replaces them with spaces
guessName.innerHTML = blank.join(" ");

// Listens to keystrokes from the user/gameplay
document.onkeypress = function(event){
    var userGuess = String.fromCharCode(event.which);
    for(var j = 0; j < word.length; j++){
        if(word[j] === userGuess){
            blank[j] = userGuess;
            guessName.innerHTML = blank.join(" ");
            console.log(blank);
        } 
       
    }

}








 
