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

// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// let giphyRandomUrl = 'https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// (function fetchRandomGif() {
//     fetch(giphyRandomUrl)
//         .then(res => {
//             if (res.status == 200) {
//                 return res.json();
//             } else {
//                 throw new Error('not 200')
//             }
//         })
//         .then(resData => {
//             console.log(resData);
//             let url = resData.data.images.downsized.url;
//             let title = resData.data.title;
//             appendGif(url, title);
//         })
//         .catch(error => {
//             console.log('something not ok', error);
//             // displayError(error)
//         });
// })();

// function appendGif(src, alt) {
//     let img = document.createElement('img');
//     img.src = src;
//     img.alt = alt;
//     img.style.width = '250px';
//     document.body.append(img);
// }

// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page


let giphyRandomUrl = 'https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
let randomWordUrl = 'http://random-word-api.herokuapp.com/word?number=1';

(function fetchRandomGif(tag = fetchRandomWord()) {
    fetch(giphyRandomUrl + `&tag=${tag}`)
        .then(res => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw new Error('not 200');
            }
        })
        .then(resData => {
            let url = resData.data.images.downsized.url;
            let title = resData.data.title;
            appendGif(url, title);
        })
        .catch(error => {
            displayError(error);
        });
})();

function appendGif(src, alt) {
    let img = document.createElement('img');
    let figure = document.createElement('figure')
    img.src = src;
    img.alt = alt;
    img.style.width = '250px';
    figure.append(img);
    document.body.append(figure);
}

function fetchRandomWord() {
    fetch(randomWordUrl)
        .then(res => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw new Error('not 200');
            }
        })
        .then(resData => {
            let word = resData[0];
            displayWord(resData[0]);
            return word;
        })
        .catch(error => {
            displayError(error);
        });
};

const displayError = err => {
    console.log(err);
    let h2 = document.createElement("h2");
    h2.textContent = 'Error';
    h2.style.backgroundColor = 'pink';
    document.body.append(h2);
}

const displayWord = word => {
    let figcaption = document.createElement('figcaption');
    figcaption.innerText = word;
    let figure = document.querySelector('figure');
    figure.appendChild(figcaption);
}

// # Part III
// If the giphy API doesn't find a gif depending on the word (because the word can be strange),
// then instead of displaying an empty image, display a gif that says "404 ERROR"