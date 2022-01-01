const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

//container that holds the grid of roboCards
const container = document.querySelector('.container');
//search bar
const search = document.querySelector('#search');
search.addEventListener('keyup', searchRobot);


//make the grid
(function makeGrid() {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.append(grid);
})();

function displayCards(dataBase) {
    dataBase.forEach(el => {
        let card = document.createElement('div');
        //append image
        let img = document.createElement('img');
        createProfileImg(img, el);
        card.append(img);
        // display credentians - name, username, email
        let credentials = document.createElement('div');
        credentials.classList.add('credentials');
        credentials.innerHTML = `<p>${el.name}</p>
                                 <p>@${el.username}</p>
                                 <p>${el.email}</p>`;
        card.append(credentials);
        card.classList.add('card');
        card.id = el.id;
        const grid = document.querySelector('.grid');
        grid.append(card)
    })
};

//set profile image
function createProfileImg(imageElement, object) {
    imageElement.classList.add('profile-pic');
    imageElement.src = object.image;
    imageElement.alt = object.name;
}


function searchRobot() {
    let searchString = this.value;
    //in order to append results of search - delete what was appended before
    document.querySelectorAll('.card').forEach(el => el.remove())
    const filtered = robots.filter(item => {
        return (item.name.toLowerCase().includes(searchString) || item.username.toLowerCase().includes(searchString) ||
            item.email.toLowerCase().includes(searchString));
    });
    displayCards(filtered);
}



window.addEventListener('load', () => {
    displayCards(robots);
});