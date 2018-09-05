import { FETCH_USER, USER_LOGOUT, LOADING_DATA } from '../actions/types'
import isEmpty from '../utils/isEmpty'

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
}

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER :
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      }
    case USER_LOGOUT :
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        loading: false,
      }
    default :
      return state
  }
}
