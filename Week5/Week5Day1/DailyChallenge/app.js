// Instructions
// Create a form with two fields(name, last name) and a submit button.
// When you click the Send button, send the data as JSON.

const myForm = document.forms[0];

myForm.addEventListener('submit', sendJson);

function sendJson(e) {
    e.preventDefault();
    let formData = new FormData(myForm);
    let formDataObj = Object.fromEntries(formData);
    // console.log(formDataObj);
    const toJson = JSON.stringify(formDataObj);
    console.log(toJson);
    let p = document.createElement('p');
    p.innerText = toJson;
    myForm.after(p);
}