import React, { useState } from "react";
import { ISubjectDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
/**                 id:number;
    nazwa_przedmiotu:string;
    sala_id:number; */
function SubjectInsertSection() {
  const [value, setValue] = useState<ISubjectDTO>({
    id: -1,
    nazwa_przedmiotu: "",
    sala_id: -1,
  });
  const handleClick = () => {
    addOne("Subject", value);
  };
  return (
    <div className="insert-section">
      <div>
        <input
          type="text"
          value={value?.nazwa_przedmiotu}
          onChange={(e) => {
            setValue((prev: ISubjectDTO | undefined) => {
              return { ...prev!, nazwa_przedmiotu: e.target.value };
            });
          }}
          placeholder="Id ucznia"
        />
        <input
          type="number"
          value={value?.sala_id}
          onChange={(e) => {
            setValue((prev: ISubjectDTO | undefined) => {
              return { ...prev!, sala_id: parseInt(e.target.value) };
            });
          }}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default SubjectInsertSection;
