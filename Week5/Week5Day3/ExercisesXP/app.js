// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.

const compareToTen = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) resolve(`${num} is greater than 10`);
        else reject(`${num} is less than 10`);
    })
}

compareToTen(8)
    .then(onFulfilled => console.log(onFulfilled))
    .catch(onRejected => console.log(onRejected))

compareToTen(15)
    .then(onFulfilled => console.log(onFulfilled))
    .catch(onRejected => console.log(onRejected))



// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.


const resolveWithSuccess = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    })
}
// resolves with succes
resolveWithSuccess()
    .then(() => console.log('success'))
    .catch(err => console.log('Ooops something went wrong', err));



// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const resolveWithValue = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 4500);
});

resolveWithValue.then((value) => {
    console.log(value);
});


const rejectWithError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Boo!');
    }, 5000);
});

// rejectWithError
//     .then(() => console.log('success'))
//     .catch(error => console.log(error));

rejectWithError.catch(error => console.log(error));