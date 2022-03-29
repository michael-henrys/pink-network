const express = require('express')
const path = require('path')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// const cors = require('cors')
// const uuid = require('uuid')

// const nights = require('./routes/nights')

const server = express()

server.use(express.json())
// server.use(cors())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/v1/nights', nights)

server.post('/create-payment-intent', async (req, res) => {
  const { price } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: 'nzd',
    automatic_payment_methods: {
      enabled: true
    }
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
