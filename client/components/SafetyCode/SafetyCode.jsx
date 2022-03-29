import React from 'react'
import Modal from '../utils/Modal'

export default function SafetyCode () {
  return (
    <Modal>
      <h1 className='safety-code__title'>WELCOME TO PINK NETWORK</h1>
      <div className='safety-code__container__text'>
        <p>We aim to make our spaces accessible to everyone AND INCLUSIVE.</p>
        <br></br>
        <p>before joining the network, <strong>please read our code:</strong></p>
        <br></br>
        <p>discrimination and unfriendly behavior is unwelcome.</p>
        <br></br>
        <p>respecting the space of other people is non-negotiable.</p>
        <br></br>
        <p>please be mindful of your own behavior and limits</p>
        <br></br>
        <p>Remember, if you need assistance in any way, PLEASE reach out to us</p>
        <br></br>
        <p>look out for each other</p>
        <br></br>
        <p>TO ATTEND OUR PARTIES, YOU MUST BE VACCINATED AGAINST COVID-19</p>
        <br></br>
      </div>
    </Modal>
  )
}
