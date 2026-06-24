function generateRandomNumber() {
    return Number(Math.round(Math.random() * 100) + 1);
}

function game() {
    let randomNr = generateRandomNumber();
    let count = 10;
    for(let i = 0; i < 10; i++){
        console.log(count + " tries left");

        let pGuess = getPlayerGuess();

        if(isNaN(pGuess)) {
            console.log("Goodbye!");
            return;
        }

        let res = checkGuess(pGuess, randomNr);
        
        if(res == "CORRECT!") {
            console.log(res + "You win the memory of once guessing a random number between 1-100 <3");
            return;
        }
        else {
            console.log(res);
            count--;

            if(count == 0){
                console.log("You lose, the number was " + randomNr);
            }
        }
    }
}

function checkGuess(_guess, _answer){

    if (_guess > _answer) {
        return _guess + " is wrong! Hint: You guessed high";
    }
    else if (_guess < _answer) {
        return _guess + " is wrong! Hint: You guessed low";
    }
    return "CORRECT!";
}

function getPlayerGuess() {
    let isInvalid;
    let guess;
    do {
        isInvalid = false;
        let input = prompt("Guess a number between 1-100 (Type any character to exit):");
        guess = Number(input);
        if(guess < 1 || guess > 100){
            console.log("Make sure you choose a number between 1 - 100");
            isInvalid = true;
        } else if (guess === null) {
            console.log("Please enter a number to guess, or any character to exit.");
            isInvalid = true;
        } else if (isNaN(guess)) { return NaN ;}
    }while(isInvalid);

    return guess;
}


let again;

do {
    console.clear();
    game();
    again = prompt("Would you like to go again? (y/n):");
}while(again.toLowerCase() == 'y');

