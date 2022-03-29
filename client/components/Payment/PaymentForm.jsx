import React from 'react'
import { useSelector } from 'react-redux'

export default function PaymentForm () {
  const price = useSelector(state => state.price)
  const userDetails = useSelector(state => state.userDetails)

  return (
    <div>PaymentForm</div>
  )
}
