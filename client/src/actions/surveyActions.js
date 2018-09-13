import axios from 'axios'
import { FETCH_USER, FETCH_SURVEY, FETCH_SURVEYS } from './types'
import { loading, clearLoading } from './loadingActions'

export const sendSurvey = (newSurvey, history) => async dispatch => {
  dispatch(loading())
  const res = await axios.post('/api/surveys/new', newSurvey)
  history.push('/dashboard')
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
  dispatch(fetchSurveys())
  dispatch(clearLoading())
}

export const fetchSurveys = () => async dispatch => {
  dispatch(loading())
  const res = await axios.get('/api/surveys')
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data,
  })
}

export const fetchSurvey = (surveyId) => async dispatch => {
  dispatch(loading())
  const res = await axios.get(`/api/surveys/${surveyId}`)
  dispatch({
    type: FETCH_SURVEY,
    payload: res.data,
  })
  dispatch(clearLoading())
}
