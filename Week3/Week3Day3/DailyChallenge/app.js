// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

console.log('hi');

const input = document.querySelector('#input');
const text = document.querySelector('#values');

input.addEventListener('input', updateValue);

function updateValue(e) {
    let string = e.target.value.replace(/[^a-z]/gi, '')
    text.textContent = string;
}
