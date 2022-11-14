
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.timestamp('creation_date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('creation_date');
    })
};
