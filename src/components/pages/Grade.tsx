import React from 'react'
import {
  IClassDTO,
  IClassModel,
  IEndpoint,
  IGradeModel,
  Methods,
} from "../../Types";
import MyDataGrid from "../common/MyDataGrid";
import GradeInsertSection from '../insertSections/GradeInsertSection';

function Grade() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Grade",
    },
    {
      method: Methods.GETSINGLE,
      main: "Grade",
    },
    {
      method: Methods.POST,
      main: "Grade",
    },
    {
      method: Methods.DELETE,
      main: "Grade",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o ocenach</summary>
        <MyDataGrid<IGradeModel, IGradeModel>
          endpoints={endpoints}
          insertSection={<GradeInsertSection/>}
        />
      </details>
    </main>
  );
}

export default Grade