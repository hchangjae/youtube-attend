import React from 'react'

const Card = (props) => {
  const { member } = props
  return (
    <div className={`card ${member}`}>
      <div className="name-wrapper">
        <div className="name-text">{member}</div>
      </div>
    </div>
  )
}

export default Card
