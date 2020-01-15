import React, { useState, useEffect } from 'react'

export default () => {
  const [ people, setPeople ] = useState(null)

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=20&nat=us,ca`)
    .then(x => x.json())
    .then(x => setPeople(x.results))
  }, [])

  return(
    <div>
      <h1>random user list</h1>
      <div>
        {people ? people.map((person, index) => {
          console.log(person)
          return <div key={index}>test</div>
        }) : <h1>...loading</h1>}
      </div>
    </div>
  )
}
