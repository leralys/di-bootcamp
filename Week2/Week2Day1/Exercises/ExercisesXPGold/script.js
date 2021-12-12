// Exercise 1
// Write some simple Javascript code that will join all the items in the array above, and console.log the result

let me = ["my", "favorite", "color", "is", "blue"]
// we take the first letter from the first word and capitalize it
let firstLetterToUpperCase = me[0][0].toUpperCase();
// then we join the words of the array to a string with spaces,
// remove the first letter from that string,
// and concatenate the upperCasedLetter with that string, which is now without first letter
console.log(`${firstLetterToUpperCase}${me.join(' ').slice(1)}`);


// Exercise 2
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix" let str2 = "pod"
// Slice out and swap the first 2 characters of the 2 strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// Finally console.log the new concatenated string.

// let str1 = "mix"
// let str2 = "pod" 
// let newWord should be equal to 'pox mid'

// let firstWord = "Hello"
// let secondWord = "World"
// let thirdWord should be equal to 'Worlo Helld'

let first = 'mix';
let second = 'pod';

// we take a substring from first word from first letter to one before the end
// and concatenate it with the last letter from the second word
let newSecond = `${first.substring(0, first.length - 1)}${second[second.length - 1]}`;

// we slice the second word from first letter to one before the end
// and concatenate it with the last letter from the first word
let newFirst = `${second.slice(0, (second.length - 1))}${first[first.length - 1]}`;

let newWord = `${newFirst} ${newSecond}`;
console.log(newWord);


let str1 = 'Hello';
let str2 = 'World';
let newStr2 = `${str1.substring(0, str1.length - 1)}${str2[str2.length - 1]}`;
let newStr1 = `${str2.slice(0, (str2.length - 1))}${str1[str1.length - 1]}`;

console.log(`${newStr1} ${newStr2}`);

// // Exercise 3
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = Number(prompt('Please enter a first number'));
let num2 = Number(prompt('Please enter a second number'));
alert(`The sum is ${num1 + num2}`);

console.log(`The first number is ${num1}`);
console.log(`The second number is ${num2}`);
console.log(`First number minus second number is ${num1 - num2}`);
console.log(`First number multiply by second number is ${num1 * num2}`);
console.log(`First number divide by second number is ${num1 / num2}`);


