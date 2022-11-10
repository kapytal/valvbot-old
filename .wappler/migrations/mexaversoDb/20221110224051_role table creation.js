
exports.up = function(knex) {
  return knex.schema
    .createTable('role', async function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('role')
};
