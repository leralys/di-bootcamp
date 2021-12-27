// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.


// #1
// function q1() {
//     var a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// Prediction 3
// Result 3

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }
// Prediction - reassigns the value of a to 5
// Result - 5 after we call the function
// function q22() {
//     alert(a);
// }
// Prediction 5
// Result 5


//#3
// function q3() {
//     window.a = "hello";
// }
// Prediction 'hello'
// Result 'hello'

// function q32() {
//     alert(a);
// }
// Prediction 'hello'
// Result 'hello'

//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// Prediction 'test'
// Result 'test'

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// Prediction 5 5
// Result 5 5

// Exercise 2 : Ternary Operator
// Instructions
// Using the code below 
// You need to modify the function called experiencePoints()
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).

function winBattle() {
    return true;
}

function experiencePoints() {
    let experiencePoints;
    winBattle() ? experiencePoints = 10 : experiencePoints = 1;
    return experiencePoints;
}

experiencePoints(); //10


// Exercise 3 : Colors
// Instructions
// Using this array 
// Check if this array includes the color “Violet”.
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let isIncludes = colors.includes('Violet'); //true
const displayInOrder = (arr) => {
    arr.forEach((el, i, colors) => {
        console.log(`${1}# choice is ${el}`);
    });
}
displayInOrder(colors);


// Exercise 4 : Colors #2
// Instructions
// Using these arrays :
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];


let displayWithOrdinal = color.forEach((el, i) => {
    console.log(`${i + 1}${i >= 3 ? ordinal[0] : ordinal[i + 1]} choice is ${color[i]}`);
})
console.log(displayWithOrdinal);

// Exercise 5 : Is It A String ?
// Instructions
// Write a JavaScript function that checks whether the value of an input is a string or not.

// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

function isString(variable) {
    typeof arguments[0] == 'string' ? console.log(true) : console.log(false);
}
isString('hello'); //true
isString([1, 2, 4, 0]); //false


// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use:

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 1000;
let details = ['+200', '-100', '+146', '+167', '-2900'];

//calculates VAT amount
const vatAmount = num => num * 0.17;

// modify array of strings
// const expences = details.map(el => Number(el));


const currentBankAcc = arr => {
    arr.forEach(el => {
        el = Number(el);
        if (el < 0) el += vatAmount(el); //-117 //-3393
        bankAmount += el;
    }); return bankAmount;
}

console.log(currentBankAcc(details));