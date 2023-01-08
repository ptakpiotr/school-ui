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
  const handleClick = () => {
    addOne("Attendance", value);
  };
  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="uczen_id">Id ucznia</label>
          <input
            type="text"
            value={value?.uczen_id}
            onChange={(e) => {
              setValue((prev: IAttendanceModel | undefined) => {
                return { ...prev!, uczen_id: parseInt(e.target.value) };
              });
            }}
            name="uczen_id"
            title="uczen_id"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="obecny">Obecny</label>
          <input
            type="checkbox"
            value={value?.obecny.toString()}
            onChange={(e) => {
              setValue((prev: IAttendanceModel | undefined) => {
                return { ...prev!, obecny: Boolean(e.target.value) };
              });
            }}
            name="obecny"
            title="obecny"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="data">Data</label>
          <input
            type="datetime-local"
            value={value?.data.toString()}
            onChange={(e) => {
              setValue((prev: IAttendanceModel | undefined) => {
                const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
                return { ...prev!, data: d };
              });
            }}
            name="data"
            title="data"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AttendanceInsertSection;
