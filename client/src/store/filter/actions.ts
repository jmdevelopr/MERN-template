import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { GET_FILTERS } from './types'

export const getFilters = (): ThunkAction<void, any, unknown, Action> => async dispatch => {
  const data = await fetch('/api', {
      method: 'GET',
  }).then(res => res.json());
  console.log(data)
  dispatch({
        type: GET_FILTERS
  })
}