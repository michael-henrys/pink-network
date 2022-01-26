exports.up = function (knex) {
  return knex.schema.createTable('safetyCode', table => {
    table.increments('id')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('safetyCode')
}
