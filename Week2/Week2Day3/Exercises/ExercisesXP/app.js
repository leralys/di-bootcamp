// Exercise 1 : List Of People

// ************Part I - Review About Arrays************

let people = ['Greg', 'Mary', 'Devon', 'James'];

// Write code to remove “Greg” from the people array.
let indexToDelete = people.indexOf('Greg');
// -- just in case we check that Greg is in the array
if (indexToDelete > -1) {
    people.splice(indexToDelete, 1);
}

// Write code to replace “James” to “Jason”
people[people.indexOf('James')] = 'Jason';

// Write code to add your name to the end of the people array
let myName = 'Lera';
people.push(myName);

// Write code that console.logs Mary’s index
let indexOfMary = people.indexOf('Mary')
console.log(indexOfMary);

// Write code to make a copy of the people array using the slice method
// -- The copy should NOT include “Mary” or your name.
// -- Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// -- Hint: Check out the documentation for the slice method
let peopleNew = people.slice();
peopleNew.splice(indexOfMary, 1);
peopleNew.splice(peopleNew.indexOf(myName), 1);

// Write code that gives the index of “Foo”. Why does it return -1 ?  
console.log(people.indexOf('Foo'));
// indexOf('Foo') is -1 because it's not in the array

// Create a variable called last which value is the last element of the array.
// -- Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1];
// the last element is always at index arr.length -1 because index count starts form 0


// ************Part II - Loops************

// Using a loop, iterate through the people array and console.log each person.
for (let person of people) {
    console.log(person);
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === 'Jason') break;
}
// Hint: take a look at the break statement in the lesson.



// Exercise 2 : Your Favorite Colors

// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ['red', 'blue', 'green', 'yellow', 'olive'];
for (let i = 0; i < colors.length; i++) {
    let suff = i + 1;
    switch (suff) {
        case 1:
            suff = '1st';
            break;
        case 2:
            suff = '2nd';
            break;
        case 3:
            suff = '3rd'
            break;
        default:
            suff = `${suff}th`;
    }
    console.log(`My ${suff} choice is ${colors[i]}`)
}


// Exercise 3 : Repeat The Question

// Prompt the user for a number
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number
// Tip : Which while loop is more relevant for this situation?

let p;
do {
    p = prompt('Please type a number. To stop this hell a number must be more than 10')
} while (Number(p) != p || Math.floor(p) < 10);


// Exercise 4 : Building Management

// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ['Sarah', 'Dan', 'David'],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log(`There are ${building['numberOfFloors']} floors in the building`);
console.log(`There are ${building['numberOfAptByFloor']['firstFloor']} apartments on the 1st floor, and ${building['numberOfAptByFloor']['thirdFloor']} apartments on the 3rd floor.`);

// Console.log the name of the second tenant and the number of rooms he has in his apartment
let second = building['nameOfTenants'][1];
let toLowerCase = second.toLowerCase();
let rooms = building['numberOfRoomsAndRent'][toLowerCase][0];

console.log(`The second tenant is ${second} and he has ${rooms} rooms in his apartment.`);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahRent = building['numberOfRoomsAndRent']['sarah'][1];
let davidRent = building['numberOfRoomsAndRent']['david'][1];
let danRent = building['numberOfRoomsAndRent']['dan'][1];
if (sarahRent + davidRent > danRent) {
    danRent = 1200;
    building['numberOfRoomsAndRent']['dan'][1] = danRent;
}


// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for loop, console.log the keys of the object.
// Using a for loop, console.log the values of the object.

let family = {
    lastname: 'Smith',
    counry: 'Australia',
    zipcode: 12345
}
for (key in family) {
    console.log(key);
}
for (key in family) {
    console.log(family[key]);
}


// Exercise 6
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let sentence = [];
for (key in details) {
    sentence.push(key);
    sentence.push(details[key]);
}
console.log(sentence.join(' '));


// Exercise 7 : Secret Group

// A group of friends have decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let names = ['Jack', 'Philip', 'Sarah', 'Amanda', 'Bernard', 'Kyle'];
names.sort();
let secretSociety = '';
for (let n of names) {
    secretSociety += n[0];
}
console.log(secretSociety);