import React from "react";
import {
  IClassDTO,
  IClassModel,
  IEndpoint,
  Methods,
} from "../../Types";
import MyDataGrid from "../common/MyDataGrid";
import ClassInsertSection from "../insertSections/ClassInsertSection";

/**
 * Komponent odpowiedzialny za wyświetlanie panelu klas
 * @returns JSX.Element
 */
function Class() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Class",
    },
    {
      method: Methods.GETSINGLE,
      main: "Class",
    },
    {
      method: Methods.POST,
      main: "Class",
    },
    {
      method: Methods.DELETE,
      main: "Class",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o klasach</summary>
        <MyDataGrid<IClassModel, IClassDTO>
          endpoints={endpoints}
          insertSection={<ClassInsertSection/>}
          description={"Lista wszystkich klas wraz z imieniem i nazwiskiem wychowawcy"}
        />
      </details>
    </main>
  );
}

export default Class;
