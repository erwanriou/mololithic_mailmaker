import axios from 'axios'
import { FETCH_USER, USER_LOGOUT, GET_ERRORS } from './types'
import { loading } from './loadingActions'

export const fetchUser = () => async dispatch => {
  dispatch(loading())
  const res = await axios.get('/api/users/user')
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
}

export const handleCredit = (token) => async dispatch => {
  dispatch(loading())
  const res = await axios.post('/api/stripe', token)
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

export const registerUser = (userData, history) => async dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}
