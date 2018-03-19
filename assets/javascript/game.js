$(document).ready(function() {

    var words = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "76ers", "suns", "trail blazers", "kings", "spurs", "raptors", "jazz", "wizards",
    ];

    //Random Word Selector------------------------------------------------------
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

    //Answers array setup
    var answerArray = [];

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = " _ ";
    }
    var remainingLetters = word.length;

    //prints answers array to word section
    $("#game").append(answerArray);
    console.log(answerArray);

    //score keep begins
    var wins = 0;
    var losses = 0;
    var chancesLeft = 6;
    var counter = 0;
    var space;


    //User Guessing
    document.onkeyup = function(event) {
        var userGuess = event.key;
        
        if (word.indexOf(userGuess) > -1 ) {
            for(var i = 0; i < word.length; i++) {
                if (word[i] === userGuess) {
                    answerArray[i] = userGuess;
                    console.log(answerArray);
                    document.getElementById("game").innerHTML = answerArray;
                    counter++;
                }
            }
        } else {
            $("#wrong").append("  " + userGuess + "  ");
            document.getElementById("chances").innerHTML = "Guesses Left: " + chancesLeft;
            chancesLeft--;
        }
    // win or lose.
      
        if (chancesLeft < 1) {
            alert("You Lose!");
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            losses++;
          }
          for (var i = 0; i < word.length; i++) {
            if (counter == word.length) {
                document.getElementById("wins").innerHTML = "Wins: " + wins;
                alert("You Win!");
                wins++;
                console.log(counter);
            }
        }
        
        
    };
    //reset 

    
});
