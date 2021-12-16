// ====== First Part ======

// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game
// (Hint: use the built-in confirm() function).
// If the answer is false, alert “No problem, Goodbye”.
// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10
// (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :
// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.

// ====== Second Part ======

// Outside of the playTheGame() function,
// create a new function named test(userNumber,computerNumber) that takes 2 parameters :
// userNumber and computerNumber
// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
// If userNumber is bigger than computerNumber,
// alert “Your number is bigger then the computer’s, guess again”
// (Hint: use the built-in prompt() function to ask the user for a new number).
// If userNumber is lower than computerNumber,
// alert “Your number is smaller then the computer’s, guess again”
// (Hint: use the built-in prompt() function to ask the user for a new number).
// If the user guessed more than 3 times, alert “out of chances” and exit the function.

let userNumber;
let computerNumber;

const askNum = () => {
    let num;
    do {
        num = parseInt(prompt('Please type a number between 0 and 10'));
        if (isNaN(num)) alert("Sorry Not a number");
        if (num < 0 || num > 10) alert("Sorry it’s not a good number");
    }
    while (num < 0 || num > 10 || isNaN(num));
    return num;
}

const playTheGame = () => {
    let ifPlay = confirm('Whould you like to play the game?');
    if (!ifPlay) return alert('No problem, Goodbye');
    computerNumber = Math.floor(Math.random() * 11);
    userNumber = askNum();
    console.log(userNumber, computerNumber);
    test(userNumber, computerNumber);
}

const test = (userNumber, computerNumber) => {
    let counter = 2;
    for (let i = 0; i < 3; i++) {
        if (counter === 0) {
            userNumber === computerNumber ? alert('WINNER') : alert('out of chances');
            return;
        } else {
            if (userNumber === computerNumber) {
                alert('WINNER');
                return;
            } else if (userNumber > computerNumber) {
                counter--;
                alert('Your number is bigger then the computer’s, guess again');
                userNumber = askNum();
                console.log(userNumber, computerNumber);
            } else {
                counter--;
                alert('Your number is smaller then the computer’s, guess again');
                console.log(userNumber, computerNumber);
                userNumber = askNum();
            }
        }
    }
}