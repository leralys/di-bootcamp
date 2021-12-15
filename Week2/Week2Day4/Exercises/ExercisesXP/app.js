// Exercise 1 : Information
// ====== Part I : function with no parameters ======

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

const infoAboutMe = function () {
    console.log('Hi, I\'m Lera, I live in Kfar Saba, and I learn web development. This is function expression');
}

function infoAboutMe1() {
    console.log('Hi, I\'m Lera, I live in Kfar Saba, and I learn web development. This is function declaration');
}

const infoAboutMe2 = () => {
    console.log('Hi, I\'m Lera, I live in Kfar Saba, and I learn web development. This is an arrow function');
}

infoAboutMe();
// infoAboutMe1();
// infoAboutMe2();

// ====== Part II : function with three parameters ======

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

const infoAboutPerson = (personName, personAge, personFavoriteColor) => {
    console.log(`Your name is ${personName}, you are ${personAge} years old, your favourite color is ${personFavoriteColor}.`)
}
infoAboutPerson('David', 45, 'blue');
infoAboutPerson('Josh', 12, 'yellow');

// Exercise 2 : Tips

// John created a simple tip calculator to help calculate how much to tip
// when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, ask John for the amount of the bill.
// Here are the rules
// --- If the bill is less than $50, tip 20%.
// --- If the bill is between $50 and $200, tip 15%.
// --- If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
// Call the calculateTip() function.

// --- function
const calculateTip = () => {
    let num;
    do {
        num = parseFloat(prompt('What is the amount of the bill?'));
    }
    while (num < 0 || isNaN(num));
    let tip = 0;
    if (num < 50) tip = num * 0.2;
    else if (num >= 50 && num <= 200) tip = num * 0.15;
    else if (num > 200) tip = num * 0.1;
    return num += tip;
}

console.log(`The bill+tip is $${calculateTip()}`);


// Exercise 3 : Find The Numbers Divisible By 23

// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

const isDivisible = () => {
    let numArr = [];
    for (let i = 0; i < 500; i++) {
        if (i % 23 === 0) numArr.push(i);
    } return numArr;
}
console.log(`Outcome: ${isDivisible().join(' ')}`);

const sum = (arr) => {
    let result = 0;
    for (let el of arr) {
        result += el;
    } return result;
}
console.log(`Sum: ${sum(isDivisible())}`);


// Bonus: Add a parameter divisor to the function.
// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

const isDivisible1 = (divisor) => {
    let numArr = [];
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) numArr.push(i);
    } return numArr;
}
console.log(`All numbers divisible by 3: ${isDivisible1(3).join(' ')}.
The sum is: ${sum(isDivisible1(3))}`);
console.log(`All numbers divisible by 45: ${isDivisible1(45).join(' ')}.
The sum is: ${sum(isDivisible1(3))}`);



// Exercise 4 : Shopping List

// array called shoppingList with the following items:
// “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ['banana', 'orange', 'apple'];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList.
// In order to do this you must follow these rules:
// --- // The item must be in stock.
// --- //If the item is in stock find out the price in the prices object.

const myBill = () => {
    let totalPrice = 0;
    for (i = 0; i < shoppingList.length; i++) {
        for (let produce in stock) {
            if (shoppingList[i] === produce && stock[produce] > 0) {
                // console.log(`There are ${stock[produce]} ${shoppingList[i]}s in stock`);
                // Bonus: If the item is in stock, decrease the item’s stock by 1
                stock[produce] -= 1;
                for (let p in prices) {
                    if (shoppingList[i] === p) {
                        // console.log(`The price of ${shoppingList[i]}s is ${prices[p]}`);
                        totalPrice += prices[p];
                    }
                }
            }
        }
    } return totalPrice;
}
console.log(`Total price is ${myBill()}`);
// console.log(stock['banana']);
// console.log(stock['orange']);
// console.log(stock['apple']);


// Exercise 5 : What’s In My Wallet ?

// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies. 
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// To illustrate:
// After you created the function, invoke it like this:
// changeEnough(4.25, [25, 20, 5, 0])

// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies
// gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true


const changeEnough = (itemPrice, amountOfChange) => {
    // If the sum of the change is bigger or equal than the item’s price, return true
    // amountOfChange = [0, 5, 10, 15] means 0 quartes, 5 dimes, 10 nickels, 15 pennies 
    // A quarters is 0.25, dime is 0.10, nickel is 0.05, penny is 0.01
    let multiply = [0.25, 0.1, 0.05, 0.01];
    let result = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        amountOfChange[i] *= multiply[i];
        result += amountOfChange[i]
    }
    return result > itemPrice ? true : false;
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));


// Exercise 6 : Vacations Costs

// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
//  If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation
// by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost()
// inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

const hotelCost = (n) => {
    let priceHotel = 140;
    return n * priceHotel;
}

const planeRideCost = (str) => {
    str.toLowerCase();
    switch (str) {
        case 'london': return 183;
        case 'paris': return 220;
        default: return 300;
    }
}

const rentalCarCost = (num) => {
    let carCost = 40;
    let discount = 0.95;
    if (num < 10) return num * carCost;
    else return num * carCost * discount;
}

const totalVacationCost = () => {
    let numNights;
    let destination;
    let carRentDays;
    do {
        numNights = parseInt(prompt('How many nights would you like to stay in the hotel?'));
    }
    while (numNights < 0 || isNaN(numNights));
    do {
        destination = prompt('What is your destination? Please enter city name');
    }
    while (!isNaN(parseInt(destination)) || destination === null || destination === '');
    do {
        carRentDays = parseInt(prompt('How many days would you like to rent the car?'));
    }
    while (carRentDays < 0 || isNaN(carRentDays));
    return hotelCost(numNights) + planeRideCost(destination) + rentalCarCost(carRentDays);
}

console.log(`The total vacation cost is $${totalVacationCost()}.`);