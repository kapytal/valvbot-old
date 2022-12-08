
exports.up = function(knex) {
  return knex.schema
    .table('timesheets', async function (table) {
      table.renameColumn('id', 'time-entry');
      table.renameColumn('end', 'stop');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('timesheets', async function (table) {
      table.renameColumn('time-entry', 'id');
      table.renameColumn('stop', 'end');
    })
};
