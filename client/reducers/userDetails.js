export const SET_USER_DETAILS = 'SET_USER_DETAILS'

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
