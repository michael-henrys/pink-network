exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('nights').del()
    .then(function () {
      // Inserts seed entries
      return knex('nights').insert([
        {
          id: 1,
          name: 'Club Goblin',
          date: '15 Jan',
          startTime: '2200',
          location: 'tbh',
          links: 'soundcloud.com/hugojay',
          description: 'Getrekt',
          archive: false
        },
        {
          id: 2,
          name: 'Club Kid',
          date: '25 Feb',
          startTime: '2200',
          location: 'tbh',
          links: 'soundcloud.com/plkpnn',
          description: 'h3h3h3h3',
          archive: true
        }
      ])
    })
}
