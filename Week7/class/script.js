// // console.log('hi');
// // console.log(__dirname);

// const script2 = require('./script2');

// let a = script2.largeNum;
// b = 10;
// console.log(a + b);

// https://jsonplaceholder.typicode.com/users

const axios = require('axios');

const getUser = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
}

console.log(getUser());