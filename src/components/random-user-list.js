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
          const birthday = new Date(person.dob.date)
          const now = new Date()
          let message = 'test test'

          if (birthday.getMonth() !== now.getMonth()) {
            console.log('month no match')
          }
          else if (birthday.getDate() !== now.getDate()) {
            console.log('day no match')
          }
          else {
            console.log('day and month match')
          }

          return  <div key={index}>
                    <h2>{person.name.first} {person.name.last}</h2>
                    <p>Gender: {person.gender}</p>
                    <p>Country: {person.location.country}</p>
                    <p>Birthdate: {birthday.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</p>
                    <p>{message}</p>
                  </div>
        }) : <h1>...loading</h1>}
      </div>
    </div>
  )
}
