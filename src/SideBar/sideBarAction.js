export const ADD_KEYWORD_CHAT = 'ADD_KEYWORD_CHAT'
export const CLEAR_KEYWORD_CHAT = 'CLEAR_KEYWORD_CHAT'
export const SET_MEMBER_LIST = 'SET_MEMBER_LIST'
export const SET_MEMBER_ATTEND_LIST = 'SET_MEMBER_ATTEND_LIST'
export const SET_MEMBER_NOT_ATTEND_LIST = 'SET_MEMBER_NOT_ATTEND_LIST'

export const addKeywordChat = (chat) => ({
  type: ADD_KEYWORD_CHAT,
  payload: {
    chat,
  },
})

export const clearKeywordChat = () => ({
  type: CLEAR_KEYWORD_CHAT,
})

export const setMemberList = (memberList) => ({
  type: SET_MEMBER_LIST,
  payload: {
    memberList,
  },
})

export const setMemberAttendList = (memberAttendList) => ({
  type: SET_MEMBER_ATTEND_LIST,
  payload: {
    memberAttendList,
  }
})

export const setMemberNotAttendList = (memberNotAttendList) => ({
  type: SET_MEMBER_NOT_ATTEND_LIST,
  payload: {
    memberNotAttendList,
  }
})