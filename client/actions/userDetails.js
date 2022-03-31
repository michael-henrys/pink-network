export const SET_USER_DETAILS = 'SET_USER_DETAILS'

export function setUserDetails (userDetails) {
  return {
    type: SET_USER_DETAILS,
    userDetails
  }
}
