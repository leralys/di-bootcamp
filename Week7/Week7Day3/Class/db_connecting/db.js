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

db('country')
    .where({ country_id: 110 })
    .del()
    // .select('country_id', 'country')
    // .update({ country: 'Greenland' })
    // .insert([
    //     {
    //         country: 'Lalaland'
    //     }
    // ])
    .returning('*')
    .then(data => {
        console.log(data);
    })
    .catch(e => console.log(e));