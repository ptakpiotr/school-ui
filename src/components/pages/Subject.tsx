import React from "react";
import { IEndpoint, ISubjectDetailedModel, ISubjectDTO, ISubjectModel, Methods } from "../../Types";
import CustomReadGrid from "../common/CustomReadGrid";
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

      <details>
        <summary>Szczegółowe informacje o przedmiotach</summary>
        <CustomReadGrid<ISubjectDetailedModel>
          endpoint={{
            method:Methods.GET,
            main:"Subject/detailed"
          }}
        />
      </details>
    </main>
  );
}

export default Subject;
