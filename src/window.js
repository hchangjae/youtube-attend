import { nameSelector, messageSelector, cardGenerator, getUrl } from './utils'

const openWindow = (chatList) => {
  const myWindow = window.open('/local')
  const link = myWindow.document.createElement('link')
  link.ref = 'stylesheet'
  link.type = 'text/css'
  link.href = `${getUrl()}/style.css`
  myWindow.document.head.appendChild(link)

  const createCard = cardGenerator(myWindow.document)

  const onload = () => {
    myWindow.document.body = document.createElement('body')

    const container = myWindow.document.createElement('div')
    container.setAttribute('class', 'card-container')
    myWindow.document.body.appendChild(container)

    chatList.map((chat) => {
      const card = createCard(chat)
      container.appendChild(card)
    })
  }

  myWindow.addEventListener('load', onload)
  myWindow.addEventListener('beforeunload', () => {
    clearInterval(null)
  })
}

export default openWindow
