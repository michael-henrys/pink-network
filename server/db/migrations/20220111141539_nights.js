exports.up = function (knex) {
  return knex.schema.createTable('nights', table => {
    table.increments('id')
    table.string('name')
    table.string('date')
    table.string('startTime')
    table.string('location')
    table.string('description')
    table.string('links')
    table.string('archive')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('nights')
}
