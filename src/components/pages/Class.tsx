import React from "react";
import {
  IClassDTO,
  IClassModel,
  IEndpoint,
  Methods,
} from "../../Types";
import MyDataGrid from "../common/MyDataGrid";

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
          insertSection={<></>}
        />
      </details>
    </main>
  );
}

export default Class;
