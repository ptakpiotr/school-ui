import React, { useState } from "react";
import { IStudentDTO } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
/**             imie:string;
    nazwisko:string;
    klasa_id:number; */
function StudentInsertSection() {
  const [value, setValue] = useState<IStudentDTO>({
    imie:"",
    nazwisko:"",
    klasa_id:-1
  });
  const handleClick = () => {
    addOne("Student", value);
  };
  return (
    <div className="insert-section">
      <div>
        <input
          type="text"
          value={value?.imie}
          onChange={(e) => {
            setValue((prev: IStudentDTO | undefined) => {
              return { ...prev!, imie:e.target.value };
            });
          }}
          placeholder="Id ucznia"
        />
        <input
          type="text"
          value={value?.nazwisko}
          onChange={(e) => {
            setValue((prev: IStudentDTO | undefined) => {
              return { ...prev!, nazwisko: e.target.value };
            });
          }}
        />
        <input
          type="number"
          value={value?.klasa_id}
          onChange={(e) => {
            setValue((prev: IStudentDTO | undefined) => {
              return { ...prev!, klasa_id: parseInt(e.target.value) };
            });
          }}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default StudentInsertSection;
