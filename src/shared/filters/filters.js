import React, { useEffect } from 'react'
import Button from '../button'
import { setLanded, setYear, setLaunched } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

import './filters.css'
import queryParamUtils from '../utils/queryParamUtils'

const launchYears = Array.from({ length: 15 }, (_, i) => i + 2006)

function Filters() {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters)

  const handleChangeYear = year => () => {
    dispatch(setYear(year))
    console.log(queryParamUtils({ ...filters, year }, true))
    window.history.replaceState(filters, '', '/' + queryParamUtils({ ...filters, year }, true))
  }

  const handleChangeLaunch = launched => () => {
    dispatch(setLaunched(launched))
    window.history.replaceState(filters, '', '/' + queryParamUtils({ ...filters, launched }, true))
  }

  const handleChangeLanded = landed => () => {
    dispatch(setLanded(landed))
    window.history.replaceState(filters, '', '/' + queryParamUtils({ ...filters, landed }, true))
  }

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
          {launchYears.map(year => (<Button key={year} label={year} onClick={handleChangeYear(year)} selected={filters.year === year}>{year}</Button>))}
        </section>
        <h5>Successful Launch</h5>
        <div className="filters__successfullLaunch">
          <Button label="True" onClick={handleChangeLaunch(true)} selected={filters.launched === true} />
          <Button label="False" onClick={handleChangeLaunch(false)} selected={filters.launched === false} />
        </div>
        <h5>Successful Landing</h5>
        <div className="filters__successfullLanding">
          <Button label="True" onClick={handleChangeLanded(true)} selected={filters.landed === true} />
          <Button label="False" onClick={handleChangeLanded(false)} selected={filters.landed === false} />
        </div>
      </main>
    </aside>
  )
}

export default Filters