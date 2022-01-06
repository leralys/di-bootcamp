// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.


// Example
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]

let randomQuotesUrls = [
    'https://friends-quotes-api.herokuapp.com/quotes/random', //friends
    'https://api.kanye.rest/' //kanye
];

//array of promises(result of fetch)
let requests = randomQuotesUrls.map(url => fetch(url));

Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())))
    // returns array of js objects
    .then(objects => {
        // loops over an array and prints a random quote 
        objects.forEach(el => console.log(el.quote))
    })
    .catch(err => console.log('ohhh nooo', err))


