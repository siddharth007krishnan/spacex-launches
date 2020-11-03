import { SET_LANDING, SET_LAUNCH, SET_YEAR, FETCH_LAUNCHES_ERROR, FETCH_LAUNCHES_COMPLETED, FETCH_LAUNCHES_PENDING } from '../actionTypes'
import queryParamUtils from '../../utils/queryParamUtils'

export const setLanded = landed => ({
  type: SET_LANDING,
  payload: {
    landed
  }
})

export const setLaunched = launched => ({
  type: SET_LAUNCH,
  payload: {
    launched,
  }
})

export const setYear = year => ({
  type: SET_YEAR,
  payload: {
    year,
  },
})

export const fetchSpacePrograms = (limit = 100, filters = {}) => {
  return function (dispatch) {
    dispatch({ type: FETCH_LAUNCHES_PENDING })
    const qs = queryParamUtils(filters)
    let url = qs ? 'https://api.spacexdata.com/v3/launches?limit=' + limit + '&' + qs : 'https://api.spacexdata.com/v3/launches?limit=' + limit
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: FETCH_LAUNCHES_COMPLETED, payload: { launches: data } })
      }).catch(err => {
        dispatch({ type: FETCH_LAUNCHES_ERROR })
      })
  }
}