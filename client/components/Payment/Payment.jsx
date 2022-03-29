import React, { useState, useEffect } from 'react'
import Modal from '../utils/Modal'
import Ticker from '../utils/Ticker'
import Line from '../utils/Line'
import PriceSelector from './PriceSelector'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

export default function Payment () {
  const [clientSecret, setClientSecret] = useState('')

  const price = useSelector(state => state.price)

  const stripePromise = loadStripe('pk_test_51KiV8jH6CDpmUuG8cBFFd3y2D1Tr5cNRDEvNJa3y2I8GhnZIZAKsfjgzjIR9N7euiYqEqxZSmc79R6BJK2sZ7q7u001LVqssPE')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error(err))
  }, [])

  const appearance = {
    theme: 'stripe'
  }
  const options = {
    clientSecret,
    appearance
  }

  return (
    <Modal>
      <Ticker />
      <div className='payment-container'>
        <br></br>
        <Line position="top" color="black"/>
        <PriceSelector />
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm/>
          </Elements>
        )}
      </div>
    </Modal>
  )
}
