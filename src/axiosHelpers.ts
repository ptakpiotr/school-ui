import axios from "axios";
import DOMPurify from "dompurify";
import { StatusCodes } from "http-status-codes";

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
      console.error(err);
    });
}

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
      console.error(err);
    });
}

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
      console.error(err);
    });
}

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
      console.log(dt.data);
      setData(dt.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

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
      setMsg(err.message);
    });
}

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
      setMsg(err.message);
    });
}

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
      setMsg(err.message);
    });
}
