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

// let noDuplicates = numbersWithDuplicates.reduce((accum, currVal) => {
//     if (!accum.includes(currVal)) accum.push(currVal);
//     return accum;
// }, []);
// console.log(noDuplicates);

function removeDuplicatesWithReduce(arr) {
    return arr.reduce((accum, currVal) => {
        if (!accum.includes(currVal)) accum.push(currVal);
        return accum;
    }, []);
}
console.log(removeDuplicatesWithReduce(numbersWithDuplicates));

function removeWithFilter(arr) {
    arr.filter((el, index) => index === arr.indexOf(el))
}




// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// Exercise 4 : Turtle & Rabbit
// For this exercise, look at the lesson “More JS methods”

// Using this code :
// Line up the Turtle and the Rabbit at the start line.

// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// When you do :

// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);

// It should look like this:

// '     ||<- Start line'
// '       🐢'
// '       🐇'

// What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// turtle = turtle.trim().padEnd(9, '=');
// const numbersWithDuplicates = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 3, 1, 2];

// numbersWithDuplicates.reduce((accum, currVal) => {
//     console.log("accum", accum);
//     console.log("currVal", currVal);
//     return accum.includes(currVal) ? accum : accum.push(currVal)
// }, [])
// console.log(removeWithReduce())