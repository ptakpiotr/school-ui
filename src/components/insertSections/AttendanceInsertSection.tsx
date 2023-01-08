import React, { useState } from "react";
import { IAttendanceModel } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
function AttendanceInsertSection() {
  const [value, setValue] = useState<IAttendanceModel>({
    id: -1,
    data: "",
    obecny: false,
    uczen_id: -1,
  });
  const handleClick = ()=>{
    addOne("Attendance",value);
  }
  return (
    <div className="insert-section">
      <div>
        <input
          type="text"
          value={value?.uczen_id}
          onChange={(e) => {
            setValue((prev: IAttendanceModel | undefined) => {
              return { ...prev!, uczen_id: parseInt(e.target.value) };
            });
          }}
          placeholder="Id ucznia"
        />
        <input
          type="checkbox"
          value={value?.obecny.toString()}
          onChange={(e) => {
            setValue((prev: IAttendanceModel | undefined) => {
              return { ...prev!, obecny: Boolean(e.target.value) };
            });
          }}
        />{" "}
        Obecny
        <input
          type="datetime-local"
          value={value?.data.toString()}
          onChange={(e) => {
            setValue((prev: IAttendanceModel | undefined) => {
              const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
              return { ...prev!, data: d };
            });
          }}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AttendanceInsertSection;
