const createSideBar = (document = window.document) => {
  const container = document.createElement('div')
  container.setAttribute('class', 'side-bar')

  const memberInput = document.createElement('textarea')
  memberInput.setAttribute('class', 'member-input')

  const createButton = document.createElement('div')
  createButton.setAttribute('class', 'create-button')

  container.appendChild(memberInput)
  container.appendChild(createButton)

  container.addEventToButton = (fn) => (createButton.onclick = fn)
  container.getUserList = () =>
    memberInput.value
      .split('\n')
      .map((u) => u.trim())
      .filter((u) => u)

  return container
}

export default createSideBar
