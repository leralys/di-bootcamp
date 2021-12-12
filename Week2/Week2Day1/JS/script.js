// EXERCISE 1

// 1. Create these variables and give them values:
// addressNumber
// address
// country
// 2. Write a variable named globalAddress, and concatenate inside, the variables:
// addressNumber
// addressStreet
// country
// In order to create a sentence
// 3. Display globalAddress Example: globalAddress should display « I live in BenYehuda 5, in Israel »

let addressNumber = 5;
let addressStreet = 'BenYehuda';;
let country = 'Israel';
let globalAddress;

globalAddress = `I live in ${addressStreet} ${addressNumber}, ${country}`;
console.log(globalAddress);

// EXERCISE 1


// 1. Store your birth year in a variable.
// 2. Store a future year in a variable.
// 3. Calculate your possible ages for that year based on the stored values.
// 4. Display : "I will be NN in YYYY", substituting the values.

const year = 1991;
let futureYear = 2022;
console.log(`I will be ${futureYear - year} in ${futureYear}`);

// EXERCISE 3
// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
// 2. Display dog
// 3. Add to the array pets, the pet horse. Remove the pet rabbit
// 4. Display the array length

const pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
console.log(pets[1]);
pets.push('horse');
pets.splice(3, 1);
console.log(pets.length);
console.log(pets);

alert("Hello");

let age = prompt('How old are you?');
alert(`You are ${age} years old!`); // You are ${age} years old!

let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed