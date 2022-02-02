import React from 'react'
import Button from '../utils/Button'

export default function LandingPage () {
  return (
    <div className='landing-page'>
      <h1>TitleLogo</h1>
      <h2>Graphic</h2>
      <Button destination='/safety-code' label='ENTER' />
    </div>
  )
}
