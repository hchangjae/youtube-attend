import moment from 'moment'
moment.locale('ko')

import { nameSelector, messageSelector, cardGenerator, getUrl } from './utils'

const openWindow = () => {
  const myWindow = window.open('/local')

  let container = myWindow.document.createElement('div')
  container.setAttribute('class', 'card-container')

  const appendHead = (document) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = `${getUrl()}/style.css`
    document.head.appendChild(link)
  }

  const appendBody = (document) => {
    document.body = document.createElement('body')

    container = myWindow.document.createElement('div')
    container.setAttribute('class', 'card-container')

    document.body.appendChild(container)
  }

  const createCard = cardGenerator(myWindow.document)

  myWindow.initUserList = (userList) => {
    console.log(userList)
    appendBody(myWindow.document)
    userList.map((name) => {
      const card = createCard(name)
      container.appendChild(card)
    })
  }

  const onload = (e) => {
    appendHead(myWindow.document)
    appendBody(myWindow.document)
  }

  myWindow.addEventListener('load', onload)

  return myWindow
}

export default openWindow
