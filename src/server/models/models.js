require('dotenv').config();
const { Pool } = require('pg');

// initialized globally to allow query method to obtain its value
let pool;

module.exports = {
    // newPool method establishes new connection to database URL after user provides it
    newPool: () => {
        pool = new Pool({
            connectionString: process.env.PG_URI,
        });
    },
    query: (text, params, callback) => {
        console.log('executed query: ', text);
        return pool.query(text, params, callback);
    },
};