// Daily Challenge GOLD: Bubble Sort
// Use array methods and loops to solve a sorting algorithm
// Use nested for loops

// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
const str = numbers.toString();
console.log(str);
const str1 = numbers.join('');
console.log(str1);

// ===== BUBBLE SORT =====

//pseudocode
// set swapCounter to a non-zero value
// repeat until the swapCounter is 0: 

// -- reset swap counter to 0 (if it's not already)
// -- look at each adjacent pair

// ---- if 2 adjacent elements are not in order, swap them and add one to the swapCounter


const myBubbleSort = (arr) => {
    let swap = -1;
    let len = arr.length;
    do {
        if (swap !== 0) {
            swap = 0
            for (let i = 0; i < len; i++) {
                if (arr[i] > arr[i + 1]) {
                    let x = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = x;
                    swap++;
                }
            }
        }

    } while (swap !== 0);
}
myBubbleSort(numbers);
console.log(numbers);


// ----- dummy -----

// let swapCounter = 45;
// let len = numbers.length;
// do {
//     if (swapCounter !== 0) {
//         swapCounter = 0
//         for (let i = 0; i < len; i++) {
//             if (numbers[i] > numbers[i + 1]) {
//                 let x = numbers[i];
//                 numbers[i] = numbers[i + 1];
//                 numbers[i + 1] = x;
//                 swapCounter++;
//             }
//         }
//     }

// } while (swapCounter !== 0);
// console.log(numbers);