import { SET_PRICE } from '../actions/price'

export function price (state = 20, action) {
  switch (action.type) {
    case SET_PRICE:
      return action.price
    default:
      return state
  }
}
