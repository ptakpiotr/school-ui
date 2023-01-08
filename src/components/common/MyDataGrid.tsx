import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react";
import { AgEvent } from "ag-grid-community";
import axios from "axios";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { IColumnDef, IEndpoint, Methods } from "../../Types";
import { addOne, deleteOne, getAllData, getOne } from "../../axiosHelpers";
import getFormType from "../../utils/getFormType";
interface IProps<T, U> {
  endpoints: IEndpoint[];
  insertSection:JSX.Element;
}

function MyDataGrid<T extends object, U extends object>({
  endpoints,
  insertSection,
}: IProps<T, U>) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<T[]>();
  const [id, setId] = useState<number>();
  const [deleteId, setDeleteId] = useState<number>();

  const [columnDefs, setColumnDefs] = useState<IColumnDef[]>([]);
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

  const cellClickedListener = useCallback((event: AgEvent) => {
    console.log("cellClicked", event);
  }, []);

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
    if (deleteId) {
      deleteOne(
        setRowData,
        endpoints.find((e) => e.method === Methods.DELETE)?.main,
        deleteId
      );
    }
  };
  
  return (
    <>
      <div className="my-grid">
        <div
          className="ag-theme-alpine"
          style={{ width: "80vw", height: "40vh" }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection="multiple" // Options - allows click selection of rows
            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
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
              <button onClick={getOneRecord}>Search</button>
            </span>
          ) : (
            <></>
          )}
          <span>
            <input
              type="number"
              placeholder="Id to delete"
              value={deleteId}
              onChange={(e) => {
                setDeleteId(parseInt(e.target.value));
              }}
            />
            <button className="danger-btn" onClick={deleteOneRecord}>
              Search
            </button>
          </span>
        </div>
      </div>
      <div>
       {insertSection}
      </div>
    </>
  );
}

export default MyDataGrid;
