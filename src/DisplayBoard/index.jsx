import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FlipMove from 'react-flip-move';

import Card from '@/Card'
import {
  chatKeywordListSelector,
  memberListSelector,
  memberAttendListSelector,
  memberNotAttendListSelector,
} from '../SideBar/SideBarReducer'
import { toDateForm } from '../utils/dateUtils'
import { setMemberAttendList, setMemberNotAttendList, addKeywordChat } from '../SideBar/sideBarAction'

const url = 'https://youtube-attend.uniium.com/style.css'
const timing = 1000

const DisplayBoard = (props) => {
  const { window } = props
  const dispatch = useDispatch()
  const interval = useRef(null)
  const [now, setNow] = useState('')

  const chatKeywordList = useSelector(chatKeywordListSelector)
  const memberList = useSelector(memberListSelector)
  const memberAttendList = useSelector(memberAttendListSelector)
  const memberNotAttendList = useSelector(memberNotAttendListSelector)

  // const dev = useRef([])

  // 애니메이션 테스트용
  // useEffect(() => {
  //   memberList.map((member, i) => {
  //     const timeout = setTimeout(() => {
  //       const chat = { name: member, message: '!출석' }
  //       dispatch(addKeywordChat(chat))

  //     }, timing * (memberList.length - i))

  //     dev.current.push(timeout)
  //   })

  //   return () => {
  //     dev.current.map(timeout => {
  //       clearTimeout(timeout)
  //     })
  //   }
  // }, [memberList])

  useEffect(() => {
    interval.current = setInterval(() => {
      setNow(toDateForm(new Date()))
    }, timing)

    return () => {
      clearInterval(interval.current)
    }
  }, [])

  useEffect(() => {
    const attendNameList = chatKeywordList.map(({ name }) => name)
    const attendList = memberList.filter(member => attendNameList.includes(member))
    const notAttendList = memberList.filter(member => !attendNameList.includes(member))

    dispatch(setMemberAttendList(attendList))
    dispatch(setMemberNotAttendList(notAttendList))

  }, [chatKeywordList])

  return (
    <div className="display-board">
      <link rel="stylesheet" href={url} />
      <div className="today">{now}</div>
      <FlipMove
        className="card-container"
        duration={500}
        enterAnimation={'accordionVertical'}
        leaveAnimation={'accordionVertical'}
      >
        {memberAttendList.map((member) => (
          <Card key={member} member={member} attend={true} />
        ))}
        <div className="dividor" />
        {memberNotAttendList.map((member) => (
          <Card key={member} member={member} />
        ))}

      </FlipMove>
    </div >
  )
}

export default DisplayBoard
