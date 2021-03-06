import { combineReducers } from 'redux'
import {
  ADD_KEYWORD_CHAT,
  CLEAR_KEYWORD_CHAT,
  SET_MEMBER_LIST,
  SET_MEMBER_ATTEND_LIST,
  SET_MEMBER_NOT_ATTEND_LIST,
  ADD_MEMBER_ATTEND,
  ADD_MEMBER_NOT_ATTEND,
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

const memberAttendListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MEMBER_ATTEND_LIST:
      const { memberAttendList } = action.payload
      return [...memberAttendList]

    case ADD_MEMBER_ATTEND:
      const { member: memberAttend } = action.payload
      return [...state, memberAttend]

    case ADD_MEMBER_NOT_ATTEND:
      const { member: memberNotAttend } = action.payload
      const r = state.filter(m => m !== memberNotAttend)
      return [...r]

    default:
      return state
  }
}

const memberNotAttendListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MEMBER_NOT_ATTEND_LIST:
      const { memberNotAttendList } = action.payload
      return [...memberNotAttendList]

    case ADD_MEMBER_ATTEND:
      const { member: memberAttend } = action.payload
      const r = state.filter(m => m !== memberAttend)
      return [...r]

    case ADD_MEMBER_NOT_ATTEND:
      const { member: memberNotAttend } = action.payload
      return [...state, memberNotAttend]

    default:
      return state
  }
}

export default combineReducers({
  chatKeywordList: chatKeywordListReducer,
  memberList: memberListReducer,
  memberAttendList: memberAttendListReducer,
  memberNotAttendList: memberNotAttendListReducer,
})

export const chatKeywordListSelector = (state) => state.sideBar.chatKeywordList
export const memberListSelector = (state) => state.sideBar.memberList
export const memberAttendListSelector = (state) => state.sideBar.memberAttendList
export const memberNotAttendListSelector = (state) => state.sideBar.memberNotAttendList
