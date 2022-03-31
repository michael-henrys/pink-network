const express = require('express')
const path = require('path')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.post('/create-payment-intent', async (req, res) => {
  const { price } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: 'nzd',
    payment_method_types: ['card']
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
