import React, { useContext, useState } from "react";
import { IScheduleDTO } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

/**
 * Komponent odpowiedzialny za wprowadzanie informacji związanych z planem zajęć
 * @returns JSX.Element
 */
function ScheduleInsertSection() {
  const [value, setValue] = useState<IScheduleDTO>({
    przedmiot_oddzial_id: -1,
    termin_Od: "",
    termin_Do: "",
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
          <label htmlFor="termin_Od">Termin od</label>
          <input
            type="datetime-local"
            value={value?.termin_Od}
            onChange={(e) => {
              setValue((prev: IScheduleDTO | undefined) => {
                const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
                return { ...prev!, termin_Od: d };
              });
            }}
            name="terminOd"
            title="Termin od"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="termin_Do">Termin do</label>
          <input
            type="datetime-local"
            value={value?.termin_Do}
            onChange={(e) => {
              setValue((prev: IScheduleDTO | undefined) => {
                const d = dayjs(e.target.value).format("YYYY-MM-DDThh:mm:ss");
                return { ...prev!, termin_Do: d };
              });
            }}
            name="termin_Do"
            title="Termin do"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default ScheduleInsertSection;
