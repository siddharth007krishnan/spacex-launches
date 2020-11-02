import { SET_YEAR, SET_LANDING, SET_LAUNCH } from '../actionTypes'

const initialState = {
  year: '',
  landed: '',
  launched: ''
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload.year }

    case SET_LANDING:
      return { ...state, landed: action.payload.landed }

    case SET_LAUNCH:
      return { ...state, launched: action.payload.launched }

    default:
      return state
  }
}

export default filters