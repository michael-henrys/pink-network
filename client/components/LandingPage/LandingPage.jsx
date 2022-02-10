import React from 'react'
import Button from '../utils/Button'
import LOGO from '../../images/LOGO.svg'
import GRAPHIC from '../../images/GOBLIN.svg'

export default function LandingPage () {
  return (
    <div className='landing-page'>
      <img className='title-logo' alt='Decorated title with Pink Network text' src={LOGO}/>
      <img className='graphic' alt='Graphic' src={GRAPHIC}/>
      <Button destination='/safety-code' label='ENTER' />
    </div>
  )
}
