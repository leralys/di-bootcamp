const axios = require('axios');

const getRobots = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getRobots
};