// Instructions
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const searchForm = document.forms[0];
let h5 = document.createElement('h5');
searchForm.after(h5);

searchForm.addEventListener('submit', startSearch);

function startSearch(e) {
    e.preventDefault();
    let input = document.querySelector('#search').value;
    if (input) {
        findGif(input);
    } else {
        h5.innerText = 'Please specify what GIF do you want to see';
    }
}

const findGif = async (string) => {
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${string}`);
        const responceData = await res.json();
        let imgObj = {
            url: responceData.data.images.downsized.url,
            title: responceData.data.title,
        };
        appendGif(imgObj);
        appendDeleteAllBtn();
    }
    catch (e) {
        h5.innerText = 'OOOPS ... Something went wrong';
        console.log(e);
    }
}

function appendGif(obj) {
    let img = document.createElement('img');
    img.src = obj.url;
    img.alt = obj.title;
    let deleteImg = document.createElement('button');
    deleteImg.innerText = 'Delete';
    h5.innerText = ''
    document.body.append(img);
    img.after(deleteImg);
    deleteImg.addEventListener('click', deleteImage);
}

function deleteAll() {
    let images = document.querySelectorAll('img');
    images.forEach(el => el.remove());
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.remove());
}

function deleteImage() {
    this.previousSibling.remove();
    this.remove();
    if (document.querySelectorAll('img').length < 1) {
        document.querySelector('button').remove();
    };
}

function appendDeleteAllBtn() {
    let imgAmount = document.querySelectorAll('img').length;
    if (imgAmount === 1) {
        let deleteAllBtn = document.createElement('button');
        deleteAllBtn.innerText = 'Delete All';
        h5.innerText = '';
        searchForm.after(deleteAllBtn);
        deleteAllBtn.addEventListener('click', deleteAll);
    }
}
