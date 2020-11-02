import React from 'react'
import Button from '../button'
import { useSelector, useDispatch } from 'react-redux'
import { setLanded, setYear, setLaunched } from '../redux/actions'

import './filters.css'

const launchYears = Array.from({ length: 15 }, (_, i) => i + 2006)

function Filters() {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters)
  return (
    <aside className="filters">
      <header>
        <h4>
          Filters
        </h4>
      </header>
      <main>
        <h5>Launch Year</h5>
        <section className="filters__launchYears">
          {launchYears.map(year => (<Button key={year} label={year} onClick={() => dispatch(setYear(year))} selected={filters.year === year}>{year}</Button>))}
        </section>
        <h5>Successful Launch</h5>
        <div className="filters__successfullLaunch">
          <Button label="True" onClick={() => dispatch(setLaunched(true))} selected={filters.launched === true} />
          <Button label="False" onClick={() => dispatch(setLaunched(false))} selected={filters.launched === false} />
        </div>
        <h5>Successful Landing</h5>
        <div className="filters__successfullLanding">
          <Button label="True" onClick={() => dispatch(setLanded(true))} selected={filters.landed === true} />
          <Button label="False" onClick={() => dispatch(setLanded(false))} selected={filters.landed === false} />
        </div>
      </main>
    </aside>
  )
}

export default Filters