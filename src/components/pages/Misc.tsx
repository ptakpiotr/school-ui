import React from 'react'
import { IEndpoint, IPaymentTypeDTO, IPaymentTypeModel, IRoomDTO, IRoomModel, Methods } from '../../Types';
import MyDataGrid from '../common/MyDataGrid';

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
          insertSection={<></>}
        />
      </details>
      <details>
        <summary>Ogólne informacje o salach</summary>
        <MyDataGrid<IRoomModel, IRoomDTO>
          endpoints={roomEndpoints}
          insertSection={<></>}
        />
      </details>
    </main>
  );
}

export default Misc