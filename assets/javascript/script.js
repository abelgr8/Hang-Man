var words = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "76ers", "suns", "trail blazers", "kings", "spurs", "raptors", "jazz", "wizards",
];

var randomWord = "";
var lettersinWord = [];
var numBlanks = 0;
var letterReveal = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var chancesLeft = 6;

function startGame () {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersinWord = randomWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    chancesLeft = 6;
    wrongLetters = [];
    letterReveal = [];

    // black slides
    for (var i = 0; i < numBlanks; i++) {
        letterReveal.push("_"); 
    }

    // Writing to DOM
    document.getElementById("game").innerHTML = letterReveal.join(" ");
    document.getElementById("chances").innerHTML = chancesLeft;
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;

    //test
    console.log(randomWord);
    console.log(lettersinWord)
    console.log(numBlanks);
    console.log(letterReveal);
   
    //User is guessing
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if (randomWord.indexOf(userGuess) > -1 ) {
            for(var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === userGuess) {
                    letterReveal[i] = userGuess;
                    document.getElementById("game").innerHTML = letterReveal.join(" ");
                    //test
                    console.log(letterReveal);
                }
            }
        } else {
            $("#wrong").append("  " + userGuess + "  ");
            document.getElementById("chances").innerHTML = chancesLeft;
            chancesLeft--;
        }
        
    }
}

function userWorL () {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + chancesLeft);
    
    // win or lose
    if (lettersinWord.toString() === letterReveal.toString()) {
        winCount++;
        alert ("You Win");
        document.getElementById("wins").innerHTML = winCount;
        startGame();
    } else if (chancesLeft == 0) {
        lossCount++;
        alert ("You Lost");
        document.getElementById("losses").innerHTML = lossCount;
        startGame();
    }

}


startGame();
userWorL ();

