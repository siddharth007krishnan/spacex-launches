import React from 'react'
import Filters from './filters'
import Launches from './launches'
import Footer from './footer'

import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>SpaceX Launch Programs</h1>
      </header>
      <section className="app__container">
        <Filters />
        <Launches />
      </section>
      <Footer />
    </div>
  )
}

export default App
