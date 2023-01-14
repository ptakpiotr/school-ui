import { useState } from "react";
import axios from "axios";
import { StatusCodes } from "http-status-codes";

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