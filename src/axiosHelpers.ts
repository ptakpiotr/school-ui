import axios from "axios";
import DOMPurify from "dompurify";
import { StatusCodes } from "http-status-codes";

/**
 * funkcja odpowiedzialna za pobranie wszystkich danych z danego endpointu
 * @param setData 
 * @param endpoint 
 * @param protectedRoute 
 */
export function getAllData<T>(
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>,
  endpoint: string | undefined,
  protectedRoute?: boolean
) {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`, {
      headers: protectedRoute
        ? {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        : {},
    })
    .then((dt) => {
      setData(dt.data);
    })
    .catch((err) => {
      console.error(err?.response?.data || err);
    });
}

/**
 * funkcja pobierająca informacje tylko dla pojedynczego ID
 * @param setData 
 * @param endpoint 
 * @param id 
 * @param protectedRoute 
 */
export function getOne<T>(
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>,
  endpoint: string | undefined,
  id: number,
  protectedRoute?: boolean
) {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}${endpoint}/${id}`, {
      headers: protectedRoute
        ? {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        : {},
    })
    .then((dt) => {
      setData([dt.data]);
    })
    .catch((err) => {
      console.error(err?.response?.data || err);
    });
}

/**
 * generyczna funkcja pobierająca jedną bądź wiele wartości
 * @param setData 
 * @param endpoint 
 * @param paramName 
 * @param id 
 * @param searchExpression 
 * @param protectedRoute 
 */
export function getManyGeneric<T, U>(
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>,
  endpoint: string | undefined,
  paramName: string,
  id: U,
  searchExpression?: string,
  protectedRoute?: boolean
) {
  axios
    .get(
      `${process.env.REACT_APP_BACKEND_URL}${endpoint}${
        paramName === "id" ? `/${id}` : ""
      }${searchExpression ? DOMPurify.sanitize(searchExpression) : ""}`,
      {
        headers: protectedRoute
          ? {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          : {},
      }
    )
    .then((dt) => {
      console.log(dt.data);
      setData(dt.data);
    })
    .catch((err) => {
      console.error(err?.response?.data || err);
    });
}

/**
 * uproszczona funkcja generyczna pobierająca wartości
 * @param setData 
 * @param endpoint 
 * @param searchExpression 
 * @param protectedRoute 
 */
export function getManyWithoutGeneric<T>(
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>,
  endpoint: string | undefined,
  searchExpression?: string,
  protectedRoute?: boolean
) {
  axios
    .get(
      `${process.env.REACT_APP_BACKEND_URL}${endpoint}${
        searchExpression ? DOMPurify.sanitize(searchExpression) : ""
      }`,
      {
        headers: protectedRoute
          ? {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          : {},
      }
    )
    .then((dt) => {
      setData(dt.data);
    })
    .catch((err) => {
      console.error(err?.response?.data || err);
    });
}

/**
 * funkcja wywołująca endpoint odpowiedzialny za usunięcie rekordu o konkretnym ID
 * @param setData 
 * @param endpoint 
 * @param id 
 * @param setMsg 
 * @param protectedRoute 
 */
export function deleteOne<T>(
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>,
  endpoint: string | undefined,
  id: number,
  setMsg: React.Dispatch<React.SetStateAction<string>>,
  protectedRoute?: boolean
) {
  axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}${endpoint}/${id}`, {
      headers: protectedRoute
        ? {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        : {},
    })
    .then((dt) => {
      if (dt.status === StatusCodes.NO_CONTENT) {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`)
          .then((dt) => {
            setData(dt.data);
          })
          .catch((err) => {
            setMsg(err.message);
          });
      }
    })
    .catch((err) => {
      let errMsg = `${err.message} ${err?.response?.data || err}`;
      alert(errMsg);
      setMsg(errMsg);
    });
}

/**
 * funkcja dodająca nowy wpis
 * @param endpoint 
 * @param value 
 * @param setMsg 
 * @param protectedRoute 
 */
export function addOne<T>(
  endpoint: string | undefined,
  value: T,
  setMsg: React.Dispatch<React.SetStateAction<string>>,
  protectedRoute?: boolean
) {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`, value, {
      headers: protectedRoute
        ? {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        : {},
    })
    .then((dt) => {
      if (dt.status === StatusCodes.OK) {
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
      let errMsg = `${err.message} ${err?.response?.data || err}`;
      alert(errMsg);
      setMsg(errMsg);
    });
}

/**
 * funkcja wywołująca endpoint PATCH - powoduje częściową aktualizację zawartości
 * @param endpoint 
 * @param id 
 * @param path 
 * @param value 
 * @param setMsg 
 * @param protectedRoute 
 */
export function patchOne<T>(
  endpoint: string | undefined,
  id:number,
  path: string,
  value: T,
  setMsg: React.Dispatch<React.SetStateAction<string>>,
  protectedRoute?: boolean
) {
  let operations = [
    {
      path,
      op: "replace",
      value,
    },
  ];
  axios
    .patch(`${process.env.REACT_APP_BACKEND_URL}${endpoint}/${id}`, operations, {
      headers: protectedRoute
        ? {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        : {},
    })
    .then((dt) => {
      if (dt.status === StatusCodes.OK) {
        window.location.reload();
      }
    })
    .catch((err) => {
      let errMsg = `${err.message} ${err?.response?.data || err}`;
      setMsg(errMsg);
    });
}
