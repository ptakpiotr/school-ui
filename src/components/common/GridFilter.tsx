import React, { useEffect, useState } from "react";
import { IValueFilter } from "../../Types";
import getFormType from "../../utils/getFormType";
type IProps<T> = IValueFilter<T> & {
  applyFilter: React.Dispatch<React.SetStateAction<string>>;
};
function GridFilter<T>({ fieldName, value, applyFilter }: IProps<T>) {
  const [val, setVal] = useState<string>();
    
  const setFilterValue = () => {
    applyFilter((prev) => {
      let newValue = `${prev}`;
      if (!!val) {
        if (!newValue) {
          newValue += `?${fieldName}=${val}`;
        } else {
          if (newValue.includes(fieldName)) {
            let splitted = newValue.split("&");
            let found = splitted.find((s) => s.includes(fieldName));
            if (found) {
              splitted[splitted.indexOf(found)] =
                found.substring(0, found.indexOf("=") + 1) + val;
            }
            newValue = splitted.join("&");
          } else {
            newValue += `&${fieldName}=${val}`;
          }
        }
      }
      return newValue;
    });
  };
  return (
    <div>
      <input
        type={getFormType(fieldName, value)}
        title={fieldName}
        placeholder={fieldName}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <button className="apply-btn" onClick={setFilterValue}>
        Zaaplikuj
      </button>
    </div>
  );
}

export default GridFilter;
