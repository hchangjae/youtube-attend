import React, { useEffect } from 'react'
import reactDOM from 'react-dom'

// import openWindow from './window'
// import createSideBar from './sidebar'
// import '../build/style.css'

const SideBar = () => {
  const a = 1
  useEffect(() => {
    console.log('hello world')
  }, [])
  return <div className="side-bar">사이드바</div>
}

// const content = document.querySelector('#content-pages')
// const chatList = [
//   ...document.querySelector(
//     'div#items.style-scope.yt-live-chat-item-list-renderer'
//   ).children,
// ]

// const sideBar = createSideBar(document)
// const myWindow = openWindow()

// content.appendChild(sideBar)
reactDOM.render(<SideBar />, document.querySelector('#app'))

//
// const init = () => {
//   const userList = sideBar.getUserList()
//   myWindow.initUserList(userList)
// }

// sideBar.addEventToButton(init)
