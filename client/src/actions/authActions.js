import axios from 'axios'
import { SET_CURRENT_USER } from './type'

const getUser = () => {
  axios.get('/api/users/user')
}
