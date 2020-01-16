import React from 'react'

export default ({ person, message = 'no message passed' }) => {
  const namePosessive = person.name.first[person.name.first.length - 1] === 's' ? `${person.name.first}'` : `${person.name.first}'s`
  const genId = person.gender[0].toUpperCase() + person.gender.slice(1).toLowerCase()

  return(
    <div style={cardStyle}>
      <h2>{person.name.first} {person.name.last}</h2>
      <p>Gender: {genId}</p>
      <p>Country: {person.location.country}</p>
      <p>Birthdate: {new Date(person.dob.date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</p>
      <p>{namePosessive} birthday {message} {message === 'is today(!)' ? '' : 'this year.'}</p>
    </div>
  )
}

const cardStyle = {
  boxShadow:
  `  0 1.4px 2px rgba(0, 0, 0, 0.022),
    0 3.3px 7.3px rgba(0, 0, 0, 0.032),
    0 6.3px 15.3px rgba(0, 0, 0, 0.04),
    0 11.2px 26.5px rgba(0, 0, 0, 0.048),
    0 20.9px 43.3px rgba(0, 0, 0, 0.058),
    0 50px 80px rgba(0, 0, 0, 0.08)`
  ,
  padding: `1rem`,
  margin: `.5rem 1rem`,
  width: `400px`,
  border: `1px solid #fff`,
  textAlign: `center`
}
