const { Pool } = require('pg'); 
require('dotenv').config(); 
const pool = new Pool ({ 
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_NAME, 
    password: 'steven2004', 
    port: process.env.DB_PORT, 
}); 

module.exports = pool;