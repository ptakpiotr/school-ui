import axios from "axios";
import DOMPurify from "dompurify";

export function getAllData<T>(
  setData: React.Dispatch<React.SetStateAction<T[] | undefined>>,
  endpoint: string | undefined
) {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`)
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
  id: number
) {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}${endpoint}/${id}`)
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
  searchExpression?: string
) {
  axios
    .get(
      `${process.env.REACT_APP_BACKEND_URL}${endpoint}${
        paramName === "id" ? `/${id}` : ""
      }${searchExpression ? DOMPurify.sanitize(searchExpression) : ""}`
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
  searchExpression?: string
) {
  axios
    .get(
      `${process.env.REACT_APP_BACKEND_URL}${endpoint}${searchExpression ? DOMPurify.sanitize(searchExpression) : ""}`
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
  id: number
) {
  axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}${endpoint}/${id}`)
    .then((dt) => {
      if (dt.status === 204) {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`)
          .then((dt) => {
            setData(dt.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

export function addOne<T>(endpoint: string | undefined, value: T) {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`, value)
    .then((dt) => {
      if (dt.status === 200) {
        window.location.reload();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
//DOMPurify.sanitize()
