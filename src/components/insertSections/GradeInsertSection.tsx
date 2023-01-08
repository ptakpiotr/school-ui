import React, { useState } from "react";
import { IGradeModel } from "../../Types";
import { addOne } from "../../axiosHelpers";

function GradeInsertSection() {
  const [value, setValue] = useState<IGradeModel>({
    id: -1,
    ocena: 0,
    uczen_ocena_id: 0,
  });
  const handleClick = () => {
    addOne("Grade", value);
  };

  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="ocena">Ocena</label>
          <input
            type="number"
            value={value?.ocena}
            onChange={(e) => {
              setValue((prev: IGradeModel | undefined) => {
                return { ...prev!, ocena: parseInt(e.target.value) };
              });
            }}
            name="ocena"
            title="ocena"
          />
        </div>
        <div className="insert-section-row">
        <label htmlFor="uczen_ocena_id">Id oceny nadrzędnej</label>
        <input
          type="number"
          value={value?.uczen_ocena_id}
          onChange={(e) => {
            setValue((prev: IGradeModel | undefined) => {
              return { ...prev!, uczen_ocena_id: parseInt(e.target.value) };
            });
          }}
          name="uczen_ocena_id"
          title="uczen_ocena_id"
        />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default GradeInsertSection;
