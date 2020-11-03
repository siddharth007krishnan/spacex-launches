import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../shared/redux/store'
import App from '../shared/App'

import './index.css'

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  , document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'))