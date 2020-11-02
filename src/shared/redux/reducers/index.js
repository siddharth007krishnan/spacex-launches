import { combineReducers } from 'redux'
import filters from './filters'
import launches from './launches'

export default combineReducers({ filters, launches })