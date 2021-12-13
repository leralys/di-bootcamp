// Create a stuctured html file linked to a JS file
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let user = {
    username: 'John',
    password: 'mypassword'
};

let database = [user];

let obj1, obj2, obj3;

let newsfeed = [
    obj1 = {
        username: 'user1',
        timeline: 'timeline1'
    },
    obj2 = {
        username: 'user2',
        timeline: 'timeline2'
    },
    obj3 = {
        username: 'user3',
        timeline: 'timeline3'
    }
];

console.log(newsfeed);


// Exercise 1

// 1. Add the lastname Smith to the object
// 2. Change the price of the pear, so it will contain the Taxes. 17%
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

// let userCart = {
//     username: 'John',
//     password: 1234,
//     isUserSignedIn: true,
//     cart: {
//         apple: 2,
//         banana: 1,
//         pear: 5,
//     },
//     prices: {
//         apple: 0.5,
//         banana: 0.8646466363,
//         pear: 0.2
//     }
// };

// userCart['lastname'] = 'Smith';
// console.log(userCart);

// userCart['prices']['pear'] *= 1.17;

// console.log(`New Price of pear is: ${Number(userCart['prices']['pear']).toFixed(2)}`);

// let userChoice = prompt('What fruit do you want: apple, banana, pear?').toLowerCase();

// console.log(`The price of ${userChoice} is: ${Number(userCart['prices'][userChoice]).toFixed(2)}`);




// Exercise 2

let userCart = {
    username: 'Johnny',
    password: 12345,
    isUserSignedIn: true,
    cart: {
        apple: 2,
        banana: 1,
        pear: 5,
    },
    prices: {
        apple: 0.5,
        banana: 0.8646466363,
        pear: 0.2
    }
};

// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"

if (userCart['isUserSignedIn']) {
    console.log(`Name: ${userCart['username']}, Password: ${userCart['password']}`)
} else {
    alert('Please sign in');
}

// Exercise 3

//  1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
//  2. If the user is Johnny OR his password is 12345 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in"

if (userCart['username'] === 'Johnny' && userCart['password'] === 12345) {
    console.log('You are signed in');
}
else if (userCart['username'] === 'Johnny' || userCart['password'] === 12345) {
    console.log('One credential is false');
} else {
    console.log('you need to sign in');
}
