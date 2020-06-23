import React from 'react'
import { useSelector } from 'react-redux'
import ExcellentExport from 'excellentexport'

import './style'
import { toMMDD_HHMM_AP } from '../utils/dateUtils'
import {
  chatKeywordListSelector,
  memberListSelector,
  memberAttendListSelector,
  memberNotAttendListSelector,
} from '../SideBar/SideBarReducer'

const AttendTable = (props) => {
  const memberAttendList = useSelector(memberAttendListSelector)
  const memberNotAttendList = useSelector(memberNotAttendListSelector)

  const exportExcel = (e) => {
    return ExcellentExport.csv(e.target, 'attend-table')
  }

  return (
    <>
      <table id="attend-table" className="attend-table">
        <tbody>
          {memberAttendList.map((member) => (
            <tr key={member}>
              <td>{member}</td>
              <td>O</td>
            </tr>
          ))}
          {memberNotAttendList.map((member) => (
            <tr key={member}>
              <td>{member}</td>
              <td> </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a
        className="export-excel"
        onClick={exportExcel}
        download={`${toMMDD_HHMM_AP(new Date())}.csv`}
        href="#"
      >
        엑셀ㅋ
      </a>
    </>
  )
}

export default AttendTable
