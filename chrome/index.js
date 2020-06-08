const url = 'http://youtube-attend.uniium.com/bundle.js'
const onClick = () => {
  chrome.tabs.executeScript({
    code: `
    if([...document.getElementsByTagName('script')].filter(element => element.src.endsWith('${url}')).length === 0){
      const script = document.createElement('script')
      script.src = '${url}'
      document.head.appendChild(script)
    }
    `,
  })
}

const onLoaded = () => {
  const btn = document.getElementById('checkPage')
  btn.addEventListener('click', onClick)
}
document.addEventListener('DOMContentLoaded', onLoaded)
