/* Errors/Additional Functionality

=== Additional Functionality ===

=== Errors ===

=== Other matters - Referenced by line ===
*/

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
} //Random number between 1 - 100

//main game logic with counter
function game() {

    let randomNr = generateRandomNumber();
    let lives = 10;
    let score = 1000;

    for (let i = 0; i < 10; i++) {

        console.log(lives + " tries left");

        let pGuess = getPlayerGuess();

        if (isNaN(pGuess)) {
            console.log("Goodbye!");
            return;
        }

        let result_ = checkGuess(pGuess, randomNr);
        
        if (result_.correct) {
            console.log(result_.message + " You win! | Score: " + score);
            return;
        }
        else {
            console.log(result_.message);
            lives--; //lives remaining
            score -= 100; //counter decrease for score

            if (lives == 0) { //lives run out
                console.log("You lose, the number was " + randomNr + " | Score: " + score);
            }
        }
    }
}

//winning condition logic
function checkGuess(_guess, _answer) {

    if (_guess > _answer) {
        return {
            correct: false,
            message: _guess + " is wrong! Hint: You guessed high."
        };
    }
    else if (_guess < _answer) {
        return {
            correct: false,
            message: _guess + " is wrong! Hint: You guessed low."
        };
    }

    return {
        correct: true,
        message: "CORRECT!"
    };
}

//repeatedly asks player to enter a valid number or character to exit
function getPlayerGuess() {

    let isInvalid;
    let guess;

    do {
        isInvalid = false; //reset on each iteration
        let input = prompt("Guess a number between 1-100 (Type any character to exit):");
        
        guess = Number(input);

        if (guess < 1 || guess > 100) { //check for invalid entries

            console.log("Make sure you choose a valid number between 1 - 100");
            isInvalid = true;
        }
        else if (isNaN(guess)) { return NaN ;}

    }while(isInvalid);

    return guess;
}

//Main logic
let again;

do {
    console.clear();

    game();
    again = prompt("Would you like to go again? (y/n):");

} while (again && again.toLowerCase() === 'y');

