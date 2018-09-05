import { FETCH_USER, LOGOUT } from '../actions/types'
import isEmpty from '../utils/isEmpty'

const initialState = {
  isAuthenticated: false,
  user: {},
}

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_USER :
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }
    case LOGOUT :
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      }
    default :
      return state
  }
}
