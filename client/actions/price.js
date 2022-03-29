export const SET_PRICE = 'SET_PRICE'

export function setPrice (price) {
  return {
    type: SET_PRICE,
    price
  }
}
