// Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.

const sum = (x, y) => x + y;
// console.log(sum(10, 5));


// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);
//Prediction 13
//Result 13

// because it is the same as

// var addTo = function(x) {
//     return function(y) {
//         return x + y;
// }
// var ddToTen = function(y){
//     return 10+y;
// }


// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//Prediction 31
//Result 31

// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//Prediction 17
//Result 17


// Currying is a way to reduce functions of multiple arguments to the functions of one argument.
// A curried function is a function that takes multiple arguments one at a time.
// const add = a => b => a + b;
// const result = add(2)(3)
// console.log(result) // console.log 5
// Explanation

// First, the function takes a, and then returns a new function,
// which then takes b and returns the sum of a and b.
// Each argument is taken one at a time.
// The add function takes one argument and then returns a !!partial application!! of itself with a fixed in the closure scope.
// The parentheses in the example above represent function invocations:
// add is invoked with 2, which returns a partially applied function with a fixed to 2.
// Instead of assigning the return value to a variable or otherwise using it,
// we immediately invoke the returned function by passing 3 to it in parentheses,
// which completes the application and returns 5.




// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//Prediction 16
//Result 16


// compose is a function that takes two functions as parameters and returns function with parameter a,
// the inner function will have access to outer functions,
// so it is possible to call the first function from arguments list to call the second function from arguments list to call inner function with parameter a
// the order of execution is LIFO so first will be executed  g(a) and then f(g) -- 10+5+1