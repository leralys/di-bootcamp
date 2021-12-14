// Create a structured HTML file linked to a JS file

// 1. Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"

for (let i = 0; i <= 15; i++) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}

let fruits = ["apple", "banana", "pear", "melon"];

for (let i = 0; i < fruits.length - 1; i++) {
    fruits[i] += 's';
} console.log(fruits);

let users = [
    {
        username: "John",
        lastName: "Smith"
    },
    {
        username: "Tom",
        lastName: "Smith"
    },
    {
        username: "Lea",
        lastName: "Smith"
    }
];

// 1. console.log the username of each user

for (let obj of users) {
    for (key in obj) {
        if (key === 'username') {
            console.log(obj[key])
        }
    }
}