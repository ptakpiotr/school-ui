import React, { useContext, useState } from "react";
import { IRoomDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

function RoomInsertSection() {
  const [value, setValue] = useState<IRoomDTO>({
    numer_sali:""
  });

  const { setMessage } = useContext(ExceptionDetailsContext);

  const handleClick = () => {
    if(setMessage){
      addOne("Misc/Room", value,setMessage,true);
    }
  };
  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="numer_sali">Numer sali</label>
          <input
            type="text"
            value={value?.numer_sali}
            onChange={(e) => {
              setValue((prev: IRoomDTO | undefined) => {
                return { ...prev!, numer_sali: e.target.value };
              });
            }}
            name="numer_sali"
            title="Numer sali"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default RoomInsertSection;
