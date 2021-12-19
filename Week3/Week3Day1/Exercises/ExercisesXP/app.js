// Exercise 1 : Change The Navbar

// change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let navbar = document.querySelector('#navBar');
navbar.setAttribute('id', 'socialNetworkNavigation');

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (li).
// Finally, append this updated list node to the unordered list above, using the appendChild method.

let li = document.createElement('li');
var text = document.createTextNode('Logout');
li.appendChild(text);
navbar.firstElementChild.appendChild(li);

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements
// from their parent element (ul). Display the text of each link. (Hint: use the textContent property).

console.log(document.body.children[0].children[0].firstElementChild.textContent);
console.log(document.body.children[0].children[0].lastElementChild.textContent);

// Exercise 2 : Users
// In the HTML above change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

let uls = document.querySelectorAll('.list');
uls[0].children[1].innerText = 'Richard';

for (let ul of uls) {
    let newLi = document.createElement('li');
    newLi.textContent = ('Hey students');
    ul.children[0].innerText = 'Lera';
    ul.appendChild(newLi);
    ul.classList.add('student_list');
}
for (let li of uls[1].children) {
    if (li.textContent === 'Sarah') li.remove();
}

uls[1].classList.add('university', 'attendance');



// Exercise 3 : Users And Style

// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

let divLightBlue = document.body.getElementsByTagName('div')[2];
divLightBlue.style.backgroundColor = 'lightblue';
divLightBlue.style.padding = '20px';

let ul3 = divLightBlue.nextElementSibling;
ul3.children[0].style.display = 'none';
ul3.children[1].style.border = 'thick solid red';

document.body.style.backgroundColor = 'lightGreen';

let divs = document.querySelectorAll('div');
for (let div of divs) {
    if (div.style.backgroundColor === 'lightblue') {
        alert(`Hello ${ul3.children[0].innerText} and ${ul3.children[1].innerText}`);
    }
}
