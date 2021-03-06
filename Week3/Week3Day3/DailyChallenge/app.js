// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions


const input = document.querySelector('#input');
const p = document.querySelector('#p');

input.addEventListener('keyup', inputString);

function inputString(e) {
    let string = e.target.value.replace(/[^a-z]/gi, '');
    e.target.value = string;
    p.textContent = e.target.value;
}
