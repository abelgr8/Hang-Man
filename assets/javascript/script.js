var words = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "76ers", "suns", "trail blazers", "kings", "spurs", "raptors", "jazz", "wizards",
];

var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 6;

function startGame () {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 6;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // black slides
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_"); 
    }

    // Writing to DOM
    document.getElementById("game").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("chances").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;

    //test
    console.log(selectedWord);
    console.log(lettersinWord)
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
   
    //User is guessing
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if (selectedWord.indexOf(userGuess) > -1 ) {
            for(var i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === userGuess) {
                    blanksAndSuccesses[i] = userGuess;
                    document.getElementById("game").innerHTML = blanksAndSuccesses.join(" ");
                    //test
                    console.log(blanksAndSuccesses);
                }
            }
        } else {
            $("#wrong").append("  " + userGuess + "  ");
            document.getElementById("chances").innerHTML = guessesLeft;
            guessesLeft--;
        }
        
    }
}

function userWin () {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
    
    // win 
    if (lettersinWord.toString() === blanksAndSuccesses.toString()) {
        winCount++;
        alert ("You Win");
        document.getElementById("wins").innerHTML = winCount;
        startGame();
    }

    //lose

}


startGame();
userWin ();

