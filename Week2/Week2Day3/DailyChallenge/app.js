// For loops and nested for loops
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice:
// first by using one loop,
// then by using two nested for loops
// (Nested means one inside the other -
// check out “nested for loops” on Google).
// Do this Daily Challenge by youself,
// without looking at the answers on the internet.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// ------- 1 part with one loop and an array ---------

let n = 6                   // height of the pyramid
let symbol = '*';
let rowOfSymbols = []
for (let i = 0; i < n; i++) {
    rowOfSymbols.push(symbol);
    console.log(rowOfSymbols.join(' '));
}

// ------- 2 part with nested loops and a string ---------

let row = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j < 1; j++) {
        row += symbol + ' ';
    } console.log(row)
}








// Remember that a multi-dimensional array is just an array of arrays,
// for example, [[1,2], [3,4], [5,6]]
// [[1, 0][1, 2][1, 3][1, 4][1, 5][1, 6][1, 7]]