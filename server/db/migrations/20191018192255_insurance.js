exports.up = function(knex) {
  return knex.schema.createTable('insurance',table => {
    table.increments('id').primary();
    table.string('sp');
    table.string('sk');
    table.string('type');
    table.string('date_end');
    table.string('tel');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('insurance');
};
