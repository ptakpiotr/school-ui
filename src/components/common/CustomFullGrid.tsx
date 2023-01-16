import React, { useState, useRef, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { FaSearch, FaTrashAlt } from "react-icons/fa";
import { IColumnDef, IEndpoint, IValueFilter, Methods } from "../../Types";
import {
  getAllData,
  getManyGeneric,
  getManyWithoutGeneric,
} from "../../axiosHelpers";
import GridFilter from "./GridFilter";

/**
 * interfejs reprezentujący propsy przyjmowane przez komponent
 */
interface IProps<W> {
  endpoints: IEndpoint[];
  searchParamName: string;
  insertSection?: JSX.Element;
  filtersSection?: IValueFilter<W>[];
}

/**
 * Komponent będący opakowaniem AgGridReact wraz z funkcjonalnością filtrowania
 * @param props
 * @returns JSX.Element
 */
function CustomFullGrid<T extends object, U, W = any>({
  endpoints,
  searchParamName,
  insertSection,
  filtersSection,
}: IProps<W>) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<T[]>();
  const [searchParam, setSearchParam] = useState<U>();
  const [searchExpression, setSearchExpression] = useState<string>("");

  const [columnDefs, setColumnDefs] = useState<IColumnDef[]>([]);  
  useEffect(() => {
    if (!!endpoints.find((e) => e.method === Methods.GET)?.main) {
      getAllData(
        setRowData,
        endpoints.find((e) => e.method === Methods.GET)?.main
      );
    }
  }, []);

  useEffect(() => {
    if (!!rowData) {
      setColumnDefs(
        Object.keys(rowData[0]).map((c) => ({ field: c } as IColumnDef))
      );
    }
  }, [rowData]);

  const getOneRecord = () => {
    if (searchParam) {
      getManyGeneric(
        setRowData,
        endpoints.find((e) => e.method === Methods.GETSINGLE)?.main,
        searchParamName,
        searchParam,
        searchExpression
      );
    } else {
      getManyWithoutGeneric(
        setRowData,
        endpoints.find((e) => e.method === Methods.GETSINGLE)?.main,
        searchExpression
      );
    }
  };

  return (
    <>
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
          <button
            className="clear-filters-btn"
            onClick={() => {
              setSearchExpression("");
              window.location.reload();
            }}
          >
            Usuń filtry <FaTrashAlt />
          </button>
          {!!endpoints.find((e) => e.method === Methods.GETSINGLE) ? (
            <>
              <span>
                <input
                  type="number"
                  placeholder="Id"
                  value={searchParam?.toString()}
                  onChange={(e) => {
                    setSearchParam(JSON.parse(e.target.value) as U);
                  }}
                  disabled={searchParamName === ""}
                />
                <button onClick={getOneRecord}>
                  Szukaj <FaSearch />
                </button>
              </span>
              <span>
                {filtersSection?.map((f) => {
                  return (
                    <GridFilter {...f} applyFilter={setSearchExpression} />
                  );
                })}
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>{insertSection}</div>
    </>
  );
}

export default CustomFullGrid;
