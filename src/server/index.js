import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import { Provider } from 'react-redux'
import store from '../shared/redux/store'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
    <html>
      <head>
        <title>Universal React</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
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
})

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
})