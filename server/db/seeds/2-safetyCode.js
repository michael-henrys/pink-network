exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('safetyCode').del()
    .then(function () {
      // Inserts seed entries
      return knex('safetyCode').insert([
        { id: 1, description: 'dont\'t be a dick' }
      ])
    })
}
