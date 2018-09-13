import { FETCH_SURVEY, FETCH_SURVEYS, LOADING_DATA, CLEAR_LOADING_DATA } from '../actions/types'

const initialState = {
  surveyList: {},
  survey: {},
  loading: false,
}

export default function authReducer (state = initialState, action) {
  switch(action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }
    case CLEAR_LOADING_DATA:
      return {
        ...state,
        loading: false,
      }
    case FETCH_SURVEYS :
      return {
        ...state,
        surveyList: action.payload,
        loading: false,
      }
    case FETCH_SURVEY :
      return {
        ...state,
        survey: action.payload,
        loading: false,
      }
    default :
      return state
  }
}
