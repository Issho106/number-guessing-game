/* Errors/Additional Functionality

*/

function generateRandomNumber() {
    return Number(Math.round(Math.random() * 100) + 1);
} //Random number between 1 - 100

//main game logic with counter
function game() {
    
    let randomNr = generateRandomNumber();
    let count = 10;

    for (let i = 0; i < 10; i++) {

        console.log(count + " tries left");

        let pGuess = getPlayerGuess();

        if (isNaN(pGuess)) {
            console.log("Goodbye!");
            return;
        }

        let res = checkGuess(pGuess, randomNr);
        
        if (res == "CORRECT!") {
            console.log(res + "You win the memory of once guessing a random number between 1-100 <3");
            return;
        }
        else {
            console.log(res);
            count--;

            if (count == 0) {
                console.log("You lose, the number was " + randomNr);
            }
        }
    }
}

//winning condition logic
function checkGuess(_guess, _answer) {

    if (_guess > _answer) {
        return _guess + " is wrong! Hint: You guessed high";
    }
    else if (_guess < _answer) {
        return _guess + " is wrong! Hint: You guessed low";
    }

    return "CORRECT!";
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

