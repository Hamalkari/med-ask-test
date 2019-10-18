const config = require('../knexfile')[process.env.ENV];

module.exports = require('knex')(config);