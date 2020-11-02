import { FETCH_LAUNCHES_ERROR, FETCH_LAUNCHES_PENDING, FETCH_LAUNCHES_COMPLETED } from '../actionTypes'

const initialState = {
  status: '',
  launches: []
}

const launches = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES_ERROR:
      return { ...state, status: 'ERROR' }

    case FETCH_LAUNCHES_PENDING:
      return { ...state, status: 'PENDING' }

    case FETCH_LAUNCHES_COMPLETED:
      return { ...state, status: 'COMPLETED', launches: action.payload.launches }

    default:
      return state
  }
}

export default launches