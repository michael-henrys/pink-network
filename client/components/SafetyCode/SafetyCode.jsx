import React from 'react'
import EscapeButton from '../utils/EscapeButton'
import StarLogo from '../utils/StarLogo'

export default function SafetyCode () {
  return (
    <div className='safety-code'>
      <EscapeButton destination='/home' />
      <StarLogo />
      <h1 className='safety-code__title'>WELCOME TO PINK NETWORK</h1>
      <div className='safety-code__container'>
        <p>We aim to make our spaces accessible to everyone AND INCLUSIVE.</p>
        <p>before joining the network, please read our code:</p>
        <p>discrimination and unfriendly behavior is unwelcome.</p>
        <p>respecting the space of other people is non-negotiable.</p>
        <p>please be mindful of your own behavior and limits</p>
        <p>Remember, if you need assistance in any way, PLEASE reach out to us</p>
        <p>look out for each other</p>
        <p>TO ATTEND OUR PARTIES, YOU MUST BE VACCINATED AGAINST COVID-19</p>
      </div>
    </div>
  )
}
