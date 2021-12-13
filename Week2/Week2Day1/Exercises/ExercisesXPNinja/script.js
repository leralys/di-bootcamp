// Exercise 1

// 5 >= 1
// Prediction: true
// Actual: true

// 0 === 1
// Prediction: false
// Actual: false

// 4 <= 1
// Prediction: false
// Actual: false

// 1 != 1
// Prediction: false
// Actual: false

// "A" > "B"
// Prediction: NaN
// Actual: false. Compares unicodes i guess

// "B" < "C"
// Prediction: true
// Actual: true

// "a" > "A"
// Prediction: true 
// Actual: true

// "b" < "A"
// Prediction: false
// Actual: false
// see ascii table
// https://www.alpharithms.com/ascii-table-512119/

// true === false
// Prediction: false
// Actual: false

// true != true
// Prediction: false
// Actual: false

// Exercise 2
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods

userInput = prompt('Please provide some numbers separated by commas');
myArr = userInput.split(',').map(Number);
let sum = 0;
for (let num of myArr) {
    sum += num;
}
console.log(`The sum of your numbers is: ${sum}`);

