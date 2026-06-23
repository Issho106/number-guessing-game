function generateRandom() {
    return Math.round(Math.random() * 100) + 1;
}

let again;

do {
    console.clear(); //works

    let randomNr = generateRandom();
    let guess = Number(prompt("Guess a number between 1-100:"));

    if(guess < 1 || guess > 100){
        console.log("Make sure you choose a number between 1 - 100");
    }
    if(isNaN(guess)){
        console.log("Please enter only NUMBERS between 1 - 100");
    } 

    if(guess == randomNr) {
        console.log("Win!");
    }
    else {
        console.log("Lose... the number was: " + randomNr);
    }

    again = prompt("Go again? (y/n):");
}while(again == 'y');