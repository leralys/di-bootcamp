// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// *********
// * Hello *
// * World *
// * in    *
// * a---- *
// * frame *
// *********

// The number of stars that wraps the sentence, must depend on the length of the longest word.
// Help on the Daily challenge

// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

// ---- no error checking here :(( ---- 
let answer = prompt('Please type some words separated by commas. For example: "Hello,World,in,a,frame"');
let arrayOfWords = answer.split(',');
let words = [" Hello ", " world ", "in", "a", "frame"];

let asterisk = '*';
let border = 2; //Must be even; two sides, each is integer
let padding = 2; //Must be even; two sides, each is integer

// find the longest word
const longestWord = (arr) => {
    let longestLength = 0;
    for (let el of arr) {
        if (el.length > longestLength) longestLength = el.length;
    } return longestLength;
}

const addPaddingBorder = (arr) => {
    let word = longestWord(arr);
    let len = word + border + padding;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].padStart(arr[i].length + padding / 2);
        arr[i] = arr[i].padEnd(word + padding);
        arr[i] = asterisk.repeat(border / 2) + arr[i] + asterisk.repeat(border / 2);
    } return arr;
}

const construct = (arr) => {
    let firstLast = asterisk.repeat(longestWord(arr) + border + padding);
    addPaddingBorder(arr);
    arr.unshift(firstLast);
    arr.push(firstLast);
    for (let el of arr) {
        console.log(el);
    }
}
construct(arrayOfWords);