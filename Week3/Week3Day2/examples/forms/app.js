// document.forms -> retrieve all the forms on the page

// document.forms[0] -> retrieve the first form

// document.forms[0].name -> retrieve the name attribute of the first form

// document.forms[0].elements -> retrieve the children of the form

// document.forms[0].elements[0] -> retrieve the first child of the form

// document.forms[0].elements.username -> retrieve the child of the form that has the id "username"

//retrieve the form
let firstForm = document.forms[0];
// let inputFirstForm = firstForm.elements.username;

//create the array, it should be an array of users, each user is an object
let allUsers = [];

// add an event listener to the form. The event is submit
// when the user will click on the button OR press the ENTER key
// it will submit the form
firstForm.addEventListener("submit", addUser);

//when the form is submitted, the callback function addUser is executed
//this callback function takes a parameter: the event object (e)
function addUser(e) {
    //very important step to avoid refreshing the page
    e.preventDefault();
    console.log("e.target ", e.target); //form that the user submitted
    console.log("e.target.elements ", e.target.elements); //show the children of the form (ie. the 2 inputs and the button)

    //find the input elements by id 
    let firstInput = e.target.elements.username; //input username
    let secondInput = e.target.elements.password; //input password
    console.log(firstInput, secondInput)

    //find the value of those input
    let firstInputValue = firstInput.value; //value of the username input
    let secondInputValue = secondInput.value; //value of the password input
    console.log(firstInputValue, secondInputValue)

    // create an object that hold the values of the user
    let objUser = {
        username: firstInputValue,
        password: secondInputValue
    }

    // push the object to the array
    allUsers.push(objUser);

    console.log(allUsers);
}


//SYNTAX IN ONE LINE
function addUser(e) {
    e.preventDefault();
    let objUser = {};

    objUser["username"] = e.target.elements.username.value;
    objUser["password"] = e.target.elements.password.value;

    allUsers.push(objUser);
    console.log(allUsers);
}

// show the users on the page
let div = document.getElementById("users")
let btn = document.getElementById("btn");
btn.addEventListener("click", showUsers);

function showUsers() {
    for (let elem of allUsers) {
        let para = document.createElement("p");
        let text = document.createTextNode(`The user is ${elem.username}, the password is ${elem.password}`)
        para.appendChild(text);
        div.appendChild(para)
    }
}
index.html
