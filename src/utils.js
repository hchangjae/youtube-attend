export const getUrl = () => 'https://youtube-attend.uniium.com'
export const messageSelector = (chat) =>
  chat?.children[1]?.children[2]?.innerText
export const nameSelector = (chat) =>
  chat?.children[1]?.children[1]?.children[0]?.innerText

export const cardGenerator = (document) => (name) => {
  const card = document.createElement('div')
  const nameWrapper = document.createElement('div')

  card.setAttribute('class', 'card')
  nameWrapper.setAttribute('class', 'nameWrapper')

  nameWrapper.innerText = name

  card.appendChild(nameWrapper)
  return card
}
