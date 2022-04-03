const express = require('express')
const path = require('path')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// route for recieving webhook from Stripe
// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = 'whsec_0f616c3a3603593575b8a58ef5c070fd12c17dcf9afb6799198fbcabf10ae10b'

server.post('/webhook', express.raw({ type: 'application/json' }), (request, response) => {
  const sig = request.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret)
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`)
    return
  }

  // Handle the event
  console.log(`Unhandled event type ${event.type}`)

  // Return a 200 response to acknowledge receipt of the event
  response.send()
})

// stripe integation
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
