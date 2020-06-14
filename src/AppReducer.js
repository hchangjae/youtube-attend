import { combineReducers } from 'redux'
import SideBarReducer from './SideBar/SideBarReducer'

export default combineReducers({
  sideBar: SideBarReducer,
})
