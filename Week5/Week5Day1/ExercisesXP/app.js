//Exercise 1 : HTML Form

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method.
// (you can use the same HTML file for the action url)
// Where will the sent data appear?

// // Answer:
// The data is appended to the URL as a series of name/value pairs.
// It appears in the url after a question mark, it looks like this: key=value
// if more than 1, each one is separated by an ampersand (&).
// .../index.html?name=John&comments=Hello+this+is+a+comment


// Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.
// (you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab

// network -> index.html -> payload
// name: John
// comments: Hello this is a comment


// Exercise 3 : JSON Mario
// Instructions
// Using this code:

// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

let marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}


let toObj = JSON.stringify(marioGame);
console.log(toObj);
let toObjPr = JSON.stringify(marioGame, null, 4);
console.log(toObjPr);
// as i understand they stay nested