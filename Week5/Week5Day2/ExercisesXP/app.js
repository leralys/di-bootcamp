// Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will use this Gif URL:
// https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// Create a program to retrieve the data from the API URL provided above.
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

// const req = new XMLHttpRequest();

// req.onload = function () {
//     document.body.style.backgroundColor = 'white';
//     if (req.status != 200) {
//         console.log('something went wrong')
//         console.log(`Error: ${req.status}`);
//         displayError(req);
//     } else {
//         console.log('all done with request');
//         console.log(this.response)
//     }
// }

// req.onprogress = function () {
//     console.log('progress', req);
//     document.body.style.backgroundColor = 'blue';
// };
// req.onerror = function () {
//     console.log('error');
//     displayError(req);
// };

// (function requestData() {
//     req.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
//     req.responseType = 'json';
//     req.send();
// })();

// const displayError = rqst => {
//     console.log('in display error func')
//     let h2 = document.createElement('h2');
//     h2.innerText = `Error : ${rqst.status}`
//     h2.style.backgroundColor = 'pink';
//     document.body.append(h2);
// }

// Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object


// https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

const req = new XMLHttpRequest();

req.onload = function () {
    document.body.style.backgroundColor = 'white';
    if (req.status != 200) {
        console.log('something went wrong')
        console.log(`Error: ${req.status}`);
        displayError(req);
    } else {
        console.log('all done with request');
        console.log(this.response)
    }
}

req.onprogress = function () {
    console.log('progress', req);
    document.body.style.backgroundColor = 'blue';
};
req.onerror = function () {
    console.log('error');
    displayError(req);
};

(function requestData() {
    req.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    req.responseType = 'json';
    req.send();
})();

const displayError = rqst => {
    console.log('in display error func')
    let h2 = document.createElement('h2');
    h2.innerText = `Error : ${rqst.status}`
    h2.style.backgroundColor = 'pink';
    document.body.append(h2);
}