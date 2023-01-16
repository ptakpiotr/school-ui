import React, { useContext, useState } from "react";
import { IRegister, IPageTile } from "../../Types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSchema } from "../../utils/validation";
import { PagesContext } from "../../App";
import { StatusCodes } from 'http-status-codes';

/**
 * Komponent odpowiedzialny za prezentację formularza rejestracyjnego
 * @returns JSX.Element
 */
function Register() {
  const [register, setRegister] = useState<IRegister>({
    email: "",
    password: "",
    confirmPassword:""
  });
  const [message,setMessage] = useState<string>("");

  const navigate = useNavigate();
  const {setPages} = useContext(PagesContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    loginSchema.isValid(register).then((v) => {
      if (v) {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}User/register`, register)
          .then((dt) => {
            if (dt.status === StatusCodes.OK) {
              navigate("/login");
            }
          })
          .catch((_) => {
            setMessage("Użytkownik o podanym email istnieje bądź inny błąd");
          });
      }else{ 
        setMessage("Email bądź hasło o niepoprawnej formie");
      }
    });
  };

  return (
    <main>
      <h3>Zarejestruj się</h3>
      <form className="log-register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={register.email}
          onChange={(e) => {
            setRegister((prev: IRegister) => {
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
          value={register.password}
          onChange={(e) => {
            setRegister((prev: IRegister) => {
              return {
                ...prev,
                password: e.target.value,
              };
            });
          }}
          required
        />
        <input
          type="password"
          placeholder="Potwierdź hasło"
          value={register.confirmPassword}
          onChange={(e) => {
            setRegister((prev: IRegister) => {
              return {
                ...prev,
                confirmPassword: e.target.value,
              };
            });
          }}
          required
        />
        <button type="submit">Zarejestruj</button>
      </form>
      {message}
    </main>
  );
}

export default Register;
