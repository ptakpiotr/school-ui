import React from "react";
import {
  IClassDTO,
  IClassModel,
  IEndpoint,
  IGradeModel,
  IGroupedGradesModel,
  IStudentGradesModel,
  Methods,
} from "../../Types";
import CustomFullGrid from "../common/CustomFullGrid";
import MyDataGrid from "../common/MyDataGrid";
import GradeInsertSection from "../insertSections/GradeInsertSection";

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

  const customEndpointsGroupedGrades: IEndpoint[] = [
    {
      method: Methods.GETSINGLE,
      main: "Grade/grouped",
    },
  ];

  const customEndpointsGetStudentGrades: IEndpoint[] = [
    {
      method: Methods.GETSINGLE,
      main: "Grade/studentGrades",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o ocenach</summary>
        <MyDataGrid<IGradeModel, IGradeModel>
          endpoints={endpoints}
          insertSection={<GradeInsertSection />}
        />
      </details>
      <details>
        <summary>Pogrupowane oceny według uczniów bądź rodzaju pracy</summary>
        <CustomFullGrid<IGroupedGradesModel, number>
          endpoints={customEndpointsGroupedGrades}
          searchParamName=""
          filtersSection={[
            {
              fieldName: "classId",
              value: -1,
            },
            {
              fieldName: "np",
              value: "",
            },
          ]}
        />
      </details>
      <details>
        <summary>Oceny konkretnego studenta</summary>
        <CustomFullGrid<IStudentGradesModel, number>
          endpoints={customEndpointsGetStudentGrades}
          searchParamName="id"
        />
      </details>
    </main>
  );
}

export default Grade;
