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