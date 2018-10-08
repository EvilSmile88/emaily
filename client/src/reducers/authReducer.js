import * as Types from '../actions/types'
const initialState = {
  loading: false,
  error: null,
  user: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_USER:
      return {
        ...state,
        error: null,
        user: action.payload || false
      };
    case Types.FETCH_USER_ERROR:
      return {
        ...state,
        user: false,
        error: `${action.payload.status}: ${action.payload.statusText}`
      };
    default:
      return state;
  }
}