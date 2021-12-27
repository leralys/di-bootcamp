//ARRAY DESTRUCTURING

let colors = ["blue", "red", "yellow"];
// let colorA = colors[0];
// let colorB = colors[1];
// let colorC = colors[2];
let [colorA, colorB, colorC] = ["blue", "red", "yellow"];
console.log("color A is :", colorA, "color B is :", colorB, "color C is :", colorC)


// let [colorA, colorB, colorC] = colors;
// console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


// let [colorA, colorB, colorC] = ["blue", "red"];;
// console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


function getColors() {
    let colors = ["blue", "red"];
    return colors;
}

let myFavColors = getColors();
console.log(myFavColors)

let [firstColor, secondColor] = myFavColors;
console.log("firstColor is :", firstColor, "secondColor is :", secondColor)


// let [firstColor, secondColor] = getColors();
// console.log("firstColor is :" , firstColor, "secondColor is :" , secondColor)

//OBJECT DESTRUTURING

let family = {
    name: "Smith",
    member: 2
}

// // let first = family["name"];
// // let second = family["member"];

let { name, member } = family
console.log("name is ", name, "member is ", member)



function getFamily() {
    let family = {
        name: "Smith",
        member: 2
    }
    return family;
}



let details = getFamily()
let { name, member } = details;


// Lesson on return
function say(message) {
    return message;
}

// ASSIGNING THE RESULT OF THE INVOKATION OF THE FUNCTION
// TO THE VARIABLE WORD
let word = say("Hello"); //-> word = "Hello"
document.body.textContent = word;


//------------------
// multiple return statements in the function 
//------------------

// function compare(a, b, operator) {
//     return a+b;
//     console.log("hello") //this line won't be executed
// }

function compare(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else {
        return "ERROR";
    }
    console.log("Hello"); //never executed
}

// let resultA = compare(2,3,"+");
// console.log(`The result of the function is ${resultA}`) //5

// let resultB = compare(2,3,"-");
// console.log(`The result of the function is ${resultB}`) //-1

// let resultC = compare(2,3,"*");
// console.log(`The result of the function is ${resultC}`) // ERROR


// Solution object destructring
// script.js
const employees = [
    { name: "Anne", email: "Anna@example.com", phone: "0000–000–0000" },
    { name: "Tom", email: "Tom@gmail.com", phone: "0111–111–1111" },
]

for (let emp of employees) {
    // document.body.textContent += `${emp.name}, ${emp.email}, ${emp.phone}`
    document.body.textContent += `${emp["name"]}, ${emp["email"]}, ${emp["phone"]}`
}

//Obj destructuring
for (let emp of employees) {
    let { name, email, phone } = emp;
    document.body.textContent += `${name}, ${email}, ${phone}`
}

// Lesson on functions
// script.js
// // --------------------
// --- Functions Declaration
// --------------------

// squareOne(2)

// // //HOISTED TO THE TOP OF THE SCOPE
function squareOne(x) {
    console.log("square")
    return x * x;
}

squareOne(2);

// --------------------
// --- Functions expression
// --------------------

// anonymous function 
// assigned to a variable

// NOT HOISTED
const squareTwo = function (x) {
    console.log("square")
    return x * x;
}

squareTwo(2);

// console.log(square);
// console.log(square(2));

// --------------------
// --- Anonymous arrow function
// --------------------

// function (a) {
//     return a + 100;
// }

// The same as
// (a) => {
// return a + 100;
// }

// (a) => a + 100;

// a => a + 100;

// // --------------------
// // --- ES6 arrow functions
// // --------------------

// // we assign an anonymous arrow function to the squareA variable
const squareA = (x) => { return x * x; };
console.log("squareA :", squareA(2));

// // // squareB is exactly the same as squareA : 1 PARAMETER
const squareB = x => x * x;
console.log("squareB : ", squareB(2))

// // // 2 PARAMETER
const squareC = (x, y) => x * y;
console.log("squareC : ", squareC(2, 1))

// // // NO PARAMETER
const squareD = () => "hello";
console.log("squareD : ", squareD())

// // IF THE ARROW FUNCTION NEEDS TO DO ADDITIONAL CODE
// // WE NEED CURLY BRACKETS AND WE NEED TO SPECIFY WHAT WE WANT TO RETURN
const squareE = x => {
    x++
    return x * x;
}

//Example
function checkNumber(a, b) {
    a += 2;
    b += 10;
    return a + b
}

//same using arrow function
const checkNumberArrow = (a, b) => {
    a += 2;
    b += 10;
    return a + b
}

function checkNumberTwo(a, b) {
    return a + b
}

//same using arrow function
const checkNumberTwoArrow = (a, b) => a + b;

// --------------------
// --- ES6 arrow functions with the DOM
// --------------------


let btn = document.getElementById("btn");

btn.addEventListener("click", clickBtn);

function clickBtn() {
    document.body.textContent = "you clicked"
}

btn.addEventListener("click", function () {
    document.body.textContent = "you clicked"
});


btn.addEventListener("click", () => document.body.textContent = "you clicked");

// Solution exercise
// script.js
//Function declaration
greetUserOne("Hello");

function greetUserOne(msg) {
    document.body.textContent = msg;
    return msg;
}

greetUserOne("Hello");


//Function expression
const greetUserTwo = function (msg) {
    document.body.textContent = msg;
    return msg;
}

greetUserTwo("Hello");

//Arrow function
const greetUserThree = (msg) => {
    document.body.textContent = msg;
    return msg;
}

greetUserThree("Hello");

// TERNARY OPERATOR
// condition ? condition is true : condition is false


function getTemp(temp) {
    if (temp > 20) {
        document.body.textContent = "Summer";
    } else {
        document.body.textContent = "Winter"
    }
}

getTemp(24);


function getTempOne(temp) {
    temp > 20 ? document.body.textContent = "Summer" : document.body.textContent = "Winter";
}

getTempOne(24);


function getTempTwo(temp) {
    let season = temp > 20 ? "Summer" : "Winter";
    document.body.textContent = season;
}

getTempTwo(24);


const getTempThree = (temp) => temp > 20 ? "Summer" : "Winter";

document.body.textContent = getTempThree(24);


