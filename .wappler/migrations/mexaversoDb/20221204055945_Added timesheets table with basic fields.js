
exports.up = function(knex) {
  return knex.schema
    .createTable('timesheets', async function (table) {
      table.increments('id');
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('start');
      table.datetime('end');
      table.time('duration');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('timesheets')
};
