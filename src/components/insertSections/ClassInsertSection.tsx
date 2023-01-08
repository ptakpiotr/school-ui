import React, { useState } from "react";
import { IClassDTO } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
function ClassInsertSection() {
  const [value, setValue] = useState<IClassDTO>({
    rok: 0,
    wychowawca_id: 0,
  });
  const handleClick = () => {
    addOne("Class", value);
  };

  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="rok">Rok</label>
          <input
            type="number"
            value={value?.rok}
            onChange={(e) => {
              setValue((prev: IClassDTO | undefined) => {
                return { ...prev!, rok: parseInt(e.target.value) };
              });
            }}
            name="rok"
            title="rok"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="wychowawca_id">Id wychowawcy</label>
          <input
            type="number"
            value={value?.wychowawca_id}
            onChange={(e) => {
              setValue((prev: IClassDTO | undefined) => {
                return { ...prev!, wychowawca_id: parseInt(e.target.value) };
              });
            }}
            name="wychowawca_id"
            title="Id wychowawcy"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default ClassInsertSection;
