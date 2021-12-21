// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs
// with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose,
// and sometimes the story is surprisingly funny.
// In this exercise you will complete the functionality with event listeners.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the button is clicked.
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.

const btn = document.querySelector('#lib-button');
const inputs = document.querySelectorAll('input');
const story = document.querySelector('#story');


getWords = () => {
    let objWords = {};
    for (let i of inputs) {
        if (i.value === '' || i.value === undefined) {
            alert(`Please fill the ${i.id}`);
            return;
        } else {
            let key = i.id;
            let word = i.value;
            objWords[key] = word;
        }
    }
    let text = `${objWords.adjective} ${objWords.noun} named ${objWords.person} ${objWords.verb} to a ${objWords.place}`;
    story.innerText = text;
}
btn.addEventListener('click', getWords);