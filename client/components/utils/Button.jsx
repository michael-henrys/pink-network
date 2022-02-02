import React from 'react'
import { Link } from 'react-router-dom'

export default function Button ({ destination, label }) {
  return (
    <Link to={destination}>
      <button className='button'>{label}</button>
    </Link>
  )
}
