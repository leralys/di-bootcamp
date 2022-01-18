const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'leralysko',
        password: '6388',
        database: 'dvdrental'
    }
});

// returns promise with all countries
const getCountries = () => {
    return db('country')
        .select('country_id', 'country')
}

module.exports = {
    getCountries
};

// or if connection to db is in the server

// const getCountries = (db) => {
//     return db('country')
//     .select('country_id', 'country')
// }