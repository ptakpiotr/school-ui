import React, { useState, useRef, useEffect, useContext } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { FaTrash, FaSearch } from "react-icons/fa";
import { IColumnDef, IEndpoint, Methods } from "../../Types";
import { deleteOne, getAllData, getOne, patchOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";
import { CellEditingStoppedEvent } from "ag-grid-community";

interface IProps<T, U> {
  endpoints: IEndpoint[];
  insertSection: JSX.Element;
  description: string;
  protectedComponent?: boolean;
  editable?: boolean;
}

function MyDataGrid<T extends object, U extends object>({
  endpoints,
  insertSection,
  description,
  protectedComponent,
  editable,
}: IProps<T, U>) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<T[]>();
  const [id, setId] = useState<number>();
  const [deleteId, setDeleteId] = useState<number>();

  const [columnDefs, setColumnDefs] = useState<IColumnDef[]>([]);
  const { message, setMessage } = useContext(ExceptionDetailsContext);

  useEffect(() => {
    getAllData(
      setRowData,
      endpoints.find((e) => e.method === Methods.GET)?.main,
      protectedComponent
    );
  }, []);

  useEffect(() => {
    if (!!rowData) {
      setColumnDefs(
        Object.keys(rowData[0]).map(
          (c) =>
            ({
              field: c,
              editable: !c.includes("id") && editable,
            } as IColumnDef)
        )
      );
    }
  }, [rowData]);

  const getOneRecord = () => {
    if (id) {
      getOne(
        setRowData,
        endpoints.find((e) => e.method === Methods.GET)?.main,
        id,
        protectedComponent
      );
    }
  };

  const deleteOneRecord = () => {
    if (deleteId && setMessage) {
      deleteOne(
        setRowData,
        endpoints.find((e) => e.method === Methods.DELETE)?.main,
        deleteId,
        setMessage,
        protectedComponent
      );
    }
  };

  const cellEditingStopped = async (c: CellEditingStoppedEvent<any, any>) => {
    if(editable && setMessage){
      let id = c.data.id;
      let columnName = c.colDef.field;
      let newValue = c.newValue;
      let endpoint = endpoints.find(e=>e.method===Methods.PATCH)?.main;

      await patchOne<string>(endpoint,id,columnName!,newValue,setMessage,true);
    }
  };

  return (
    <>
      <h6>{description}</h6>
      <div className="my-grid">
        <div
          className="ag-theme-alpine"
          style={{ width: "70vw", height: "40vh" }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            animateRows={true}
            rowSelection="multiple"
            onCellEditingStopped={cellEditingStopped}
          />
        </div>
        <div className="my-grid-actions-center">
          {!!endpoints.find((e) => e.method === Methods.GETSINGLE) ? (
            <span>
              <input
                type="number"
                placeholder="Id"
                value={id}
                onChange={(e) => {
                  setId(parseInt(e.target.value));
                }}
              />
              <button onClick={getOneRecord}>
                Szukaj <FaSearch />
              </button>
            </span>
          ) : (
            <></>
          )}
          <span>
            <input
              type="number"
              placeholder="Id do usunięcia"
              value={deleteId}
              onChange={(e) => {
                setDeleteId(parseInt(e.target.value));
              }}
            />
            <button className="danger-btn" onClick={deleteOneRecord}>
              Usuń <FaTrash />
            </button>
          </span>
        </div>
      </div>
      <div>{insertSection}</div>
      <div className="error-box">{message}</div>
    </>
  );
}

export default MyDataGrid;
