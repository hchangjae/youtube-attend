var warpper = document.querySelector('#content-pages')
warpper.setAttribute('style', 'display: flex; flex-direction: row')

var chat = document.querySelector('#chat-messages')
chat.setAttribute('style', 'width: 80vw')

var attend = document.createElement('div')
attend.setAttribute(
  'style',
  'width: 20vw; height: 100vw; display: flex !important; flex-direction: column; overflow: auto;'
)
attend.setAttribute('id', 'attend')

var userBox = document.createElement('textarea')
userBox.setAttribute('style', 'height: 10vh; margin: 1rem;')
userBox.setAttribute('id', 'userBox')
userBox.setAttribute('type', 'text')
userBox.placeholder =
  '고정 출석 멤버를 입력하세요.\nex)\n철수\n맹구\n뚱이\n호빵이'

var initButton = document.createElement('button')
initButton.setAttribute('style', 'width: 18vw; height: 4rem; margin: 1rem;')
initButton.setAttribute('id', 'initButton')
initButton.innerText = '자동 입력'

var ctrWrapper = document.createElement('div')
ctrWrapper.setAttribute(
  'style',
  'display: flex !important; flex-direction: row; justify-content: space-around;'
)
ctrWrapper.setAttribute('id', 'ctrWrapper')

var addUser = document.createElement('button')
addUser.setAttribute('style', 'width: 8vw; height: 4rem;')
addUser.setAttribute('id', 'addUser')
addUser.innerText = '추가'
addUser.onclick = () => {
  var userWrapper = document.createElement('div')
  userWrapper.setAttribute(
    'style',
    'width: auto; display: flex !important; flex-direction: row;'
  )
  userWrapper.setAttribute('class', 'userWrapper')
  var fixButton = document.createElement('button')
  fixButton.setAttribute(
    'style',
    'background-color: white !important; border-radius:30%; border:1px solid gray;'
  )
  fixButton.setAttribute('class', 'fixButton')
  fixButton.innerText = '  '
  fixButton.value = 'off'
  fixButton.onclick = () => {
    if (fixButton.value === 'off') {
      fixButton.value = 'on'
      fixButton.setAttribute(
        'style',
        'background-color: darkgray !important; border-radius:30%; border:1px solid gray;'
      )
    } else {
      fixButton.value = 'off'
      fixButton.setAttribute(
        'style',
        'background-color: white !important; border-radius:30%; border:1px solid gray;'
      )
    }
  }
  var userName = document.createElement('input')
  userName.setAttribute(
    'style',
    'display: inline-block; max-width: 8vw; margin-right: 1px solid gray !important;'
  )
  userName.setAttribute('class', 'userName')
  userName.setAttribute('type', 'text')
  var userAttend = document.createElement('input')
  userAttend.setAttribute('style', 'display: inline-block; max-width: 8vw;')
  userAttend.setAttribute('class', 'userAttend')
  userAttend.setAttribute('type', 'text')

  userWrapper.appendChild(fixButton)
  userWrapper.appendChild(userName)
  userWrapper.appendChild(userAttend)

  attend.appendChild(userWrapper)
}

var subUser = document.createElement('button')
subUser.setAttribute('style', 'width: 8vw; height: 4rem;')
subUser.setAttribute('id', 'subUser')
subUser.innerText = '삭제'
subUser.onclick = () => {
  if (attend.lastChild.className === 'userWrapper') {
    attend.removeChild(attend.lastChild)
  }
}

ctrWrapper.appendChild(addUser)
ctrWrapper.appendChild(subUser)

attend.appendChild(userBox)
attend.appendChild(initButton)

attend.appendChild(ctrWrapper)

warpper.appendChild(attend)

var initUsers = () => {
  const nameArray = userBox.value.split('\n').filter((v) => v)
  const userWrapperList = attend.querySelectorAll('.userWrapper')
  const userWrapperArray = [...userWrapperList]
  nameArray.map((name) => {
    pushName(name)
  })
}

var pushName = (name) => {
  const userWrapperList = attend.querySelectorAll('.userWrapper')
  const userWrapperArray = [...userWrapperList]
  const hasUserWrapperOff =
    userWrapperArray.filter((node) => node.children[0].value === 'off').length >
    0

  if (!hasUserWrapperOff) {
    addUser.click()
  }

  const userWrapperOff = [...attend.querySelectorAll('.userWrapper')].filter(
    (node) => node.children[0].value === 'off'
  )[0]
  userWrapperOff.children[0].click()
  userWrapperOff.children[1].value = name
}

initButton.onclick = initUsers

var interval
var liveButton = document.createElement('button')
liveButton.setAttribute(
  'style',
  'width: 18vw; height: 4rem; margin: 1rem; background-color: white !important;'
)
liveButton.setAttribute('id', 'liveButton')
liveButton.innerText = '실시간 갱신'
liveButton.onclick = () => {
  const live = window.open('/local')
  live.addEventListener('beforeunload', () => {
    clearInterval(interval)
  })
  live.addEventListener('load', () => {
    live.document.body = document.createElement('body')

    const liveWrapper = live.document.createElement('div')
    liveWrapper.setAttribute('style', 'display:flex; flex-wrap:wrap;')
    liveWrapper.setAttribute('id', 'liveWrapper')
    live.document.body.appendChild(liveWrapper)

    const userWrapperList = attend.querySelectorAll('.userWrapper')
    const userWrapperArray = [...userWrapperList]
    userWrapperArray.map((node) => {
      const user = live.document.createElement('div')
      user.setAttribute(
        'style',
        'display:flex; flex-direction: column; width: 4rem; height: 4rem; margin: 0.25rem; overflow:hidden; border-radius: 5%;'
      )
      user.setAttribute('class', 'user')

      const userName = live.document.createElement('div')
      userName.setAttribute(
        'style',
        'flex: 3 0 0rem; display:flex; align-items:center; background-color:darkgray;'
      )
      userName.setAttribute('class', 'userName')
      user.appendChild(userName)

      const userNameText = live.document.createElement('div')
      userNameText.setAttribute(
        'style',
        'text-align:center; flex: 1 1 0rem; word-break: break-all;'
      )
      userNameText.setAttribute('class', 'userNameText')
      userNameText.innerText = node.children[1].value
      userName.appendChild(userNameText)

      const userAttend = live.document.createElement('div')
      userAttend.setAttribute(
        'style',
        'flex: 2 0 0rem; display:flex; align-items:center; background-color:gray;'
      )
      userAttend.setAttribute('class', 'userAttend')
      user.appendChild(userAttend)

      const userAttendText = live.document.createElement('div')
      userAttendText.setAttribute(
        'style',
        'text-align:center; flex: 1 1 0rem; word-break: break-all;'
      )
      userAttendText.setAttribute('class', 'userAttendText')
      userAttend.appendChild(userAttendText)

      liveWrapper.appendChild(user)
    })

    interval = setInterval(() => {
      const nodeList = document.querySelectorAll('#message')
      const nodeArray = [...nodeList]
      const attendArray = nodeArray.filter(
        (node) => node.innerHTML === '!이벤트'
      )
      const userArray = attendArray.map(
        (node) => node.parentElement.querySelector('#author-name').innerText
      )

      const userWrapperList = liveWrapper.querySelectorAll('.user')
      const userWrapperArray = [...userWrapperList]

      userArray.map((name) => {
        userWrapperArray.map((node) => {
          if (
            node.children[0].children[0].innerText === name &&
            node.children[1].children[0].innerText === ''
          ) {
            node.children[1].children[0].innerText = 'ㅇ'
            node.style.boxShadow = '0px 0px 14px 2px rgba(18,135,0,1)'
            node.children[0].style.backgroundColor = 'mediumseagreen'
            node.children[1].style.backgroundColor = 'darkseagreen'
          }
        })
      })
    }, 1000)
  })
}

attend.appendChild(liveButton)
