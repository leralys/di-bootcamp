// takes an array of objects
const createUsers = arr => {
    // firnd the main to append everything to
    const root = document.getElementById('root');
    // for each el in arr of objects
    // create a div with p that contains value of key 'name'
    arr.forEach(el => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = el.name;
        div.appendChild(p);
        // append created div(that contains p with name) to a root div
        root.appendChild(div);
    })

}


const getData = () => {
    // console.log('Hello');
    // fetch my server
    fetch('http://localhost:3000/api/users')
        // on the backend my server fetches the api and sends back a promise
        // res.json - is a promise that resolves to a JavaScript object.
        .then(res => res.json())
        // thake that object and use it to append data to a html page
        .then(data => createUsers(data))
        .catch(e => console.log(e))
}