import React from "react";
import { IEndpoint, ISubjectDTO, ISubjectModel, Methods } from "../../Types";
import MyDataGrid from "../common/MyDataGrid";
import SubjectInsertSection from "../insertSections/SubjectInsertSection";
function Subject() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Subject",
    },
    {
      method: Methods.GETSINGLE,
      main: "Subject",
    },
    {
      method: Methods.POST,
      main: "Subject",
    },
    {
      method: Methods.DELETE,
      main: "Subject",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o przedmiotach</summary>
        <MyDataGrid<ISubjectModel, ISubjectDTO>
          endpoints={endpoints}
          insertSection={<SubjectInsertSection />}
        />
      </details>
    </main>
  );
}

export default Subject;
