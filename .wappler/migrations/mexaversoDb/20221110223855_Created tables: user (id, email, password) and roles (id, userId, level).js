
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.bigIncrements('id');
      table.string('email');
      table.string('password');
    })
    .createTable('roles', async function (table) {
      table.increments('id');
      table.integer('userId').unsigned();
      table.foreign('userId').references('').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('level').defaultTo(1);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('roles')
    .dropTable('user')
};
