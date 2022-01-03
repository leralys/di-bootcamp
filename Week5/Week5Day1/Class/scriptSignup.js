// ----------------------
// GET
// ----------------------

console.log("window", window);
console.log("window.location", window.location) //read-only property returns a Location 
// object with information about the current location of the document.
console.log("window.location.search", window.location.search) //return an object


const urlSearchParamsObj = new URLSearchParams(window.location.search);
// console.log("urlSearchParams", urlSearchParams) //returns A URLSearchParams object instance.

// The URLSearchParams interface defines utility methods to work 
// with the query string of a URL.

// // URLSearchParams.entries()
// // Returns an iterator allowing iteration through 
// // all key/value pairs contained in this object.


let results = document.getElementById("results");

for (const [key, value] of urlSearchParamsObj.entries()) {
    let paragraph = document.createElement("p");
    paragraph.textContent = `${key}: ${value}`;
    results.appendChild(paragraph)
}