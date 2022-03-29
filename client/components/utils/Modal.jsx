import React from 'react'
import STAR from '../../images/STAR.svg'
import EscapeButton from './EscapeButton'

export default function Modal ({ children }) {
  return (
    <div className='modal'>
      <EscapeButton destination='/home' />
      <div className='modal-container'>
        <img className='modal-star-logo' alt='Star Logo' src={STAR}/>
        {children}
      </div>
    </div>
  )
}
