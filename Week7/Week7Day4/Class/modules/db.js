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
});


const getCustomers = () => {
    return db('customer')
        .select('first_name', 'last_name', 'email', 'customer_id')
}

const getCustomerById = (id) => {
    return db('customer')
        .select('first_name', 'last_name', 'email', 'customer_id')
        .where({ 'customer_id': id });
}

module.exports = {
    getCustomers,
    getCustomerById
};
