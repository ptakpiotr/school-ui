import React, { useContext, useState } from "react";
import { IPaymentTypeDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

/**
 * Komponent odpowiedzialny za wprowadzanie informacji związanych z rodzajami płatności
 * @returns JSX.Element
 */
function PaymentTypeInsertSection() {
  const [value, setValue] = useState<IPaymentTypeDTO>({
    powod:""
  });

  const { setMessage } = useContext(ExceptionDetailsContext);

  const handleClick = () => {
    if(setMessage){
      addOne("Misc/PaymentType", value,setMessage,true);
    }
  };
  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="powod">Powód</label>
          <input
            type="text"
            value={value?.powod}
            onChange={(e) => {
              setValue((prev: IPaymentTypeDTO | undefined) => {
                return { ...prev!, powod: e.target.value };
              });
            }}
            name="powod"
            title="Powód"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default PaymentTypeInsertSection;
