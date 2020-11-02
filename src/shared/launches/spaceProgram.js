import React from 'react'
import './spaceProgram.css'


function SpaceProgram({ flightNumber, launchSuccess, links, missionId, name, launchYear, landSuccess }) {
  return (
    <article className="program">
      <picture className="program__picture">
        <img src={links.mission_patch_small} alt={`${name} ${flightNumber}`} />
      </picture>
      <header>
        <h5>{name}&nbsp;{`#${flightNumber}`}</h5>
      </header>
      <h5>Mission Ids:</h5>
      <ul>
        {missionId.length > 0 ? missionId.map(id => <li key={id}>{id}</li>) : (<li>No mission ids found</li>)}
      </ul>
      <h5>Launch Year: {launchYear}</h5>
      <h5>Successful Launch:&nbsp;<span>{launchSuccess ? 'True' : 'False'}</span></h5>
      <h5>Successful Landing:&nbsp;<span>{landSuccess ? 'True' : 'False'}</span></h5>
    </article>
  )
}

export default SpaceProgram