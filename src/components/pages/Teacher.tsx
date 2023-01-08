import React from 'react'
import {
  IEndpoint,
  ITeacherDTO,
  ITeacherModel,
  Methods,
} from "../../Types";
import MyDataGrid from "../common/MyDataGrid";
import TeacherInsertSection from '../insertSections/TeacherInsertSection';
function Teacher() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Teacher",
    },
    {
      method: Methods.GETSINGLE,
      main: "Teacher",
    },
    {
      method: Methods.POST,
      main: "Teacher",
    },
    {
      method: Methods.DELETE,
      main: "Teacher",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o nauczycielach</summary>
        <MyDataGrid<ITeacherModel, ITeacherDTO>
          endpoints={endpoints}
          insertSection={<TeacherInsertSection/>}
        />
      </details>
    </main>
  );
}

export default Teacher