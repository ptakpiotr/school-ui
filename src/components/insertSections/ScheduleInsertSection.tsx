import React, { useState } from "react";
import { IScheduleDTO } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
/**            przedmiot_oddzial_id:number;
    terminOd:string;
    terminDo:string; */
function ScheduleInsertSection() {
  const [value, setValue] = useState<IScheduleDTO>({
    przedmiot_oddzial_id:-1,
    terminOd:"",
    terminDo:""
  });
  const handleClick = () => {
    addOne("Schedule", value);
  };
  return (
    <div className="insert-section">
      <div>
        <input
          type="number"
          value={value?.przedmiot_oddzial_id}
          onChange={(e) => {
            setValue((prev: IScheduleDTO | undefined) => {
              return { ...prev!, przedmiot_oddzial_id: parseInt(e.target.value) };
            });
          }}
          placeholder="Id ucznia"
        />
        <input
          type="datetime-local"
          value={value?.terminOd}
          onChange={(e) => {
            setValue((prev: IScheduleDTO | undefined) => {
              const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
              return { ...prev!, terminOd: d };
            });
          }}
        />
        <input
          type="datetime-local"
          value={value?.terminDo}
          onChange={(e) => {
            setValue((prev: IScheduleDTO | undefined) => {
              const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
              return { ...prev!, terminDo: d };
            });
          }}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default ScheduleInsertSection;
