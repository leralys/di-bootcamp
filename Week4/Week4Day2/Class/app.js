
// //-----------------------------
// ANONYMOUS FUNCTION
// ----------------------------

// function () {
// 	console.log("hello")
// }

// () => console.log("hello")



// (function (name) {
//     alert("Hello " + name);
// })("Sarah");

//-----------------------------
// SCOPE AND VARIABLES
// ----------------------------

// button.addEventListener("click", function () {
// 	alert("you clicked")
// })

// function check(){

// }

// check()


// let username = "John";

// // ANONYMOUS FUNCTION
// (function (){
//     let username = "Lise";
//     console.log("username in the func ", username) //Lise
//     if (1>0){
//         let username = "Tom"
//         console.log("username in the if ", username) //Tom
//     }
// })()

// console.log("username in the global ", username) //John

//------------------------
//Example with the DOM
//-------------------------


// initialize the DOM
// (function () {
//   console.log("in the self invoking func")
//   let btnFirst = document.getElementById("first");
//   let btnSecond = document.getElementById("second");
//   btnFirst.addEventListener("click", () => alert("you clicked the btn"))
//   btnSecond.addEventListener("mouseover", () => alert("you hovered over the btn"))
// })();



// Exercise Self Invoking Function
// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div

(function (name) {
    document.querySelector('.container').innerText = name;
})('Mary');



// First Part
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.

// 4. In the `startWars` function, create a function named `displayCharacter`
// that should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once

// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens? (отредактировано) 

function starWars(spaceship) {
    let characters = [];

    function createCharacter(firstName, lastName = 'Smith') {
        characters.push(`${firstName} ${lastName}`);
    }
    function displayCharacter() {
        let br = document.createElement('br');
        document.body.append(characters.join(', '), ` - ${spaceship}`, br);
    }
    createCharacter('John');
    createCharacter('Anakin', 'Skywalker');
    displayCharacter();
}
starWars('The Devastator');
starWars('Republic Attack Cruiser');
