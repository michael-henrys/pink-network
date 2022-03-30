import { SET_USER_DETAILS } from '../actions/userDetails'

const initialState = {
  name: '',
  email: ''
}

export function userDetails (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return action.userDetails
    default:
      return state
  }
}
