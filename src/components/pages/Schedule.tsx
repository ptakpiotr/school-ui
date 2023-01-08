import React from 'react'
import {
  IEndpoint,
  IScheduleDTO,
  IScheduleModel,
  Methods,
} from "../../Types";
import MyDataGrid from "../common/MyDataGrid";
import ScheduleInsertSection from '../insertSections/ScheduleInsertSection';
function Schedule() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Schedule",
    },
    {
      method: Methods.GETSINGLE,
      main: "Schedule",
    },
    {
      method: Methods.POST,
      main: "Schedule",
    },
    {
      method: Methods.DELETE,
      main: "Schedule",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o planie zajęć</summary>
        <MyDataGrid<IScheduleModel, IScheduleDTO>
          endpoints={endpoints}
          insertSection={<ScheduleInsertSection/>}
        />
      </details>
    </main>
  );
}

export default Schedule