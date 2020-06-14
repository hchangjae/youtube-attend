import { combineReducers } from 'redux'
import {
  ADD_KEYWORD_CHAT,
  CLEAR_KEYWORD_CHAT,
  SET_MEMBER_LIST,
} from './sideBarAction'

const chatKeywordListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_KEYWORD_CHAT:
      const { chat } = action.payload
      return [...state, { ...chat }]

    case CLEAR_KEYWORD_CHAT:
      return []

    default:
      return state
  }
}

const memberListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MEMBER_LIST:
      const { memberList } = action.payload
      return [...memberList]

    default:
      return state
  }
}

export default combineReducers({
  chatKeywordList: chatKeywordListReducer,
  memberList: memberListReducer,
})

export const chatKeywordListSelector = (state) => state.sideBar.chatKeywordList
export const memberListSelector = (state) => state.sideBar.memberList
