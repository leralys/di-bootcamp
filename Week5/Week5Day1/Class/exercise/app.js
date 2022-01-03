// # HTTP and forms
// # Exercise
// 1. In the HTML file, create a form containing 2 inputs, username and password.
// The ACTION SHOULD BE index.html WITH GET REQUEST

// 2. In the JS file, validate the data before processing it
// * Username must be trimed, minimum 4 characters and start with a first letter uppercased
// * Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page


let myForm = document.forms[0];

// myForm.addEventListener('submit', e => {
//     let username = myForm.username.value.trim();
//     if (username.length < 4 || username[0] !== username[0].toUppercase() || myForm.password.value === '') {
//         e.preventDefault();
//         console.log(myForm.password.value);
//         document.body.style.backgroundColor = "red";
//     }
//     else {
//         e.preventDefault();
//         const urlSearchParamsObj = new URLSearchParams(window.location.search);
//         // console.log(urlSearchParamsObj);
//         let result = document.querySelector('#result');
//         for (let [key, value] of urlSearchParamsObj.entries()) {
//             let p = document.createElement('p');
//             p.innerText = `${key}:${value}`;
//             result.append(p);
//         }
//     }
// });

//solution

// // # HTTP and forms
// let form = document.getElementById("form")

// //VALIDATION
// form.addEventListener("submit", submitFunction)
// function submitFunction(event) {
//     let locationUsername = document.getElementById("username").value;
//     let locationPassword = document.getElementById("password").value

//     if (locationUsername.length < 5 || locationUsername[0] !== locationUsername[0].toUpperCase() || locationPassword == "") {
//         event.preventDefault();
//         document.body.style.backgroundColor = "red"

//     }
// }


// const urlSearchParamsObj = new URLSearchParams(window.location.search);
// console.log(urlSearchParamsObj.entries());

// let results = document.getElementById("displayValues");

// for (const [key, value] of urlSearchParamsObj.entries()) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = `${key}: ${value}`;
//     results.appendChild(paragraph)
// }