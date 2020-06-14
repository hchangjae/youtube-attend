import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'

import Card from '@/Card'
import {
  chatKeywordListSelector,
  memberListSelector,
} from '../SideBar/SideBarReducer'
import { toDateForm } from '../utils/dateUtils'

const timing = 1000

const DisplayBoard = (props) => {
  const { window } = props
  const interval = useRef(null)
  const [now, setNow] = useState('')

  const chatKeywordList = useSelector(chatKeywordListSelector)
  const memberList = useSelector(memberListSelector)

  useEffect(() => {
    interval.current = setInterval(() => {
      setNow(toDateForm(new Date()))
    }, timing)

    return () => {
      clearInterval(interval.current)
    }
  }, [])

  useEffect(() => {
    chatKeywordList.map((chat) => {
      const { name, message } = chat
      const member = window.document.querySelector(`.${name}`)
      console.log(name)
      console.log(member)
      if (member && !member.className.endsWith(' on')) {
        member.className = member.className + ' on'
      }
    })
  }, [chatKeywordList])

  return (
    <div className="display-board">
      <div className="today">{now}</div>
      {memberList.map((member) => (
        <Card key={member} member={member} />
      ))}
    </div>
  )
}

export default DisplayBoard
