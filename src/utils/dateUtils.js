export const toTwo = (num) => ('0' + num).slice(-2)

export const toDateForm = (date) => {
  const YYYY = date.getFullYear()
  const MM = date.getMonth() + 1
  const DD = date.getDate()
  const h = date.getHours()
  const hh = h > 12 ? h - 12 : h
  const mm = date.getMinutes()
  const ss = date.getSeconds()
  const AMPM = h >= 12 ? 'PM' : 'AM'
  return `${MM}월 ${DD}일 ${toTwo(hh)}:${toTwo(mm)}:${toTwo(ss)} ${AMPM}`
}

export const toMMDD_HHMM_AP = (date) => {
  const MM = date.getMonth() + 1
  const DD = date.getDate()
  const h = date.getHours()
  const hh = h > 12 ? h - 12 : h
  const mm = date.getMinutes()
  const AMPM = h >= 12 ? 'PM' : 'AM'
  return `${MM}/${DD}_${toTwo(hh)}:${toTwo(mm)}_${AMPM}`
}
