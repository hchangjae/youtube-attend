export const getUrl = () => 'https://youtube-attend.uniium.com'
export const messageSelector = (chat) =>
  chat?.children[1]?.children[2]?.innerText
export const nameSelector = (chat) =>
  chat?.children[1]?.children[1]?.children[0]?.innerText
export const cardGenerator = (document) => (chat) => {
  const card = window.document.createElement('div')
  card.setAttribute('class', 'card')
  card.innerText = nameSelector(chat)

  return card
}
