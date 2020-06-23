import React, { forwardRef } from 'react'

const Card = forwardRef((props, ref) => {
  const { key, member, attend = false } = props
  return (
    <div ref={ref} key={key} className={`card ${attend ? 'attend' : ''}`}>
      <div className="name-wrapper">
        <div className="name-text">{member}</div>
      </div>
    </div>
  )
})

export default Card
