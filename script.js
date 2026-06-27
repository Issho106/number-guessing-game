function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
} //Random number between 1 - 100

//main game logic with counter
function game() {

    let randomNr = generateRandomNumber();
    let lives = 10;
    let score = 1000;

    console.log("Hello human...\n I, the evil alien, has taken over every computer on earth, mwahaha! \"Why?\" you may ask, well because humans are a disgrace to their intelligence. Luckily I have some empathy for you beings and have devised a game, it's simple. Guess the number, unlock your device. Can you manage that?");

    for (let i = 0; i < 10; i++) {

        console.log(lives + " tries left");

        let playerGuess = getPlayerGuess();

        if (isNaN(playerGuess)) {
            console.log("Goodbye!");
            return;
        }

        let result_ = checkGuess(playerGuess, randomNr);
        
        if (result_.correct) {
            console.log(result_.message + " You win! | Score: " + score);
            console.log("You have foiled my plans, you're one of the smart ones... I have given you access to the guessing games of others, go again to save more computers from my terror.");
            return;
        }
        else {
            console.log(result_.message);
            lives--; //lives remaining
            score -= 100; //counter decrease for score

            if (lives == 0) { //lives run out
                console.log("You lose, the number was " + randomNr + " | Score: " + score);
                console.log("Your computer will be mine forever, or at least until you guess correctly!")
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
        isInvalid = false; //resets on each iteration
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

