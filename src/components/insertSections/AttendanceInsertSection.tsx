import React, { useContext, useState } from "react";
import { IAttendanceDTO } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

/**
 * Komponent odpowiedzialny za wprowadzanie informacji związanych z frekwencją
 * @returns JSX.Element
 */
function AttendanceInsertSection() {
  const [value, setValue] = useState<IAttendanceDTO>({
    id: -1,
    data: "",
    obecny: false,
    uczen_id: -1,
  });
  const { setMessage } = useContext(ExceptionDetailsContext);

  const handleClick = () => {
    if (setMessage) {
      addOne("Attendance", value, setMessage);
    }
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
              setValue((prev: IAttendanceDTO | undefined) => {
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
              setValue((prev: IAttendanceDTO | undefined) => {
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
              setValue((prev: IAttendanceDTO | undefined) => {
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
