import React, { useState } from "react";
import { ITeacherDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
/**                     imie:string;
    nazwisko:string; */
function TeacherInsertSection() {
  const [value, setValue] = useState<ITeacherDTO>({
    imie: "",
    nazwisko: ""
  });
  const handleClick = () => {
    addOne("Teacher", value);
  };
  return (
    <div className="insert-section">
      <div>
        <input
          type="text"
          value={value?.imie}
          onChange={(e) => {
            setValue((prev: ITeacherDTO | undefined) => {
              return { ...prev!, imie: e.target.value };
            });
          }}
          placeholder="Id ucznia"
        />
        <input
          type="number"
          value={value?.nazwisko}
          onChange={(e) => {
            setValue((prev: ITeacherDTO | undefined) => {
              return { ...prev!, nazwisko: e.target.value };
            });
          }}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default TeacherInsertSection;
