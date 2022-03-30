import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserDetails } from '../../actions/userDetails'
import ConfirmButton from './ConfirmButton'
import PriceSelector from './PriceSelector'

export default function DetailsForm ({ setPaying }) {
  const userDetails = useSelector(state => state.userDetails)
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    const { name, value } = e.target
    const newDetails = { ...userDetails, [name]: value }
    dispatch(setUserDetails(newDetails))
  }

  return (
    <>
      <p>Pay what you can</p>
      <PriceSelector />
      <div className='form-wrapper'>
        <input
          name='name'
          className='input top'
          type='text'
          value={userDetails.name}
          placeholder='YOUR NAME'
          onChange={changeHandler}
        />
        <input
          name='email'
          value={userDetails.email}
          className='input bottom'
          type='text'
          placeholder='EMAIL'
          onChange={changeHandler}
        />
      </div>
      <ConfirmButton onClick={() => { setPaying(true) }} text='GET A TICKET'/>
    </>
  )
}
