// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     var checkPageButton = document.getElementById('checkPage')
//     checkPageButton.addEventListener(
//       'click',
//       function () {
//         chrome.tabs.getSelected(null, function (tab) {
//           d = document

//           var f = d.createElement('form')
//           f.action = 'http://gtmetrix.com/analyze.html?bm'
//           f.method = 'post'
//           var i = d.createElement('input')
//           i.type = 'hidden'
//           i.name = 'url'
//           i.value = tab.url
//           f.appendChild(i)
//           d.body.appendChild(f)
//           f.submit()
//         })
//       },
//       false
//     )
//   },
//   false
// )

const url = 'youtube-attend.uniium.com'
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
