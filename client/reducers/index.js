import { combineReducers } from 'redux'

import { price } from './price'
import { userDetails } from './userDetails'

export default combineReducers({
  price,
  userDetails
})
