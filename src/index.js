import openWindow from './window'

const chatList = [
  ...document.querySelector(
    'div#items.style-scope.yt-live-chat-item-list-renderer'
  ).children,
]

openWindow(chatList)
