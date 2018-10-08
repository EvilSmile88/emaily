import axios from 'axios';
import { FETCH_USER, FETCH_USER_ERROR } from './types'

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data })
  } catch (err) {
    dispatch({ type: FETCH_USER_ERROR, payload: err.response })
  }
};

export const addCredits = token => async dispatch => {
  try {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data })
  } catch (err) {
    console.log(err)
  }
};