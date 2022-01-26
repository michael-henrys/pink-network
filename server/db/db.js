const connection = require('./connection')

module.exports = {
  getNights,
  addNight,
  editNight,
  deleteNight
}

function getNights (db = connection) {
  return db('nights')
    .select()
}

function addNight (night, db = connection) {
  return db('nights')
    .insert(night)
}

function editNight (id, updatedNight, db = connection) {
  return db('nights')
    .where({ id })
    .update(updatedNight)
}

function deleteNight (id, db = connection) {
  return db('nights')
    .where({ id })
    .del()
}
