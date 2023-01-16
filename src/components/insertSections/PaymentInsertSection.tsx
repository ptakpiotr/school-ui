import React, { useContext, useState } from "react";
import { IPaymentDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

/**
 * Komponent odpowiedzialny za wprowadzanie informacji związanych z płatnościami
 * @returns JSX.Element
 */
function PaymentInsertSection() {
  const [value, setValue] = useState<IPaymentDTO>({
    rodzaj_id: -1,
    uczen_id: 0,
    wartosc: 0,
  });

  const { setMessage } = useContext(ExceptionDetailsContext);

  const handleClick = () => {
    if (setMessage) {
      addOne("Payment", value, setMessage);
    }
  };

  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="rodzaj_id">Id rodzaju</label>
          <input
            type="number"
            value={value?.rodzaj_id}
            onChange={(e) => {
              setValue((prev: IPaymentDTO | undefined) => {
                return { ...prev!, rodzaj_id: parseInt(e.target.value) };
              });
            }}
            name="rodzaj_id"
            title="Id rodzaju"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="uczen_id">Id ucznia</label>
          <input
            type="number"
            value={value?.uczen_id}
            onChange={(e) => {
              setValue((prev: IPaymentDTO | undefined) => {
                return { ...prev!, uczen_id: parseInt(e.target.value) };
              });
            }}
            name="uczen_id"
            title="Id ucznia"
          />
        </div>
        <div className="insert-section-row">
          <label htmlFor="wartosc">Wartość</label>
          <input
            type="number"
            value={value?.wartosc}
            onChange={(e) => {
              setValue((prev: IPaymentDTO | undefined) => {
                return { ...prev!, wartosc: parseInt(e.target.value) };
              });
            }}
            name="wartosc"
            title="wartosc"
          />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default PaymentInsertSection;
