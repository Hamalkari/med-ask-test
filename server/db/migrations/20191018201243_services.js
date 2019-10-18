exports.up = function(knex) {
  return knex.schema.createTable('services',table => {
    table.increments('id').primary();
    table.string('name');
    table.boolean('include');
  })
};

exports.down = function(knex) {
  return knex.schema('services').dropTable();
};
