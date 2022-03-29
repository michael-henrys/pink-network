import { SET_PRICE } from '../actions/price'

export function price (state = {}, action) {
  switch (action.type) {
    case SET_PRICE:
      return action.price
    default:
      return state
  }
}
