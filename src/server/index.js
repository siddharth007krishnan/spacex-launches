import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../shared/redux/reducers'

import axios from 'axios'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {

  console.log(req.url)

  const url = 'https://api.spacexdata.com/v3/launches?limit=' + 100
  console.log(url)
  axios({ method: 'GET', url, responseType: 'json' })
    .then(response => {
      const preloadedState = { filters: {}, launches: { status: '', launches: response.data } }
      const store = createStore(reducers, preloadedState)
      const finalState = store.getState()
      res.send(`
          <!DOCTYPE html>
            <html>
              <head>
                <title>Universal React</title>
                <link rel="stylesheet" href="/css/main.css">
                <script src="/bundle.js" defer></script>
                <script>window.__PRELOADED_STATE__=${JSON.stringify(finalState).replace(/</g,
        '\\u003c')}</script>
              </head>
              <body>
                <div id="root">${renderToString(
          <React.StrictMode>
            <Provider store={store}>
              <App />
            </Provider>
          </React.StrictMode>)}</div>
              </body>
            </html>
        `)
    }).catch(err => {
      res.send(err)
    })
})

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
})