import React, { useState } from 'react'
import Modal from '../utils/Modal'
import Ticker from '../utils/Ticker'
import Line from '../utils/Line'
import PaymentForm from './PaymentForm'
import DetailsForm from './DetailsForm'

export default function Payment () {
  const [paying, setPaying] = useState(false)
  return (
    <Modal>
      <Ticker />
      <div className='payment-container'>
        <br></br>
        <Line position="top" color="black"/>
        {paying ? <PaymentForm /> : <DetailsForm setPaying={setPaying}/>}
      </div>
    </Modal>
  )
}
