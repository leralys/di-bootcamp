// Exercise
// Redo the exercise of yesterday (gif and random word) using async await and try and catch
// -> if you havn't finished the exercise yesterday, take the code of Fima

// function word() {
//     fetch("http://random-word-api.herokuapp.com/word?number=1")
//         .then((response) => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error("not 200");
//             }
//         })
//         .then((jsData) => {
//             let body = document.body;
//             body.innerText = jsData[0];
//             console.log(jsData[0]);
//             exercise(jsData[0]);
//         })
//         .catch((error) => {
//             console.log("In the catch", error);
//         });
// }

// function exercise(test) {
//     fetch(`https://api.giphy.com/v1/gifs/random?tag=%22${test}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
//         .then((response) => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error("not 200");
//             }
//         })
//         .then((jsData) => {
//             append(jsData.data.images.original.url);
//         })
//         .catch((error) => {
//             console.log("In the catch", error);
//             let body = document.body;
//             let img = document.createElement("img");
//             img.setAttribute(
//                 "src",
//                 "https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif"
//             );
//             body.append(img);
//         });
// }

// function append(url) {
//     let body = document.body;
//     let img = document.createElement("img");
//     img.setAttribute("src", url);
//     body.append(img);
// }

// word();


let giphyRandomUrl = 'https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
let randomWordUrl = 'http://random-word-api.herokuapp.com/word?number=1';


(async function fetchRandomWord() {
    try {
        const responce = await fetch(randomWordUrl);
        if (responce.status != 200) {
            throw new Error('STATUS NOT 200')
        }
        else {
            const responceData = await responce.json();
            const word = responceData[0];
            await fetchRandomGif(word);
            displayWord(word);
        }
    } catch (e) {
        console.log('error trying to fetch gif by this keyword');
    }
})()

async function fetchRandomGif(tag = '') {
    try {
        const res = await fetch(giphyRandomUrl + `&tag=${tag}`);
        if (res.status != 200) {
            throw new Error('status not 200')
        }
        else {
            const resData = await res.json();
            const gifUrl = resData.data.images.downsized.url;
            const title = resData.data.title;
            appendGif(gifUrl, title);
        }
    }
    catch (e) {
        let h1 = document.createElement('h1');
        h1.innerText = '404 not found';
        h1.style.color = 'blue';
        document.body.append(h1);
        console.log('404 not found')
    }
}

function appendGif(src, alt) {
    let img = document.createElement('img');
    let figure = document.createElement('figure')
    img.src = src;
    img.alt = alt;
    img.style.width = '250px';
    figure.append(img);
    document.body.append(figure);
}

const displayWord = caption => {
    let figcaption = document.createElement('figcaption');
    figcaption.innerText = caption;
    let figure = document.querySelector('figure');
    figure.appendChild(figcaption);
}