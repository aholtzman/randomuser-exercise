import React from 'react'
import Card from './user-card'

export default ({ people }) => (
  <div style={wrapStyle}>
    {people ? people.sort((a, b) => a.name.last.localeCompare(b.name.last)).map((person, index) => {
      const birthday = new Date(person.dob.date)
      const now = new Date()
      let message = 'test test'

      if (birthday.getMonth() !== now.getMonth()) {
        message = (birthday.getMonth() > now.getMonth()) ? 'has yet to occur' : 'already happened'
      }
      else if (birthday.getDate() !== now.getDate()) {
        message = (birthday.getDate() > now.getDate()) ? 'has yet to occur' : 'already happened'
      }
      else {
        message = 'is today(!)'
      }

      return  <Card key={index} person={person} message={message} />
    }) : <h1>...loading</h1>}
  </div>
)

const wrapStyle = {
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'space-around',
  padding:'2rem'
}
