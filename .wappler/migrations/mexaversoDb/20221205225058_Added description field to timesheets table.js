
exports.up = function(knex) {
  return knex.schema
    .table('timesheets', async function (table) {
      table.string('description');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('timesheets', async function (table) {
      table.dropColumn('description');
    })
};
