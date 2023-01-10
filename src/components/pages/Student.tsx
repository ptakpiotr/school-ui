import React from 'react'
import {
  IEndpoint,
  IStudentDTO,
  IStudentModel,
  Methods,
} from "../../Types";
import MyDataGrid from "../common/MyDataGrid";
import StudentInsertSection from '../insertSections/StudentInsertSection';
function Student() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Student",
    },
    {
      method: Methods.GETSINGLE,
      main: "Student",
    },
    {
      method: Methods.POST,
      main: "Student",
    },
    {
      method: Methods.DELETE,
      main: "Student",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o studentach</summary>
        <MyDataGrid<IStudentModel, IStudentDTO>
          endpoints={endpoints}
          insertSection={<StudentInsertSection/>}
          description={"Lista wszystkich studentów"}
        />
      </details>
    </main>
  );
}

export default Student