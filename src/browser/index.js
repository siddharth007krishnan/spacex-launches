import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '../shared/App'

import './index.css'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const preloadedState = JSON.parse(window.__PRELOADED_STATE__)

delete window.__PRELOADED_STATE__

const store = createStore(reducers, applyMiddleware(thunk), preloadedState)

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'))