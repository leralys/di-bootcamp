// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// Prediction ['bread', "carrot", "potato", 'chicken', "apple", "orange"];
// Result (6) ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
// console.log([...country]);
// Prediction [USA]
// Result ['U', 'S', 'A'] destructures 'USA' to an array of chars


// ------Bonus------
let newArray = [...[, ,]];
// console.log(newArray);

// Prediction two arrays?
// Result [undefined, undefined]


// Exercise 2 : Employees
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, create a new array, containing only the Full Stack Residents.
// Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents
// (ie. “Good job Bradley”, “Good Job Chloe” ect…)

let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function greet(arr) {
    arr.map(el => console.log(`Hello, ${[el.firstName]}!`));
})(users);

const findFulStack = arr => arr.filter(el => el.role === 'Full Stack Resident');
console.log(findFulStack(users));

const findAndCongrat = findFulStack(users).map(el => console.log(`Good job ${el.firstName} ${el.lastName}!`));

// Exercise 3 : Star Wars
// Instructions
// Using this array
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const chainStrings = arr => (arr.reduce((acc, currVal) => acc += currVal + ' ', '')).toUpperCase();
console.log(chainStrings(epic));


// Exercise 4 : Employees #2
// Instructions
// Using this object:
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a map method,
// to congratulate the students with their name and course name
// (ie. “Good job Jenner, you passed the course in Information Technology”,
// “Good Job Marco you passed the course in Robotics” ect…)

let student = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

const findPassed = arr => arr.filter(el => el.isPassed);
const findAndCheer = findPassed(student).map(el => console.log(`Good job ${el.name}! You passed the course in ${el.course}!`));
