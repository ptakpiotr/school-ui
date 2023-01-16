import { useState } from "react";
import axios from "axios";
import { StatusCodes } from "http-status-codes";

/**
 * funkcja odpowiedzialna za zdeterminowanie czy dany token JWT jest poprawny
 * @returns boolean
 */
export function useTokenValidation (){
    const [tokenValid,setTokenValid] = useState<boolean>(false);

    const token = localStorage.getItem("token");
    if(token){
        axios.post(`${process.env.REACT_APP_BACKEND_URL}User/verifyJWT`,{
            token
        }).then((dt)=>{
            if(dt.status === StatusCodes.OK){
                setTokenValid(true);
            }
        }).catch((_)=>{

        });
    }

    return tokenValid;
}