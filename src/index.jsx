import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'

import SideBar from './SideBar'
import './reset.css'
import './style.css'
import AppReducer from './AppReducer'

const app = document.createElement('div')
app.className = 'app'
const target = document.querySelector('#content-pages')

export const store = createStore(AppReducer)


if (target) {
  target.appendChild(app)

  const App = (props) => {
    const a = 1
    return (
      <>
        <Provider store={store}>
          <SideBar />
        </Provider>
      </>
    )
  }

  ReactDOM.render(<App />, document.querySelector('.app'))
}