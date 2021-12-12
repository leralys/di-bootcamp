// EXERCISE 1

// Store your favorite food into a variable.
// Store your favorite meal into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>

const favFood = "hummus";
const favMeal = "dinner";
console.log(`I eat ${favFood} at every ${favMeal}`);


// EXERCISE 2
// EXERCISE 2 Part 1

// Create a variable named watchedSeriesLength that is equal to the number of series in the watchedSeries array.
// Create a variable named myWatchedSeries, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


let watchedSeries = ['black mirror', 'money heist', 'the big bang theory'];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = `I watched ${watchedSeriesLength} series: ${watchedSeries.join(', ')}`;
console.log(myWatchedSeries);

// EXERCISE 2 Part 2

// Change the series “the big bang theory” to “friends”.
// Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Console.log the watchedSeries array.

watchedSeries[2] = 'friends'
watchedSeries.push('brooklyn nine-nine');
watchedSeries.unshift('the witcher');
watchedSeries.splice(watchedSeries.indexOf('black mirror'), 1);

// in case we do't know the index of 'money hest' in the array
let moneyHeistIndex = watchedSeries.indexOf('money heist');
// extracting the value of the third letter of 'money heist'
let thirdLetter = watchedSeries[moneyHeistIndex].charAt(2);
console.log(thirdLetter);

// --- OR ---
// console.log(watchedSeries[1][2]);

console.log(watchedSeries);


// EXERCISE 3

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let celsius = 25;
console.log(`${celsius}°C is ${celsius / 5 * 9 + 32} °F`);
// OR
// let fahrenheit = celsius / 5 * 9 + 32;
// console.log(`${celsius}°C is ${fahrenheit} °F`);


// EXERCISE 4

let c;
let a = 34;
let b = 21;

// --- 1 ---
console.log(a + b);
// Prediction: 55. Simple arithmetic addition
// Actual: 55


// --- 2 ---
a = 2;
console.log(a + b);
// Prediction: 23. We declared a variable with value 34 and then we changed it's value to 2.
// We console.log the result of the addition AFTER we changed the value.
// Actual: 23


// --- 3 ---
// What is the value of c?
// Prediction: undefined
// Actual: undefined


// --- 4 ---
// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Prediction: 75. The code will first implement addition and then it will convert the result of the addition to a string
// in order to concatenate it with the string '5'
// Actual: 75


// EXERCISE 5
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


// What is the output of each of the expressions below?

// --- 1 ---
typeof (15)
// Prediction: number. No quotes - so looks like a number
// Actual: number

// --- 2 ---
typeof (5.5)
// Prediction: number. No quotes - so looks like a decimal number
// Actual: number

// --- 3 ---
typeof (NaN)
// Prediction: NaN. Not a Number
// Actual: number

// "Not a Number" is a value that does not represent a real number, despite having number type.
// NaN is useful to represent faulty operations on numbers.
// NaN just means the specific value cannot be represented within the limitations of the numeric type
// (although that could be said for all numbers that have to be rounded to fit, but NaN is a special case).

// The interesting property of NaN is that it doesn't equal to any value, even with the NaN itself.
// A specific NaN is not considered equal to another NaN because they may be different values.
// However, NaN is still a number type, just like 2718 or 31415.

// https://stackoverflow.com/questions/2801601/why-does-typeof-nan-return-number
// https://dmitripavlutin.com/nan-in-javascript/

// --- 4 ---
typeof ("hello")
// Prediction: string. Double quotes represent a string
// Actual: string

// --- 5 ---
typeof (true)
// Prediction: boolean. True/or false are booleans
// Actual: boolean

// --- 6 ---
typeof (1 != 2)
// Prediction: boolean. Comparison returns a boolean
// Actual: boolean

// --- 7 ---
"hamburger" + "s"
// Prediction: hamburgers. Adding two strings results in a concatenation
// Actual: hamburgers

// --- 8 ---
"hamburgers" - "s"
// Prediction: some kind of error.
// Actual: NaN
// Subtraction with non-numbers returns NaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction#subtraction_with_non-numbers

// --- 9 ---
"1" + "3"
// Prediction: 13. Adding two strings results in a concatenation
// Actual: 13

// --- 10 ---
"1" - "3"
// Prediction: NaN
// Actual: -2. Converted 1 and 3 to numbers and substracted

// --- 11 ---
"johnny" + 5
// Prediction: johnny5. It will convert 5 two a string and concatenate
// Actual:johnny5

// --- 12 ---
"johnny" - 5
// Prediction: NaN. Subtraction with non-numbers returns NaN
// Actual: NaN

// --- 13 ---
99 * "hello"
// Prediction: NaN. Multiplication with non-numbers returns NaN
// Actual: NaN

// --- 14 ---
1 != 1
// Prediction: false. Wrong camparison, 1 is equal to 1
// Actual: false

// --- 15 ---
1 == "1"
// Prediction: true. Not a strict comparison, the type is not compared
// Actual: true

// --- 16 ---
1 === "1"
// Prediction: false. Strict comparison, the type and the value are compared
// Actual: false


// EXERCISE 6
// What is the output of each of the expressions below?

// --- 1 ---
5 + "34"
// Prediction: 534
// Actual: 534

// --- 2 ---
5 - "4"
// Prediction: 1
// Actual: 1

// --- 3 ---
10 % 5
// Prediction: 0. Modulo operator.
// Returns the remainder left we devide the left number into equal parts, 
// where each part is equal to a right number. If no remainder left - returns 0
// Actual: 0

// --- 4 ---
5 % 10
// Prediction: 5. Remainder which is left is 5 because it is not possible to devide 5 to equal parts of 10
// Actual: 5

// --- 5 ---
"Java" + "Script"
// Prediction: JavaScript. Concatenation
// Actual: JavaScript

// --- 6 ---
" " + " "
// Prediction:
// Actual:

// --- 7 ---
" " + 0
// Prediction: "  ". Two spaces, concatenation
// Actual: "  "

// --- 8 ---
true + true
// Prediction: 2. 'True' value is 1, so 1 + 1
// Actual: 

// --- 9 ---
true + false
// Prediction: 1. 'False' value is 0, so 1 + 0
// Actual:

// --- 10 ---
false + true
// Prediction: 1
// Actual: 1

// --- 11 ---
false - true
// Prediction: -1
// Actual: -1

// --- 12 ---
!true
// Prediction: false. If not true - returns the opposite (false)
// Actual: false

// --- 13 ---
3 - 4
// Prediction: -1. Simple arithmetic substraction
// Actual: -1

// --- 14 ---
"Bob" - "bill"
// Prediction: NaN
// Actual: Subtraction with non-numbers returns NaN
