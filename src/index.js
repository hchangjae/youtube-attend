import openWindow from './window'
import createSideBar from './sidebar'
import '../build/style.css'

const content = document.querySelector('#content-pages')
const chatList = [
  ...document.querySelector(
    'div#items.style-scope.yt-live-chat-item-list-renderer'
  ).children,
]

const sideBar = createSideBar(document)
const myWindow = openWindow()

content.appendChild(sideBar)

//
const init = () => {
  const userList = sideBar.getUserList()
  myWindow.initUserList(userList)
}

sideBar.addEventToButton(init)
