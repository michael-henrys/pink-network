import React from 'react'
import PriceSelector from './PriceSelector'

export default function DetailsForm () {

  const details = 

  return (
    <>
      <p>Pay what you can</p>
      <PriceSelector />
      <div className='form-wrapper'>
        <input
          className='input top'
          type='text'
          placeholder='Your Name'
        />
        <input
          className='input bottom'
          type='text'
          placeholder='Email'
        />
      </div>
    </>
  )
}
