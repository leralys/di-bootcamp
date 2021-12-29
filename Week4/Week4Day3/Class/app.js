// Exercise on Map
const studentsFootball = [
    { name: 'Rich', score: 33 },
    { name: 'Peter', score: 55 }
];
// Create a new array of objects, containing the name, score and isAboveAverage key
// if the students has a score bigger that 50, the key isAboveAverage will be true

// spread here creates a new object that has all properties of the studentsFootball object and add additional property isAboveAverage:


let studentsFootballNew = studentsFootball.map(el => {
    let isAboveAverage;
    el.score > 50 ? isAboveAverage = true : isAboveAverage = false;
    return { ...el, isAboveAverage };
});
// console.log(studentsFootballNew);

// SOLUTION

// let studentsNew = studentsFootball.map((elem) => {
// 	let isAboveAverage = elem.score>50 ? true : false;
// 	//what we return will be pushed to the studentsNew variable
// 	//this is a feature of the map method

//     // return {
// 	// 	name : elem.name,
// 	// 	score : elem.score,
// 	// 	isAboveAverage: isAboveAverage,
// 	// }

// 	//the same as the return above
// 	return {
// 		name : elem.name,
// 		score : elem.score,
// 		isAboveAverage,
// 	}

//the same as the return above
// return {...elem, isAboveAverage}

// })

// console.log(studentsNew)


let famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]
// 1. Use the map method, to create a new array that contains only the name of the actors
// 2. Use the map method, to create a new array , that contains objects, each object contains the name of the actor, and it's job
// 3. BONUS: Use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container") (отредактировано) 

// Look at the new instructions:
// 1. Use the map method, to create a new array that contains only the name of the actors
// 2. Use the map method, to create a new array , that contains objects, each object contains the name of the actor, and it's job
// 3. BONUS: Use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")


let famousPeopleName = famousPeople.map(el => el.name);




// SOLUTION

// let newFamous = famousPeople.map((element) => element["name"]);

// let famousJobAndName = famousPeople.map((element) => {
//   return {
//     name: element.name,
//     job: element.job,
//   };
// });

// newFamous.forEach((element) => {
//   let body = document.body;
//   let div = document.createElement("div");
//   div.append(element);
//   body.append(div);
// });



// // -----------------------
// // FILTER
// // -----------------------

const numbers = [2, 3, 4, 5, 6];

// create a new array, if only even numbers
// result [2,4,6]

let evenNumbers = numbers.filter(function (element, index, array) {
    return element % 2 === 0
})

// console.log(evenNumbers)

// using Arrow functions
let evenNumbersTwo = numbers.filter((element) => element % 2 === 0)

// console.log(evenNumbersTwo)


const students1 = [
    { name: 'Rich', score: 33 },
    { name: 'Peter', score: 55 },
    { name: 'John', score: 75 }
];

// // create a new array, 
// // with only the students that have a score bigger than 50
let bestStudents = students1.filter((elem) => elem.score > 50)

// console.log(bestStudents)
// // (2) [{…}, {…}]
// // 0: {name: 'Peter', score: 55}
// // 1: {name: 'John', score: 75}

// // create a new array
// // with only the name of the students that have a score bigger than 50

let nameOfBestStudents = bestStudents.map((elem) => elem.name)
// console.log(nameOfBestStudents)
// // (2)['Peter', 'John']


// //Chaining
let nameOfBestStudentsTwo = students1
    .filter((elem) => elem.score > 50)
    .map((elem) => elem.name)
// console.log(nameOfBestStudentsTwo)

// Several condition in one filter
const studentsTwo = [
    { name: 'Rich', score: 33 },
    { name: 'Peter', score: 55 },
    { name: 'John', score: 75 }
];

let bestStudentsTwoConditions = studentsTwo.filter((elem) => elem.score > 50 && elem.name.length === 4)

// console.log(bestStudentsTwoConditions)


// ## Exercise 1:  create a new array that filters only the positive value

let numbers1 = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let positiveNumbers = numbers1.filter(el => el > 0);
// console.log(positiveNumbers);

// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below

const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
];

let appearedInNextGen = characters.filter((el => el.series.includes('Star Trek: The Next Generation')));
// console.log(appearedInNextGen);



// ## Exercise 3 NOT MANDATORY - send me the result by slack
// Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
const colors = ["blue", "red", "blue", "yellow"];
let noDuplicates = colors.filter((el, index) => colors.indexOf(el) === index);
// console.log(noDuplicates);



// SOLUTION

// filter exercise 1 and 2 - solution
// let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positive = numbers.filter((element) => element > 0);

// const characters = [
//   { name: "James T. Kirk", series: ["Star Trek"] },
//   { name: "Spock", series: ["Star Trek", "Star Trek: The Next Generation"] },
//   { name: "Jean-Luc Picard", series: ["Star Trek: The Next Generation"] },
//   {
//     name: "Worf",
//     series: ["Star Trek: The Next Generation", "Star Trek: Deep Space Nine"],
//   },
// ];

// let series = characters.filter((element) =>
//   element.series.includes("Star Trek: The Next Generation")
// );

// // -----------------------
// // REDUCE
// // -----------------------

// //WITHOUT Initial Value
const numbers3 = [10, 20, 35, 40];

let sumOne = numbers3.reduce((accumulator, currentValue, index, arr) => {
    // console.log(`In the ${index} loop`)
    // console.log("accumulator = ", accumulator);
    // console.log("currentValue = ", currentValue);
    return accumulator + currentValue
})

// 1st loop
// accumulator = numbers[0] = the first element in the array = 10
// currentValue = 20
// return accumulator+currentValue => return 30

// 2nd loop
// accumulator = return value of the 1st loop = 30
// currentValue = 35
// return accumulator+currentValue => return 65

// 3rd loop
// accumulator = return value of the 2nd loop = 65
// currentValue = 40
// return accumulator+currentValue => return 105

// console.log(sumOne)


//INITIAL VALUE
//1000 initial value

const numbers4 = [10, 20, 35, 40];

let sum = numbers4.reduce((accumulator, currentValue, index, arr) => {
    return accumulator + currentValue
}, 1000)

// 1st loop
// accumulator = initialValue = 1000
// currentValue = 10
// return accumulator+currentValue => return 1010

// // 2nd loop
// accumulator = returned value from the 1st loop = 1010
// currentValue = 20
// return accumulator+currentValue => return 1030

// // 3rd loop
// accumulator = returned value from the 2nd loop = 1030
// currentValue = 35
// return accumulator+currentValue => return 1065

// // 4th loop
// accumulator = returned value from the 3rd loop = 1065
// currentValue = 40
// return accumulator+currentValue => return 1105

// console.log(sum)


const people = ["John", "Lea", "Tom"];
// secret society is JLT

let secretSociety = people.reduce((accumulator, currentValue) => {
    return accumulator + currentValue[0]
}, "")

// console.log(secretSociety)






// ## Exercise 1
const students = [
    { name: 'Rich', score: 33 },
    { name: 'Peter', score: 55 },
    { name: 'John', score: 75 }
];
// Find the sum of the score of the students using reduce

let sumScore = students.reduce((accum, currVal) => accum + currVal.score, 0);
console.log(sumScore);


// ## Exercise 2
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce
let voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Bob', age: 30, voted: true },
];

let countVoters = voters.reduce((accum, currVal) => currVal.voted ? accum += 1 : accum, 0);

let countVotersChained = voters.map(el => el.voted).reduce((accum, currVal) => currVal ? ++accum : accum, 0);

console.log(countVoters);
console.log(countVotersChained);
// ## Exercise 3 : NOT MANDATORY
// 1. Find the max value from an array of numbers using reduce

const numbers6 = [10, 20, 35, 40];
let maxVal = numbers6.reduce((accum, currVal) => currVal > accum ? accum = currVal : accum);
console.log(maxVal);



// Solutions Reduce
// const students = [
//  	{name: 'Rich', score: 33}, 
//  	{name: 'Peter', score: 55},
//  	{name: 'John', score: 75}
// ];

// let sum =  students.reduce((accumulator, element) => accumulator+element.score, 0)

// // console.log(sum)

// //  WITH INITIAL VALUE
// // 1st loop
// // accumulator = 0
// // element = {name: 'Rich', score: 33}
// // return accumulator+element.score = 33

// // 2nd loop
// // accumulator = 33
// // element = {name: 'Peter', score: 55}
// // return accumulator+element.score = 88


// // 3rd loop
// // accumulator = 88
// // element = {name: 'John', score: 75}
// // return accumulator+element.score = 163

// // 2nd loop
// // accumulator = the returned value from the 1st loop = 88
// // element = {name: 'John', score: 75}
// // return accumulator.score+element.score //PROBLEM


// //  WITHOUT INITIAL VALUE - PROBLEM

// // 1st loop
// // accumulator = {name: 'Rich', score: 33}
// // element = {name: 'Peter', score: 55}
// // return accumulator.score+element.score = 88


// // 2nd loop
// // accumulator = the returned value from the 1st loop = 88
// // element = {name: 'John', score: 75}
// // return accumulator.score+element.score //PROBLEM


// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Bob' , age: 30, voted: true},
// ];

// console.log(voters[0]["voted"]) //true
// console.log(0+voters[0]["voted"]) //0+true //0+1
// //Result 3

// let nbVoters = voters.reduce((accumulator,element) => {
// 	if (element.voted == true) {
// 		return ++accumulator
// 	} else {
// 		return accumulator
// 	}

// }, 0)

// console.log(nbVoters)

// // 1st loop
// // accumulator = 0;
// // element.voted = true
// // return accumulator++ = 1

// // 2nd loop
// // accumulator = 1;
// // element.voted = true
// // return accumulator++ = 2

// // 3rd loop
// // accumulator = 2;
// // element.voted = false
// // return accumulator => return 2

// // WITH TERNARY OPERATOR
// let nbVotersTernary = voters.reduce((accumulator,element) => element.voted ? ++accumulator : accumulator, 0)
// console.log(nbVotersTernary)

// // WITH TRUE AND FALSE
// //true is equal to 1
// //false is equal to 0
// let nbVotersSecond = voters.reduce((accumulator,element) => 
// 									accumulator+element["voted"], 0)
// console.log(nbVotersSecond)



// ------------------
// DESTRUCTURING
// --------------------

// Usually, if the array is longer than the list at the left, 
// the "extra" items are omitted.

const colors = ["blue", "yellow", "black", "red"];

// Destructuring
let [firstColor, secondColor] = colors; // by order
console.log("firstColor : ", firstColor, "secondColor : ", secondColor)
let [a, b, c, d] = colors; // by order

// REST OPERATOR
let [first, second, ...otherColors] = colors;
console.log("first : ", first, "second : ", second, "otherColors :", otherColors)

let [firstLetter, secondLetter, ...otherLetters] = "Hello";
console.log("firstLetter : ", firstLetter, "secondLetter : ", secondLetter, "otherLetters :", otherLetters)


//SPREAD OPERATOR
let letters = ["a", "b", "c"];
let numbers = [1, 2, 3];
let newArr = [...letters, ...numbers]
console.log(newArr)

//spreading
//dots before an array
function test(a, b) {
    console.log("a : ", a, "b ", b)
}

test(...["blue", "red"])

//resting
//dots before an variable name
function testOne(...colors) {
    console.log("colors : ", colors)
}

testOne("blue", "red")


//Copying
//Copying by reference
let names = ["John", "Tom"];
let friends = names; //they both have the same reference
friends.push("Lea")
console.log("friends : ", friends, "names ", names)


//Coppying by Value with the spread operator
let newFriends = [...names]
console.log("newFriends : ", newFriends)
newFriends.push("Lea")
console.log("newFriends : ", newFriends, "names ", names)


// Copying
// Shallow copy 
let newNames = ["John", "Tom", ["blue", "red"]];
let newNamesArr = [...newNames]
console.log("newNamesArr : ", newNamesArr)
newNamesArr[2].push("yellow")
console.log("newNames : ", newNames, "newNamesArr ", newNamesArr)