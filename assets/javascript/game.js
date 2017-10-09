/*
Put the letters of a word into an array 

Ask the user to select a Dificulty 

Create a function to play different words

This function will have to compare the guesses to the 
array chosen 


*/

// INIT 
// PROCESS
// OUTPUT


// 

//========== VARIABLE DECRORATIONS ===================== 
var planet = ["p", "l", "a", "n", "e", "t"]
var universe = ["u", "n", "i", "v", "e", "r", "s", "e"]
var solarSystem = ["s", "o", "l", "a", "r", "s", "y", "s", "t", "e", "m"]

var game = document.getElementById("game");
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

var guessesEasy = document.getElementById("guessesEasy");
var guessesMed = document.getElementById("guessesMed");
var guessesHard = document.getElementById("guessesHard");

var guessesLeft = 10;
var wins = 0;

easy.style.display = "none";
medium.style.display = "none";
hard.style.display = "none";

//========== FUNCTION ==================
function reappear(show) {

    if (show === easy) {
        
        easy.style.display = "block";
        medium.style.display = "none";
        hard.style.display = "none";
        hangmanGame(planet, "easy" , guessesEasy);
    
    } else if (show === medium) {
        
        easy.style.display = "none";
        medium.style.display = "block";
        hard.style.display = "none";
        hangmanGame(universe, "medium", guessesMed);
    
    } else if (show === hard) {
    
        easy.style.display = "none";
        medium.style.display = "none";
        hard.style.display = "block";
        hangmanGame(solarSystem, "hard" , guessesHard);
    
    }
}

function hangmanGame(gameWord, difficulty, guesses) {
		guesses.innerHTML = guessesLeft;
    
    document.onkeyup = function(event) {
        var pressedKey = event.key.toLowerCase();

        console.log(pressedKey);
        
        var foundIndex = gameWord.indexOf(pressedKey);
        
        if (foundIndex !== -1) {
            
            console.log(difficulty + (foundIndex + 1))

            document.getElementById(difficulty + (foundIndex + 1).toString()).innerHTML = gameWord[foundIndex]; 
            
            // diffi..ulty + id 
        } else {
        	guessesLeft--;
			guesses.innerHTML = guessesLeft;
        	if(guessesLeft === 0){
        		alert("You ran out of guesses!");
        		if(gameWord === easy){
        			reappear(medium);
        		}else if(gameWord === medium){
        			reappear(hard);
        		}else if(gameWord === hard){
        			reappear(easy);
        		}
        	}
        }
        
	}
}

