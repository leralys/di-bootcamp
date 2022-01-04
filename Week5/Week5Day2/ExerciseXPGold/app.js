// Exercise 1 : Giphy API #2
// Instructions
// Part I

// Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// Create a program to fetch a gif.
// Once the Giphy API has responded with data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

// https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// with promises

// https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=burrito

fetch('https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    .then(res => {
        console.log('RESPONCE, WAITING TO PARSE...', res);
        // res.json returns a promise
        return res.json()
    })
    .then(respData => {
        console.log('DATA PARSED!', respData);
        let url = respData.data.images.downsized.url;
        let title = respData.data.title;
        appendGif(url, title);
    })
    .catch(e => {
        console.log('OH NO ERROR', e);
        let h2 = document.createElement('h2');
        h2.innerText = 'Sorry, not available'
        document.body.append(h2);
    })

function appendGif(src, alt) {
    let img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    document.body.append(img);
}

