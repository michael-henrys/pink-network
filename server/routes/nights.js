const express = require('express')

const db = require('../db/db')

const router = express.Router()

// put routes here
router.get('/', (req, res) => {
  db.getNights()
    .then(nights => {
      res.json(nights)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const newNight = req.body
  db.addNight(newNight)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/:id', (req, res) => {
  const updatedNight = req.body
  const id = req.params.id
  db.editNight(id, updatedNight)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteNight(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/')

module.exports = router
