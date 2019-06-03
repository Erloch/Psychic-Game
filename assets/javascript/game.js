// Guess what letter I'm thinking of
var userChoiceText = document.getElementById("userchoice-text");
console.log(userChoiceText);
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses");
var computerChoiceText = document.getElementById("computerchoice-text");
var wins = 0;
var losses = 0;
var guesses = 0;

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function (event) {
    var ranLett = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    var userChoice = event.key;
    // for (i = 0; i < computerChoice.length; i++);
    if (userChoice === ranLett) {
        wins++;
    }    
    else if (guesses === 10) {
            losses++;
            return document.write("Try Again")
        }
    
        guesses++;
        

        console.log(userChoiceText);
        userChoiceText.textContent = "You chose: " + userChoice;
        computerChoiceText.textContent = "The computer chose: " + ranLett;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "guesses: " + guesses;
        
    }
// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).