import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { fetchSpacePrograms } from '../redux/actions'
import SpaceProgram from './spaceProgram'
import './launches.css'

function Launches() {
  const programs = useSelector(({ filters, launches }) => ({ filters, launches }))

  console.log(programs.filters)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSpacePrograms())
  }, [])

  if (programs.launches.status === 'PENDING') {
    return <h1>Loading ...</h1>
  }

  return (
    <section className="launches">
      {programs.launches.launches.filter(program => {
        const year = programs.filters.year
        const launched = programs.filters.launched
        const landed = programs.filters.landed
        const launchYear = +program.launch_year
        const launchSuccess = Boolean(program.launch_success)
        const landingSuccess = Boolean(program.rocket.first_stage.cores[0].land_success)

        console.log(typeof launchSuccess, typeof launchYear, typeof landingSuccess)


        if (typeof year === 'number' && typeof launched === 'boolean' && typeof landed === 'boolean') {
          return launchYear === year && launched === launchSuccess && landed === landingSuccess
        }
        if (typeof year === 'number' && typeof landed === 'boolean') {
          return launchYear === year && landed === landingSuccess
        }
        if (typeof year === 'number' && typeof launched === 'boolean') {
          return launchYear === year && launchSuccess === launched
        }
        if (typeof landed === 'boolean' && typeof launched === 'boolean') {
          return landingSuccess === landed && launchSuccess === launched
        }
        if (typeof year === 'number') {
          return launchYear === year
        }
        if (typeof launched === 'boolean') {
          return launched === launchSuccess
        }
        if (typeof landed === 'boolean') {
          return landingSuccess === landed
        }

        return true

      }).map(({ flight_number: flightNumber, launch_success: launchSuccess, mission_id: missionId, mission_name: missionName, links, launch_year: launchYear, rocket: { first_stage: { cores } } }) => (
        <SpaceProgram key={flightNumber} flightNumber={flightNumber} launchSuccess={launchSuccess} missionId={missionId} name={missionName} links={links} launchYear={launchYear} landSuccess={cores[0].land_success || false} />
      ))}
    </section>
  )
}

export default Launches