import React from 'react'

export default ({ person, message = 'no message passed' }) => {
  const namePosessive = person.name.first[person.name.first.length - 1] === 's' ? `${person.name.first}'` : `${person.name.first}'s`
  const genId = person.gender[0].toUpperCase() + person.gender.slice(1).toLowerCase()

  return(
    <div>
      <h2>{person.name.first} {person.name.last}</h2>
      <p>Gender: {genId}</p>
      <p>Country: {person.location.country}</p>
      <p>Birthdate: {new Date(person.dob.date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</p>
      <p>{namePosessive} birthday {message} {message === 'is today(!)' ? '' : 'this year.'}</p>
    </div>
  )
}
