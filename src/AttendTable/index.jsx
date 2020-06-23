import React from 'react'
import { useSelector } from 'react-redux'
import ExcellentExport from 'excellentexport'

import './style'
import { toMMDD_HHMM_AP } from '../utils/dateUtils'
import {
  chatKeywordListSelector,
  memberListSelector,
} from '../SideBar/SideBarReducer'

const AttendTable = (props) => {
  const chatKeywordList = useSelector(chatKeywordListSelector)
  const memberList = useSelector(memberListSelector)

  const exportExcel = (e) => {
    return ExcellentExport.csv(e.target, 'attend-table')
  }

  return (
    <>
      <table id="attend-table" className="attend-table">
        <tbody>
          {memberList.map((member) => (
            <tr key={member}>
              <td>{member}</td>
              <td>
                {chatKeywordList.filter((chat) => chat.name === member).length
                  ? 'O'
                  : ''}
              </td>
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
