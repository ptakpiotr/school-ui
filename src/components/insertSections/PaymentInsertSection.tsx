import React, { useState } from "react";
import { IPaymentDTO } from "../../Types";
import dayjs from "dayjs";
import { addOne } from "../../axiosHelpers";
/**        rodzaj_id:number;
    uczen_id:number;
    wartosc:number; */
function PaymentInsertSection() {
  const [value, setValue] = useState<IPaymentDTO>({
    rodzaj_id:-1,
    uczen_id: 0,
    wartosc:0
  });
  const handleClick = () => {
    addOne("Payment", value);
  };
  return (
    <div className="insert-section">
      <div>
        <input
          type="number"
          value={value?.rodzaj_id}
          onChange={(e) => {
            setValue((prev: IPaymentDTO | undefined) => {
              return { ...prev!, rodzaj_id: parseInt(e.target.value) };
            });
          }}
          placeholder="Id ucznia"
        />
        <input
          type="number"
          value={value?.uczen_id}
          onChange={(e) => {
            setValue((prev: IPaymentDTO | undefined) => {
              return { ...prev!, uczen_id: parseInt(e.target.value) };
            });
          }}
        />
        <input
          type="number"
          value={value?.wartosc}
          onChange={(e) => {
            setValue((prev: IPaymentDTO | undefined) => {
              return { ...prev!, wartosc: parseInt(e.target.value) };
            });
          }}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default PaymentInsertSection;
