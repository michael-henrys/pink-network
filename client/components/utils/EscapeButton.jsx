import React from 'react'
import { Link } from 'react-router-dom'
import X from '../../images/X.svg'

export default function EscapeButton ({ destination }) {
  return (
    <Link to={destination}>
      <img className='escape-button' alt='Escape button' src={X}/>
    </Link>
  )
}
