import React, { useContext, useState } from "react";
import { ITeacherDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

function TeacherInsertSection() {
  const [value, setValue] = useState<ITeacherDTO>({
    imie: "",
    nazwisko: "",
  });

  const { setMessage } = useContext(ExceptionDetailsContext);

  const handleClick = () => {
    if(setMessage){
      addOne("Teacher", value,setMessage,true);
    }
  };
  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="imie">Imię</label>
          <input
            type="text"
            value={value?.imie}
            onChange={(e) => {
              setValue((prev: ITeacherDTO | undefined) => {
                return { ...prev!, imie: e.target.value };
              });
            }}
            name="imie"
            title="Imie"
          />
        </div>
        <div className="insert-section-row">
        <label htmlFor="nazwisko">Nazwisko</label>
        <input
          type="text"
          value={value?.nazwisko}
          onChange={(e) => {
            setValue((prev: ITeacherDTO | undefined) => {
              return { ...prev!, nazwisko: e.target.value };
            });
          }}
          name="nazwisko"
          title="Nazwisko"
        />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default TeacherInsertSection;
