
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('id');
      table.string('email');
      table.string('password');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
};
