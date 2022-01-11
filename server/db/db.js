const connection = require('./connection')

module.exports = {
  getNights,
  addNight
}

function getNights (db = connection) {
  return db('nights')
    .select()
}

function addNight (night, db = connection) {
  return db('nights')
    .insert(night)
}
