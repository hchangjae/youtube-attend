import { nameSelector, messageSelector, cardGenerator, getUrl } from './utils'

const openWindow = (chatList) => {
  const myWindow = window.open('/local')

  const createCard = cardGenerator(myWindow.document)

  const appendHead = (document) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = `${getUrl()}/style.css`
    document.head.appendChild(link)
  }

  const appendBody = (document) => {
    document.body = document.createElement('body')

    const container = document.createElement('div')
    container.setAttribute('class', 'card-container')
    document.body.appendChild(container)

    chatList.map((chat) => {
      const card = createCard(chat)
      container.appendChild(card)
    })
  }

  const onload = (e) => {
    appendHead(myWindow.document)
    appendBody(myWindow.document)
  }

  myWindow.addEventListener('load', onload)
  myWindow.addEventListener('beforeunload', () => {
    clearInterval(null)
  })
}

export default openWindow
