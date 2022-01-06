// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);


(async function chuckNorris() {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const resData = await res.json()
        console.log(resData)
    } catch (err) {
        console.log('Error', err);
    }
})()

// this api does not respond

// (async function starWars() {
//     try {
//         const res = await fetch('https://swapi.dev/api/starships/9/')
//         if (res.status != 200) {
//             throw new Error('STATUS NOT 200')
//         } else {
//             const resData = await res.json();
//             console.log(resData);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// })()

// Exercise 2: Analyze
// Instructions
// Analyze the code provided above what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

// asyncCall();

// we call first asyncCall() function that prints 'calling',
// then asyncCall() takes the result of calling resolveAfter2Seconds() function, 
// (which resolves after two seconds with the value 'resolved'),
// and prints it
