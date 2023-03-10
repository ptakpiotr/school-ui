import React, { useState, useRef, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { IColumnDef, IEndpoint } from "../../Types";
import { getAllData } from "../../axiosHelpers";

/**
 * interfejs reprezentujący propsy przyjmowane przez komponent
 */
interface IProps {
  endpoint: IEndpoint;
  description:string;
}

/**
 * Komponent będący opakowaniem AgGridReact (tylko funkcjonalność odczytu)
 * @param props
 * @returns JSX.Element
 */
function CustomReadGrid<T extends object>({ endpoint,description }: IProps) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<T[]>();

  const [columnDefs, setColumnDefs] = useState<IColumnDef[]>([]);
  useEffect(() => {
    getAllData(setRowData, endpoint.main);
  }, []);

  useEffect(() => {
    if (!!rowData) {
      setColumnDefs(
        Object.keys(rowData[0]).map((c) => ({ field: c } as IColumnDef))
      );
    }
  }, [rowData]);

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
    </div>
    </>
  );
}

export default CustomReadGrid;
