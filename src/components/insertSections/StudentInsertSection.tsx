import React, { useContext, useState } from "react";
import { IStudentDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

/**
 * Komponent odpowiedzialny za wprowadzanie informacji związanych z uczniami
 * @returns JSX.Element
 */
function StudentInsertSection() {
  const [value, setValue] = useState<IStudentDTO>({
    imie: "",
    nazwisko: "",
    klasa_id: -1,
  });

  const { setMessage } = useContext(ExceptionDetailsContext);

  const handleClick = () => {
    if(setMessage){
      addOne("Student", value,setMessage);
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
              setValue((prev: IStudentDTO | undefined) => {
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
              setValue((prev: IStudentDTO | undefined) => {
                return { ...prev!, nazwisko: e.target.value };
              });
            }}
            name="nazwisko"
            title="Nazwisko"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="klasa_id">Id klasy</label>

          <input
            type="number"
            value={value?.klasa_id}
            onChange={(e) => {
              setValue((prev: IStudentDTO | undefined) => {
                return { ...prev!, klasa_id: parseInt(e.target.value) };
              });
            }}
            name="klasa_id"
            title="Id klasy"
          />
        </div>
      </div>
      <button onClick={handleClick}>Dodaj</button>
    </div>
  );
}

export default StudentInsertSection;
