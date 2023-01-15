import React from 'react'
import { IEndpoint, IPaymentTypeDTO, IPaymentTypeModel, IRoomDTO, IRoomModel, Methods } from '../../Types';
import MyDataGrid from '../common/MyDataGrid';
import PaymentTypeInsertSection from '../insertSections/PaymentTypeInsertSection';
import RoomInsertSection from '../insertSections/RoomInsertSection';

function Misc() {
  const paymentTypeEndpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Misc/paymentType",
    },
    {
      method: Methods.POST,
      main: "Misc/paymentType",
    },
    {
      method: Methods.DELETE,
      main: "Misc/paymentType",
    },
    {
      method: Methods.PATCH,
      main: "Misc/paymentType",
    },
  ];

  const roomEndpoints: IEndpoint[] = [
    {
      method: Methods.GET,
      main: "Misc/room",
    },
    {
      method: Methods.POST,
      main: "Misc/room",
    },
    {
      method: Methods.DELETE,
      main: "Misc/room",
    },
  ];

  return (
    <main>
      <details>
        <summary>Ogólne informacje o metodach płatności</summary>
        <MyDataGrid<IPaymentTypeModel, IPaymentTypeDTO>
          endpoints={paymentTypeEndpoints}
          insertSection={<PaymentTypeInsertSection/>}
          description={"Lista wszystkich dostępnych metod płatności"}
          editable
        />
      </details>
      <details>
        <summary>Ogólne informacje o salach</summary>
        <MyDataGrid<IRoomModel, IRoomDTO>
          endpoints={roomEndpoints}
          insertSection={<RoomInsertSection />}
          description={"Lista wszystkich sal w jakie wyposażona jest szkoła"}
        />
      </details>
    </main>
  );
}

export default Misc