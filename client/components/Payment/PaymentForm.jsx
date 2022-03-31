import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

export default function PaymentForm () {
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
    variables: {
      fontFamily: 'Arial',
      borderRadius: '0',
      colorBackground: '#6FD81C'
    }
  }
  const options = {
    clientSecret,
    appearance
  }

  return (
    <div className='payment-wrapper'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
