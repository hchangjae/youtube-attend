import React, { forwardRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addMemberNotAttend, addMemberAttend } from '../SideBar/sideBarAction'

const Card = forwardRef((props, ref) => {
  const { key, member, attend = false } = props
  const [isAttend, setIsAttend] = useState(attend)
  const dispatch = useDispatch()

  const onClick = e => {
    isAttend
      ? dispatch(addMemberNotAttend(member))
      : dispatch(addMemberAttend(member))
    setIsAttend(!isAttend)
  }

  return (
    <div ref={ref} key={key} className={`card ${attend ? 'attend' : ''}`} onClick={onClick}>
      <div className="name-wrapper">
        <div className="name-text">{member}</div>
      </div>
    </div>
  )
})

export default Card
