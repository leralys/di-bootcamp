// Exercise 1 : HTML Form #3
// Instructions

// Create a form like the form provided above. The form should contain three inputs:
// name,
// lastname,
// submit
// Send the data to another HTML file and display the sent data in the body.

const urlSearchParamsObj = new URLSearchParams(window.location.search);


let results = document.getElementById("results");

for (const [key, value] of urlSearchParamsObj.entries()) {
    let p = document.createElement("p");
    p.innerText = `${key}: ${value}`;
    results.append(p)
}