import React, { useState, useEffect } from 'react'
import Users from './users'

export default () => {
  const [ people, setPeople ] = useState(null)

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=20&nat=us,ca`)
    .then(x => x.json())
    .then(x => setPeople(x.results))
  }, [])

  return(
    <div>
      <h1 style={{textAlign: 'center'}}>List of 20 People from randomuser.me</h1>
      <Users people={people} />
    </div>
  )
}
