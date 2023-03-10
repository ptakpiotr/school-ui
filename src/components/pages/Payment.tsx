import React from "react";
import { IEndpoint, IPaymentDTO, IPaymentModel, Methods } from "../../Types";
import MyDataGrid from "../common/MyDataGrid";
import PaymentInsertSection from "../insertSections/PaymentInsertSection";

/**
 * Komponent odpowiedzialny za wyświetlanie panelu płatności
 * @returns JSX.Element
 */
function Payment() {
  const endpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Payment",
    },
    {
      method: Methods.GETSINGLE,
      main: "Payment",
    },
    {
      method: Methods.POST,
      main: "Payment",
    },
    {
      method: Methods.DELETE,
      main: "Payment",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o płatnościach</summary>
        <MyDataGrid<IPaymentModel, IPaymentDTO>
          endpoints={endpoints}
          insertSection={<PaymentInsertSection />}
          description={"Wszystkie płatności, których dokonali uczniowie"}
        />
      </details>
    </main>
  );
}

export default Payment;
