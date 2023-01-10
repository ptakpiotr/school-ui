import React, {
  useState,
  useRef,
  useEffect,
  useContext
} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 

import {FaTrash,FaSearch} from "react-icons/fa";
import { IColumnDef, IEndpoint, Methods } from "../../Types";
import { deleteOne, getAllData, getOne } from "../../axiosHelpers";
import { ExceptionDetailsContext } from "../../App";

interface IProps<T, U> {
  endpoints: IEndpoint[];
  insertSection:JSX.Element;
  description:string;
}

function MyDataGrid<T extends object, U extends object>({
  endpoints,
  insertSection,
  description
}: IProps<T, U>) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<T[]>();
  const [id, setId] = useState<number>();
  const [deleteId, setDeleteId] = useState<number>();

  const [columnDefs, setColumnDefs] = useState<IColumnDef[]>([]);
  const {message,setMessage} = useContext(ExceptionDetailsContext);

  useEffect(() => {
    getAllData(
      setRowData,
      endpoints.find((e) => e.method === Methods.GET)?.main
    );
  }, []);

  useEffect(() => {
    if (!!rowData) {
      setColumnDefs(
        Object.keys(rowData[0]).map((c) => ({ field: c } as IColumnDef))
      );
    }
  }, [rowData]);

  const getOneRecord = () => {
    if (id) {
      getOne(
        setRowData,
        endpoints.find((e) => e.method === Methods.GET)?.main,
        id
      );
    }
  };

  const deleteOneRecord = () => {
    if (deleteId && setMessage) {
      deleteOne(
        setRowData,
        endpoints.find((e) => e.method === Methods.DELETE)?.main,
        deleteId,
        setMessage
      );
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
              <button onClick={getOneRecord}>Search <FaSearch /></button>
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
              Delete <FaTrash />
            </button>
          </span>
        </div>
      </div>
      <div>
       {insertSection}
      </div>
      <div className="error-box">{message}</div>
    </>
  );
}

export default MyDataGrid;
