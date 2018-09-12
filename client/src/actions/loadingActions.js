import { LOADING_DATA, CLEAR_LOADING_DATA } from './types'

export const loading = () => {
  return {
    type: LOADING_DATA,
  }
}

export const clearLoading = () => {
  return {
    type: CLEAR_LOADING_DATA,
  }
}
