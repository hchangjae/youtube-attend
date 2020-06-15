import React, { forwardRef } from 'react'

const Card = forwardRef((props, ref) => {
  const { key, member } = props
  return (
    <div ref={ref} key={key} className={`card ${member}`}>
      <div className="name-wrapper">
        <div className="name-text">{member}</div>
      </div>
    </div>
  )
})

export default Card
