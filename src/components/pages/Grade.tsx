import React from "react";
import {
  IClassDTO,
  IClassModel,
  IEndpoint,
  IGradeModel,
  IGroupedGradesModel,
  IStudentGradesModel,
  IUserGradeModel,
  Methods,
} from "../../Types";
import CustomFullGrid from "../common/CustomFullGrid";
import MyDataGrid from "../common/MyDataGrid";
import GradeInsertSection from "../insertSections/GradeInsertSection";
import UserGradeInsertSection from "../insertSections/UserGradeInsertSection";

/**
 * Komponent odpowiedzialny za prezentację panelu ocen
 * @returns JSX.Element
 */
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

  const customEndpointsGetUserGrades : IEndpoint [] = [
    {
      method:Methods.GET,
      main:"Grade/usergrades"
    },
    {
      method:Methods.POST,
      main:"Grade/usergrades"
    }
  ]

  return (
    <main>
      <details>
        <summary>Ogólne informacje o ocenach</summary>
        <MyDataGrid<IGradeModel, IGradeModel>
          endpoints={endpoints}
          insertSection={<GradeInsertSection />}
          description={"Informacje o ocenach wszystkich uczniów"}
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
      <details>
        <summary>Prace wszystkich uczniow</summary>
        <CustomFullGrid<IUserGradeModel,any> endpoints={customEndpointsGetUserGrades} searchParamName="" insertSection={<UserGradeInsertSection />} />
      </details>
    </main>
  );
}

export default Grade;
