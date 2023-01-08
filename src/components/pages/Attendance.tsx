import React from 'react'
import { IAttendanceModel, IEndpoint, Methods } from '../../Types'
import MyDataGrid from '../common/MyDataGrid'

function Attendance() {
  const endpoints :IEndpoint[] = [{
    method:Methods.GET,
    main:"Attendance"
  },
  {
    method:Methods.POST,
    main:"Attendance"
  },
  {
    method:Methods.DELETE,
    main:"Attendance"
  }];

  return (
    <main><details>
    <summary>Ogólne informacje o frekwencji
    </summary>
    <MyDataGrid<IAttendanceModel,IAttendanceModel> endpoints={endpoints} insertSection={<></>}/>
  </details></main>
  )
}

export default Attendance