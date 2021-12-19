// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const arr = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const colors = ['red', 'blue', 'green', 'cyan', 'orange', 'grey', 'pink', 'purple']

const appendPlanets = () => {
    for (let i = 0; i < arr.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('planet');
        newDiv.style.backgroundColor = `${colors[i]}`;
        document.body.firstElementChild.appendChild(newDiv);
    }
}

appendPlanets();

// BONUS

// const sky = [
//     {
//         name: 'Mercury',
//     },
//     {
//         name: 'Venus'
//     },
//     {
//         name: 'Earth',
//         moons: 1
//     },
//     {
//         name: 'Mars',
//         moons: 2
//     },
//     {
//         name: 'Jupiter',
//         moons: 79
//     },
//     {
//         name: 'Saturn',
//         moons: 60
//     },
//     {
//         name: 'Uranus',
//         moons: 27
//     },
//     {
//         name: 'Neptune',
//         moons: 13
//     },
// ];

// const colors = [
//     'blue',
//     'lightgreen',
//     'cyan',
//     'orange',
//     'grey',
//     'pink',
//     'purple',
//     'yellow',
//     'aqua',
//     'lightcoral',
//     'magenta',
//     'orchid',
//     'darkgreen',
//     'mediumslateblue',
//     'papayawhip',
//     'sienna',
//     'darkslategrey',
//     'gold',
//     'brown',
//     'navy',
// ]

// const section = document.querySelector('section');

// sky.forEach(function (planet) {
//     let planetDiv = document.createElement('div');
//     planetDiv.classList.add('planet');
//     let colorIndex = Math.floor(Math.random() * colors.length);
//     planetDiv.style.backgroundColor = colors[colorIndex];
//     planetDiv.innerText = planet['name'];
//     section.append(planetDiv);
//     if (planet['moons']) {
//         let moonDiv = document.createElement('div');
//         moonDiv.classList.add('moon');
//         let colorIdx = Math.floor(Math.random() * colors.length);
//         moonDiv.style.backgroundColor = colors[colorIdx];
//         moonDiv.innerText = planet['moons'];
//         planetDiv.append(moonDiv);
//     }

// });