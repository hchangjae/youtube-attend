export const ADD_KEYWORD_CHAT = 'ADD_KEYWORD_CHAT'
export const CLEAR_KEYWORD_CHAT = 'CLEAR_KEYWORD_CHAT'
export const SET_MEMBER_LIST = 'SET_MEMBER_LIST'
export const SET_MEMBER_ATTEND_LIST = 'SET_MEMBER_ATTEND_LIST'
export const SET_MEMBER_NOT_ATTEND_LIST = 'SET_MEMBER_NOT_ATTEND_LIST'
export const ADD_MEMBER_ATTEND = 'ADD_MEMBER_ATTEND'
export const ADD_MEMBER_NOT_ATTEND = 'ADD_MEMBER_NOT_ATTEND'

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

export const addMemberAttend = (member) => ({
  type: ADD_MEMBER_ATTEND,
  payload: {
    member
  }
})

export const addMemberNotAttend = (member) => ({
  type: ADD_MEMBER_NOT_ATTEND,
  payload: {
    member
  }
})
