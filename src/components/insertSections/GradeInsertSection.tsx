import React, { useState } from "react";
import { IClassDTO, IGradeModel } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
/**    ocena:number;
    uczen_ocena_id:number; */
function GradeInsertSection() {
  const [value, setValue] = useState<IGradeModel>({
    id:-1,
    ocena: 0,
    uczen_ocena_id:0
  });
  const handleClick = () => {
    addOne("Grade", value);
  };
  return (
    <div className="insert-section">
      <div>
        <input
          type="number"
          value={value?.ocena}
          onChange={(e) => {
            setValue((prev: IGradeModel | undefined) => {
              return { ...prev!, ocena: parseInt(e.target.value) };
            });
          }}
          placeholder="Id ucznia"
        />
        <input
          type="number"
          value={value?.uczen_ocena_id}
          onChange={(e) => {
            setValue((prev: IGradeModel | undefined) => {
              return { ...prev!, uczen_ocena_id: parseInt(e.target.value) };
            });
          }}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default GradeInsertSection;
