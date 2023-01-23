import React from "react";
import { IEndpoint, ISubjectClassModel, ISubjectDetailedModel, ISubjectDTO, ISubjectModel, Methods } from "../../Types";
import CustomFullGrid from "../common/CustomFullGrid";
import CustomReadGrid from "../common/CustomReadGrid";
import MyDataGrid from "../common/MyDataGrid";
import SubjectClassesInsertSection from "../insertSections/SubjectClassesInsertSection";
import SubjectInsertSection from "../insertSections/SubjectInsertSection";

/**
 * Komponent reprezentujący panel przedmiotów
 * @returns JSX.Element
 */
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

  const subjectClassesEndpoints : IEndpoint []= [
    {
      method: Methods.GET,
      main: "Subject/subjectClasses",
    },
    {
      method: Methods.POST,
      main: "Subject/subjectClasses",
    }
  ]

  return (
    <main>
      <details>
        <summary>Ogólne informacje o przedmiotach</summary>
        <MyDataGrid<ISubjectModel, ISubjectDTO>
          endpoints={endpoints}
          insertSection={<SubjectInsertSection />}
          description={"Lista wszystkich przedmiotów wraz ze salami, w których odbywają się zajęcia"}
        />
      </details>

      <details>
        <summary>Szczegółowe informacje o przedmiotach</summary>
        <CustomReadGrid<ISubjectDetailedModel>
          endpoint={{
            method:Methods.GET,
            main:"Subject/detailed"
          }}
          description={"Szczegółowe informacje o przedmiocie m.in. nauczyciel prowadzący dany przedmiot"}
        />
      </details>
      <details>
        <summary>Informacje o przedmiotach w oddzialach</summary>
        <CustomFullGrid<ISubjectClassModel,ISubjectDTO>
          endpoints={subjectClassesEndpoints}
          searchParamName=""
          insertSection={<SubjectClassesInsertSection />}
        />
      </details>
    </main>
  );
}

export default Subject;
