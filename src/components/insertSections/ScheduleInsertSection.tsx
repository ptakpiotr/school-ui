import React, { useContext, useState } from "react";
import { IScheduleDTO } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

function ScheduleInsertSection() {
  const [value, setValue] = useState<IScheduleDTO>({
    przedmiot_oddzial_id: -1,
    terminOd: "",
    terminDo: "",
  });

  const { setMessage } = useContext(ExceptionDetailsContext);

  const handleClick = () => {
    if(setMessage){
      addOne("Schedule", value,setMessage);
    }
  };
  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="przedmiot_oddzial_id">Id przedmiotu w oddziale</label>
          <input
            type="number"
            value={value?.przedmiot_oddzial_id}
            onChange={(e) => {
              setValue((prev: IScheduleDTO | undefined) => {
                return {
                  ...prev!,
                  przedmiot_oddzial_id: parseInt(e.target.value),
                };
              });
            }}
            name="przedmiot_oddzial_id"
            title="Id przedmiotu w oddziale"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="terminOd">Termin od</label>
          <input
            type="datetime-local"
            value={value?.terminOd}
            onChange={(e) => {
              setValue((prev: IScheduleDTO | undefined) => {
                const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
                return { ...prev!, terminOd: d };
              });
            }}
            name="terminOd"
            title="Termin od"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="terminDo">Termin do</label>
          <input
            type="datetime-local"
            value={value?.terminDo}
            onChange={(e) => {
              setValue((prev: IScheduleDTO | undefined) => {
                const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
                return { ...prev!, terminDo: d };
              });
            }}
            name="terminDo"
            title="Termin do"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default ScheduleInsertSection;
