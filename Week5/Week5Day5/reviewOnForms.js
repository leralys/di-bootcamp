// Review on form

let form = document.getElementById("formUser");
let formTwo = document.getElementById("formPassword");


const checkData = (event) => {
    event.preventDefault()
    console.log("event.target", event.target)
    console.log("event.target.elements", event.target.elements)
    let data = event.target.elements[0].value
    console.log(data)
    // let user = document.getElementById("user")
}

// submit is on a FORM
form.addEventListener("submit", checkData);
formTwo.addEventListener("submit", checkData);


//Button click
let btn = document.getElementById("btn");

const checkDataBtn = (event) => {
    event.preventDefault()
    // let user = document.getElementById("user")
    console.log("event.target", event.target)
    console.log("event.target.parentNode.elements", event.target.parentNode.elements)
    let data = event.target.parentNode.elements[0];
    console.log(data)
}

// click on a button
btn.addEventListener("click", checkData);




//Fetch data
let formFetch = document.getElementById("formUser");

const formFetch = (event) => {
    event.preventDefault()
    let data = event.target.elements[0].value
    console.log(data);
    fetch(`https://www.swapi.tech/api/people/${data}`)
        .then(response => response.json())
        .then(result => console.log(result));

}

// submit is on a FORM
formFetchrm.addEventListener("submit", checkData);