const path = require('path');

const BASE_PATH = path.join(__dirname,'db');


require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URI,
    migrations: {
      directory: path.join(BASE_PATH,'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH,'seeds')
    }
  }
}