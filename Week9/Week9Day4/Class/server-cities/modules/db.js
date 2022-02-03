const knex = require('knex');
const env = require('dotenv');

env.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        port: process.env.DBPORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    }
})

const getCountries = async () => {
    return await db('country')
        .select('country_id', 'country')
}

const getCitiesById = async (id) => {
    return await db('city')
        .select('city', 'city_id')
        .where('country_id', id)
}

module.exports = {
    getCountries,
    getCitiesById
};