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
// * a     *
// * frame *
// *********

// The number of stars that wraps the sentence, must depend on the length of the longest word.

let words = ["Hello", "rain", "in", "a", "frame"];
let asterisk = '*';
let border = 2; //Must be even; two sides, each is integer
let padding = 2; //Must be even; two sides, each is integer
// let firstLastLine;

// find the longest word
const longestWord = (arr) => {
    let longestLength = 0;
    for (let word of words) {
        if (word.length > longestLength) longestLength = word.length;
        return longestLength;
    }
}
// construct first and last line with needed amount of *
const firstLast = (arr) => {
    // using variables just not to forget where the numbers are coming from
    return asterisk.repeat(longestWord(arr) + border + padding);
}

let fl = firstLast(words).length;
let last = firstLast(words);

const addPaddingBorder = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].padStart(arr[i].length + padding / 2);
        arr[i] = arr[i].padEnd(fl - border);
        arr[i] = asterisk.repeat(border / 2) + arr[i] + asterisk.repeat(border / 2);
    } return arr;
}

const construct = (arr) => {
    arr.unshift(firstLast());
    arr.push(firstLast());
    for (let i = 1; i < arr.length - 1; i++) {
        console.log(arr[i])
    }
}
console.log(firstLast());
addPaddingBorder(words);
construct(words);
console.log(last);