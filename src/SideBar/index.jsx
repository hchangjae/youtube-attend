import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import DisplayBoard from '@/DisplayBoard'
import {
  addKeywordChat,
  clearKeywordChat,
  setMemberList,
} from './sideBarAction'
import './style'
import { store } from '..'
import AttendTable from '../AttendTable'

const keyword = '!이벤트'

const isChatDOM = (dom) => dom?.children[1]?.id === 'content'
const messageSelector = (chatDOM) => chatDOM.children[1].children[2].innerText
const nameSelector = (chatDOM) =>
  chatDOM.children[1].children[1].children[0].innerText

const SideBar = (props) => {
  const dispatch = useDispatch()
  const [memberText, setMemberText] = useState('')
  const [isChecking, setIsChecking] = useState(false)

  const chatContainer = useRef(null)
  const observer = useRef(null)
  const win = useRef(null)

  useEffect(() => {
    observer.current = new MutationObserver(onChatObserved)
    chatContainer.current = document.querySelectorAll('#items')[1]
  }, [])

  // pure function
  const onChatObserved = (event) => {
    event.map((e) => {
      const chatDOM = e.target
      if (!isChatDOM(chatDOM)) return null

      const name = nameSelector(chatDOM)
      const message = messageSelector(chatDOM)
      const chat = { name, message }

      if (keyword === message) dispatch(addKeywordChat(chat))
    })
  }

  // 출첵종료시 state 초기화? 아님 다운로드 이후초기화? 음 다음 출첵시 초기화?
  const initWindow = (window) => (e) => {
    console.log('출석체크 시작')
    window.document.body = window.document.createElement('body')
    const App = window.document.createElement('div')
    App.className = 'App'

    window.document.body.appendChild(App)

    const memberList = [
      ...new Set(
        memberText
          .split('\n')
          .map((text) => text.trim())
          .filter((text) => text)
      ),
    ]

    dispatch(setMemberList(memberList))

    ReactDOM.render(
      <Provider store={store}>
        <DisplayBoard window={window} />
      </Provider>,
      App
    )
  }

  const clearWindow = (window) => (e) => {
    // console.log('출석체크 종료')
  }

  const endCheck = () => {
    observer.current.disconnect()

    setIsChecking(false)
  }

  const startCheck = () => {
    win.current = window.open('/-', '_blank', 'height=800,width=1000')
    win.current.addEventListener('load', initWindow(win.current))
    win.current.addEventListener('beforeunload', clearWindow(win.current))

    const config = { childList: true, subtree: true }
    observer.current.observe(chatContainer.current, config)

    dispatch(clearKeywordChat())
    setIsChecking(true)
  }

  const setValue = (setter) => (e) => {
    setter(e.target.value)
  }

  return (
    <div className="side-bar">
      <textarea
        className="member-list"
        placeholder={`ex)\n홍길동\n짱구\n김무철`}
        value={memberText}
        onChange={setValue(setMemberText)}
      />
      <button
        className="attend-check"
        onClick={isChecking ? endCheck : startCheck}
      >
        {isChecking ? '출첵 종료' : '출첵 시작'}
      </button>
      <AttendTable />
    </div>
  )
}

export default SideBar
