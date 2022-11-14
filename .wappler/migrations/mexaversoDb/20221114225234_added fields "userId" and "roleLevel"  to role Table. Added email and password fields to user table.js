
exports.up = function(knex) {
  return knex.schema
    .table('role', async function (table) {
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('roleLevel').defaultTo(1);
    })
    .table('user', async function (table) {
      table.string('email');
      table.string('password');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('email');
      table.dropColumn('password');
    })
    .table('role', async function (table) {
      table.dropForeign('userId');
      table.dropColumn('userId');
      table.dropColumn('roleLevel');
    })
};
