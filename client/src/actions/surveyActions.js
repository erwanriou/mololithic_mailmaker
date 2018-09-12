import axios from 'axios'
import { FETCH_USER } from './types'
import { loading } from './loadingActions'

export const sendSurvey = (newSurvey, history) => async dispatch => {
  dispatch(loading())
  const res = await axios.post('/api/surveys/new', newSurvey)
  history.push('/dashboard')
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
}
