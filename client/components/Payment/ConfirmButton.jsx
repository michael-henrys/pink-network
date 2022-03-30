import React from 'react'

export default function ConfirmButton ({ onClick, text }) {
  return (
    <button onClick={onClick} className='confirmation-button'>{text}</button>
  )
}
