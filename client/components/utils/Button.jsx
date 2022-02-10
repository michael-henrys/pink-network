import React from 'react'
import { Link } from 'react-router-dom'

export default function Button ({ destination, label }) {
  return (
    <Link to={destination}>
      <div className='button'>{label}</div>
    </Link>
  )
}
