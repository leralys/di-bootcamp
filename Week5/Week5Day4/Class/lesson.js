// Lesson of today async/await
// -----------------
// ASYNC
// ----------------

// "old" way
// function sayHello(username){
// 	return new Promise (function (resolve, reject) { 
// 		resolve(`Hello ${username}`)
// 	})
// }

// new way - syntactic sugar
// async function sayHello(username){
// 	return `Hello ${username}`;
// }

//new way with exceptions
// async function sayHello(username){
// 	if(username != "John"){
// 		throw new Error ("incorrect username")
// 	} else {
// 		return `Hello ${username}`;
// 	}
// }

//will go the the then method
// sayHello("John")
// .then(result => document.body.textContent = result.toUpperCase())
// .catch(error => console.log(error))

//will go the the catch method
// sayHello("David")
// .then(result => document.body.textContent = result.toUpperCase())
// .catch(error => console.log(error))

// ---------------
// Differences
// --------------

//WITHOUT async await

// const learnJS = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//     	resolve('Javascript DONE')
// 	},2000)
//   })
// }
// // learnJs()
// // .then(result => console.log(result))


//WITH async await

// // await 
// // -> 1) call the function
// // -> 2) retrive the value of the promise

// async function checkPromises(){
// 	let result = await learnJS();
// 	console.log("IN THE CONSOLE.LOG result", result)
// 	return result;
// }

//NOT BLOCKING
// for (let i = 0; i<8; i++){
// 	console.log(i)
// }

// checkPromises() //Promise resolved result: NO RESULT

//-------------------------
// ASYNC AWAIT
//----------------------

// //1rst example

const learnJS = () => {
    return new Promise(resolve => {
        console.log("In LearnJS")
        setTimeout(() => {
            console.log("--------I learn Javascript-------");
            resolve('Javascript DONE')
        }, 3000)
    })
}

const learnReact = () => {
    console.log("In LearnReact")
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("--------I learn React 2 sec after JS-------")
            resolve('REACT DONE')
        }, 2000)
    })
}

const doSomething = async () => {
    let javascript = await learnJS();
    console.log("hello")
    let react = await learnReact();
    console.log("bye")
}

console.log('Before')
doSomething()
console.log('After')

// "Before"
// "In LearnJS"
// - waiting 3 sec , while we wait "After"
// "--------I learn Javascript-------"
// "hello"
// "In LearnReact"
// waiting 2 sec
//"--------I learn React 2 sec after JS-------"
// "bye"


// Lesson on Error Handling Async Await
//----------------------
// ERROR HANDLING
//----------------------

let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)

// // with async-await
// // try, catch is better than 
// // then,catch because it can find an error across multiple promises

async function requestData() {
    try {
        let fetched = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (fetched.status === 200) {
            let user = await fetched.json();
            console.log(user.username)
            let fetchedSpecificGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
            let details = await fetchedSpecificGif.json();
            console.log(details.data.title)
        } else {
            throw new Error("not 200")
        }
    } catch {
        console.log("Error")
        let results = document.getElementById("results");
        results.innerHTML = "<iframe src='https://giphy.com/embed/3o6Zt6ML6BklcajjsA' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></p>";
    }
}


// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user -
// if the names are not a string -> reject
// else - resolve with the name of the 2 ppl
// 2. The 2nd function, receives a noun
// if the noun is less than 3 letters - reject
// else - resolve with the noun
// 3. The 3rd function, receives a city
// if the city doesn't start with an uppercase letter -> reject
// else - resolve with the city name
// 4. The 4st function, receives a verb (finishing with "ing")
//  if it doesn't end with "ing" -> reject
// else resolve with the verb
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"

// Part II.
// Instead of waiting for the promises to come back resolved, look at Promise.all method
// -> running the promises in Parallel

// SOLUTION
async function isString(fame1, fame2) {
    if (typeof fame1 !== "string" && typeof fame2 !== "string")
        throw new Error("not a string");
    return [fame1, fame2];
}
async function nounLength(noun) {
    if (noun.length < 3) throw new Error("noun too short");
    return noun;
}
async function cityCase(city) {
    if (city[0] !== city[0].toUpperCase()) throw new Error("not upper cased");
    return city;
}
async function verbIng(verb) {
    if (!verb.endsWith("ing")) throw new Error("not present progressive");
    return verb;
}
async function createsSentence() {
    const famePeople = await isString("Jerry", "John");
    const noun = await nounLength("charming");
    const city = await cityCase("Paris");
    const verb = await verbIng("playing");
    console.log(
        ` ${noun} ${famePeople[0]} is ${verb} football with ${famePeople[1]} in ${city} `
    );
}
createsSentence();


//----------------------
// ERROR HANDLING
//----------------------

let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)

// // with async-await
// // try, catch is better than 
// // then,catch because it can find an error across multiple promises

async function requestData() {
    try {
        let fetched = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (fetched.status === 200) {
            let user = await fetched.json();
            console.log(user.username)
            let fetchedSpecificGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
            let details = await fetchedSpecificGif.json();
            console.log(details.data.title)
        } else {
            throw new Error("not 200")
        }
    } catch {
        console.log("Error")
        let results = document.getElementById("results");
        results.innerHTML = "<iframe src='https://giphy.com/embed/3o6Zt6ML6BklcajjsA' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></p>";
    }
}

// Lesson of today
let btn = document.getElementById("btn");
btn.addEventListener("click", getData)

// without async await
function requestData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => fetch(`https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`))
        .then(gif => gif.json())
        .then(detail => console.log(detail.data.title))
}

// with async await
async function getData() {
    let userDetail = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let userDetailObject = await userDetail.json();
    let oneGif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${userDetail.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    let detailGif = await oneGif.json()
    document.getElementById("results").textContent += detailGif.data.title
}