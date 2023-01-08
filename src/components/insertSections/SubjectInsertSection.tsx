import React, { useState } from "react";
import { ISubjectDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";

function SubjectInsertSection() {
  const [value, setValue] = useState<ISubjectDTO>({
    id: -1,
    nazwa_przedmiotu: "",
    sala_id: -1,
  });
  const handleClick = () => {
    addOne("Subject", value);
  };

  //<div className="insert-section-row">
  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="nazwa_przedmiotu">Nazwa przedmiotu</label>
          <input
            type="text"
            value={value?.nazwa_przedmiotu}
            onChange={(e) => {
              setValue((prev: ISubjectDTO | undefined) => {
                return { ...prev!, nazwa_przedmiotu: e.target.value };
              });
            }}
            name="nazwa_przedmiotu"
            title="Nazwa przedmiotu"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="sala_id">Id sali</label>
          <input
            type="number"
            value={value?.sala_id}
            onChange={(e) => {
              setValue((prev: ISubjectDTO | undefined) => {
                return { ...prev!, sala_id: parseInt(e.target.value) };
              });
            }}
            name="sala_id"
            title="Id sali"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default SubjectInsertSection;
