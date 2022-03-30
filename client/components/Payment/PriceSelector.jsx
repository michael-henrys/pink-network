import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setPrice } from '../../actions/price'

export default function PriceSelector () {
  const dispatch = useDispatch()
  const price = useSelector(state => state.price)

  const changeHandler = (e) => {
    dispatch(setPrice(Number(e.target.value)))
  }

  return (
    <>
      <div className='priceSelector-wrap'>
        <label className='priceSelector-container priceSelector-container-left'>
          <input type="radio" name="price" className='input-radio' value={10}
            checked={price === 10}
            onChange={changeHandler}
          />
          <div className='radio-inner'>
            <div className='price'>$10</div>
            <div className='checkmark'></div>
          </div>
        </label>
        <label className='priceSelector-container priceSelector-container-center'>
          <input type="radio" name="price" className='input-radio' value={20}
            checked={price === 20}
            onChange={changeHandler}
          />
          <div className='radio-inner'>
            <div className='price'>$20</div>
            <div className='checkmark'></div>
          </div>
        </label>
        <label className='priceSelector-container priceSelector-container-center'>
          <input type="radio" name="price" className='input-radio' value={30}
            checked={price === 30}
            onChange={changeHandler}
          />
          <div className='radio-inner'>
            <div className='price'>$30</div>
            <div className='checkmark'></div>
          </div>
        </label>
      </div>
    </>
  )
}
