const express = require('express')
const path = require('path')
const nights = require('./routes/nights')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/nights', nights)

module.exports = server
