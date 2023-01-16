import React, { useContext, useState } from "react";
import { ILogin, IPageTile } from "../../Types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSchema } from "../../utils/validation";
import { PagesContext } from "../../App";
import { StatusCodes } from 'http-status-codes';

/**
 * Komponent odpowiedzialny za prezentację formularza logowania
 * @returns JSX.Element
 */
function Login() {
  const [login, setLogin] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [message,setMessage] = useState<string>("");

  const navigate = useNavigate();
  const {setPages} = useContext(PagesContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    loginSchema.isValid(login).then((v) => {
      if (v) {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}User/login`, login)
          .then((dt) => {
            if (dt.status === StatusCodes.OK) {
              localStorage.setItem("token", dt.data);
              if(setPages){
                setPages((pa:IPageTile[])=>{
                  let teacherPage = pa.find(p=>p.name === "Teacher");
                  
                  if(teacherPage){
                    teacherPage.locked = false;
                    return [...pa.filter(p=>p.name !== "Teacher"),teacherPage];
                  }
                  else{
                    return [...pa];
                  }
                });
              }
              navigate("/");
            }
          })
          .catch((_) => {
            setMessage("Niepoprawne hasło bądź email");
          });
      }else{ 
        setMessage("Email bądź hasło o niepoprawnej formie");
      }
    });
  };

  return (
    <main>
      <h3>Zaloguj się</h3>
      <form className="log-register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={login.email}
          onChange={(e) => {
            setLogin((prev: ILogin) => {
              return {
                ...prev,
                email: e.target.value,
              };
            });
          }}
          required
        />
        <input
          type="password"
          placeholder="Hasło"
          value={login.password}
          onChange={(e) => {
            setLogin((prev: ILogin) => {
              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message}
    </main>
  );
}

export default Login;
