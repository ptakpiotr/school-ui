import React from "react";
import {
  IAttendanceModel,
  IAttendancePerClassModel,
  IEndpoint,
  Methods
} from "../../Types";
import CustomFullGrid from "../common/CustomFullGrid";
import MyDataGrid from "../common/MyDataGrid";
import AttendanceInsertSection from "../insertSections/AttendanceInsertSection";

/**
 * Komponent prezentujący panel frekwencji
 * @returns JSX.Element
 */
function Attendance() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Attendance",
    },
    {
      method: Methods.POST,
      main: "Attendance",
    },
    {
      method: Methods.DELETE,
      main: "Attendance",
    },
  ];

  const customEndpoints: IEndpoint[] = [
    {
      method: Methods.GETSINGLE,
      main: "Attendance/byclass",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o frekwencji</summary>
        <MyDataGrid<IAttendanceModel, IAttendanceModel>
          endpoints={endpoints}
          insertSection={<AttendanceInsertSection />}
          description={"Rezultaty obecności na podstawie widoku"}
        />
      </details>
      <details>
        <summary>Informacje o frekwencji per klasa</summary>
        <CustomFullGrid<IAttendancePerClassModel, number>
          endpoints={customEndpoints}
          searchParamName="id"
          filtersSection={[{
            fieldName:"dateFrom",
            value:new Date()
          },
          {
            fieldName:"dateTo",
            value:new Date()
          }]}
        />
      </details>
    </main>
  );
}

export default Attendance;
