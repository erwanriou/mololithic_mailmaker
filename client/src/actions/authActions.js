import axios from 'axios'
import { FETCH_USER, USER_LOGOUT, USER_LOGIN } from './types'
import { loading } from './index'

export const fetchUser = () => async dispatch => {
  dispatch(loading())
  const res = await axios.get('/api/users/user')
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
}

export const logOut = () => async dispatch => {
  dispatch(loading())
  await axios.get('/api/users/logout')
  dispatch({
    type: USER_LOGOUT,
  })
}
