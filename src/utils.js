export const getUrl = () => 'https://youtube-attend.uniium.com'
export const messageSelector = (chat) =>
  chat?.children[1]?.children[2]?.innerText
export const nameSelector = (chat) =>
  chat?.children[1]?.children[1]?.children[0]?.innerText
export const cardGenerator = (document) => (chat) => {
  const card = document.createElement('div')
  const name = document.createElement('div')

  card.setAttribute('class', 'card')
  name.setAttribute('class', 'name')

  name.innerText = nameSelector(chat)

  card.appendChild(name)
  return card
}
