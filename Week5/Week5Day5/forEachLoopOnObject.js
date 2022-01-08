let leraObj = {
    name: 'Lera',
    height: 168,
    gender: 'female',
    birth_year: 1991,
    homeworld: 'Earth'
}

Object.entries(leraObj).forEach(([key, value]) => {
    console.log(key, value);
})

for (key in leraObj) {
    console.log(`${key}: ${obj.key}`);
}
