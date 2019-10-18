const knex = require('../connection');


function getAllServices() {
  return knex('services').select('*');
}


module.exports = {
  getAllServices
}