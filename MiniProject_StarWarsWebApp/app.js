// https://swapi.dev/ 
// https://www.swapi.tech/   works
// https://akabab.github.io/starwars-api/

const apiUrl = "https://www.swapi.tech/api/";


// api statistics to calculate random number
const statistics = {
    people: 82,
    planets: 60,
    starships: 36,
    films: 6,
    vehicles: 39,
    species: 37,
}

//the box to append info
const mainContent = document.querySelector('.main-content');


//function that runs on click of find person button
const findPerson = async () => {
    displayLoad()
    try {
        await fetchPerson(statistics.people);
    }
    catch (e) {
        displayError()
    }
}

// ----- async functions ------

// fetches random person 
async function fetchPerson(number) {
    let randomNum = getRandom(number);
    const responce = await fetch(`${apiUrl}people/${randomNum}/`);
    const data = await responce.json();
    const planet = await fetchPlanet(data.result.properties.homeworld);
    let personObj = {
        'Name': data.result.properties.name,
        'Height': `${data.result.properties.height} cm`,
        'Gender': data.result.properties.gender,
        'Birth year': data.result.properties.birth_year,
        'Homeworld': planet.result.properties.name
    }
    removeAllChildNodes(mainContent);
    appendPerson(personObj);
}

// fetches planet from the given url
async function fetchPlanet(url) {
    const responce = await fetch(url);
    const data = await responce.json();
    return await data;
}


// ----- functions ------

//genetares random number from the given range
function getRandom(num) {
    return Math.floor(Math.random() * num) + 1;
}

//displays a person in the box
function appendPerson(obj) {
    mainContent.classList.toggle('onloading-class', false);
    for (key in obj) {
        if (key === 'Name') {
            let h3 = document.createElement('h3');
            h3.id = 'person-header';
            h3.innerText = `${obj[key]}`;
            mainContent.append(h3);
        } else {
            let p = document.createElement('p');
            p.innerText = `${key}: `;
            let span = document.createElement('span');
            span.innerText = obj[key];
            p.append(span);
            mainContent.appendChild(p);
        }
    }
}

//deletes info from the box
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function displayLoad() {
    removeAllChildNodes(mainContent);
    mainContent.classList.toggle('onloading-class', true);
    let divText = document.createElement('div');
    let divIcon = document.createElement('div');
    let icon = document.createElement('i');
    let p = document.createElement('p');
    let dots = document.createElement('span');
    p.innerText = 'Loading';
    dots.innerText = '...'
    divText.classList.add('loading');
    dots.classList.add('dots-flashing');
    divText.append(p);
    p.after(dots);
    icon.classList.add('fas', 'fa-spinner', 'fa-spin');
    divIcon.append(icon);
    mainContent.append(divText);
    divText.after(divIcon);
}

function displayError() {
    mainContent.classList.toggle('onloading-class', false);
    removeAllChildNodes(mainContent);
    let h2 = document.createElement('h2');
    h2.innerText = 'Oh no! This information isn\'t available';
    mainContent.append(h2);
}

function todo() {
    mainContent.classList.toggle('onloading-class', false);
    removeAllChildNodes(mainContent);
    let h2 = document.createElement('h2');
    h2.innerText = 'Oh no! This section is under construction';
    mainContent.append(h2);
}


// ----- event listeners ------

(function addListeners() {
    const btnFindPerson = document.querySelector("#btn-find-person");
    btnFindPerson.addEventListener('click', findPerson);
    const btnFindPlanet = document.querySelector("#btn-find-planet");
    btnFindPlanet.addEventListener('click', todo);
    const btnFindSpecies = document.querySelector("#btn-find-species");
    btnFindSpecies.addEventListener('click', todo);
})();


