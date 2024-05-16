const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGSQL_USER,
  password: process.env.PGSQL_PASSWORD,
  host: process.env.PGSQL_HOST,
  port: Number(process.env.PGSQL_PORT),
  database: process.env.PGSQL_DATABASE,
});

pool.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err: { stack: any; }) => {
    console.error('Connection error', err.stack);
  });

export default pool;