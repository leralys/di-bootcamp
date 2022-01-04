//----------------
// Resolved or rejected promises
// -----------------

let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    if (completed) {
        resolve("I have completed learning JS.");
    } else {
        reject("I haven't completed learning JS yet.");
    }
});

console.log(learnJS)

//Promises and set timeout

let mathGrade = 90;

let gift = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (mathGrade >= 90) {
            resolve("I'm buying you a gift");
        } else {
            reject("I don't love you anymore");
        }
        console.log(gift) // After 5 seconds, Promise Object -> state : Resolved, result: "I'm buying you a gift"
    }, 5000);
});

console.log(gift) // Promise Object -> state : Pending

// Consuming Promises
let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    if (completed) {
        resolve("I have completed learning JS.");
    } else {
        console.log("After 5 seconds")
        reject("I haven't completed learning JS yet.");
    }
});


learnJS
    .then(message => message.toUpperCase())
    //Promise Object result: I HAVE COMPLETED LEARNING JS
    .then(upperMessage => upperMessage.split(" "))
    //Promise Object result: ["I","HAVE","COMPLETED","LEARNING","JS"]
    .then(arr => {
        if (arr.length < 6) {
            throw new Error("Not enough words")
        } else {
            console.log(arr)
        }
    })
    //Promise Object console.log result
    .catch(error => console.log("in the catch", error))
    .finally(() => console.log("In the finally"))


// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")


// Solution exercise
//EXERCISE

function checkIfString(str) {
    let checkPromiseString = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof str === "string") {
                resolve(str.toUpperCase())
            } else {
                reject(str)
            }
        }, 5000)
    })
    return checkPromiseString;
}

//Will go to the then, and the finally methods
checkIfString("hello")
    .then(result => console.log(result, result))
    .catch(error => console.log("error", error))
    .finally(() => console.log("congratulation"))

//Will go to the catch, and the finally methods
checkIfString(123)
    .then(result => console.log(result, result))
    .catch(error => console.log("error", error))
    .finally(() => console.log("congratulation"))


// Lesson on Fetch
//---------------
// FETCH
//-------------

let urls = 'https://lisenakache.github.io/HttpRequestGithub/test.json'
console.log("fetch(url) = ", fetch(urls)) //returns a Promise 


//then method takes as a parameter the RESULT of the previous promise
// here the result of the promise is called the Response Object

// fetch returns a promise with a result - Response Object
fetch('https://lisenakache.github.io/HttpRequestGithub/test.json')
    .then(result => {
        // console.log("result", result) // Response Object
        // console.log(result.json()) // Promise Object - result : data wanted
        return result.json();
    })
    .then(jsData => {
        console.log("jsData = ", jsData) //the array of animals
    })
    .catch(error => {
        console.log("In the catch", error)
    });

// -----------------------
// Fetch example
// -------------------------

let url = 'https://lisenakache.github.io/HttpRequestGithub/test.json'

let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)

function requestData() {
    fetch(url)
        .then(response => {
            if (response.status == 200) { //or response.ok
                return response.json();
            } else {
                throw new Error("not 200")
            }
        })
        .then(jsData => {
            console.log(jsData)
            displayUser(jsData)
        })
        .catch(error => {
            console.log("In the catch", error)
            displayError(error)
        });
}



const displayUser = (animals) => {
    let results = document.getElementById("results")
    animals.forEach(info => {
        let li = document.createElement("li");
        li.textContent = `${info.name} - ${info.species}`
        results.appendChild(li)
    });

}

const displayError = (xhr) => {
    let error = document.getElementById("error");
    let h2 = document.createElement("h2");
    h2.textContent = `Error`;
    h2.style.backgroundColor = 'pink';
    error.appendChild(h2);
}

// # Fetch
// # Exercise
// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// # Part III
// If the giphy API doesn't find a gif depending on the word (because the word can be strange),then instead of displaying an empty image, display a gif that says "404 ERROR"
// URL to use for the first part : https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My