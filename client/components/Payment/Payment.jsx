import React from 'react'
import Modal from '../utils/Modal'
import Ticker from '../utils/Ticker'
import Line from '../utils/Line'

export default function Payment () {
  return (
    <Modal>
      <Ticker />
      <div className='payment-container'>
        <br></br>
        <Line position="top" color="black"/>
      </div>
    </Modal>
  )
}
