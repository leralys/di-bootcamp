//===== Exercise 2 =====
// Retrieve the form and console.log it.

const myForm = document.forms[0]
console.log(myForm);

// Retrieve the inputs by their id and console.log them.

// const fname = document.querySelector('#fname');
// const lname = document.querySelector('#lname');
// console.log(fname, lname);

// Retrieve the inputs by their name attribute and console.log them.
let fname = document.querySelector('input[name = fname');
let lname = document.querySelector('input[name = lname');

// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

const ul = document.querySelector('ul');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (fname.value !== '' && lname.value !== '') {
        let objName = {
            fname: fname.value,
            lname: lname.value
        };
        for (let k in objName) {
            let li = document.createElement('li');
            li.innerText = objName[k];
            ul.appendChild(li);
        }
    }
});

//===== Exercise 3 =====

// Create a global variable named allBoldItems.
// Create a function called getBold_items() that takes no parameter.
// This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called return_normal() that changes the color of all the bold text back to black.
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph).

let allBoldItems;
const p = document.querySelector('p');
console.log(p);
const getBoldItems = () => {
    allBoldItems = document.querySelectorAll('p strong');
}
const highlight = () => {
    for (let i of allBoldItems) {
        i.style.color = 'blue';
    }
}
const returnNormal = () => {
    for (let i of allBoldItems) {
        if (i.style.color === 'blue') i.style.color = 'black';
    }
}
getBoldItems();
p.addEventListener('mouseover', highlight);
p.addEventListener('mouseout', returnNormal);
