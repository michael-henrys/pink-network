const connection = require('./connection')

module.exports = {
  addTicket,
  getTickets
}

function addTicket (name, email, db = connection) {
  return db('tickets').insert({
    name,
    email
  })
}

function getTickets (db = connection) {
  return db('tickets')
}
