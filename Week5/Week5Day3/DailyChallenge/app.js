// Daily Challenge: Play With Words
// 1rst Daily Challenge

// Instructions
// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.


let testArray = ['avocado', 'tomato', 'cucumber', 'artichoke'];
let testArray2 = ['avocado', 'tomato', 'cucumber', 1];

const makeAllCaps = arr => {
    return new Promise(resolve => {
        let uppercasedArray = [];
        arr.forEach(el => {
            if (!isNaN(el)) {
                throw new Error('contains not just strings')
            }
            uppercasedArray.push(el.toUpperCase());
        })
        resolve(uppercasedArray);
    })
}

const sortWords = arr => {
    return new Promise(resolve => {
        resolve(arr.sort());
    })
}

// MY TEST
// makeAllCaps(testArray)
//     .then(uppercased => sortWords(uppercased))
//     .then(sorted => console.log(sorted))
//     .catch(err => console.log(err));

// makeAllCaps(testArray2)
//     .then(uppercased => {
//         sortWords(uppercased)
//             .then(sorted => console.log(sorted))
//     })
//     .catch(err => console.log(err));


// TEST
// makeAllCaps(testArray)
//     .then(sortWords)
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

// makeAllCaps(testArray2)
//     .then(sortWords)
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))




// 2nd Daily Challenge

// Create three functions that use promises which can be chained.

// Call the first function toJs():
// this function should take the morse json object provided above, and convert it to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function should asks the user for a word or a sentence
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with it’s morse translation of the user’s word.

// The last function called joinWords(), should join the morse translation by using line break.

// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---


let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


function toJs(jsonString) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            jsObj = JSON.parse(jsonString);
            if (Object.keys(jsObj).length > 0) resolve(jsObj);
            else reject('empty object');
        }, 3000)
    })
}

function toMorse(morseJsObj) {
    return new Promise((resolve, reject) => {
        let arrMorse = [];
        let phrase = prompt('Please enter a word or a sentence');
        if (phrase !== '') {
            let phraseTransf = phrase.toLowerCase().split(' ').join('');
            for (let i = 0; i < phraseTransf.length; i++) {
                if (Object.keys(morseJsObj).includes(phraseTransf[i])) {
                    let char = morseJsObj[phraseTransf[i]];
                    arrMorse.unshift(char);
                } else {
                    reject('cannot convert to morse code');
                }
            }
            appendTitle(phrase);
            resolve(arrMorse);
        } else throw new Error('empty prompt')
    })
}

function joinWords(arrayOfMorse) {
    return new Promise((resolve, reject) => {
        arrayOfMorse.forEach(el => {
            let h5 = document.querySelector('h5');
            let p = document.createElement('p');
            p.innerText = el;
            h5.after(p);
            let br = document.createElement('br')
            p.after(br);
        })
        resolve();
    })
}

function appendTitle(promtVal) {
    let h5 = document.createElement('h5');
    h5.innerText = `"${promtVal}" gives you`
    document.body.append(h5);
}


// TEST
toJs(morse)
    .then(toMorse)
    .then(joinWords)
    .catch(error => console.log(error))

// BAD TEST
// toJs('')
//     .then(toMorse)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
