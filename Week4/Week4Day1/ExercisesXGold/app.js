// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
// Don’t use the sum method !

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = numbers.reduce((accum, currVal) => accum + currVal);

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.

const numbersWithDuplicates = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 3, 1, 2];

function removeDuplicates() {
    return numbersWithDuplicates.reduce((accum, currVal) => accum.includes(currVal) ? accum : [...accum, currVal], []);
}
console.log(removeDuplicates());


//removeDuplicates hac=s initial value of empty array - 
// it is a value to which previousValue is initialized the first time the callback is called.
// If initialValue is specified, that also causes currentValue to be initialized to the first value in the array.
// so accum  = []; currVal = 1; it check if accum includes currVal, if yes, accum stays the same, if not 
// using spread operator we assign to accum array create new array from existing 
